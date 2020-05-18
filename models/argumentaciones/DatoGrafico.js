module.exports = class DatoGrafico {
    constructor(x,y,ancho,alto,lineas) {
        this._x = Math.ceil(x);
        this._y = Math.ceil(y);
        this._ancho = Math.ceil(ancho);
        this._alto = Math.ceil(alto);
        this._lineas = Math.ceil(lineas);
        this._tipoSucesor = require ('../argumentaciones/TipoAporte');
    }
    set tipoSucesor(pTipoSucesor) {
        this._tipoSucesor = pTipoSucesor;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get ancho() {
        return this._ancho;
    }
    get alto() {
        return this._alto;
    }
    get lineas() {
        return this._lineas;
    }
    get tipoSucesor() {
        return this._tipoSucesor;
    }
    get xIzquierda() {
        return Math.ceil(this._x - this._ancho / 2);
    }
    get xDerecha() {
        return Math.ceil(this._x + this._ancho / 2);
    }
    get yArriba() {
        return Math.ceil(this._y - this._alto / 2);
    }
    get yAbajo() {
        return Math.ceil(this._y + this._alto / 2);
    }
    xMargenIzquierda(pMargen) {
        return (this._x - this._ancho / 2) - 2 * pMargen / 3;
    }
    xMargenDerecha(pMargen) {
        return (this._x + this._ancho / 2) + 2 * pMargen / 3;
    }
    xMediaMargenIzquierda(pMargen) {
        return (this._x - this._ancho / 2) - pMargen / 3;
    }
    xMediaMargenDerecha(pMargen) {
        return (this._x + this._ancho / 2) + pMargen / 3;
    }
}