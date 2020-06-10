module.exports = class Usuario {
    constructor(id,identificacion,nombres,apellidos,correo,
                administraInstitucion,administraPrograma,administraCurso,
                habilitadoDocente,habilitadoEstudiante) {
        this._id = id;
        this._identificacion = identificacion;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._correo = correo;
        this._administraInstitucion = administraInstitucion;
        this._administraPrograma = administraPrograma;
        this._administraCurso = administraCurso;
        this._habilitadoDocente = habilitadoDocente;
        this._habilitadoEstudiante = habilitadoEstudiante;
        this._cursos = [];
    }
    set id(pId) {
        this._id = pId;
    }
    set identificacion(pIdentificacion) {
        this._identificacion = pIdentificacion;
    }
    set nombres(pNombres) {
        this._nombres = pNombres;
    }
    set apellidos(pApellidos) {
        this._apellidos = pApellidos;
    }
    set correo(pCorreo) {
        this._correo = pCorreo;
    }
    set administraInstitucion(pAdministraInstitucion) {
        this._administraInstitucion = pAdministraInstitucion;
    }
    set administraPrograma(pAdministraPrograma) {
        this._administraPrograma = pAdministraPrograma;
    }
    set administraCurso(pAdministraCurso) {
        this._administraCurso = pAdministraCurso;
    }
    set habilitadoDocente(pHabilitadoDocente) {
        this._habilitadoDocente = pHabilitadoDocente;
    }
    set habilitadoEstudiante(pHabilitadoEstudiante) {
        this._habilitadoEstudiante = pHabilitadoEstudiante;
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
    get nombres() {
        return this._nombres;
    }
    get apellidos() {
        return this._apellidos;
    }
    get correo() {
        return this._correo;
    }
    get administraInstitucion() {
        return this._administraInstitucion;
    }
    get administraPrograma() {
        return this._administraPrograma;
    }
    get administraCurso() {
        return this._administraCurso;
    }
    get habilitadoDocente() {
        return this._habilitadoDocente;
    }
    get habilitadoEstudiante() {
        return this._habilitadoEstudiante;
    }
    get cursos() {
        return this._cursos;
    }
    get validez() {
        var rValidez;
        rValidez = ((1*this._identificacion.length>0) && (1*this._nombres.length>0) && (1*this._apellidos.length>0));
        return rValidez;
    }
    get usuarioJson() {
        let rUsuarioJson = JSON.stringify(this);
        return rUsuarioJson;
    }
    esAnteriorA(pDocente) {
        var rEsAnteriorA;
        rEsAnteriorA = ((this._apellidos.localeCompare(pDocente._apellidos) < 0) || ((this._apellidos.localeCompare(pDocente._apellidos) == 0) && (this._nombres.localeCompare(pDocente._nombres) < 0)));
        return rEsAnteriorA;
    }
    incluirCurso(pCurso) {
        let i = this._cursos.length;
        this._cursos[i] = pCurso;
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
}
