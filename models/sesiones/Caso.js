const Curso = require('../instituciones/Curso');
const Docente = require('../instituciones/Docente');

module.exports = class Caso {
    constructor(id,nombre,inicio) {
        this._id = id;
        this._nombre = nombre;
        if (inicio.length==0){
            this._inicio = new Date();
        } else {
            this._inicio = inicio;
        }
        this._curso = new Curso('','','');
        this._docente = new Docente('','','','','');
        this._idTipoDiagrama = '';
        this._nombreTipoDiagrama = '';
    }
    set id(pId) {
        this._id = pId;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set tiempo(pInicio) {
        this._tiempo = pInicio;
    }
    set curso(pCurso){
        this._curso = pCurso;
    }
    set docente(pDocente) {
        this._docente = pDocente;
    }
    set idTipoDiagrama(pIdTipoDiagrama) {
        this._idTipoDiagrama = pIdTipoDiagrama;
    }
    set nombreTipoDiagrama(pNombreTipoDiagrama) {
        this._nombreTipoDiagrama = pNombreTipoDiagrama;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get inicio() {
        return this._inicio;
    }
    get curso() {
        return this._curso;
    }
    get docente() {
        return this._docente;
    }
    get idTipoDiagrama() {
        return this._idTipoDiagrama;
    }
    get nombreTipoDiagrama() {
        return this._nombreTipoDiagrama;
    }
    get validez() {
        var rValidez;
        rValidez = (1*this._nombre.length>0);
        return rValidez;
    }
    get casoJson() {
        let rCasoJson = JSON.stringify(this);
        return rCasoJson;
    }
    esAnteriorA(pCaso) {
        var rEsAnteriorA;
        rEsAnteriorA = (this._nombre.localeCompare(pCaso._nombre) < 0);
        return rEsAnteriorA;
    }
}
