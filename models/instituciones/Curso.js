const Programa = require('../instituciones/Programa');

module.exports = class Curso {
    constructor(id,identificacion,nombre) {
        this._id = id;
        this._identificacion = identificacion;
        this._nombre = nombre;
        this._programa = new Programa('','','');
        this._docentes = [];
        this._grupos = [];
    }
    set id(pId) {
        this._id = pId;
    }
    set identificacion(pIdentificacion) {
        this._identificacion = pIdentificacion;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set programa(pPrograma){
        this._programa = pPrograma;
    }
    set docentes(pDocentes) {
        this._docentes = pDocentes;
    }
    set grupos(pGrupos) {
        this._grupos = pGrupos;
    }
    get id() {
        return this._id;
    }
    get identificacion() {
        return this._identificacion;
    }
    get nombre() {
        return this._nombre;
    }
    get programa() {
        return this._programa;
    }
    get docentes() {
        return this._docentes;
    }
    get grupos() {
        return this._grupos;
    }
    get total() {
        return 1*this._grupos.length;
    }
    get validez() {
        var rValidez;
        rValidez = ((1*this._identificacion.length>0) && (1*this._nombre.length>0));
        return rValidez;
    }
    incluirDocente(pDocente) {
        let i = this._docentes.length;
        this._docentes[i] = pDocente;
    }
    incluirGrupo(pGrupo) {
        let i = this._grupos.length;
        this._grupos[i] = pGrupo;
    }
}