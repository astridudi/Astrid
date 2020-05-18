module.exports = class Chat {
    constructor(id,nombre,inicio) {
        this._id = id;
        this._nombre = nombre;
        if (inicio.length==0){
            this._inicio = new Date();
        } else {
            this._inicio = inicio;
        }
        this._arreglo = [];
        this._sesion = require ('../sesiones/Sesion');
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
    set arreglo(pArreglo) {
        this._arreglo = pArreglo;
    }
    set sesion(pSesion) {
        this._sesion = pSesion;
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
    get arreglo() {
        return this._arreglo;
    }
    get sesion() {
        return this._sesion;
    }
    get total() {
        return 1*this._arreglo.length;
    }
    get vacio() {
        return (this.total==0);
    }
    get validez() {
        var rValidez;
        rValidez = (1*this._nombre.length>0);
        return rValidez;
    }
    get chatJson() {
        let rChatJson = JSON.stringify(this);
        return rChatJson;
    }
    incluirMensaje(pMensajeChat) {
        let i = this._arreglo.length;
        this._arreglo[i] = pMensajeChat;
    }
}