module.exports = class ConjuntoCasos {
    constructor() {
        this._arreglo = [];
    }
    set arreglo(pArreglo) {
        this._arreglo = pArreglo;
    }
    get arreglo() {
        return this._arreglo;
    }
    get total() {
        return 1*this._arreglo.length;
    }
    incluirCaso(pCaso) {
        let i = this._arreglo.length;
        this._arreglo[i] = pCaso;
    }
    get casosJson() {
        let rCasosJson = JSON.stringify(this);
        return rCasosJson;
    }
}
