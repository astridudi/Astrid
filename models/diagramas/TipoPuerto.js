module.exports = class TipoPuerto {
    constructor(id,nombre) {
        this._id = id;
        this._nombre = nombre;
        this._tiposRol = [];
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
    get tiposRol() {
        return this._tiposRol;
    }
    incluirTipoRol(pTipoRol) {
        let i = this._tiposRol.length;
        this._tiposRol[i] = pTipoRol;
    }
    tieneTipoRol(pTipoRol) {
        let i = 0;
        let rTieneTipoRol = false;
        while ((!rTieneTipoRol) && (i<this._tiposRol.length)) {
            rTieneTipoRol = (rTieneTipoRol || (this._tiposRol[i].id == pTipoRol.id));
            i++;
        }
        return rTieneTipoRol;
    }
}