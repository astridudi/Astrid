module.exports = class Institucion {
    constructor(id,identificacion,sigla,nombre) {
        this._id = id;
        this._identificacion = identificacion;
        this._sigla = sigla;
        this._nombre = nombre;
        this._programas = [];
    }
    set id(pId) {
        this._id = pId;
    }
    set identificacion(pIdentificacion) {
        this._identificacion = pIdentificacion;
    }
    set sigla(pSigla) {
        this._sigla = pSigla;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set programas(pProgramas) {
        this._programas = pProgramas;
    }
    get id() {
        return this._id;
    }
    get identificacion() {
        return this._identificacion;
    }
    get sigla() {
        return this._sigla;
    }
    get nombre() {
        return this._nombre;
    }
    get programas() {
        return this._programas;
    }
    get total() {
        return 1*this._programas.length;
    }
    get validez() {
        var rValidez;
        rValidez = ((1*this._identificacion.length>0) && (1*this._nombre.length>0));
        return rValidez;
    }
    incluirPrograma(pPrograma) {
        let i = this._programas.length;
        this._programas[i] = pPrograma;
    }
}