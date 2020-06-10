const Programa = require('../instituciones/Programa');

module.exports = class Curso {
    constructor(id,identificacion,nombre) {
        this._id = id;
        this._identificacion = identificacion;
        this._nombre = nombre;
        this._programa = new Programa('','','');
        this._docentes = [];
        this._grupos = [];
        this._casos = [];
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
    set casos(pCasos) {
        this._casos = pCasos;
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
    get casos() {
        return this._cursos;
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
    incluirCaso(pCaso) {
        let i = this._casos.length;
        this._casos[i] = pCaso;
    }
    get cursoJson() {
        let rCursoJson = JSON.stringify(this);
        return rCursoJson;
    }
    esAnteriorA(pCurso) {
        var rEsAnteriorA;
        rEsAnteriorA = (this._nombre.localeCompare(pCurso._nombre) < 0);
        return rEsAnteriorA;
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
    ordenarGrupos() {
        let i = 0;
        let j = 0;
        let k = 0;
        let tGrupo = undefined;
        for (i=0; i<this._grupos.length - 1; i++) {
            k=i;
            for (j=i+1; j<this._grupos.length; j++) {
                if (this._grupos[j].esAnteriorA(this._grupos[k])) {
                    k=j;
                }
            }
            if (k != i) {
                tGrupo = this._grupos[i];
                this._grupos[i] = this._grupos[k];
                this._grupos[k] = tGrupo;
            }
        }
    }
    ordenarCasos() {
        let i = 0;
        let j = 0;
        let k = 0;
        let tCaso = undefined;
        for (i=0; i<this._casos.length - 1; i++) {
            k=i;
            for (j=i+1; j<this._casos.length; j++) {
                if (this._casos[j].esAnteriorA(this._casos[k])) {
                    k=j;
                }
            }
            if (k != i) {
                tCaso = this._casos[i];
                this._casos[i] = this._casos[k];
                this._casos[k] = tCaso;
            }
        }
    }
}
