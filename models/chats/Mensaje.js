const DatoGrafico = require('../argumentaciones/DatoGrafico');

module.exports = class Mensaje {
    constructor(id,contenido,tiempo,nombreUsuario) {
        this._id = id;
        this._contenido = contenido;
        if (tiempo.length==0){
            this._tiempo = new Date();
        } else {
            this._tiempo = tiempo;
        }
        this._nombreUsuario = nombreUsuario;
        this._datoGrafico = undefined;
        this._areasEnlace = [];
    }
    set id(pId) {
        this._id = pId;
    }
    set contenido(pContenido) {
        this._contenido = pContenido;
    }
    set tiempo(pTiempo) {
        this._tiempo = pTiempo;
    }
    set nombreUsuario(pNombreUsuario) {
        this._nombreUsuario = pNombreUsuario;
    }
    get id() {
        return this._id;
    }
    get contenido() {
        return this._contenido;
    }
    get tiempo() {
        return this._tiempo;
    }
    get nombreUsuario() {
        return this._nombreUsuario;
    }
    get datoGrafico() {
        return this._datoGrafico;
    }
    get areasEnlace() {
        return this._areasEnlace;
    }
    get validez() {
        var rValidez;
        rValidez = (1*this._contenido.length>0);
        return rValidez;
    }
    incluirDatoGrafico(pX,pY,pAncho,pAlto,pLineas) {
        this._datoGrafico = new DatoGrafico(pX,pY,pAncho,pAlto,pLineas);
    }
    incluirAreaEnlace(pX,pY,pAncho,pAlto,pLineas) {
        this._areasEnlace[this._areasEnlace.length] = new DatoGrafico(pX,pY,pAncho,pAlto,pLineas);
    }
}