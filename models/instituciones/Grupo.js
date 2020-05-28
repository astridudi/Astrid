const Curso = require('../instituciones/Curso');
const Docente = require('../instituciones/Docente');

module.exports = class Grupo {
    constructor(id,identificacion,nombre) {
        this._id = id;
        this._identificacion = identificacion;
        this._nombre = nombre;
        this._curso = new Curso('','','');
        this._docente = new Docente('','','','','');
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
    set curso(pCurso){
        this._curso = pCurso;
    }
    set docente(pDocente) {
        this._docente = pDocente;
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
    get curso() {
        return this._curso;
    }
    get nombre() {
        return this._nombre;
    }
    get docente() {
        return this._docente;
    }
    get estudiantes() {
        return this._estudiantes;
    }
    get total() {
        return 1*this._estudiantes.length;
    }
    get validez() {
        var rValidez;
        rValidez = ((1*this._identificacion.length>0) && (1*this._nombre.length>0));
        return rValidez;
    }
    incluirEstudiante(pEstudiante) {
        let i = this._estudiantes.length;
        this._estudiantes[i] = pEstudiante;
    }
    get grupoJson() {
        let rGrupoJson = JSON.stringify(this);
        return rGrupoJson;
    }
    esAnteriorA(pGrupo) {
        var rEsAnteriorA;
        rEsAnteriorA = (this._nombre.localeCompare(pGrupo._nombre) < 0);
        return rEsAnteriorA;
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