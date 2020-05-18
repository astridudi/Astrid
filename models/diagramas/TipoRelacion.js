module.exports = class TipoRelacion {
    constructor(id,nombre) {
        this._id = id;
        this._nombre = nombre;
        this._tiposPropiedad = [];
        this._tipoRolInicio = require('../diagramas/TipoRol');
        this._tipoRolFinal = require('../diagramas/TipoRol');
    }
    set id(pId) {
        this._id = pId;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set tipoRolInicio(pTipoRolInicio) {
        this._tipoRolInicio = pTipoRolInicio;
    }
    set tipoRolFinal(pTipoRolFinal) {
        this._tipoRolFinal = pTipoRolFinal;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get tiposPropiedad() {
        return this._tiposPropiedad;
    }
    get tipoRolInicio() {
        return this._tipoRolInicio;
    }
    get tipoRolFinal() {
        return this._tipoRolFinal;
    }
    get tiposPropiedadJson() {
        let rTiposPropiedadJson = JSON.stringify(this._tiposPropiedad);
        return rTiposPropiedadJson;
    }
    incluirTipoPropiedad(pTipoPropiedad) {
        let i = this._tiposPropiedad.length;
        this._tiposPropiedad[i] = pTipoPropiedad;
    }
}