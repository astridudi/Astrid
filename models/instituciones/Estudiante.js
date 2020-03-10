const Participante = require('../instituciones/Participante');

module.exports = class Estudiante extends Participante {
    constructor(id,identificacion,nombres,apellidos,correo,
                administraInstitucion,administraPrograma,administraCurso,
                habilitadoDocente,habilitadoEstudiante) {
        super(id,identificacion,nombres,apellidos,correo,
            administraInstitucion,administraPrograma,administraCurso,
            habilitadoDocente,habilitadoEstudiante);
    }
}