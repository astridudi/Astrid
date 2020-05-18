const Conexion = require('../Conexion');
const Diagrama = require('../diagramas/Diagrama');
const Objeto = require('../diagramas/Objeto');
const Relacion = require('../diagramas/Relacion');
const ConjuntoDiagramas = require('../diagramas/ConjuntoDiagramas');
const Argumentacion = require('../argumentaciones/Argumentacion');
const DatosArgumentacion = require('../argumentaciones/DatosArgumentacion');

module.exports = class Datos extends Conexion {
    constructor() {
        super();
        this._coleccionDiagramas = 'diagramas';
        this._coleccionObjetos = 'objetos';
        this._coleccionRelaciones = 'relaciones';
    }
    async grabarDiagrama(pDiagrama) {
        if (pDiagrama.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionDiagramas).add({
                    sesionId : pDiagrama.sesion.id,
                    nombre: pDiagrama.nombre,
                    inicio: pDiagrama.inicio,
                    tipoDiagramaId : pDiagrama.tipoDiagrama.id
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarObjeto(pDiagramaId, pObjeto) {
        var datosArgumentacion = new DatosArgumentacion();
        if (pObjeto.validez) {
            var nArgumentacion = new Argumentacion('',pObjeto.valoresPropiedades,pObjeto.tiempo);
            try {
                this._firebase.firestore().collection(this._coleccionObjetos).add({
                    diagramaId: pDiagramaId,
                    tipoObjetoId: pObjeto.tipoObjeto.id,
                    valoresPropiedades: pObjeto.valoresPropiedades,
                    tiempo: pObjeto.tiempo
                }). then(ref => {
                    pObjeto.id = ref.id;
                    nArgumentacion.objeto = pObjeto;
                    datosArgumentacion.grabarArgumentacion(nArgumentacion);
                }) ;
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarRelacion(pDiagramaId, pRelacion, pObjetoInicioId, pObjetoFinalId) {
        if (pRelacion.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionRelaciones).add({
                    diagramaId: pDiagramaId,
                    tipoRelacionId: pRelacion.tipoRelacion.id,
                    objetoInicioId: pObjetoInicioId,
                    objetoFinalId: pObjetoFinalId,
                    valoresPropiedades: pRelacion.valoresPropiedades,
                    tiempo: pRelacion.tiempo
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async recuperarConjuntoDiagramas() {
        let rConjuntoDiagramas = new ConjuntoDiagramas();
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionDiagramas).orderBy('inicio');
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rConjuntoDiagramas.incluirDiagrama(new Diagrama(
                        document.id,
                        document.data().tipoDiagramaId,
                        document.data().nombre,
                        document.data().inicio));
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rConjuntoDiagramas;
    }
    async recuperarDiagrama(pId) {
        let rDiagrama = new Diagrama('','','','');
        let tObjeto = new Objeto('','','','');
        let tRelacion = new Relacion('','','','');
        let i = 0;
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionDiagramas).doc(pId);
        let consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rDiagrama = new Diagrama(
                        documentSnapshot.id,
                        documentSnapshot.data().tipoDiagramaId,
                        documentSnapshot.data().nombre,
                        documentSnapshot.data().inicio);
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionObjetos).where('diagramaId', '==', pId).orderBy('tiempo');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tObjeto = new Objeto(
                        document.id,
                        rDiagrama.tipoDiagrama.id,
                        document.data().tipoObjetoId,
                        document.data().tiempo);
                    for (i=0; i<document.data().valoresPropiedades.length; i++) {
                        tObjeto.incluirValorPropiedad(document.data().valoresPropiedades[i])
                    }
                    tObjeto.diagrama = rDiagrama;
                    rDiagrama.incluirObjeto(tObjeto);
                });
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionRelaciones).where('diagramaId', '==', pId).orderBy('tiempo');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tRelacion = new Relacion(
                        document.id,
                        rDiagrama.tipoDiagrama.id,
                        document.data().tipoRelacionId,
                        document.data().tiempo);
                    tRelacion.objetoInicio=rDiagrama.objetoPorId(document.data().objetoInicioId);
                    tRelacion.objetoFinal=rDiagrama.objetoPorId(document.data().objetoFinalId);
                    for (i=0; i<document.data().valoresPropiedades.length; i++) {
                        tRelacion.incluirValorPropiedad(document.data().valoresPropiedades[i])
                    }
                    tRelacion.diagrama = rDiagrama;
                    rDiagrama.incluirRelacion(tRelacion);
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rDiagrama;
    }
    async recuperarDiagramaPorSesion(pSesionId) {
        let rDiagrama = new Diagrama('','','','');
        let tObjeto = new Objeto('','','','');
        let tRelacion = new Relacion('','','','');
        let i = 0;
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionDiagramas).where('sesionId', '==', pSesionId).orderBy('inicio');
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rDiagrama = new Diagrama(
                        document.id,
                        document.data().tipoDiagramaId,
                        document.data().nombre,
                        document.data().inicio);
                });
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionObjetos).where('diagramaId', '==', rDiagrama.id).orderBy('tiempo');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tObjeto = new Objeto(
                        document.id,
                        rDiagrama.tipoDiagrama.id,
                        document.data().tipoObjetoId,
                        document.data().tiempo);
                    for (i=0; i<document.data().valoresPropiedades.length; i++) {
                        tObjeto.incluirValorPropiedad(document.data().valoresPropiedades[i])
                    }
                    tObjeto.diagrama = rDiagrama;
                    rDiagrama.incluirObjeto(tObjeto);
                });
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionRelaciones).where('diagramaId', '==', rDiagrama.id).orderBy('tiempo');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tRelacion = new Relacion(
                        document.id,
                        rDiagrama.tipoDiagrama.id,
                        document.data().tipoRelacionId,
                        document.data().tiempo);
                    tRelacion.objetoInicio=rDiagrama.objetoPorId(document.data().objetoInicioId);
                    tRelacion.objetoFinal=rDiagrama.objetoPorId(document.data().objetoFinalId);
                    for (i=0; i<document.data().valoresPropiedades.length; i++) {
                        tRelacion.incluirValorPropiedad(document.data().valoresPropiedades[i])
                    }
                    tRelacion.diagrama = rDiagrama;
                    rDiagrama.incluirRelacion(tRelacion);
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rDiagrama;
    }
    async actualizarDiagrama(pDiagrama) {
        if (pDiagrama.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionDiagramas).doc(pDiagrama.id).set({
                    nombre: pDiagrama.nombre,
                    inicio: pDiagrama.inicio,
                    tipoDiagramaId: pDiagrama.tipoDiagrama.id});
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async eliminarDiagrama(pId) {
        try {
            this._firebase.firestore().collection(this._coleccionDiagramas).doc(pId).delete();
        } catch (e) {
            console.log(e.message);
        }
    }
    async actualizarObjeto(pObjeto) {
        let i = 0;
        if (pObjeto.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionObjetos).doc(pObjeto.id).update({
                    valoresPropiedades: this._firebase.firestore.FieldValue.delete()});
                for (i=0; i<pObjeto.valoresPropiedades.length; i++) {
                    this._firebase.firestore().collection(this._coleccionObjetos).doc(pObjeto.id).update({
                        valoresPropiedades: this._firebase.firestore.FieldValue.arrayUnion(pObjeto.valorPropiedad)});
                }
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async actualizarRelacion(pRelacion) {
        let i = 0;
        if (pRelacion.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionRelaciones).doc(pRelacion.id).update({
                    valoresPropiedades: this._firebase.firestore.FieldValue.delete()});
                for (i=0; i<pRelacion.valoresPropiedades.length; i++) {
                    this._firebase.firestore().collection(this._coleccionRelaciones).doc(pRelacion.id).update({
                        valoresPropiedades: this._firebase.firestore.FieldValue.arrayUnion(pRelacion.valorPropiedad)});
                }
            } catch (e) {
                console.log(e.message);
            }
        }
    }
}