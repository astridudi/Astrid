const Usuario = require('../instituciones/Usuario');

module.exports = class Participante extends Usuario {
    constructor(id,identificacion,apellidos,nombres,correo,
                administraInstitucion,administraPrograma,administraCurso,
                habilitadoDocente,habilitadoEstudiante) {
        super(id,identificacion,apellidos,nombres,correo,
            administraInstitucion,administraPrograma,administraCurso,
            habilitadoDocente,habilitadoEstudiante);
    }
}
