const Conexion = require('../Conexion');
const Docente = require('../instituciones/Docente');
const Estudiante = require('../instituciones/Estudiante');
const Usuario = require('../instituciones/Usuario');
const Grupo = require('../instituciones/Grupo');
const Curso = require('../instituciones/Curso');
const Programa = require('../instituciones/Programa');
const Institucion = require('../instituciones/Institucion');
const ConjuntoInstituciones = require('../instituciones/ConjuntoInstituciones');

module.exports = class Datos extends Conexion {
    constructor() {
        super();
        this._coleccionInstituciones = 'instituciones';
        this._coleccionProgramas = 'programas';
        this._coleccionCursos = 'cursos';
        this._coleccionGrupos = 'grupos';
        this._coleccionUsuarios = 'usuarios';
    }
    async grabarInstitucion(pInstitucion) {
        if (pInstitucion.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionInstituciones).add({
                    identificacion: pInstitucion.identificacion,
                    sigla: pInstitucion.sigla,
                    nombre: pInstitucion.nombre});
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarPrograma(pInstitucionId, pPrograma) {
        if (pPrograma.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionProgramas).add({
                    institucionId: pInstitucionId,
                    identificacion: pPrograma.identificacion,
                    nombre: pPrograma.nombre
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarCurso(pProgramaId, pCurso) {
        if (pCurso.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionCursos).add({
                    programaId: pProgramaId,
                    identificacion: pCurso.identificacion,
                    nombre: pCurso.nombre
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarGrupo(pCursoId, pGrupo) {
        if (pGrupo.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionGrupos).add({
                    cursoId: pCursoId,
                    identificacion: pGrupo.identificacion,
                    nombre: pGrupo.nombre
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarDocente(pProgramaId, pDocente) {
        if (pDocente.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionUsuarios).add({
                    identificacion: pDocente.identificacion,
                    nombres: pDocente.nombres,
                    apellidos: pDocente.apellidos,
                    correoElectronico: pDocente.correo,
                    docenteProgramasId: [pProgramaId],
                    habilitadoAdministradorInstitucion: pDocente.administraInstitucion,
                    habilitadoAdministradorPrograma: pDocente.administraPrograma,
                    habilitadoAdministradorCurso: pDocente.administraCurso,
                    habilitadoDocente: pDocente.habilitadoDocente,
                    habilitadoEstudiante: pDocente.habilitadoEstudiante
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarEstudiante(pProgramaId, pEstudiante) {
        if (pEstudiante.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionUsuarios).add({
                    identificacion: pEstudiante.identificacion,
                    nombres: pEstudiante.nombres,
                    apellidos: pEstudiante.apellidos,
                    correoElectronico: pEstudiante.correo,
                    estudianteProgramasId: [pProgramaId],
                    habilitadoAdministradorInstitucion: pEstudiante.administraInstitucion,
                    habilitadoAdministradorPrograma: pEstudiante.administraPrograma,
                    habilitadoAdministradorCurso: pEstudiante.administraCurso,
                    habilitadoDocente: pEstudiante.habilitadoDocente,
                    habilitadoEstudiante: pEstudiante.habilitadoEstudiante
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async recuperarConjuntoInstituciones() {
        let rConjuntoInstituciones = new ConjuntoInstituciones();
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionInstituciones).orderBy('nombre');
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rConjuntoInstituciones.incluirInstitucion(new Institucion(
                        document.id,
                        document.data().identificacion,
                        document.data().sigla,
                        document.data().nombre));
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rConjuntoInstituciones;
    }
    async recuperarInstitucion(pId) {
        let rInstitucion = new Institucion('','','','');
        let tPrograma = new Programa('','','');
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionInstituciones).doc(pId);
        let consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rInstitucion = new Institucion(
                        documentSnapshot.id,
                        documentSnapshot.data().identificacion,
                        documentSnapshot.data().sigla,
                        documentSnapshot.data().nombre);
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionProgramas).where('institucionId', '==', pId).orderBy('nombre');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tPrograma = new Programa(
                        document.id,
                        document.data().identificacion,
                        document.data().nombre);
                    rInstitucion.incluirPrograma(tPrograma);
                });
            })
            .catch(err => {
                console.log(err);
            });
        rInstitucion.ordenarProgramas();
        return rInstitucion;
    }
    async recuperarPrograma(pId) {
        let tInstitucionId = '';
        let rPrograma = new Programa('','','','');
        let tEstudiante = new Usuario('','','','',false,false,false,false,false);
        let tDocente = new Usuario('','','','',false,false,false,false,false);
        let tCurso = new Curso('','','');
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionProgramas).doc(pId);
        let consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rPrograma = new Programa(
                        documentSnapshot.id,
                        documentSnapshot.data().identificacion,
                        documentSnapshot.data().nombre);
                    tInstitucionId = documentSnapshot.data().institucionId;
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionInstituciones).doc(tInstitucionId);
        consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rPrograma.institucion = new Institucion(
                        documentSnapshot.id,
                        documentSnapshot.data().identificacion,
                        documentSnapshot.data().sigla,
                        documentSnapshot.data().nombre);
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionCursos).where('programaId', '==', pId).orderBy('nombre');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tCurso = new Curso(
                        document.id,
                        document.data().identificacion,
                        document.data().nombre);
                    rPrograma.incluirCurso(tCurso);
                });
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('docenteProgramasId', 'array-contains', pId);
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tDocente = new Docente(
                        document.id,
                        document.data().identificacion,
                        document.data().nombres,
                        document.data().apellidos,
                        document.data().correoElectronico,
                        document.data().administraInstitucion,
                        document.data().administraPrograma,
                        document.data().administraCurso,
                        document.data().habilitadoDocente,
                        document.data().habilitadoEstudiante);
                    rPrograma.incluirDocente(tDocente);
                });
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('estudianteProgramasId', 'array-contains', pId);
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tEstudiante = new Estudiante(
                        document.id,
                        document.data().identificacion,
                        document.data().nombres,
                        document.data().apellidos,
                        document.data().correoElectronico,
                        document.data().administraInstitucion,
                        document.data().administraPrograma,
                        document.data().administraCurso,
                        document.data().habilitadoDocente,
                        document.data().habilitadoEstudiante);
                    rPrograma.incluirEstudiante(tEstudiante);
                });
            })
            .catch(err => {
                console.log(err);
            });
        rPrograma.ordenarCursos();
        rPrograma.ordenarDocentes();
        rPrograma.ordenarEstudiantes();
        return rPrograma;
    }
    async recuperarCurso(pId) {
        let tInstitucionId = '';
        let tProgramaId = '';
        let rCurso = new Curso('','','','');
        let tGrupo = new Grupo('','','');
        let tDocente = new Usuario('','','','',false,false,false,false,false);
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionCursos).doc(pId);
        let consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rCurso = new Curso(
                        documentSnapshot.id,
                        documentSnapshot.data().identificacion,
                        documentSnapshot.data().nombre);
                    tProgramaId = documentSnapshot.data().programaId;
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionProgramas).doc(tProgramaId);
        consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rCurso.programa = new Programa(
                        documentSnapshot.id,
                        documentSnapshot.data().identificacion,
                        documentSnapshot.data().nombre);
                    tInstitucionId = documentSnapshot.data().institucionId;
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionInstituciones).doc(tInstitucionId);
        consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rCurso.programa.institucion = new Institucion(
                        documentSnapshot.id,
                        documentSnapshot.data().identificacion,
                        documentSnapshot.data().sigla,
                        documentSnapshot.data().nombre);
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('docenteCursosId', 'array-contains', pId);
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tDocente = new Docente(
                        document.id,
                        document.data().identificacion,
                        document.data().nombres,
                        document.data().apellidos,
                        document.data().correoElectronico,
                        document.data().administraInstitucion,
                        document.data().administraPrograma,
                        document.data().administraCurso,
                        document.data().habilitadoDocente,
                        document.data().habilitadoEstudiante);
                    rCurso.incluirDocente(tDocente);
                });
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionGrupos).where('cursoId', '==', pId).orderBy('nombre');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tGrupo = new Grupo(
                        document.id,
                        document.data().identificacion,
                        document.data().nombre);
                    rCurso.incluirGrupo(tGrupo);
                });
            })
            .catch(err => {
                console.log(err);
            });
        rCurso.ordenarDocentes();
        rCurso.ordenarGrupos();
        return rCurso;
    }
    async recuperarGrupo(pId) {
        let tInstitucionId = '';
        let tProgramaId = '';
        let tCursoId = '';
        let rGrupo = new Grupo('','','','');
        let tDocente = new Usuario('','','','',false,false,false,false,false);
        let tEstudiante = new Usuario('','','','',false,false,false,false,false);
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionGrupos).doc(pId);
        let consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rGrupo = new Grupo(
                        documentSnapshot.id,
                        documentSnapshot.data().identificacion,
                        documentSnapshot.data().nombre);
                    tCursoId = documentSnapshot.data().cursoId;
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionCursos).doc(tCursoId);
        consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rGrupo.curso = new Curso(
                        documentSnapshot.id,
                        documentSnapshot.data().identificacion,
                        documentSnapshot.data().nombre);
                    tProgramaId = documentSnapshot.data().programaId;
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionProgramas).doc(tProgramaId);
        consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rGrupo.curso.programa = new Programa(
                        documentSnapshot.id,
                        documentSnapshot.data().identificacion,
                        documentSnapshot.data().nombre);
                    tInstitucionId = documentSnapshot.data().institucionId;
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionInstituciones).doc(tInstitucionId);
        consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rGrupo.curso.programa.institucion = new Institucion(
                        documentSnapshot.id,
                        documentSnapshot.data().identificacion,
                        documentSnapshot.data().sigla,
                        documentSnapshot.data().nombre);
                };
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('docenteGruposId', 'array-contains', pId);
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rGrupo.docente = new Docente(
                        document.id,
                        document.data().identificacion,
                        document.data().nombres,
                        document.data().apellidos,
                        document.data().correoElectronico,
                        document.data().administraInstitucion,
                        document.data().administraPrograma,
                        document.data().administraCurso,
                        document.data().habilitadoDocente,
                        document.data().habilitadoEstudiante);
                });
            })
            .catch(err => {
                console.log(err);
            });
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('estudianteGruposId', 'array-contains', pId);
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    tEstudiante = new Estudiante(
                        document.id,
                        document.data().identificacion,
                        document.data().nombres,
                        document.data().apellidos,
                        document.data().correoElectronico,
                        document.data().administraInstitucion,
                        document.data().administraPrograma,
                        document.data().administraCurso,
                        document.data().habilitadoDocente,
                        document.data().habilitadoEstudiante);
                    rGrupo.incluirEstudiante(tEstudiante);
                });
            })
            .catch(err => {
                console.log(err);
            });
        rGrupo.ordenarEstudiantes();
        return rGrupo;
    }
    async recuperarUsuario(pIdentificacion) {
        let rUsuario = new Usuario('','','','','',false,false,false,false,false);
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('identificacion', '==', pIdentificacion).limit(1);
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rUsuario = new Usuario(
                        document.id,
                        document.data().identificacion,
                        document.data().nombres,
                        document.data().apellidos,
                        document.data().correoElectronico,
                        document.data().administraInstitucion,
                        document.data().administraPrograma,
                        document.data().administraCurso,
                        document.data().habilitadoDocente,
                        document.data().habilitadoEstudiante);
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rUsuario;
    }
    async recuperarUsuarioCorreo(pCorreoDocente) {
        let rUsuario = new Usuario('','','','','',false,false,false,false,false);
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('correoElectronico', '==', pCorreoDocente).limit(1);
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rUsuario = new Docente(
                        document.id,
                        document.data().identificacion,
                        document.data().nombres,
                        document.data().apellidos,
                        document.data().correoElectronico,
                        document.data().administraInstitucion,
                        document.data().administraPrograma,
                        document.data().administraCurso,
                        document.data().habilitadoDocente,
                        document.data().habilitadoEstudiante);
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rUsuario;
    }
    async verificarUsuario(pIdentificacion) {
        let rExiste = false;
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('identificacion','==',pIdentificacion).limit(1);
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rExiste = true;
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rExiste;
    }
    async verificarGrupoDocente(pGrupoId,pIdentificacion) {
        let rExiste = false;
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('docenteGruposId', 'array-contains', pGrupoId);
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    if (document.data().identificacion==pIdentificacion) {
                        rExiste = true;
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rExiste;
    }
    async verificarGrupoEstudiante(pGrupoId,pIdentificacion) {
        let rExiste = false;
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('estudianteGruposId', 'array-contains', pGrupoId);
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    if (document.data().identificacion==pIdentificacion) {
                        rExiste = true;
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rExiste;
    }
    async actualizarInstitucion(pInstitucion) {
        if (pInstitucion.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionInstituciones).doc(pInstitucion.id).set({
                    identificacion: pInstitucion.identificacion,
                    sigla: pInstitucion.sigla,
                    nombre: pInstitucion.nombre},
                    {merge: true});
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async actualizarPrograma(pPrograma) {
        if (pPrograma.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionProgramas).doc(pPrograma.id).set({
                        identificacion: pPrograma.identificacion,
                        nombre: pPrograma.nombre},
                    {merge: true});
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async actualizarCurso(pCurso) {
        if (pCurso.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionCursos).doc(pCurso.id).set({
                        identificacion: pCurso.identificacion,
                        nombre: pCurso.nombre},
                    {merge: true});
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async actualizarGrupo(pGrupo) {
        if (pGrupo.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionGrupos).doc(pGrupo.id).set({
                        identificacion: pGrupo.identificacion,
                        nombre: pGrupo.nombre},
                    {merge: true});
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async actualizarVinculoDocente(pGrupo, pDocente) {
        if (pDocente.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionUsuarios).doc(pDocente.id).update({
                    docenteCursosId: this._firebase.firestore.FieldValue.arrayUnion(pGrupo.curso.id),
                    docenteGruposId: this._firebase.firestore.FieldValue.arrayUnion(pGrupo.id)})
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async actualizarVinculoEstudiante(pGrupo, pEstudiante) {
        if (pEstudiante.validez) {
            try {
                this._firebase.firestore().collection(this._coleccionUsuarios).doc(pEstudiante.id).update({
                    estudianteGruposId: this._firebase.firestore.FieldValue.arrayUnion(pGrupo.id)})
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async eliminarInstitucion(pId) {
        try {
            this._firebase.firestore().collection(this._coleccionInstituciones).doc(pId).delete();
        } catch (e) {
            console.log(e.message);
        }
    }
    async eliminarPrograma(pId) {
        try {
            this._firebase.firestore().collection(this._coleccionProgramas).doc(pId).delete();
        } catch (e) {
            console.log(e.message);
        }
    }
    async eliminarCurso(pId) {
        try {
            this._firebase.firestore().collection(this._coleccionCursos).doc(pId).delete();
        } catch (e) {
            console.log(e.message);
        }
    }
    async eliminarGrupo(pId) {
        try {
            this._firebase.firestore().collection(this._coleccionGrupos).doc(pId).delete();
        } catch (e) {
            console.log(e.message);
        }
    }
}