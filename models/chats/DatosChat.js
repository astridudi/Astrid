const Conexion = require('../Conexion');
const Chat = require('../chats/Chat');
const Mensaje = require('../chats/Mensaje');
const ConjuntoChats = require('../chats/ConjuntoChats');

module.exports = class Datos extends Conexion {
    constructor() {
        super();
        this._coleccionChats = 'chats';
        this._coleccionMensajes = 'mensajes';
    }
    async grabarChat(pChat) {
        if (pChat.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionChats).add({
                    sesionId : pChat.sesion.id,
                    nombre: pChat.nombre,
                    inicio: pChat.inicio
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarMensaje(pChatId, pMensajeChat) {
        if (pMensajeChat.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionMensajes).add({
                    chatId: pChatId,
                    contenido: pMensajeChat.contenido,
                    tiempo: pMensajeChat.tiempo,
                    nombreUsuario: pMensajeChat.nombreUsuario
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async recuperarConjuntoChats() {
        let rConjuntoChats = new ConjuntoChats();
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionChats).orderBy('inicio');
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rConjuntoChats.incluirChat(new Chat(
                        document.id,
                        document.data().nombre,
                        document.data().inicio));
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rConjuntoChats;
    }
    async recuperarChat(pId) {
        let rChat = new Chat('','','');
        let tMensajeChat = new Mensaje('','','');
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionChats).doc(pId);
        let consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rChat = new Chat(
                        documentSnapshot.id,
                        documentSnapshot.data().nombre,
                        documentSnapshot.data().inicio);
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionMensajes).where('chatId', '==', pId).orderBy('tiempo');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tMensajeChat = new Mensaje(
                        document.id,
                        document.data().contenido,
                        document.data().tiempo,
                        document.data().nombreUsuario);
                    rChat.incluirMensaje(tMensajeChat);
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rChat;
    }
    async recuperarChatPorSesion(pSesionId) {
        let rChat = new Chat('','','');
        let tMensajeChat = new Mensaje('','','');
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionChats).where('sesionId', '==', pSesionId).orderBy('inicio');
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rChat = new Chat(
                        document.id,
                        document.data().nombre,
                        document.data().inicio);
                });
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionMensajes).where('chatId', '==', rChat.id).orderBy('tiempo');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tMensajeChat = new Mensaje(
                        document.id,
                        document.data().contenido,
                        document.data().tiempo,
                        document.data().nombreUsuario);
                    rChat.incluirMensaje(tMensajeChat);
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rChat;
    }
    async actualizarChat(pChat) {
        if (pChat.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionChats).doc(pChat.id).set({
                    nombre: pChat.nombre,
                    inicio: pChat.inicio});
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async eliminarChat(pId) {
        try {
            this._firebase.firestore().collection(this._coleccionChats).doc(pId).delete();
        } catch (e) {
            console.log(e.message);
        }
    }
}