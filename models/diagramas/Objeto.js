const Diagrama = require('../diagramas/Diagrama');
const DatoGrafico = require('../DatoGrafico');

module.exports = class Objeto {
    constructor(id,tipoDiagramaId,tipoObjetoId,tiempo,nombreUsuario) {
        this._id = id;
        this._diagrama = new Diagrama('',tipoDiagramaId,'','');
        if (tipoObjetoId.toString().length>0) {
            this._tipoObjeto = this._diagrama._tipoDiagrama.tipoObjeto(tipoObjetoId);
        } else {
            this._tipoObjeto = undefined;
        }
        this._valoresPropiedades = [];
        if (tiempo.length==0){
            this._tiempo = new Date();
        } else {
            this._tiempo = tiempo;
        }
        this._nombreUsuario = nombreUsuario;
        this._contador = 0;
        this._datoGrafico = new DatoGrafico(0,0,0,0,0);
        this._areasEnlace = [];
        this._areasEnlace[0] = new DatoGrafico(0,0,0,0,0);
    }
    set id(pId) {
        this._id = pId;
    }
    set diagrama(pDiagrama) {
        this._diagrama = pDiagrama;
    }
    set tipoObjeto(pTipoObjeto) {
        this._tipoObjeto = pTipoObjeto;
    }
    set valoresPropiedades(pValoresPropiedades) {
        this._valoresPropiedades = pValoresPropiedades;
    }
    set tiempo(pTiempo) {
        this._tiempo = pTiempo;
    }
    set nombreUsuario(pNombreUsuario) {
        this._nombreUsuario = pNombreUsuario;
    }
    get id() {
        return this._id;
    }
    get diagrama() {
        return this._diagrama;
    }
    get tipoObjeto() {
        return this._tipoObjeto;
    }
    get valoresPropiedades() {
        return this._valoresPropiedades;
    }
    get tiempo() {
        return this._tiempo;
    }
    get nombreUsuario() {
        return this._nombreUsuario;
    }
    get areasEnlace() {
        return this._areasEnlace;
    }
    get datoGrafico() {
        return this._datoGrafico;
    }
    get areasEnlace() {
        return this._areasEnlace;
    }
    get validez() {
        return true;
    }
    get cadenaPropiedades() {
        let i = 0;
        let rCadenaPropiedades = '';
        for (i=0; i<this._tipoObjeto._tiposPropiedad.length; i++) {
            if (i>0) {
                rCadenaPropiedades = rCadenaPropiedades+' - ';
            }
            rCadenaPropiedades = rCadenaPropiedades+this._tipoObjeto._tiposPropiedad[i]._nombre+': '+this._valoresPropiedades[i];
        }
        return rCadenaPropiedades;
    }
    get cadenaDiagrama() {
        return this._valoresPropiedades[0];
    }
    get valorPropiedad() {
        let rValorPropiedad = this._valoresPropiedades[this._contador];
        this._contador++;
        if (this._contador >= this._valoresPropiedades.length) {
            this._contador=0;
        }
        return rValorPropiedad;
    }
    incluirValorPropiedad(pValorPropiedad) {
        let i = this._valoresPropiedades.length;
        this._valoresPropiedades[i] = pValorPropiedad;
    }
    tieneTipoRol(pTipoRol) {
        let i = 0;
        let rTieneTipoRol = false;
        while ((!rTieneTipoRol) && (i<this._tipoObjeto._tiposPuerto.length)) {
            rTieneTipoRol = (rTieneTipoRol || (this._tipoObjeto._tiposPuerto[i].tieneTipoRol(pTipoRol)));
            i++;
        }
        return rTieneTipoRol;
    }
    incluirAreaEnlace(pX,pY,pAncho,pAlto,pLineas) {
        this._areasEnlace[this._areasEnlace.length] = new DatoGrafico(pX,pY,pAncho,pAlto,pLineas);
    }
}