const Institucion = require('../instituciones/Institucion');

module.exports = class Programa {
    constructor(id,identificacion,nombre) {
        this._id = id;
        this._identificacion = identificacion;
        this._nombre = nombre;
        this._institucion = new Institucion('','','','');
        this._cursos = [];
        this._docentes = [];
        this._estudiantes = [];
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
    set docentes(pDocentes) {
        this._docentes = pDocentes;
    }
    set estudiantes(pEstudiantes) {
        this._estudiantes = pEstudiantes;
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
    get docentes() {
        return this._docentes;
    }
    get estudiantes() {
        return this._estudiantes;
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
    incluirDocente(pDocente) {
        let i = this._docentes.length;
        this._docentes[i] = pDocente;
    }
    incluirEstudiante(pEstudiante) {
        let i = this._estudiantes.length;
        this._estudiantes[i] = pEstudiante;
    }
    get programaJson() {
        let rProgramaJson = JSON.stringify(this);
        return rProgramaJson;
    }
    esAnteriorA(pPrograma) {
        var rEsAnteriorA;
        rEsAnteriorA = (this._nombre.localeCompare(pPrograma._nombre) < 0);
        return rEsAnteriorA;
    }
    ordenarCursos() {
        let i = 0;
        let j = 0;
        let k = 0;
        let tCurso = undefined;
        for (i=0; i<this._cursos.length - 1; i++) {
            k=i;
            for (j=i+1; j<this._cursos.length; j++) {
                if (this._cursos[j].esAnteriorA(this._cursos[k])) {
                    k=j;
                }
            }
            if (k != i) {
                tCurso = this._cursos[i];
                this._cursos[i] = this._cursos[k];
                this._cursos[k] = tCurso;
            }
        }
    }
    ordenarDocentes() {
        let i = 0;
        let j = 0;
        let k = 0;
        let tDocente = undefined;
        for (i=0; i<this._docentes.length - 1; i++) {
            k=i;
            for (j=i+1; j<this._docentes.length; j++) {
                if (this._docentes[j].esAnteriorA(this._docentes[k])) {
                    k=j;
                }
            }
            if (k != i) {
                tDocente = this._docentes[i];
                this._docentes[i] = this._docentes[k];
                this._docentes[k] = tDocente;
            }
        }
    }
    ordenarEstudiantes() {
        let i = 0;
        let j = 0;
        let k = 0;
        let tEstudiante = undefined;
        for (i=0; i<this._estudiantes.length - 1; i++) {
            k=i;
            for (j=i+1; j<this._estudiantes.length; j++) {
                if (this._estudiantes[j].esAnteriorA(this._estudiantes[k])) {
                    k=j;
                }
            }
            if (k != i) {
                tEstudiante = this._estudiantes[i];
                this._estudiantes[i] = this._estudiantes[k];
                this._estudiantes[k] = tEstudiante;
            }
        }
    }
}