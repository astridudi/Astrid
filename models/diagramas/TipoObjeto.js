module.exports = class TipoObjeto {
    constructor(id,nombre,requiereArgumentacion) {
        this._id = id;
        this._nombre = nombre;
        this._tiposPropiedad = [];
        this._tiposPuerto = [];
        this._requiereArgumentacion = requiereArgumentacion;
    }
    set id(pId) {
        this._id = pId;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set requiereArgumentacion(pRequiereArgumentacion) {
        this._requiereArgumentacion = pRequiereArgumentacion;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get requiereArgumentacion() {
        return this._requiereArgumentacion;
    }
    get tiposPropiedad() {
        return this._tiposPropiedad;
    }
    get tiposPuerto() {
        return this._tiposPuerto;
    }
    incluirTipoPropiedad(pTipoPropiedad) {
        let i = this._tiposPropiedad.length;
        this._tiposPropiedad[i] = pTipoPropiedad;
    }
    incluirTipoPuerto(pTipoPuerto) {
        let i = this._tiposPuerto.length;
        this._tiposPuerto[i] = pTipoPuerto;
    }
}