const Conexion = require('../Conexion');
const Argumentacion = require('../argumentaciones/Argumentacion');
const Aporte = require('../argumentaciones/Aporte');
const ConjuntoArgumentaciones = require('../argumentaciones/ConjuntoArgumentaciones');

module.exports = class Datos extends Conexion {
    constructor() {
        super();
        this._coleccionArgumentaciones = 'argumentaciones';
        this._coleccionAportes = 'aportes';
    }
    async grabarArgumentacion(pArgumentacion) {
        if (pArgumentacion.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionArgumentaciones).add({
                    objetoId: pArgumentacion.objeto.id,
                    nombre: pArgumentacion.nombre,
                    inicio: pArgumentacion.inicio
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarAporte(pArgumentacionId, pAportePredecesorId, pAporte) {
        if (pAporte.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionAportes).add({
                    argumentacionId: pArgumentacionId,
                    aportePredecesorId : pAportePredecesorId,
                    tipoAporteId: pAporte.tipoAporte.id,
                    contenido: pAporte.contenido,
                    tiempo: pAporte.tiempo
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async recuperarConjuntoArgumentaciones() {
        let rConjuntoArgumentaciones = new ConjuntoArgumentaciones();
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionArgumentaciones).orderBy('inicio');
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rConjuntoArgumentaciones.incluirArgumentacion(new Argumentacion(
                        document.id,
                        document.data().nombre,
                        document.data().inicio));
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rConjuntoArgumentaciones;
    }
    async recuperarArgumentacion(pId) {
        let rArgumentacion = new Argumentacion('','','');
        let tAporte = new Aporte('','','','','');
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionArgumentaciones).doc(pId);
        let consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rArgumentacion = new Argumentacion(
                        documentSnapshot.id,
                        documentSnapshot.data().nombre,
                        documentSnapshot.data().inicio);
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionAportes).where('argumentacionId', '==', pId).orderBy('tiempo');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tAporte = new Aporte(
                        document.id,
                        document.data().tipoAporteId,
                        document.data().contenido,
                        document.data().tiempo);
                    tAporte.argumentacion = rArgumentacion;
                    tAporte.aportePredecesor = rArgumentacion.aporte(document.data().aportePredecesorId);
                    rArgumentacion.incluirAporte(tAporte);
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rArgumentacion;
    }
    async recuperarArgumentacionPorObjeto(pObjetoId) {
        let rArgumentacion = new Argumentacion('','','');
        let tAporte = new Aporte('','','','','');
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionArgumentaciones).where('objetoId', '==', pObjetoId).orderBy('inicio');
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rArgumentacion = new Argumentacion(
                        document.id,
                        document.data().nombre,
                        document.data().inicio);
                });
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionAportes).where('argumentacionId', '==', rArgumentacion.id).orderBy('tiempo');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tAporte = new Aporte(
                        document.id,
                        document.data().tipoAporteId,
                        document.data().contenido,
                        document.data().tiempo);
                    tAporte.argumentacion = rArgumentacion;
                    tAporte.aportePredecesor = rArgumentacion.aporte(document.data().aportePredecesorId);
                    rArgumentacion.incluirAporte(tAporte);
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rArgumentacion;
    }
    async actualizarArgumentacion(pArgumentacion) {
        if (pArgumentacion.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionArgumentaciones).doc(pArgumentacion.id).set({
                    nombre: pArgumentacion.nombre,
                    inicio: pArgumentacion.inicio});
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async eliminarArgumentacion(pId) {
        try {
            this._firebase.firestore().collection(this._coleccionArgumentaciones).doc(pId).delete();
        } catch (e) {
            console.log(e.message);
        }
    }
}