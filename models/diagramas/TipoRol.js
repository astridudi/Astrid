module.exports = class TipoRol {
    constructor(id,nombre) {
        this._id = id;
        this._nombre = nombre;
        this._tipoObjeto = undefined;
    }
    set id(pId) {
        this._id = pId;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set tipoObjeto(pTipoObjeto) {
        this._tipoObjeto = pTipoObjeto;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get tipoObjeto() {
        return this._tipoObjeto;
    }
}