module.exports = class TipoPropiedad {
    constructor(id,nombre) {
        this._id = id;
        this._nombre = nombre;
    }
    set id(pId) {
        this._id = pId;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
}