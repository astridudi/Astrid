module.exports = class Sesion {
    constructor(id,nombre,inicio) {
        this._id = id;
        this._nombre = nombre;
        if (inicio.length==0){
            this._inicio = new Date();
        } else {
            this._inicio = inicio;
        }
        this._chat = require('../chats/Chat');
        this._diagrama = require('../diagramas/Diagrama');
    }
    set id(pId) {
        this._id = pId;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set inicio(pInicio) {
        this._inicio = pInicio;
    }
    set chat(pChat) {
        this._chat = pChat;
    }
    set diagrama(pDiagrama) {
        this._diagrama = pDiagrama;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get inicio() {
        return this._inicio;
    }
    get chat() {
        return this._chat;
    }
    get diagrama() {
        return this._diagrama;
    }
    get validez() {
        var rValidez;
        rValidez = (1*this._nombre.length>0);
        return rValidez;
    }
}