const TipoDiagrama = require('../diagramas/TipoDiagrama');
const TipoObjeto = require('../diagramas/TipoObjeto');
const TipoRelacion = require('../diagramas/TipoRelacion');
const TipoPropiedad = require('../diagramas/TipoPropiedad');
const TipoPuerto = require('../diagramas/TipoPuerto');
const TipoRol = require('../diagramas/TipoRol');
const DiagramaFlujo = require('../diagramas/DiagramaFlujo');
const DiagramaEntidadRelacion = require('../diagramas/DiagramaEntidadRelacion');
const DiagramaProcesos = require('../diagramas/DiagramaProcesos');
const DiagramaArbolProblemas = require('../diagramas/DiagramaArbolProblemas');
const DiagramaAnaliticoFuncional = require('../diagramas/DiagramaAnaliticoFuncional');

module.exports = class ConjuntoTiposDiagrama {
    constructor() {
        this._tiposDiagrama = [];
        this.incluirTipoDiagrama(new DiagramaFlujo());
        this.incluirTipoDiagrama(new DiagramaEntidadRelacion());
        this.incluirTipoDiagrama(new DiagramaProcesos());
        this.incluirTipoDiagrama(new DiagramaArbolProblemas());
        this.incluirTipoDiagrama(new DiagramaAnaliticoFuncional());
    }
    set tiposDiagrama(pTiposDiagrama) {
        this._tiposDiagrama = pTiposDiagrama;
    }
    get tiposDiagrama() {
        return this._tiposDiagrama;
    }
    get conjuntoTiposDiagramaJson() {
        let rConjuntoTiposDiagramaJson = JSON.stringify(this, ['_tiposDiagrama', '_id', '_nombre']);
        return rConjuntoTiposDiagramaJson;
    }
    tipoDiagrama(pIdTipoDiagrama) {
        return this._tiposDiagrama[pIdTipoDiagrama];
    }
    incluirTipoDiagrama(pTipoDiagrama) {
        let i = this._tiposDiagrama.length;
        this._tiposDiagrama[i] = pTipoDiagrama;
    }
}