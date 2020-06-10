module.exports = class DatoGrafico {
    constructor(x,y,ancho,alto,lineas) {
        this._tipoCaja = 0;
        this._lineas = Math.ceil(lineas);
        this._lineasNombreUsuario = 0;
        this._x = Math.ceil(x);
        this._y = Math.ceil(y);
        this._ancho = Math.ceil(ancho);
        this._alto = Math.ceil(alto);
        this._curva = 0;
        this._tipoSucesor = require ('./argumentaciones/TipoAporte');
    }
    set tipoCaja(pTipoCaja) {
        this._tipoCaja = pTipoCaja;
    }
    set lineas(pLineas) {
        this._lineas = pLineas;
    }
    set lineasNmbreUsuario(pLineasNombreUsuario) {
        this._lineas = pLineasNombreUsuario;
    }
    set x(pX) {
        this._x = pX;
    }
    set y(pY) {
        this._y = pY;
    }
    set ancho(pAncho) {
        this._ancho = pAncho;
    }
    set alto(pAlto) {
        this._alto = pAlto;
    }
    set curva(pCurva) {
        this._curva = pCurva;
    }
    set tipoSucesor(pTipoSucesor) {
        this._tipoSucesor = pTipoSucesor;
    }
    get tipocaja() {
        return this._tipoCaja;
    }
    get lineas() {
        return this._lineas;
    }
    get lineasNombreUsuario() {
        return this._lineasNombreUsuario;
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
    get curva() {
        return this._curva;
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
