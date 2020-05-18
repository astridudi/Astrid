const Diagrama = require('./Diagrama');

module.exports = class Relacion {
    constructor(id,tipoDiagramaId,tipoRelacionId,tiempo) {
        this._id = id;
        this._diagrama = new Diagrama('',tipoDiagramaId,'','');
        if (tipoRelacionId.toString().length>0) {
            this._tipoRelacion = this._diagrama._tipoDiagrama.tipoRelacion(tipoRelacionId);
        } else {
            this._tipoRelacion = undefined;
        }
        this._objetoInicio = undefined;
        this._objetoFinal = undefined;
        this._valoresPropiedades = [];
        if (tiempo.length==0){
            this._tiempo = new Date();
        } else {
            this._tiempo = tiempo;
        }
        this._contador = 0;
    }
    set id(pId) {
        this._id = pId;
    }
    set diagrama(pDiagrama) {
        this._diagrama = pDiagrama;
    }
    set tipoRelacion(pTipoRelacion) {
        this._tipoRelacion = pTipoRelacion;
    }
    set objetoInicio(pObjetoInicio) {
        this._objetoInicio = pObjetoInicio;
    }
    set objetoFinal(pObjetoFinal) {
        this._objetoFinal = pObjetoFinal;
    }
    set valoresPropiedades(pValoresPropiedades) {
        this._valoresPropiedades = pValoresPropiedades;
    }
    set tiempo(pTiempo) {
        this._tiempo = pTiempo;
    }
    get id() {
        return this._id;
    }
    get diagrama() {
        return this._diagrama;
    }
    get tipoRelacion() {
        return this._tipoRelacion;
    }
    get objetoInicio() {
        return this._objetoInicio;
    }
    get objetoFinal() {
        return this._objetoFinal;
    }
    get valoresPropiedades() {
        return this._valoresPropiedades;
    }
    get tiempo() {
        return this._tiempo;
    }
    get validez() {
        return true;
    }
    get cadenaPropiedades() {
        let i = 0;
        let rCadenaPropiedades = '';
        rCadenaPropiedades = rCadenaPropiedades+this._objetoInicio.cadenaPropiedades+' - '+this._objetoFinal.cadenaPropiedades;
        for (i=0; i<this._tipoRelacion._tiposPropiedad.length; i++) {
            rCadenaPropiedades = rCadenaPropiedades+' - ';
            rCadenaPropiedades = rCadenaPropiedades+this._tipoRelacion._tiposPropiedad[i]._nombre+': '+this._valoresPropiedades[i];
        }
        return rCadenaPropiedades;
    }
    get objetosPosibleInicio() {
        let i = 0;
        let rObjetosPosibleInicio = [];
        for (i=0; i<this._diagrama._objetos.length; i++) {
            if (this._diagrama._objetos[i].tieneTipoRol(this._tipoRelacion._tipoRolInicio)) {
                rObjetosPosibleInicio[rObjetosPosibleInicio.length]=this._diagrama._objetos[i];
            }
        }
        return rObjetosPosibleInicio;
    }
    get objetosPosibleFinal() {
        let i = 0;
        let rObjetosPosibleFinal = [];
        for (i=0; i<this._diagrama._objetos.length; i++) {
            if (this._diagrama._objetos[i].tieneTipoRol(this._tipoRelacion._tipoRolFinal)) {
                rObjetosPosibleFinal[rObjetosPosibleFinal.length]=this._diagrama._objetos[i];
            }
        }
        return rObjetosPosibleFinal;
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
}