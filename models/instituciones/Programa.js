const Institucion = require('../instituciones/Institucion');

module.exports = class Programa {
    constructor(id,identificacion,nombre) {
        this._id = id;
        this._identificacion = identificacion;
        this._nombre = nombre;
        this._institucion = new Institucion('','','','');
        this._cursos = [];
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
    set institucion(pInstitucion){
        this._institucion = pInstitucion;
    }
    set cursos(pCursos) {
        this._cursos = pCursos;
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
    get institucion() {
        return this._institucion;
    }
    get cursos() {
        return this._cursos;
    }
    get total() {
        return 1*this._cursos.length;
    }
    get validez() {
        var rValidez;
        rValidez = ((1*this._identificacion.length>0) && (1*this._nombre.length>0));
        return rValidez;
    }
    incluirCurso(pCurso) {
        let i = this._cursos.length;
        this._cursos[i] = pCurso;
    }
}