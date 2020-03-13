const util = require('util');
const express = require('express');
const router = express.Router();
const Institucion = require('../models/instituciones/Institucion');
const Programa = require('../models/instituciones/Programa');
const Curso = require('../models/instituciones/Curso');
const Grupo = require('../models/instituciones/Grupo');
const Docente = require('../models/instituciones/Docente');
const Estudiante = require('../models/instituciones/Estudiante');
const DatosInstitucion = require('../models/instituciones/DatosInstitucion');
const Sesion = require('../models/sesiones/Sesion');
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

router.get('/ingresar', async (req, res, next) => {
    res.render('capturarIngreso', {
    });
});
router.get('/consultarConjuntoInstituciones', async (req, res, next) => {
    datos = new DatosInstitucion();
    res.render('instituciones/presentarConjuntoInstituciones', {
        nombreUsuario: req.query.nombreUsuario,
        conjuntoInstituciones: await datos.recuperarConjuntoInstituciones()
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
router.post('/grabarInstitucion', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarInstitucion(
        new Institucion('',req.body.identificacion,req.body.sigla,req.body.nombre));
    res.redirect('/main/consultarConjuntoInstituciones?nombreUsuario='+req.body.nombreUsuario);
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
router.post('/grabarPrograma', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarPrograma(req.body.id,
        new Programa('',req.body.programaIdentificacion,req.body.programaNombre));
    res.redirect('/main/presentarInstitucion?id='+ req.body.id +'&nombreUsuario='+ req.body.nombreUsuario);
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
router.post('/grabarCurso', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarCurso(req.body.id,
        new Curso('',req.body.cursoIdentificacion,req.body.cursoNombre));
    res.redirect('/main/presentarPrograma?id='+ req.body.id+'&nombreUsuario='+ req.body.nombreUsuario);
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
router.post('/grabarGrupo', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarGrupo(req.body.id,
        new Grupo('',req.body.grupoIdentificacion,req.body.grupoNombre));
    res.redirect('/main/presentarCurso?id='+ req.body.id+'&nombreUsuario='+ req.body.nombreUsuario);
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
router.post('/grabarDocente', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarDocente(req.body.cursoIdentificacion,req.body.grupoIdentificacion,
        new Docente('',req.body.docenteIdentificacion,req.body.docenteNombres,req.body.docenteApellidos,req.body.docenteCorreoElectronico,
            false,false,false,true,false));
    res.redirect('/main/presentarGrupo?id='+ req.body.grupoIdentificacion+'&nombreUsuario='+ req.body.nombreUsuario);
});
router.post('/grabarEstudiante', async (req, res, next) => {
    var datos = new DatosInstitucion();
    await datos.grabarEstudiante(req.body.grupoIdentificacion,
        new Estudiante('',req.body.estudianteIdentificacion,req.body.estudianteNombres,req.body.estudianteApellidos,req.body.estudianteCorreoElectronico,
            false,false,false,false,true));
    res.redirect('/main/presentarGrupo?id='+ req.body.grupoIdentificacion+'&nombreUsuario='+ req.body.nombreUsuario);
});
router.post('/grabarVinculoDocente', async (req, res, next) => {
    var datos = new DatosInstitucion();
    var grupoDocenteExiste = await datos.verificarGrupoDocente(req.body.grupoIdentificacion,req.body.docenteIdentificacion);
    if (grupoDocenteExiste) {
        res.redirect('/main/presentarGrupo?id='+ req.body.grupoIdentificacion+'&nombreUsuario='+ req.body.nombreUsuario);
    }
    else {
        var usuarioExiste = await datos.verificarUsuario(req.body.docenteIdentificacion);
        if (usuarioExiste) {
            docenteRecuperado = await datos.recuperarUsuario(req.body.docenteIdentificacion);
            grupoRecuperado = await datos.recuperarGrupo(req.body.grupoIdentificacion);
            datos.actualizarVinculoDocente(grupoRecuperado,docenteRecuperado);
            res.redirect('/main/presentarGrupo?id='+ req.body.grupoIdentificacion+'&nombreUsuario='+ req.body.nombreUsuario);
        }
        else {
            grupoRecuperado = await datos.recuperarGrupo(req.body.grupoIdentificacion);
            res.render('instituciones/capturarDocente', {
                nombreUsuario: req.body.nombreUsuario,
                grupo: grupoRecuperado,
                docenteIdentificacion: req.body.docenteIdentificacion
            });
        }
    }
});
router.post('/grabarVinculoEstudiante', async (req, res, next) => {
    var datos = new DatosInstitucion();
    var grupoEstudianteExiste = await datos.verificarGrupoEstudiante(req.body.grupoIdentificacion,req.body.estudianteIdentificacion);
    if (grupoEstudianteExiste) {
        res.redirect('/main/presentarGrupo?id='+ req.body.grupoIdentificacion+'&nombreUsuario='+ req.body.nombreUsuario);
    }
    else {
        var usuarioExiste = await datos.verificarUsuario(req.body.estudianteIdentificacion);
        if (usuarioExiste) {
            estudianteRecuperado = await datos.recuperarUsuario(req.body.estudianteIdentificacion);
            grupoRecuperado = await datos.recuperarGrupo(req.body.grupoIdentificacion);
            datos.actualizarVinculoEstudiante(grupoRecuperado,estudianteRecuperado);
            res.redirect('/main/presentarGrupo?id='+ req.body.grupoIdentificacion+'&nombreUsuario='+ req.body.nombreUsuario);
        }
        else {
            grupoRecuperado = await datos.recuperarGrupo(req.body.grupoIdentificacion);
            res.render('instituciones/capturarEstudiante', {
                nombreUsuario: req.body.nombreUsuario,
                grupo: grupoRecuperado,
                estudianteIdentificacion: req.body.estudianteIdentificacion
            });
        }
    }
});
router.get('/consultarConjuntoSesiones', async (req, res, next) => {
    datos = new DatosSesion();
    res.render('sesiones/presentarConjuntoSesiones', {
        nombreUsuario: req.query.nombreUsuario,
        conjuntoSesiones: await datos.recuperarConjuntoSesiones()
    });
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
router.get('/presentarSesion', async (req, res, next) => {
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.id);
    res.render('sesiones/presentarSesion', {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada
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
router.get('/registrarMensajeChatSesion', async (req, res, next) => {
    datosChat = new DatosChat();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.chat = await datosChat.recuperarChatPorSesion(req.query.idSesion);
    sesionRecuperada.nombreUsuario = req.query.nombreUsuario;
    res.render('chats/capturarMensaje', {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada
    });
});
router.post('/grabarMensajeChatSesion', async (req, res, next) => {
    var datosChat = new DatosChat();
    await datosChat.grabarMensaje(req.body.id,
        new Mensaje('',req.body.mensajeContenido, req.body.mensajeTiempo, req.body.nombreUsuario));
    res.redirect('/main/presentarChatSesion?idSesion='+ req.body.idSesion + '&nombreUsuario=' + req.body.nombreUsuario);
});
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
router.get('/registrarObjetoDiagramaSesion', async (req, res, next) => {
    datosDiagrama = new DatosDiagrama();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.diagrama = await datosDiagrama.recuperarDiagramaPorSesion(req.query.idSesion);
    sesionRecuperada.nombreUsuario = req.query.nombreUsuario;
    res.render('diagramas/capturarObjeto', {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada,
        objeto: new Objeto('',sesionRecuperada.diagrama.tipoDiagrama.id,req.query.objetoTipoId,'')
    });
});
router.post('/grabarObjetoDiagramaSesion', async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    let i = 0;
    let indice = '';
    objeto = new Objeto('', req.body.tipoDiagrama, req.body.tipoObjeto, req.body.aporteTiempo);
    for (i=0; i<objeto.tipoObjeto.tiposPropiedad.length; i++) {
        indice = 'valor'+objeto.tipoObjeto.tiposPropiedad[i].nombre;
        objeto.incluirValorPropiedad(req.body[indice]);
    }
    await datosDiagrama.grabarObjeto(req.body.id,objeto);
    res.redirect('/main/presentarDiagramaSesion?idSesion='+ req.body.idSesion+ '&nombreUsuario=' + req.body.nombreUsuario);
});
router.get('/registrarRelacionDiagramaSesion', async (req, res, next) => {
    datosDiagrama = new DatosDiagrama();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.diagrama = await datosDiagrama.recuperarDiagramaPorSesion(req.query.idSesion);
    relacionNueva = new Relacion('',sesionRecuperada.diagrama.tipoDiagrama.id,req.query.relacionTipoId,'');
    relacionNueva.diagrama = sesionRecuperada.diagrama;
    res.render('diagramas/capturarRelacion', {
        nombreUsuario: req.query.nombreUsuario,
        sesion: sesionRecuperada,
        relacion: relacionNueva
    });
});
router.post('/grabarRelacionDiagramaSesion', async (req, res, next) => {
    var datosDiagrama = new DatosDiagrama();
    let i = 0;
    let indice = '';
    relacion = new Relacion('', req.body.tipoDiagrama, req.body.tipoRelacion, req.body.aporteTiempo);
    for (i=0; i<relacion.tipoRelacion.tiposPropiedad.length; i++) {
        indice = 'valor'+relacion.tipoRelacion.tiposPropiedad[i].nombre;
        relacion.incluirValorPropiedad(req.body[indice]);
    }
    await datosDiagrama.grabarRelacion(req.body.id,relacion,req.body.objetoInicial,req.body.objetoFinal);
    res.redirect('/main/presentarDiagramaSesion?idSesion='+ req.body.idSesion+ '&nombreUsuario=' + req.body.nombreUsuario);
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
router.get('/registrarAporteSesion', async (req, res, next) => {
    datosArgumentacion = new DatosArgumentacion();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    argumentacionRecuperada = await datosArgumentacion.recuperarArgumentacionPorObjeto(req.query.idObjeto);
    argumentacionRecuperada.ordenar();
    res.render('argumentaciones/capturarAporte', {
        nombreUsuario: req.query.nombreUsuario,
        aporteTipoId: req.query.aporteTipoId,
        aporteTipo: req.query.aporteTipo,
        aportePredecesorId: req.query.aportePredecesorId,
        aportePredecesorTipo: req.query.aportePredecesorTipo,
        aportePredecesorContenido: req.query.aportePredecesorContenido,
        argumentacion: argumentacionRecuperada,
        sesion: sesionRecuperada,
        idObjeto: req.query.idObjeto
    });
});
router.post('/grabarAporteSesion', async (req, res, next) => {
    var datosArgumentacion = new DatosArgumentacion();
    await datosArgumentacion.grabarAporte(req.body.id,req.body.aportePredecesorId,
        new Aporte('',req.body.aporteTipoId,req.body.aporteContenido, req.body.aporteTiempo));
    res.redirect('/main/presentarArgumentacionSesion?idSesion='+ req.body.idSesion+'&idObjeto='+ req.body.idObjeto + '&nombreUsuario=' + req.body.nombreUsuario);
});
router.post('/permitirIngreso', async (req, res, next) => {
    res.redirect('/?nombreUsuario='+ req.body.nombreUsuario);
});

module.exports = router;