const Diagrama = require('../diagramas/Diagrama');

module.exports = class TipoDiagrama {
    constructor(id,nombre) {
        this._id = id;
        this._nombre = nombre;
        this._tiposObjeto = [];
        this._tiposRelacion = [];
        this._diagrama = require('../diagramas/Diagrama');
        this._scriptDibujo = '';
    }
    set id(pId) {
        this._id = pId;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set diagrama(pDiagrama) {
        this._diagrama = pDiagrama;
    }
    set scriptDibujo(pScriptDibujo) {
        this._scriptDibujo = pScriptDibujo;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get tiposObjeto() {
        return this._tiposObjeto;
    }
    get tiposRelacion() {
        return this._tiposRelacion;
    }
    get diagrama() {
        return this._diagrama;
    }
    get scriptDibujo() {
        return this._scriptDibujo;
    }
    tipoObjeto(pIdTipoObjeto) {
        return this._tiposObjeto[pIdTipoObjeto];
    }
    tipoRelacion(pIdTipoRelacion) {
        return this._tiposRelacion[pIdTipoRelacion];
    }
    incluirTipoObjeto(pTipoObjeto) {
        let i = this._tiposObjeto.length;
        this._tiposObjeto[i] = pTipoObjeto;
    }
    incluirTipoRelacion(pTipoRelacion) {
        let i = this._tiposRelacion.length;
        this._tiposRelacion[i] = pTipoRelacion;
    }
}