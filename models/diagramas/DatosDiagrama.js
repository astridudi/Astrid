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
            var nArgumentacion = new Argumentacion('',pObjeto.tipoObjeto.nombre+': '+pObjeto.valoresPropiedades[0],pObjeto.tiempo);
            try {
                this._firebase.firestore().collection(this._coleccionObjetos).add({
                    diagramaId: pDiagramaId,
                    tipoObjetoId: pObjeto.tipoObjeto.id,
                    valoresPropiedades: pObjeto.valoresPropiedades,
                    tiempo: pObjeto.tiempo,
                    nombreUsuario: pObjeto.nombreUsuario,
                    habilitado: pObjeto.habilitado,
                    x : pObjeto.datoGrafico.x,
                    y : pObjeto.datoGrafico.y,
                }). then(ref => {
                    pObjeto.id = ref.id;
                    nArgumentacion.objeto = pObjeto;
                    datosArgumentacion.grabarArgumentacion(nArgumentacion,nArgumentacion.nombre,pObjeto.nombreUsuario);
                }) ;
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async actualizarPropiedadesObjeto(pObjeto) {
        if (pObjeto.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionObjetos).doc(pObjeto.id).set({
                        valoresPropiedades: pObjeto.valoresPropiedades},
                    {merge: true});
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async eliminarObjeto(pObjeto) {
        if (pObjeto.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionObjetos).doc(pObjeto.id).set({
                        habilitado: false},
                    {merge: true});
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarRelacion(pDiagramaId, pRelacion, pObjetoInicialId, pNumeroPuertoObjetoInicial, pObjetoFinalId, pNumeroPuertoObjetoFinal) {
        if (pRelacion.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionRelaciones).add({
                    diagramaId: pDiagramaId,
                    tipoRelacionId: pRelacion.tipoRelacion.id,
                    objetoInicialId: pObjetoInicialId,
                    numeroPuertoObjetoInicial: pNumeroPuertoObjetoInicial,
                    objetoFinalId: pObjetoFinalId,
                    numeroPuertoObjetoFinal: pNumeroPuertoObjetoFinal,
                    valoresPropiedades: pRelacion.valoresPropiedades,
                    tiempo: pRelacion.tiempo,
                    nombreUsuario: pRelacion.nombreUsuario,
                    habilitado: pRelacion.habilitado
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async actualizarPropiedadesRelacion(pRelacion) {
        if (pRelacion.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionRelaciones).doc(pRelacion.id).set({
                        valoresPropiedades: pRelacion.valoresPropiedades,
                        numeroPuertoObjetoInicial: pRelacion.numeroPuertoObjetoInicial,
                        numeroPuertoObjetoFinal: pRelacion.numeroPuertoObjetoFinal},
                    {merge: true});
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async eliminarRelacion(pRelacion) {
        if (pRelacion.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionRelaciones).doc(pRelacion.id).set({
                        habilitado: false},
                    {merge: true});
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
                        document.data().tiempo,
                        document.data().nombreUsuario);
                    for (i=0; i<document.data().valoresPropiedades.length; i++) {
                        tObjeto.incluirValorPropiedad(document.data().valoresPropiedades[i])
                    }
                    tObjeto.habilitado = document.data().habilitado;
                    tObjeto.datoGrafico.x = parseInt(document.data().x,10);
                    tObjeto.datoGrafico.y = parseInt(document.data().y,10);
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
                        document.data().tiempo,
                        document.data().nombreUsuario);
                    tRelacion.habilitado = document.data().habilitado;
                    tRelacion.objetoInicial=rDiagrama.objetoPorId(document.data().objetoInicialId);
                    tRelacion.numeroPuertoObjetoInicial = parseInt(document.data().numeroPuertoObjetoInicial,10);
                    tRelacion.objetoFinal=rDiagrama.objetoPorId(document.data().objetoFinalId);
                    tRelacion.numeroPuertoObjetoFinal = parseInt(document.data().numeroPuertoObjetoFinal,10);
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
                        document.data().tiempo,
                        document.data().nombreUsuario);
                    for (i=0; i<document.data().valoresPropiedades.length; i++) {
                        tObjeto.incluirValorPropiedad(document.data().valoresPropiedades[i])
                    }
                    tObjeto.habilitado = document.data().habilitado;
                    tObjeto.datoGrafico.x = parseInt(document.data().x,10);
                    tObjeto.datoGrafico.y = parseInt(document.data().y,10);
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
                        document.data().tiempo,
                        document.data().nombreUsuario);
                    tRelacion.habilitado = document.data().habilitado;
                    tRelacion.objetoInicial=rDiagrama.objetoPorId(document.data().objetoInicialId);
                    tRelacion.numeroPuertoObjetoInicial = parseInt(document.data().numeroPuertoObjetoInicial,10);
                    tRelacion.objetoFinal=rDiagrama.objetoPorId(document.data().objetoFinalId);
                    tRelacion.numeroPuertoObjetoFinal = parseInt(document.data().numeroPuertoObjetoFinal,10);
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
    async actualizarObjeto(pIdObjeto,pX,pY) {
        try {
            this._firebase.firestore().collection(this._coleccionObjetos).doc(pIdObjeto).update({
                x: pX,
                y: pY});
        } catch (e) {
            console.log(e.message);
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
