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
        this._idTipoDiagrama = '';
        this._nombreTipoDiagrama = '';
        this._nombreUsuario = '';
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
    set idTipoDiagrama(pIdTipoDiagrama) {
        this._idTipoDiagrama = pIdTipoDiagrama;
    }
    set nombreTipoDiagrama(pNombreTipoDiagrama) {
        this._nombreTipoDiagrama = pNombreTipoDiagrama;
    }
    set nombreUsuario(pNombreUsuario) {
        this._nombreUsuario = pNombreUsuario;
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
    get idTipoDiagrama() {
        return this._idTipoDiagrama;
    }
    get nombreTipoDiagrama() {
        return this._nombreTipoDiagrama;
    }
    get nombreUsuario() {
        return this._nombreUsuario;
    }
    get validez() {
        var rValidez;
        rValidez = (1*this._nombre.length>0);
        return rValidez;
    }
    get sesionJson() {
        let rSesionJson = JSON.stringify(this, ['_id', '_nombre', '_diagrama', '_tipoDiagrama']);
        return rSesionJson;
    }
    esAnteriorA(pSesion) {
        var rEsAnteriorA;
        rEsAnteriorA = ((this._inicio < pSesion._inicio) || ((this._inicio = pSesion._inicio) && (this._nombre.localeCompare(pSesion._nombre) < 0)));
        return rEsAnteriorA;
    }
}
