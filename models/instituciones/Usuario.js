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
    get validez() {
        var rValidez;
        rValidez = ((1*this._identificacion.length>0) && (1*this._nombres.length>0) && (1*this._apellidos.length>0));
        return rValidez;
    }
}