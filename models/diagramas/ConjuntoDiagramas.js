const ConjuntoTiposDiagrama = require('../diagramas/ConjuntoTiposDiagrama');

module.exports = class ConjuntoDiagramas {
    constructor() {
        this._diagramas = [];
        this._conjuntoTiposDiagrama = new ConjuntoTiposDiagrama();
    }
    set diagramas(pDiagramas) {
        this._diagramas = pDiagramas;
    }
    get diagramas() {
        return this._diagramas;
    }
    get conjuntoTiposDiagrama() {
        return this._conjuntoTiposDiagrama;
    }
    get total() {
        return 1*this._diagramas.length;
    }
    incluirDiagrama(pDiagrama) {
        let i = this._diagramas.length;
        this._diagramas[i] = pDiagrama;
    }
}