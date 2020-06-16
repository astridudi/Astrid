const Conexion = require('../Conexion');
const Sesion = require('../sesiones/Sesion');
const Caso = require('../sesiones/Caso');
const ConjuntoSesiones = require('../sesiones/ConjuntoSesiones');
const Chat = require('../chats/Chat');
const DatosChat = require('../chats/DatosChat');
const Diagrama = require('../diagramas/Diagrama');
const ConjuntoTiposDiagrama = require('../diagramas/ConjuntoTiposDiagrama');
const DatosDiagrama = require('../diagramas/DatosDiagrama');
const Curso = require('../instituciones/Curso');
const Grupo = require('../instituciones/Grupo');
const Docente = require('../instituciones/Docente');
const Estudiante = require('../instituciones/Estudiante');

module.exports = class DatosSesion extends Conexion {
    constructor() {
        super();
        this._coleccionSesiones = 'sesiones';
        this._coleccionCursos = 'cursos';
        this._coleccionGrupos = 'grupos';
        this._coleccionCasos = 'casos';
        this._coleccionUsuarios = 'usuarios';
    }
    async grabarCaso(pCaso,pIdCurso,pTipoDiagrama,pIdDocente) {
        var datosSesion = new DatosSesion();
        if (pCaso.validez) {
            var nSesion = new Sesion('',pCaso.nombre+ " - Referencia",'');
            try {
                this._firebase.firestore().collection(this._coleccionCasos).add({
                    nombre: pCaso.nombre,
                    inicio: pCaso.inicio,
                    cursoId: pIdCurso,
                    tipoDiagramaId: pTipoDiagrama,
                    docenteId: pIdDocente
                }).then(ref => {
                    pCaso.id = ref.id;
                    datosSesion.grabarAsignacion(nSesion,pCaso.id,pIdCurso,'',pIdDocente,pTipoDiagrama,'');
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarAsignacion(pSesion,pIdCaso,pIdCurso,pIdGrupo,pIdUsuario,pTipoDiagrama,pEstudiantesId) {
        var datosChat = new DatosChat();
        var datosDiagrama = new DatosDiagrama();
        if (pSesion.validez) {
            var nChat = new Chat('',pSesion.nombre,pSesion.inicio);
            var nDiagrama = new Diagrama('',pTipoDiagrama,pSesion.nombre,pSesion.inicio);
            try {
                this._firebase.firestore().collection(this._coleccionSesiones).add({
                    nombre: pSesion.nombre,
                    inicio: pSesion.inicio,
                    idTipoDiagrama: nDiagrama.tipoDiagrama.id,
                    nombreTipoDiagrama: nDiagrama.tipoDiagrama.nombre,
                    casoId: pIdCurso,
                    grupoId: pIdGrupo,
                    docenteId: pIdUsuario,
                    estudiantesId: pEstudiantesId
                }).then(ref => {
                    pSesion.id = ref.id;
                    nChat.sesion = pSesion;
                    datosChat.grabarChat(nChat);
                    nDiagrama.sesion = pSesion;
                    datosDiagrama.grabarDiagrama(nDiagrama);
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async grabarSesion(pSesion,pTipoDiagrama) {
        var datosChat = new DatosChat();
        var datosDiagrama = new DatosDiagrama();
        if (pSesion.validez) {
            var nChat = new Chat('',pSesion.nombre,pSesion.inicio);
            var nDiagrama = new Diagrama('',pTipoDiagrama,pSesion.nombre,pSesion.inicio);
            try {
                this._firebase.firestore().collection(this._coleccionSesiones).add({
                    nombre: pSesion.nombre,
                    inicio: pSesion.inicio,
                    idTipoDiagrama: nDiagrama.tipoDiagrama.id,
                    nombreTipoDiagrama: nDiagrama.tipoDiagrama.nombre
                }).then(ref => {
                    pSesion.id = ref.id;
                    nChat.sesion = pSesion;
                    datosChat.grabarChat(nChat);
                    nDiagrama.sesion = pSesion;
                    datosDiagrama.grabarDiagrama(nDiagrama);
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async recuperarDocenteCasos(pCorreoDocente) {
        let i = 0;
        let j = 0;
        let tListaCursosId = [];
        let tListaGruposId = [];
        let tCurso = undefined;
        let tGrupo = undefined;
        let tCaso = undefined;
        let tEstudiante = undefined;
        let tConjuntoTiposDiagrama = new ConjuntoTiposDiagrama();
        let tIdCurso = '';
        let rDocente = new Docente('','','','','',false,false,false,false,false);
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('correoElectronico', '==', pCorreoDocente).limit(1);
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rDocente = new Docente(
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
                    tListaCursosId = document.data().docenteCursosId;
                    tListaGruposId = document.data().docenteGruposId;
                });
            })
            .catch(err => {
                console.log(err);
            });
        for (i=0; i<tListaCursosId.length; i++) {
            referenciaConsulta = this._firebase.firestore().collection(this._coleccionCursos).doc(tListaCursosId[i]);
            consulta = await referenciaConsulta.get()
                .then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        tCurso = new Curso(
                            documentSnapshot.id,
                            documentSnapshot.data().identificacion,
                            documentSnapshot.data().nombre);
                    };
                })
                .catch(err => {
                    console.log(err);
                });
            referenciaConsulta = this._firebase.firestore().collection(this._coleccionCasos).where('cursoId', '==', tCurso.id).where('docenteId', '==', rDocente.id);
            consulta = await referenciaConsulta.get()
                .then(querySnapshot => {
                    querySnapshot.forEach(document => {
                        tCaso = new Caso(
                            document.id,
                            document.data().nombre,
                            document.data().inicio);
                        tCaso.idTipoDiagrama = document.data().tipoDiagramaId;
                        tCaso.nombreTipoDiagrama = tConjuntoTiposDiagrama.tiposDiagrama[document.data().tipoDiagramaId].nombre;
                        tCurso.incluirCaso(tCaso);
                    });
                })
                .catch(err => {
                    console.log(err);
                });
            tCurso.ordenarCasos();
            rDocente.incluirCurso(tCurso);
        }
        for (i=0; i<tListaGruposId.length; i++) {
            referenciaConsulta = this._firebase.firestore().collection(this._coleccionGrupos).doc(tListaGruposId[i]);
            consulta = await referenciaConsulta.get()
                .then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        tGrupo = new Grupo(
                            documentSnapshot.id,
                            documentSnapshot.data().identificacion,
                            documentSnapshot.data().nombre);
                        tIdCurso = documentSnapshot.data().cursoId;
                    };
                })
                .catch(err => {
                    console.log(err);
                });
            referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('estudianteGruposId', 'array-contains', tGrupo.id);
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
                        tGrupo.incluirEstudiante(tEstudiante);
                    });
                })
                .catch(err => {
                    console.log(err);
                });
            tGrupo.ordenarEstudiantes();
            j = 0;
            while ((j<rDocente.cursos.length) && (rDocente.cursos[j].id != tIdCurso)) {
                j = j + 1;
            }
            if (j<rDocente.cursos.length) {
                rDocente.cursos[j].incluirGrupo(tGrupo);
                rDocente.cursos[j].ordenarGrupos();
            }
        }
        rDocente.ordenarCursos();
        return rDocente;
    }
    async recuperarSesionesDocente(pCorreoDocente) {
        let rConjuntoSesiones = new ConjuntoSesiones();
        let rDocente = new Docente('','','','','',false,false,false,false,false);
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('correoElectronico', '==', pCorreoDocente).limit(1);
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rDocente = new Docente(
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
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionSesiones).where('docenteId', '==', rDocente.id).orderBy('inicio').orderBy('nombre');
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rConjuntoSesiones.incluirSesion(new Sesion(
                        document.id,
                        document.data().nombre,
                        document.data().inicio));
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rConjuntoSesiones;
    }

    async recuperarSesionesEstudiante(pCorreoEstudiante) {
        let rConjuntoSesiones = new ConjuntoSesiones();
        let rEstudiante = new Estudiante('','','','','',false,false,false,false,false);
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionUsuarios).where('correoElectronico', '==', pCorreoEstudiante).limit(1);
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rEstudiante = new Estudiante(
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
        referenciaConsulta = this._firebase.firestore().collection(this._coleccionSesiones).where('estudiantesId', 'array-contains', rEstudiante.id);
        consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rConjuntoSesiones.incluirSesion(new Sesion(
                        document.id,
                        document.data().nombre,
                        document.data().inicio));
                });
            })
            .catch(err => {
                console.log(err);
            });
        rConjuntoSesiones.ordenarSesiones();
        return rConjuntoSesiones;
    }

    async recuperarConjuntoSesiones() {
        let rConjuntoSesiones = new ConjuntoSesiones();
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionSesiones).orderBy('inicio');
        let consulta = await referenciaConsulta.get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    rConjuntoSesiones.incluirSesion(new Sesion(
                        document.id,
                        document.data().nombre,
                        document.data().inicio));
                });
            })
            .catch(err => {
                console.log(err);
            });
        return rConjuntoSesiones;
    }
    async recuperarSesion(pId) {
        let datosChat = new DatosChat();
        let rSesion = new Sesion('','','');
        let referenciaConsulta = this._firebase.firestore().collection(this._coleccionSesiones).doc(pId);
        let consulta = await referenciaConsulta.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    rSesion = new Sesion(
                        documentSnapshot.id,
                        documentSnapshot.data().nombre,
                        documentSnapshot.data().inicio);
                    rSesion.idTipoDiagrama = documentSnapshot.data().idTipoDiagrama;
                    rSesion.nombreTipoDiagrama = documentSnapshot.data().nombreTipoDiagrama;
                };
            })
            .catch(err => {
                console.log(err);
            });
        return rSesion;
    }
    async actualizarSesion(pSesion) {
        if (pSesion.validez) {
            try {
                if (pSesion.chat.validez){
                    this._firebase.firestore().collection(this._coleccionSesiones).doc(pSesion.id).update({
                        chatId: pSesion.chat.id,
                        nombre: pSesion.nombre});
                }
                else{
                    this._firebase.firestore().collection(this._coleccionSesiones).doc(pSesion.id).update({
                        nombre: pSesion.nombre});
                }
            } catch (e) {
                console.log(e.message);
            }
        }
    }
    async eliminarSesion(pId) {
        try {
            this._firebase.firestore().collection(this._coleccionSesiones).doc(pId).delete();
        } catch (e) {
            console.log(e.message);
        }
    }
}
