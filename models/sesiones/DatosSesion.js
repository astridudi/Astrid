const Conexion = require('../Conexion');
const Sesion = require('../sesiones/Sesion');
const ConjuntoSesiones = require('../sesiones/ConjuntoSesiones');
const Chat = require('../chats/Chat');
const DatosChat = require('../chats/DatosChat');
const Diagrama = require('../diagramas/Diagrama');
const DatosDiagrama = require('../diagramas/DatosDiagrama');

module.exports = class DatosSesion extends Conexion {
    constructor() {
        super();
        this._coleccionSesiones = 'sesiones';
    }
    async grabarSesion(pSesion,pTipoDiagrama) {
        var datosChat = new DatosChat();
        var datosDiagrama = new DatosDiagrama();
        if (pSesion.validez) {
            var nChat = new Chat('',pSesion.nombre,pSesion.inicio);
            var nDiagrama = new Diagrama('',pTipoDiagrama,pSesion.nombre,pSesion.inicio);
            try {
                this._firebase.firestore().collection(this._coleccionSesiones).add({
                    nombre: pSesion.nombre,
                    inicio: pSesion.inicio,
                    idTipoDiagrama: nDiagrama.tipoDiagrama.id,
                    nombreTipoDiagrama: nDiagrama.tipoDiagrama.nombre
                }).then(ref => {
                    pSesion.id = ref.id;
                    nChat.sesion = pSesion;
                    datosChat.grabarChat(nChat);
                    nDiagrama.sesion = pSesion;
                    datosDiagrama.grabarDiagrama(nDiagrama);
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async recuperarConjuntoSesiones() {
        let rConjuntoSesiones = new ConjuntoSesiones();
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionSesiones).orderBy('inicio');
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rConjuntoSesiones.incluirSesion(new Sesion(
                        document.id,
                        document.data().nombre,
                        document.data().inicio));
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rConjuntoSesiones;
    }
    async recuperarSesion(pId) {
        let datosChat = new DatosChat();
        let rSesion = new Sesion('','','');
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionSesiones).doc(pId);
        let consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rSesion = new Sesion(
                        documentSnapshot.id,
                        documentSnapshot.data().nombre,
                        documentSnapshot.data().inicio);
                    rSesion.idTipoDiagrama = documentSnapshot.data().idTipoDiagrama;
                    rSesion.nombreTipoDiagrama = documentSnapshot.data().nombreTipoDiagrama;
                };
            })
            .catch(err => {
                console.log(err);
            });
        return rSesion;
    }
    async actualizarSesion(pSesion) {
        if (pSesion.validez) {
            try {
                if (pSesion.chat.validez){
                    this._firebase.firestore().collection(this._coleccionSesiones).doc(pSesion.id).update({
                        chatId: pSesion.chat.id,
                        nombre: pSesion.nombre});
                }
                else{
                    this._firebase.firestore().collection(this._coleccionSesiones).doc(pSesion.id).update({
                        nombre: pSesion.nombre});
                }
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async eliminarSesion(pId) {
        try {
            this._firebase.firestore().collection(this._coleccionSesiones).doc(pId).delete();
        } catch (e) {
            console.log(e.message);
        }
    }
}