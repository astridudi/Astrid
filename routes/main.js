const util = require('util');
const express = require('express');
const eventEmitter = require('../models/Emitter');

const router = express.Router();
const Institucion = require('../models/instituciones/Institucion');
const Programa = require('../models/instituciones/Programa');
const Curso = require('../models/instituciones/Curso');
const Grupo = require('../models/instituciones/Grupo');
const Docente = require('../models/instituciones/Docente');
const Estudiante = require('../models/instituciones/Estudiante');
const DatosInstitucion = require('../models/instituciones/DatosInstitucion');
const Sesion = require('../models/sesiones/Sesion');
const Caso = require('../models/sesiones/Caso');
const DatosSesion = require('../models/sesiones/DatosSesion');
const Chat = require('../models/chats/Chat');
const Mensaje = require('../models/chats/Mensaje');
const DatosChat = require('../models/chats/DatosChat');
const ConjuntoTiposDiagrama = require('../models/diagramas/ConjuntoTiposDiagrama');
const Diagrama = require('../models/diagramas/Diagrama');
const Objeto = require('../models/diagramas/Objeto');
const Relacion = require('../models/diagramas/Relacion');
const DatosDiagrama = require('../models/diagramas/DatosDiagrama');
const Argumentacion = require('../models/argumentaciones/Argumentacion');
const Aporte = require('../models/argumentaciones/Aporte');
const DatosArgumentacion = require('../models/argumentaciones/DatosArgumentacion');

/*
Recibe la petición de ingreso y despliega la vista para capturar los datos de ingreso del usuario
 */
router.get('/ingresar', async (req, res, next) => {
    res.render('capturarIngreso', {
    });
});
/*
Recibe la petición y despliega la vista de instituciones
 */
router.get('/consultarConjuntoInstituciones', async (req, res, next) => {
    datos = new DatosInstitucion();
    res.render('instituciones/presentarConjuntoInstituciones', {
        nombreUsuario: req.query.nombreUsuario,
        conjuntoInstituciones: await datos.recuperarConjuntoInstituciones()
    });
});
/*
Recibe la petición de grabación de una institución
 */
router.post('/grabarInstitucion', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarInstitucion(
        new Institucion('',req.body.identificacionInstitucion,req.body.siglaInstitucion,req.body.nombreInstitucion));
    res.redirect('/main/consultarConjuntoInstituciones?nombreUsuario='+req.body.nombreUsuario);
});
/*
Recibe la petición de grabación de un programa
 */
router.post('/grabarPrograma', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarPrograma(req.body.idInstitucion,
        new Programa('',req.body.identificacionPrograma,req.body.nombrePrograma));
    res.redirect('/main/presentarInstitucion?id='+ req.body.idInstitucion +'&nombreUsuario='+ req.body.nombreUsuario);
});
/*
Recibe la petición de grabación de un curso
 */
router.post('/grabarCurso', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarCurso(req.body.idPrograma,
        new Curso('',req.body.identificacionCurso,req.body.nombreCurso));
    res.redirect('/main/presentarPrograma?id='+ req.body.idPrograma+'&nombreUsuario='+ req.body.nombreUsuario);
});
/*
Recibe la petición de grabación de un grupo
 */
router.post('/grabarGrupo', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarGrupo(req.body.idCurso,
        new Grupo('',req.body.identificacionGrupo,req.body.nombreGrupo));
    res.redirect('/main/presentarCurso?id='+ req.body.idCurso+'&nombreUsuario='+ req.body.nombreUsuario);
});
/*
Recibe la petición de grabación de un docente
 */
router.post('/grabarDocente', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarDocente(req.body.idPrograma,
        new Docente('',req.body.identificacionDocente,req.body.nombresDocente,req.body.apellidosDocente,req.body.correoElectronicoDocente,
            false,false,false,true,false));
    res.redirect('/main/presentarPrograma?id='+ req.body.idPrograma+'&nombreUsuario='+ req.body.nombreUsuario);
});
/*
Recibe la petición de grabación de un estudiante
 */
router.post('/grabarEstudiante', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarEstudiante(req.body.idPrograma,
        new Estudiante('',req.body.identificacionEstudiante,req.body.nombresEstudiante,req.body.apellidosEstudiante,req.body.correoElectronicoEstudiante,
            false,false,false,false,true));
    res.redirect('/main/presentarPrograma?id='+ req.body.idPrograma+'&nombreUsuario='+ req.body.nombreUsuario);
});
/*
Recibe la petición de vinculación de un docente a un grupo
 */
router.post('/grabarVinculoDocente', async (req, res, next) => {
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
    res.redirect('/main/presentarGrupo?id='+ req.body.idGrupoDocente+'&nombreUsuario='+ req.body.nombreUsuario);
});
/*
Recibe la petición de vinculación de un docente a un grupo
 */
router.post('/grabarVinculoEstudiante', async (req, res, next) => {
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
    res.redirect('/main/presentarGrupo?id='+ req.body.idGrupoEstudiante+'&nombreUsuario='+ req.body.nombreUsuario);
});
/*
Recibe la petición de grabar un caso
 */
router.post('/grabarCaso', async (req, res, next) => {
    var datos = new DatosSesion();
    await datos.grabarCaso(
        new Caso('',req.body.nombreCaso, req.body.inicioCaso), req.body.idCurso, req.body.selTipoDiagrama, req.body.idUsuarioCaso);
    res.redirect('/main/consultarConjuntoSesiones?nombreUsuario='+ req.body.nombreUsuario+'&perfilUsuario=1');
});
/*
Recibe la petición de grabar un caso
 */
router.post('/grabarAsignacion', async (req, res, next) => {
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
    res.redirect('/main/consultarConjuntoSesiones?nombreUsuario='+ req.body.nombreUsuarioSesion+'&perfilUsuario=1');
});
/*
Recibe la petición y despliega la vista de sesiones
 */
router.get('/consultarConjuntoSesiones', async (req, res, next) => {
    datos = new DatosSesion();
    datosInstitucion = new DatosInstitucion();
    if (req.query.perfilUsuario == 1) {
        res.render('sesiones/presentarConjuntoSesiones', {
            nombreUsuario: req.query.nombreUsuario,
            usuarioRecuperado: await datosInstitucion.recuperarUsuarioCorreo(req.query.nombreUsuario),
            conjuntoTiposDiagramaRecuperado: new ConjuntoTiposDiagrama(),
            conjuntoSesiones: await datos.recuperarSesionesDocente(req.query.nombreUsuario)
        });
    }
    if (req.query.perfilUsuario == 2) {
        res.render('sesiones/presentarConjuntoSesiones', {
            nombreUsuario: req.query.nombreUsuario,
            usuarioRecuperado: await datosInstitucion.recuperarUsuarioCorreo(req.query.nombreUsuario),
            conjuntoTiposDiagramaRecuperado: new ConjuntoTiposDiagrama(),
            conjuntoSesiones: await datos.recuperarSesionesEstudiante(req.query.nombreUsuario)
        });
    }
});
/*
Recibe la petición y despliega la vista de casoss
 */
router.get('/consultarConjuntoCasos', async (req, res, next) => {
    datos = new DatosSesion();
    if (req.query.perfilUsuario == 1) {
        res.render('sesiones/presentarConjuntoCasos', {
            nombreUsuario: req.query.nombreUsuario,
            usuarioRecuperado: await datos.recuperarDocenteCasos(req.query.nombreUsuario),
            conjuntoTiposDiagramaRecuperado: new ConjuntoTiposDiagrama(),
            conjuntoSesiones: await datos.recuperarConjuntoSesiones()
        });
    }
});
/*
Recibe la petición y despliega la vista de sesión
 */
router.get('/presentarSesion', async (req, res, next) => {
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    res.render('sesiones/presentarSesion', {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada
    });
});
/*
Recibe la petición y despliega la vista de chat
 */
router.get('/presentarChatSesion', async (req, res, next) => {
    datosChat = new DatosChat();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.chat = await datosChat.recuperarChatPorSesion(req.query.idSesion);
    sesionRecuperada.nombreUsuario = req.query.nombreUsuario;
    res.render('chats/presentarChat', {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada
    });
});
/*
Recibe la petición y despliega la vista de diagrama
 */
router.get('/presentarDiagramaSesion', async (req, res, next) => {
    datosDiagrama = new DatosDiagrama();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.diagrama = await datosDiagrama.recuperarDiagramaPorSesion(req.query.idSesion);
    sesionRecuperada.nombreUsuario = req.query.nombreUsuario;
    res.render('diagramas/presentarDiagrama', {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada
    });
});

router.get('/registrarInstitucion', async (req, res, next) => {
    datos = new DatosInstitucion();
    res.render('instituciones/capturarinstitucion', {
        nombreUsuario: req.query.nombreUsuario,
        conjuntoInstituciones: await datos.recuperarConjuntoInstituciones(),
        institucion: undefined
    });
});
router.get('/presentarInstitucion', async (req, res, next) => {
    datos = new DatosInstitucion();
    institucionRecuperada = await datos.recuperarInstitucion(req.query.id);
    res.render('instituciones/presentarInstitucion', {
        nombreUsuario: req.query.nombreUsuario,
        institucion: institucionRecuperada
    });
});
router.get('/editarInstitucion', async (req, res, next) => {
    datos = new DatosInstitucion();
    institucionRecuperada = await datos.recuperarInstitucion(req.query.id);
    res.render('instituciones/editarInstitucion', {
        nombreUsuario: req.query.nombreUsuario,
        institucion: institucionRecuperada
    });
});
router.get('/eliminarInstitucion', async (req, res, next) => {
    datos = new DatosInstitucion();
    institucionRecuperada = await datos.recuperarInstitucion(req.query.id);
    res.render('instituciones/eliminarInstitucion', {
        nombreUsuario: req.query.nombreUsuario,
        institucion: institucionRecuperada
    });
});
router.get('/registrarPrograma', async (req, res, next) => {
    datos = new DatosInstitucion();
    institucionRecuperada = await datos.recuperarInstitucion(req.query.id);
    res.render('instituciones/capturarPrograma', {
        nombreUsuario: req.query.nombreUsuario,
        institucion: institucionRecuperada
    });
});
router.get('/presentarPrograma', async (req, res, next) => {
    datos = new DatosInstitucion();
    programaRecuperado = await datos.recuperarPrograma(req.query.id);
    res.render('instituciones/presentarPrograma', {
        nombreUsuario: req.query.nombreUsuario,
        programa: programaRecuperado
    });
});
router.get('/editarPrograma', async (req, res, next) => {
    datos = new DatosInstitucion();
    programaRecuperado = await datos.recuperarPrograma(req.query.id);
    res.render('instituciones/editarPrograma', {
        nombreUsuario: req.query.nombreUsuario,
        programa: programaRecuperado
    });
});
router.get('/eliminarPrograma', async (req, res, next) => {
    datos = new DatosInstitucion();
    programaRecuperado = await datos.recuperarPrograma(req.query.id);
    res.render('instituciones/eliminarPrograma', {
        nombreUsuario: req.query.nombreUsuario,
        programa: programaRecuperado
    });
});
router.get('/registrarCurso', async (req, res, next) => {
    datos = new DatosInstitucion();
    programaRecuperado = await datos.recuperarPrograma(req.query.id);
    res.render('instituciones/capturarCurso', {
        nombreUsuario: req.query.nombreUsuario,
        programa: programaRecuperado
    });
});
router.get('/presentarCurso', async (req, res, next) => {
    datos = new DatosInstitucion();
    cursoRecuperado = await datos.recuperarCurso(req.query.id);
    res.render('instituciones/presentarCurso', {
        nombreUsuario: req.query.nombreUsuario,
        curso: cursoRecuperado
    });
});
router.get('/editarCurso', async (req, res, next) => {
    datos = new DatosInstitucion();
    cursoRecuperado = await datos.recuperarCurso(req.query.id);
    res.render('instituciones/editarCurso', {
        nombreUsuario: req.query.nombreUsuario,
        curso: cursoRecuperado
    });
});
router.get('/eliminarCurso', async (req, res, next) => {
    datos = new DatosInstitucion();
    cursoRecuperado = await datos.recuperarCurso(req.query.id);
    res.render('instituciones/eliminarCurso', {
        nombreUsuario: req.query.nombreUsuario,
        curso: cursoRecuperado
    });
});
router.get('/registrarGrupo', async (req, res, next) => {
    datos = new DatosInstitucion();
    cursoRecuperado = await datos.recuperarCurso(req.query.id);
    res.render('instituciones/capturarGrupo', {
        nombreUsuario: req.query.nombreUsuario,
        curso: cursoRecuperado
    });
});
router.get('/presentarGrupo', async (req, res, next) => {
    datos = new DatosInstitucion();
    grupoRecuperado = await datos.recuperarGrupo(req.query.id);
    res.render('instituciones/presentarGrupo', {
        nombreUsuario: req.query.nombreUsuario,
        grupo: grupoRecuperado
    });
});
router.get('/editarGrupo', async (req, res, next) => {
    datos = new DatosInstitucion();
    grupoRecuperado = await datos.recuperarGrupo(req.query.id);
    res.render('instituciones/editarGrupo', {
        nombreUsuario: req.query.nombreUsuario,
        grupo: grupoRecuperado
    });
});
router.get('/eliminarGrupo', async (req, res, next) => {
    datos = new DatosInstitucion();
    grupoRecuperado = await datos.recuperarGrupo(req.query.id);
    res.render('instituciones/eliminarGrupo', {
        nombreUsuario: req.query.nombreUsuario,
        grupo: grupoRecuperado
    });
});
router.get('/vincularDocente', async (req, res, next) => {
    datos = new DatosInstitucion();
    grupoRecuperado = await datos.recuperarGrupo(req.query.id);
    res.render('instituciones/capturarIdentificacionDocente', {
        nombreUsuario: req.query.nombreUsuario,
        grupo: grupoRecuperado
    });
});
router.get('/vincularEstudiante', async (req, res, next) => {
    datos = new DatosInstitucion();
    grupoRecuperado = await datos.recuperarGrupo(req.query.id);
    res.render('instituciones/capturarIdentificacionEstudiante', {
        nombreUsuario: req.query.nombreUsuario,
        grupo: grupoRecuperado
    });
});
router.post('/actualizarInstitucion', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.actualizarInstitucion(
        new Institucion(req.body.id,req.body.identificacion,req.body.sigla,req.body.nombre));
    res.redirect('/main/presentarInstitucion?id='+ req.body.id +'&nombreUsuario='+ req.body.nombreUsuario);
});
router.post('/eliminarInstitucion/confirmar', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.eliminarInstitucion(req.body.id);
    res.redirect('/main/consultarConjuntoInstituciones?nombreUsuario='+req.body.nombreUsuario);
});
router.post('/actualizarPrograma', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.actualizarPrograma(
        new Programa(req.body.id,req.body.programaIdentificacion,req.body.programaNombre));
    res.redirect('/main/presentarPrograma?id='+ req.body.id +'&nombreUsuario='+ req.body.nombreUsuario);
});
router.post('/eliminarPrograma/confirmar', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.eliminarPrograma(req.body.id);
    res.redirect('/main/consultarConjuntoInstituciones?nombreUsuario='+req.body.nombreUsuario);
});
router.post('/actualizarCurso', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.actualizarCurso(
        new Curso(req.body.id,req.body.cursoIdentificacion,req.body.cursoNombre));
    res.redirect('/main/presentarCurso?id='+ req.body.id+'&nombreUsuario='+ req.body.nombreUsuario);
});
router.post('/eliminarCurso/confirmar', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.eliminarCurso(req.body.id);
    res.redirect('/main/consultarConjuntoInstituciones?nombreUsuario='+req.body.nombreUsuario);
});
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
router.get('/registrarSesion', async (req, res, next) => {
    datos = new DatosSesion();
    res.render('sesiones/capturarSesion', {
        nombreUsuario: req.query.nombreUsuario,
        conjuntoSesiones: await datos.recuperarConjuntoSesiones(),
        conjuntoTiposDiagrama: new ConjuntoTiposDiagrama(),
        sesion: undefined
    });
});
router.get('/editarSesion', async (req, res, next) => {
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.id);
    res.render('sesiones/editarSesion', {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada
    });
});
router.get('/eliminarSesion', async (req, res, next) => {
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.id);
    res.render('sesiones/eliminarSesion', {
        nombreUsuario: req.query.nombreUsuario,
        sesion: await datos.recuperarSesion(req.query.id)
    });
});
router.post('/grabarSesion', async (req, res, next) => {
    var datos = new DatosSesion();
    await datos.grabarSesion(
        new Sesion('',req.body.nombre, req.body.inicio), req.body.tipoDiagrama);
    res.redirect('/main/consultarConjuntoSesiones?nombreUsuario='+ req.body.nombreUsuario);
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
router.post('/grabarMensajeChatSesion', async (req, res, next) => {
    var datosChat = new DatosChat();
    await datosChat.grabarMensaje(req.body.id,
        new Mensaje('',req.body.mensajeContenido, req.body.mensajeTiempo, req.body.nombreUsuario));
    let chatRecuperado = await datosChat.recuperarChatPorSesion(req.body.idSesion);
    eventEmitter.emit('confirmacionMensaje', {mensaje: req.body.nombreUsuario+' emitió un nuevo mensaje en el chat', chatRecuperado: chatRecuperado.chatJson, sesion: req.body.idSesion});
    res.redirect('back');
});
router.post('/grabarObjetoDiagramaSesion', async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    var datosArgumentacion = new DatosArgumentacion();
    let i = 0;
    let indice = '';
    objeto = new Objeto('', req.body.tipoDiagrama, req.body.tipoObjeto, req.body.objetoTiempo, req.body.nombreUsuario);
    for (i=0; i<objeto.tipoObjeto.tiposPropiedad.length; i++) {
        indice = 'valorPropiedadObjeto'+i;
        objeto.incluirValorPropiedad(req.body[indice]);
    }
    objeto.datoGrafico.x = req.body.xObjeto;
    objeto.datoGrafico.y = req.body.yObjeto;
    objeto.id = await datosDiagrama.grabarObjeto(req.body.id,objeto);
    let argumentacion = new Argumentacion('',objeto.valoresPropiedades[0],'');
    argumentacion.objeto = objeto;
    await datosArgumentacion.grabarArgumentacion(argumentacion);
    let diagramaRecuperado = await datosDiagrama.recuperarDiagramaPorSesion(req.body.idSesion);
    eventEmitter.emit('confirmacionElemento', {mensaje: req.body.nombreUsuario+' agregó un nuevo elemento en el diagrama', diagramaRecuperado: diagramaRecuperado.diagramaJson, sesion: req.body.idSesion});
    res.redirect('back');
});
router.post('/grabarRelacionDiagramaSesion', async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    let i = 0;
    let indice = '';
    relacion = new Relacion('', req.body.tipoDiagrama, req.body.tipoRelacion, req.body.relacionTiempo, req.body.nombreUsuario);
    for (i=0; i<relacion.tipoRelacion.tiposPropiedad.length; i++) {
        indice = 'valorPropiedadRelacion'+i;
        relacion.incluirValorPropiedad(req.body[indice]);
    }
    await datosDiagrama.grabarRelacion(req.body.id,relacion,req.body.idObjetoInicial,req.body.numeroPuertoObjetoInicial,req.body.idObjetoFinal,req.body.numeroPuertoObjetoFinal);
    let diagramaRecuperado = await datosDiagrama.recuperarDiagramaPorSesion(req.body.idSesion);
    eventEmitter.emit('confirmacionElemento', {mensaje: req.body.nombreUsuario+' agregó un nuevo elemento en el diagrama', diagramaRecuperado: diagramaRecuperado.diagramaJson, sesion: req.body.idSesion});
    res.redirect('back');
});
router.post('/grabarEdicionDiagramaSesion', async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    let i = 0;
    let indice = '';
    let cadenaDiagrama = req.body.diagramaJson.replace(/&quot;/g, "'");
    cadenaDiagrama = cadenaDiagrama.replace(/'/g, '"');
    let pDiagrama = JSON.parse(cadenaDiagrama);
    for (i=0; i<pDiagrama._objetos.length; i++) {
        if (pDiagrama._objetos[i]._tiempo == 0) {
            await datosDiagrama.actualizarObjeto(pDiagrama._objetos[i]._id, pDiagrama._objetos[i]._datoGrafico._x, pDiagrama._objetos[i]._datoGrafico._y);
        }
    }
    let diagramaRecuperado = await datosDiagrama.recuperarDiagramaPorSesion(req.body.idSesion);
    eventEmitter.emit('confirmacionElemento', {mensaje: req.body.nombreUsuario+' editó el diagrama', diagramaRecuperado: diagramaRecuperado.diagramaJson, sesion: req.body.idSesion});
    res.redirect('back');
});
router.get('/presentarArgumentacionSesion', async (req, res, next) => {
    datosArgumentacion = new DatosArgumentacion();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.nombreUsuario = req.query.nombreUsuario;
    argumentacionRecuperada = await datosArgumentacion.recuperarArgumentacionPorObjeto(req.query.idObjeto);
    argumentacionRecuperada.ordenar();
    res.render('argumentaciones/presentarArgumentacion', {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada,
        argumentacion: argumentacionRecuperada,
        idObjeto: req.query.idObjeto
    });
});
router.post('/grabarAporteSesion', async (req, res, next) => {
    var datosArgumentacion = new DatosArgumentacion();
    await datosArgumentacion.grabarAporte(req.body.id,req.body.aportePredecesorId,
        new Aporte('',req.body.aporteTipoId,req.body.aporteContenido, req.body.aporteTiempo, req.body.nombreUsuario));
    let argumentacionRecuperada = await datosArgumentacion.recuperarArgumentacionPorObjeto(req.body.idObjeto);
    argumentacionRecuperada.ordenar();
    eventEmitter.emit('confirmacionAporte', {mensaje: req.body.nombreUsuario+' agregó un nuevo aporte en la argumentación '+argumentacionRecuperada.nombre, argumentacionRecuperada: argumentacionRecuperada.argumentacionJson, sesion: req.body.idSesion});
    res.redirect('back');
});

/*
Recibe los datos de ingreso del usuario y lo redirige a index
 */
router.post('/permitirIngreso', async (req, res, next) => {
    var datos = new DatosInstitucion();
    if (req.body.nombreUsuario == "astrid@udi.edu.co") {
        res.redirect('/?nombreUsuario='+ req.body.nombreUsuario +'&perfilUsuario=0');
    }
    else {
        var usuario = await datos.recuperarUsuarioCorreo(req.body.nombreUsuario);
        if (usuario._habilitadoDocente) {
            res.redirect('/?nombreUsuario='+ req.body.nombreUsuario +'&perfilUsuario=1');
        }
        else {
            if (usuario._habilitadoEstudiante) {
                res.redirect('/?nombreUsuario='+ req.body.nombreUsuario +'&perfilUsuario=2');
            }
            else {
                res.redirect('back');
            }
        }
    }
});

module.exports = router;