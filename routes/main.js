const util = require('util');
const express = require('express');
const router = express.Router();
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

router.get('/consultarConjuntoSesiones', async (req, res, next) => {
    datos = new DatosSesion();
    res.render('sesiones/presentarConjuntoSesiones', {
        conjuntoSesiones: await datos.recuperarConjuntoSesiones()
    });
});
router.get('/registrarSesion', async (req, res, next) => {
    datos = new DatosSesion();
    res.render('sesiones/capturarSesion', {
        conjuntoSesiones: await datos.recuperarConjuntoSesiones(),
        conjuntoTiposDiagrama: new ConjuntoTiposDiagrama(),
        sesion: undefined
    });
});
router.get('/presentarSesion', async (req, res, next) => {
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.id);
    res.render('sesiones/presentarSesion', {
        sesion: sesionRecuperada
    });
});
router.get('/editarSesion', async (req, res, next) => {
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.id);
    res.render('sesiones/editarSesion', {
        sesion: sesionRecuperada
    });
});
router.get('/eliminarSesion', async (req, res, next) => {
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.id);
    res.render('sesiones/eliminarSesion', {
        sesion: await datos.recuperarSesion(req.query.id)
    });
});
router.post('/grabarSesion', async (req, res, next) => {
    var datos = new DatosSesion();
    await datos.grabarSesion(
        new Sesion('',req.body.nombre, req.body.inicio), req.body.tipoDiagrama);
    res.redirect('/main/consultarConjuntoSesiones');
});
router.post('/actualizarSesion', async (req, res, next) => {
    var datos = new DatosSesion();
    await datos.actualizarSesion(
        new Sesion(req.body.id, req.body.nombre, req.body.inicio));
    res.redirect('/main/presentarSesion?id='+ req.body.id);
});
router.post('/eliminarSesion/confirmar', async (req, res, next) => {
    var datos = new DatosSesion();
    await datos.eliminarSesion(req.body.id);
    res.redirect('/');
});
router.get('/presentarChatSesion', async (req, res, next) => {
    datosChat = new DatosChat();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.chat = await datosChat.recuperarChatPorSesion(req.query.idSesion);
    res.render('chats/presentarChat', {
        sesion: sesionRecuperada
    });
});
router.get('/registrarMensajeChatSesion', async (req, res, next) => {
    datosChat = new DatosChat();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.chat = await datosChat.recuperarChatPorSesion(req.query.idSesion);
    res.render('chats/capturarMensaje', {
        sesion: sesionRecuperada
    });
});
router.post('/grabarMensajeChatSesion', async (req, res, next) => {
    var datosChat = new DatosChat();
    await datosChat.grabarMensaje(req.body.id,
        new Mensaje('',req.body.mensajeContenido, req.body.mensajeTiempo));
    res.redirect('/main/presentarChatSesion?idSesion='+ req.body.idSesion);
});
router.get('/presentarDiagramaSesion', async (req, res, next) => {
    datosDiagrama = new DatosDiagrama();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.diagrama = await datosDiagrama.recuperarDiagramaPorSesion(req.query.idSesion);
    res.render('diagramas/presentarDiagrama', {
        sesion: sesionRecuperada
    });
});
router.get('/registrarObjetoDiagramaSesion', async (req, res, next) => {
    datosDiagrama = new DatosDiagrama();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.diagrama = await datosDiagrama.recuperarDiagramaPorSesion(req.query.idSesion);
    res.render('diagramas/capturarObjeto', {
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
    res.redirect('/main/presentarDiagramaSesion?idSesion='+ req.body.idSesion);
});
router.get('/registrarRelacionDiagramaSesion', async (req, res, next) => {
    datosDiagrama = new DatosDiagrama();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    sesionRecuperada.diagrama = await datosDiagrama.recuperarDiagramaPorSesion(req.query.idSesion);
    relacionNueva = new Relacion('',sesionRecuperada.diagrama.tipoDiagrama.id,req.query.relacionTipoId,'');
    relacionNueva.diagrama = sesionRecuperada.diagrama;
    res.render('diagramas/capturarRelacion', {
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
    res.redirect('/main/presentarDiagramaSesion?idSesion='+ req.body.idSesion);
});
router.get('/presentarArgumentacionSesion', async (req, res, next) => {
    datosArgumentacion = new DatosArgumentacion();
    datos = new DatosSesion();
    sesionRecuperada = await datos.recuperarSesion(req.query.idSesion);
    argumentacionRecuperada = await datosArgumentacion.recuperarArgumentacionPorObjeto(req.query.idObjeto);
    res.render('argumentaciones/presentarArgumentacion', {
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
    res.redirect('/main/presentarArgumentacionSesion?idSesion='+ req.body.idSesion+'&idObjeto='+ req.body.idObjeto);
});

module.exports = router;