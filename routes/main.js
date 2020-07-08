const util = require("util");
const express = require("express");
const eventEmitter = require("../models/Emitter");

const router = express.Router();
const Institucion = require("../models/instituciones/Institucion");
const Programa = require("../models/instituciones/Programa");
const Curso = require("../models/instituciones/Curso");
const Grupo = require("../models/instituciones/Grupo");
const Docente = require("../models/instituciones/Docente");
const Estudiante = require("../models/instituciones/Estudiante");
const DatosInstitucion = require("../models/instituciones/DatosInstitucion");
const Sesion = require("../models/sesiones/Sesion");
const Caso = require("../models/sesiones/Caso");
const DatosSesion = require("../models/sesiones/DatosSesion");
const Chat = require("../models/chats/Chat");
const Mensaje = require("../models/chats/Mensaje");
const DatosChat = require("../models/chats/DatosChat");
const ConjuntoTiposDiagrama = require("../models/diagramas/ConjuntoTiposDiagrama");
const Diagrama = require("../models/diagramas/Diagrama");
const Objeto = require("../models/diagramas/Objeto");
const Relacion = require("../models/diagramas/Relacion");
const DatosDiagrama = require("../models/diagramas/DatosDiagrama");
const Argumentacion = require("../models/argumentaciones/Argumentacion");
const Aporte = require("../models/argumentaciones/Aporte");
const DatosArgumentacion = require("../models/argumentaciones/DatosArgumentacion");

/* Ingreso ******************************************************************************************/
/*
Recibe la petición de ingreso y despliega la vista para capturar los datos de ingreso del usuario
 */
router.get("/ingresar", async (req, res, next) => {
    res.render("capturarIngreso", {
    });
});
/*
Recibe los datos de ingreso del usuario y lo redirige a index
 */
router.post("/permitirIngreso", async (req, res, next) => {
    var datos = new DatosInstitucion();
    if (req.body.nombreUsuario == "astrid@udi.edu.co") {
        res.redirect("/?nombreUsuario="+ req.body.nombreUsuario +"&perfilUsuario=0");
    }
    else {
        var usuario = await datos.recuperarUsuarioCorreo(req.body.nombreUsuario);
        if (usuario._habilitadoDocente) {
            res.redirect("/?nombreUsuario="+ req.body.nombreUsuario +"&perfilUsuario=1");
        }
        else {
            if (usuario._habilitadoEstudiante) {
                res.redirect("/?nombreUsuario="+ req.body.nombreUsuario +"&perfilUsuario=2");
            }
            else {
                res.redirect("back");
            }
        }
    }
});

/* Instituciones ************************************************************************************/
/*
Recibe la petición y despliega la vista de instituciones
 */
router.get("/consultarConjuntoInstituciones", async (req, res, next) => {
    datos = new DatosInstitucion();
    res.render("instituciones/presentarConjuntoInstituciones", {
        nombreUsuario: req.query.nombreUsuario,
        conjuntoInstituciones: await datos.recuperarConjuntoInstituciones()
    });
});
/*
Recibe la petición de grabación de una institución
 */
router.post("/grabarInstitucion", async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarInstitucion(
        new Institucion("",req.body.identificacionInstitucion,req.body.siglaInstitucion,req.body.nombreInstitucion));
    res.redirect("/main/consultarConjuntoInstituciones?nombreUsuario="+req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de actualización de una institución
 */
router.post('/actualizarInstitucion', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.actualizarInstitucion(
        new Institucion(req.body.idInstitucion,req.body.identificacionInstitucion,req.body.siglaInstitucion,req.body.nombreInstitucion));
    res.redirect("/main/consultarConjuntoInstituciones?nombreUsuario="+req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de inhabilitación de una institución
 */
router.post('/eliminarInstitucion', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.eliminarInstitucion(
        new Institucion(req.body.idInstitucion,req.body.identificacionInstitucion,req.body.siglaInstitucion,req.body.nombreInstitucion));
    res.redirect("/main/consultarConjuntoInstituciones?nombreUsuario="+req.body.nombreUsuario+"&perfilUsuario=0");
});

/* Institución **************************************************************************************/
/*
Recibe la petición y despliega la vista de institución
 */
router.get("/presentarInstitucion", async (req, res, next) => {
    datos = new DatosInstitucion();
    institucionRecuperada = await datos.recuperarInstitucion(req.query.id);
    res.render("instituciones/presentarInstitucion", {
        nombreUsuario: req.query.nombreUsuario,
        institucion: institucionRecuperada
    });
});
/*
Recibe la petición de grabación de un programa
 */
router.post("/grabarPrograma", async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarPrograma(req.body.idInstitucion,
        new Programa('',req.body.identificacionPrograma,req.body.nombrePrograma));
    res.redirect("/main/presentarInstitucion?id="+ req.body.idInstitucion +"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de actualización de un programa
 */
router.post('/actualizarPrograma', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.actualizarPrograma(
        new Programa(req.body.idPrograma,req.body.identificacionPrograma,req.body.nombrePrograma));
    res.redirect('/main/presentarInstitucion?id='+ req.body.idInstitucion +'&nombreUsuario='+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de inhabilitación de un programa
 */
router.post('/eliminarPrograma', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.eliminarPrograma(
        new Programa(req.body.idPrograma,req.body.identificacionPrograma,req.body.nombrePrograma));
    res.redirect('/main/presentarInstitucion?id='+ req.body.idInstitucion +'&nombreUsuario='+ req.body.nombreUsuario+"&perfilUsuario=0");
});

/* Programa *****************************************************************************************/
/*
Recibe la petición y despliega la vista de programa
 */
router.get("/presentarPrograma", async (req, res, next) => {
    datos = new DatosInstitucion();
    programaRecuperado = await datos.recuperarPrograma(req.query.id);
    res.render("instituciones/presentarPrograma", {
        nombreUsuario: req.query.nombreUsuario,
        programa: programaRecuperado
    });
});
/*
Recibe la petición de grabación de un curso
 */
router.post("/grabarCurso", async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarCurso(req.body.idPrograma,
        new Curso("",req.body.identificacionCurso,req.body.nombreCurso));
    res.redirect("/main/presentarPrograma?id="+ req.body.idPrograma+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de actualización de un curso
 */
router.post('/actualizarCurso', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.actualizarCurso(
        new Curso(req.body.idCurso,req.body.identificacionCurso,req.body.nombreCurso));
    res.redirect("/main/presentarPrograma?id="+ req.body.idPrograma+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de inhabilitación de un curso
 */
router.post('/eliminarCurso', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.eliminarCurso(
        new Curso(req.body.idCurso,req.body.identificacionCurso,req.body.nombreCurso));
    res.redirect("/main/presentarPrograma?id="+ req.body.idPrograma+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de grabación de un docente
 */
router.post("/grabarDocente", async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarDocente(req.body.idPrograma,
        new Docente("",req.body.identificacionDocente,req.body.nombresDocente,req.body.apellidosDocente,req.body.correoElectronicoDocente,
            false,false,false,true,false));
    res.redirect("/main/presentarPrograma?id="+ req.body.idPrograma+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de actualización de un docente
 */
router.post('/actualizarDocente', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.actualizarDocente(
        new Docente(req.body.idDocente,req.body.identificacionDocente,req.body.nombresDocente,req.body.apellidosDocente,req.body.correoElectronicoDocente,
            false,false,false,true,false));
    res.redirect("/main/presentarPrograma?id="+ req.body.idPrograma+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de inhabilitación de un docente
 */
router.post('/eliminarDocente', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.eliminarDocente(
        new Docente(req.body.idDocente,req.body.identificacionDocente,req.body.nombresDocente,req.body.apellidosDocente,req.body.correoElectronicoDocente,
            false,false,false,true,false));
    res.redirect("/main/presentarPrograma?id="+ req.body.idPrograma+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de grabación de un estudiante
 */
router.post("/grabarEstudiante", async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarEstudiante(req.body.idPrograma,
        new Estudiante("",req.body.identificacionEstudiante,req.body.nombresEstudiante,req.body.apellidosEstudiante,req.body.correoElectronicoEstudiante,
            false,false,false,false,true));
    res.redirect("/main/presentarPrograma?id="+ req.body.idPrograma+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de actualización de un estudiante
 */
router.post('/actualizarEstudiante', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.actualizarDocente(
        new Estudiante(req.body.idEstudiante,req.body.identificacionEstudiante,req.body.nombresEstudiante,req.body.apellidosEstudiante,req.body.correoElectronicoEstudiante,
            false,false,false,true,false));
    res.redirect("/main/presentarPrograma?id="+ req.body.idPrograma+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de inhabilitación de un estudiante
 */
router.post('/eliminarEstudiante', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.eliminarEstudiante(
        new Estudiante(req.body.idEstudiante,req.body.identificacionEstudiante,req.body.nombresEstudiante,req.body.apellidosEstudiante,req.body.correoElectronicoEstudiante,
            false,false,false,true,false));
    res.redirect("/main/presentarPrograma?id="+ req.body.idPrograma+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});

/* Curso ********************************************************************************************/
/*
Recibe la petición y despliega la vista de curso
 */
router.get("/presentarCurso", async (req, res, next) => {
    datos = new DatosInstitucion();
    cursoRecuperado = await datos.recuperarCurso(req.query.id);
    res.render("instituciones/presentarCurso", {
        nombreUsuario: req.query.nombreUsuario,
        curso: cursoRecuperado
    });
});
/*
Recibe la petición de grabación de un grupo
 */
router.post("/grabarGrupo", async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarGrupo(req.body.idCurso,
        new Grupo("",req.body.identificacionGrupo,req.body.nombreGrupo));
    res.redirect("/main/presentarCurso?id="+ req.body.idCurso+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de actualización de un grupo
 */
router.post('/actualizarGrupo', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.actualizarGrupo(
        new Grupo(req.body.idGrupo,req.body.identificacionGrupo,req.body.nombreGrupo));
    res.redirect("/main/presentarCurso?id="+ req.body.idCurso+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de inhabilitación de un grupo
 */
router.post('/eliminarGrupo', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.eliminarGrupo(
        new Grupo(req.body.idGrupo,req.body.identificacionGrupo,req.body.nombreGrupo));
    res.redirect("/main/presentarCurso?id="+ req.body.idCurso+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});

/* Grupo ********************************************************************************************/
/*
Recibe la petición y despliega la vista de grupo
 */
router.get("/presentarGrupo", async (req, res, next) => {
    datos = new DatosInstitucion();
    grupoRecuperado = await datos.recuperarGrupo(req.query.id);
    res.render("instituciones/presentarGrupo", {
        nombreUsuario: req.query.nombreUsuario,
        grupo: grupoRecuperado
    });
});
/*
Recibe la petición de vinculación de un docente a un grupo
 */
router.post("/grabarVinculoDocente", async (req, res, next) => {
    var datos = new DatosInstitucion();
    var grupoDocenteExiste = await datos.verificarGrupoDocente(req.body.idGrupoDocente,req.body.identificacionDocente);
    if (! grupoDocenteExiste) {
        var usuarioExiste = await datos.verificarUsuario(req.body.identificacionDocente);
        if (usuarioExiste) {
            docenteRecuperado = await datos.recuperarUsuario(req.body.identificacionDocente);
            grupoRecuperado = await datos.recuperarGrupo(req.body.idGrupoDocente);
            datos.actualizarVinculoDocente(grupoRecuperado,docenteRecuperado);
        }
    }
    res.redirect("/main/presentarGrupo?id="+ req.body.idGrupoDocente+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de desvinculación de un docente a un grupo
 */
router.post("/eliminarVinculoDocente", async (req, res, next) => {
    var datos = new DatosInstitucion();
    var grupoDocenteExiste = await datos.verificarGrupoDocente(req.body.idGrupoDocente,req.body.identificacionDocente);
    if (grupoDocenteExiste) {
        var usuarioExiste = await datos.verificarUsuario(req.body.identificacionDocente);
        if (usuarioExiste) {
            docenteRecuperado = await datos.recuperarUsuario(req.body.identificacionDocente);
            grupoRecuperado = await datos.recuperarGrupo(req.body.idGrupoDocente);
            datos.eliminarVinculoDocente(grupoRecuperado,docenteRecuperado);
        }
    }
    res.redirect("/main/presentarGrupo?id="+ req.body.idGrupoDocente+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de vinculación de un estudiante a un grupo
 */
router.post("/grabarVinculoEstudiante", async (req, res, next) => {
    var datos = new DatosInstitucion();
    var grupoEstudianteExiste = await datos.verificarGrupoEstudiante(req.body.idGrupoEstudiante,req.body.identificacionEstudiante);
    if (! grupoEstudianteExiste) {
        var usuarioExiste = await datos.verificarUsuario(req.body.identificacionEstudiante);
        if (usuarioExiste) {
            estudianteRecuperado = await datos.recuperarUsuario(req.body.identificacionEstudiante);
            grupoRecuperado = await datos.recuperarGrupo(req.body.idGrupoEstudiante);
            datos.actualizarVinculoEstudiante(grupoRecuperado,estudianteRecuperado);
        }
    }
    res.redirect("/main/presentarGrupo?id="+ req.body.idGrupoEstudiante+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});
/*
Recibe la petición de desvinculación de un estudiante a un grupo
 */
router.post("/eliminarVinculoEstudiante", async (req, res, next) => {
    var datos = new DatosInstitucion();
    var grupoEstudianteExiste = await datos.verificarGrupoEstudiante(req.body.idGrupoEstudiante,req.body.identificacionEstudiante);
    if (grupoEstudianteExiste) {
        var usuarioExiste = await datos.verificarUsuario(req.body.identificacionEstudiante);
        if (usuarioExiste) {
            estudianteRecuperado = await datos.recuperarUsuario(req.body.identificacionEstudiante);
            grupoRecuperado = await datos.recuperarGrupo(req.body.idGrupoEstudiante);
            datos.eliminarVinculoEstudiante(grupoRecuperado,estudianteRecuperado);
        }
    }
    res.redirect("/main/presentarGrupo?id="+ req.body.idGrupoEstudiante+"&nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=0");
});

/* Casos ********************************************************************************************/
/*
Recibe la petición y despliega la vista de casos
 */
router.get("/consultarConjuntoCasos", async (req, res, next) => {
    datos = new DatosSesion();
    if (req.query.perfilUsuario == 1) {
        res.render("sesiones/presentarConjuntoCasos", {
            nombreUsuario: req.query.nombreUsuario,
            usuarioRecuperado: await datos.recuperarDocenteCasos(req.query.nombreUsuario),
            conjuntoTiposDiagramaRecuperado: new ConjuntoTiposDiagrama()
        });
    }
});
/*
Recibe la petición de grabar un caso
 */
router.post("/grabarCaso", async (req, res, next) => {
    var datos = new DatosSesion();
    await datos.grabarCaso(
        new Caso("",req.body.nombreCaso, req.body.inicioCaso), req.body.idCurso, req.body.selTipoDiagrama, req.body.idUsuarioCaso, req.body.nombreUsuario);
    res.redirect("/main/consultarConjuntoCasos?nombreUsuario="+ req.body.nombreUsuario+"&perfilUsuario=1");
});
/*
Recibe la petición de grabar la asignación de un caso
 */
router.post("/grabarAsignacion", async (req, res, next) => {
    var datos = new DatosSesion();
    let i = 0;
    let j = 0;
    let estudiantesId = [];
    let cantidadEquipos = 0;
    let cantidadEstudiantes = 0;
    let nombreSesion = "";
    while (req.body["equipoEstudiante"+i] != undefined) {
        if (req.body["equipoEstudiante"+i] > cantidadEquipos) {
            cantidadEquipos = req.body["equipoEstudiante"+i];
        }
        i++;
    }
    cantidadEstudiantes = i;
    for (i=1; i<=cantidadEquipos; i++) {
        estudiantesId = [];
        for (j=0; j<cantidadEstudiantes; j++) {
            if (req.body["equipoEstudiante"+j] == i) {
                estudiantesId[estudiantesId.length] = req.body["idEstudiante"+j];
            }
        }
        nombreSesion = req.body.nombreSesion + " ("+i+")";
        await datos.grabarAsignacion(
            new Sesion('',nombreSesion, req.body.inicioSesion),req.body.idCaso, req.body.idCursoSesion, req.body.idGrupo, req.body.idUsuarioAsignacion, req.body.idTipoDiagramaSesion, estudiantesId);
    }
    res.redirect("/main/consultarConjuntoCasos?nombreUsuario="+ req.body.nombreUsuarioSesion+"&perfilUsuario=1");
});

/* Sesiones *****************************************************************************************/
/*
Recibe la petición y despliega la vista de sesiones
 */
router.get("/consultarConjuntoSesiones", async (req, res, next) => {
    datos = new DatosSesion();
    datosInstitucion = new DatosInstitucion();
    if (req.query.perfilUsuario == 1) {
        res.render("sesiones/presentarConjuntoSesiones", {
            nombreUsuario: req.query.nombreUsuario,
            usuarioRecuperado: await datosInstitucion.recuperarUsuarioCorreo(req.query.nombreUsuario),
            conjuntoTiposDiagramaRecuperado: new ConjuntoTiposDiagrama(),
            conjuntoSesiones: await datos.recuperarSesionesDocente(req.query.nombreUsuario)
        });
    }
    if (req.query.perfilUsuario == 2) {
        res.render("sesiones/presentarConjuntoSesiones", {
            nombreUsuario: req.query.nombreUsuario,
            usuarioRecuperado: await datosInstitucion.recuperarUsuarioCorreo(req.query.nombreUsuario),
            conjuntoTiposDiagramaRecuperado: new ConjuntoTiposDiagrama(),
            conjuntoSesiones: await datos.recuperarSesionesEstudiante(req.query.nombreUsuario)
        });
    }
});

/* Sesión *******************************************************************************************/
/*
Recibe la petición y despliega la vista de sesión
 */
router.get("/presentarSesion", async (req, res, next) => {
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    res.render("sesiones/presentarSesion", {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada
    });
});

/* Chat *********************************************************************************************/
/*
Recibe la petición y despliega la vista de chat
 */
router.get("/presentarChatSesion", async (req, res, next) => {
    datosChat = new DatosChat();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.chat = await datosChat.recuperarChatPorSesion(req.query.idSesion);
    sesionRecuperada.nombreUsuario = req.query.nombreUsuario;
    res.render("chats/presentarChat", {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada
    });
});
/*
Recibe la petición de grabación de un mensaje de chat
 */
router.post('/grabarMensajeChatSesion', async (req, res, next) => {
    var datosChat = new DatosChat();
    await datosChat.grabarMensaje(req.body.idChat,
        new Mensaje('',req.body.mensajeContenido, '', req.body.nombreUsuario));
    let chatRecuperado = await datosChat.recuperarChatPorSesion(req.body.idSesion);
    eventEmitter.emit('confirmacionMensaje', {mensaje: req.body.nombreUsuario+' emitió un nuevo mensaje en el chat', chatRecuperado: chatRecuperado.chatJson, sesion: req.body.idSesion});
    res.redirect('back');
});

/* Diagrama *****************************************************************************************/
/*
Recibe la petición y despliega la vista de diagrama
 */
router.get("/presentarDiagramaSesion", async (req, res, next) => {
    datosDiagrama = new DatosDiagrama();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.diagrama = await datosDiagrama.recuperarDiagramaPorSesion(req.query.idSesion);
    sesionRecuperada.nombreUsuario = req.query.nombreUsuario;
    res.render("diagramas/presentarDiagrama", {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada
    });
});
/*
Recibe la petición de grabación de un objeto de diagrama
 */
router.post("/grabarObjetoDiagramaSesion", async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    var datosArgumentacion = new DatosArgumentacion();
    let i = 0;
    let indice = "";
    objeto = new Objeto("", req.body.idTipoDiagrama, req.body.idTipoObjeto, "", req.body.nombreUsuarioObjeto);
    for (i=0; i<objeto.tipoObjeto.tiposPropiedad.length; i++) {
        indice = "valorPropiedadObjeto"+i;
        objeto.incluirValorPropiedad(req.body[indice]);
    }
    objeto.datoGrafico.x = req.body.xObjeto;
    objeto.datoGrafico.y = req.body.yObjeto;
    objeto.id = await datosDiagrama.grabarObjeto(req.body.idDiagrama,objeto);
    let argumentacion = new Argumentacion('',objeto.valoresPropiedades[0],"");
    argumentacion.objeto = objeto;
    await datosArgumentacion.grabarArgumentacion(argumentacion);
    let diagramaRecuperado = await datosDiagrama.recuperarDiagramaPorSesion(req.body.idSesionObjeto);
    eventEmitter.emit("confirmacionElemento", {mensaje: req.body.nombreUsuarioObjeto+" agregó un nuevo elemento en el diagrama", diagramaRecuperado: diagramaRecuperado.diagramaJson, sesion: req.body.idSesionObjeto});
    res.redirect("back");
});
/*
Recibe la petición de actualización de un objeto
 */
router.post('/actualizarObjetoDiagramaSesion', async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    objeto = new Objeto(req.body.idObjetoSeleccionado, req.body.idTipoDiagrama, req.body.idTipoObjeto, "", req.body.nombreUsuarioObjeto);
    for (i=0; i<objeto.tipoObjeto.tiposPropiedad.length; i++) {
        indice = "valorPropiedadObjeto"+i;
        objeto.incluirValorPropiedad(req.body[indice]);
    }
    await datosDiagrama.actualizarPropiedadesObjeto(objeto);
    let diagramaRecuperado = await datosDiagrama.recuperarDiagramaPorSesion(req.body.idSesionObjeto);
    eventEmitter.emit("confirmacionElemento", {mensaje: req.body.nombreUsuarioObjeto+" agregó un nuevo elemento en el diagrama", diagramaRecuperado: diagramaRecuperado.diagramaJson, sesion: req.body.idSesionObjeto});
    res.redirect("back");
});
/*
Recibe la petición de inhabilitación de un objeto de diagrama
 */
router.post('/eliminarObjetoDiagramaSesion', async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    objeto = new Objeto(req.body.idObjetoSeleccionado, req.body.idTipoDiagrama, req.body.idTipoObjeto, "", req.body.nombreUsuarioObjeto);
    for (i=0; i<objeto.tipoObjeto.tiposPropiedad.length; i++) {
        indice = "valorPropiedadObjeto"+i;
        objeto.incluirValorPropiedad(req.body[indice]);
    }
    await datosDiagrama.eliminarObjeto(objeto);
    let diagramaRecuperado = await datosDiagrama.recuperarDiagramaPorSesion(req.body.idSesionObjeto);
    eventEmitter.emit("confirmacionElemento", {mensaje: req.body.nombreUsuarioObjeto+" agregó un nuevo elemento en el diagrama", diagramaRecuperado: diagramaRecuperado.diagramaJson, sesion: req.body.idSesionObjeto});
    res.redirect("back");
});
/*
Recibe la petición de grabación de una relación de diagrama
 */
router.post("/grabarRelacionDiagramaSesion", async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    let i = 0;
    let indice = "";
    relacion = new Relacion("", req.body.idTipoDiagramaRelacion, req.body.idTipoRelacion, "", req.body.nombreUsuarioRelacion);
    for (i=0; i<relacion.tipoRelacion.tiposPropiedad.length; i++) {
        indice = "valorPropiedadRelacion"+i;
        relacion.incluirValorPropiedad(req.body[indice]);
    }
    await datosDiagrama.grabarRelacion(req.body.idDiagramaRelacion,relacion,req.body.idObjetoInicial,req.body.numeroPuertoObjetoInicial,req.body.idObjetoFinal,req.body.numeroPuertoObjetoFinal);
    let diagramaRecuperado = await datosDiagrama.recuperarDiagramaPorSesion(req.body.idSesionRelacion);
    eventEmitter.emit("confirmacionElemento", {mensaje: req.body.nombreUsuarioRelacion+" agregó un nuevo elemento en el diagrama", diagramaRecuperado: diagramaRecuperado.diagramaJson, sesion: req.body.idSesionRelacion});
    res.redirect("back");
});
/*
Recibe la petición de actualización de una relación de diagrama
 */
router.post("/actualizarRelacionDiagramaSesion", async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    relacion = new Relacion(req.body.idRelacionSeleccionada, req.body.idTipoDiagramaRelacion, req.body.idTipoRelacion, "", req.body.nombreUsuarioRelacion);
    for (i=0; i<relacion.tipoRelacion.tiposPropiedad.length; i++) {
        indice = "valorPropiedadRelacion"+i;
        relacion.incluirValorPropiedad(req.body[indice]);
    }
    relacion.numeroPuertoObjetoInicial = req.body.numeroPuertoObjetoInicial;
    relacion.numeroPuertoObjetoFinal = req.body.numeroPuertoObjetoFinal;
    await datosDiagrama.actualizarPropiedadesRelacion(relacion);
    let diagramaRecuperado = await datosDiagrama.recuperarDiagramaPorSesion(req.body.idSesionRelacion);
    eventEmitter.emit("confirmacionElemento", {mensaje: req.body.nombreUsuarioRelacion+" agregó un nuevo elemento en el diagrama", diagramaRecuperado: diagramaRecuperado.diagramaJson, sesion: req.body.idSesionRelacion});
    res.redirect("back");
});
/*
Recibe la petición de inhabilitación de una relación de diagrama
 */
router.post('/eliminarRelacionDiagramaSesion', async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    relacion = new Relacion(req.body.idRelacionSeleccionada, req.body.idTipoDiagramaRelacion, req.body.idTipoRelacion, "", req.body.nombreUsuarioRelacion);
    for (i=0; i<relacion.tipoRelacion.tiposPropiedad.length; i++) {
        indice = "valorPropiedadRelacion"+i;
        relacion.incluirValorPropiedad(req.body[indice]);
    }
    await datosDiagrama.eliminarRelacion(relacion);
    let diagramaRecuperado = await datosDiagrama.recuperarDiagramaPorSesion(req.body.idSesionRelacion);
    eventEmitter.emit("confirmacionElemento", {mensaje: req.body.nombreUsuarioRelacion+" agregó un nuevo elemento en el diagrama", diagramaRecuperado: diagramaRecuperado.diagramaJson, sesion: req.body.idSesionRelacion});
    res.redirect("back");
});
/*
Recibe la petición de grabación de un cambio en el diagrama
 */
router.post("/grabarEdicionDiagramaSesion", async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    let i = 0;
    let indice = "";
    let cadenaDiagrama = req.body.diagramaJson.replace(/&quot;/g, "'");
    cadenaDiagrama = cadenaDiagrama.replace(/'/g, '"');
    let pDiagrama = JSON.parse(cadenaDiagrama);
    for (i=0; i<pDiagrama._objetos.length; i++) {
        if (pDiagrama._objetos[i]._tiempo == 0) {
            await datosDiagrama.actualizarObjeto(pDiagrama._objetos[i]._id, pDiagrama._objetos[i]._datoGrafico._x, pDiagrama._objetos[i]._datoGrafico._y);
        }
    }
    let diagramaRecuperado = await datosDiagrama.recuperarDiagramaPorSesion(req.body.idSesionEdicion);
    eventEmitter.emit("confirmacionElemento", {mensaje: req.body.nombreUsuarioEdicion+" editó el diagrama", diagramaRecuperado: diagramaRecuperado.diagramaJson, sesion: req.body.idSesionEdicion});
    res.redirect("back");
});

/* Argumentación ************************************************************************************/
/*
Recibe la petición y despliega la vista de argumentación
 */
router.get("/presentarArgumentacionSesion", async (req, res, next) => {
    datosArgumentacion = new DatosArgumentacion();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.nombreUsuario = req.query.nombreUsuario;
    argumentacionRecuperada = await datosArgumentacion.recuperarArgumentacionPorObjeto(req.query.idObjeto);
    argumentacionRecuperada.ordenar();
    res.render("argumentaciones/presentarArgumentacion", {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada,
        argumentacion: argumentacionRecuperada,
        idObjeto: req.query.idObjeto
    });
});
/*
Recibe la petición de grabación de un aporte de argumentación
 */
router.post("/grabarAporteSesion", async (req, res, next) => {
    var datosArgumentacion = new DatosArgumentacion();
    await datosArgumentacion.grabarAporte(req.body.idArgumentacion,req.body.idAportePredecesor,
        new Aporte("",req.body.idTipoAporte,req.body.aporteContenido, "", req.body.nombreUsuario));
    let argumentacionRecuperada = await datosArgumentacion.recuperarArgumentacionPorObjeto(req.body.idObjeto);
    argumentacionRecuperada.ordenar();
    eventEmitter.emit("confirmacionAporte", {mensaje: req.body.nombreUsuario+" agregó un nuevo aporte en la argumentación "+argumentacionRecuperada.nombre, argumentacionRecuperada: argumentacionRecuperada.argumentacionJson, sesion: req.body.idSesion});
    res.redirect("back");
});

/****************************************************************************************************/
/* Remanentes de prototipado cero, pendientes de eliminación ****************************************/
/****************************************************************************************************/
router.post('/actualizarGrupo', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.actualizarGrupo(
        new Grupo(req.body.id,req.body.grupoIdentificacion,req.body.grupoNombre));
    res.redirect('/main/presentarGrupo?id='+ req.body.id+'&nombreUsuario='+ req.body.nombreUsuario);
});
router.post('/eliminarGrupo/confirmar', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.eliminarGrupo(req.body.id);
    res.redirect('/main/consultarConjuntoInstituciones?nombreUsuario='+req.body.nombreUsuario);
});
router.post('/actualizarSesion', async (req, res, next) => {
    var datos = new DatosSesion();
    await datos.actualizarSesion(
        new Sesion(req.body.id, req.body.nombre, req.body.inicio));
    res.redirect('/main/presentarSesion?id='+ req.body.id + '&nombreUsuario=' + req.body.nombreUsuario);
});
router.post('/eliminarSesion/confirmar', async (req, res, next) => {
    var datos = new DatosSesion();
    await datos.eliminarSesion(req.body.id);
    res.redirect('/main/consultarConjuntoSesiones?nombreUsuario='+ req.body.nombreUsuario);
});
/****************************************************************************************************/
/* Fin de remanentes de prototipado cero, pendientes de eliminación *********************************/
/****************************************************************************************************/

module.exports = router;