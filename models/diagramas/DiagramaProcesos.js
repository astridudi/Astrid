const TipoDiagrama = require('../diagramas/TipoDiagrama');
const TipoObjeto = require('../diagramas/TipoObjeto');
const TipoRelacion = require('../diagramas/TipoRelacion');
const TipoPropiedad = require('../diagramas/TipoPropiedad');
const TipoRol = require('../diagramas/TipoRol');
const TipoPuerto = require('../diagramas/TipoPuerto');

module.exports = class DiagramaProcesos extends TipoDiagrama {
    constructor() {
        super(2,'Diagrama de Procesos');
        super.scriptDibujo = 'dibujarDiagramaProcesos.js';
        let objetoAccionInicial = new TipoObjeto(0,'Acción inicial',true);
        let objetoAccion = new TipoObjeto(1,'Acción',true);
        let objetoDecision = new TipoObjeto(2,'Condición',true);
        let objetoAccionFinal = new TipoObjeto(3,'Acción final',true);
        let relacionFlujo = new TipoRelacion(0,'Flujo');
        let relacionFlujoCondicionado = new TipoRelacion(1,'Flujo condicionado');
        let propiedadNombreAccionInicial = new TipoPropiedad(0,'Nombre');
        let propiedadDescripcionAccionInicial = new TipoPropiedad(1,'Descripción');
        let propiedadNombreAccion = new TipoPropiedad(2,'Nombre');
        let propiedadDescripcionAccion = new TipoPropiedad(3,'Descripción');
        let propiedadNombreCondicion = new TipoPropiedad(4,'Nombre');
        let propiedadDescripcionCondicion = new TipoPropiedad(5,'Descripción');
        let propiedadNombreAccionFinal = new TipoPropiedad(6,'Nombre');
        let propiedadDescripcionAccionFinal = new TipoPropiedad(7,'Descripción');
        let propiedadDescripcionFlujo = new TipoPropiedad(8,'Descripción');
        let propiedadDecisionFlujoCondicional = new TipoPropiedad(9,'Decisión');
        let rolElementoAnterior = new TipoRol(0,'Elemento anterior');
        let rolElementoAnteriorCondicional = new TipoRol(1,'Elemento anterior condicional');
        let rolElementoSiguiente = new TipoRol(2,'Elemento siguiente');
        let rolInhabilitado = new TipoRol(4,'Rol inhabilitado');
        let puertoElementoAnterior = new TipoPuerto(0, 'Elemento anterior');
        let puertoElementoAnteriorCondicional = new TipoPuerto(1, 'Elemento anterior condicional');
        let puertoElementoSiguiente = new TipoPuerto(2, 'Elemento siguiente');
        let puertoInhabilitado = new TipoPuerto(5, 'Inhabilitado');

        puertoElementoAnterior.incluirTipoRol(rolElementoAnterior);
        puertoElementoAnteriorCondicional.incluirTipoRol(rolElementoAnteriorCondicional);
        puertoElementoSiguiente.incluirTipoRol(rolElementoSiguiente);

        objetoAccionInicial.incluirTipoPropiedad(propiedadNombreAccionInicial);
        objetoAccionInicial.incluirTipoPropiedad(propiedadDescripcionAccionInicial);
        objetoAccionInicial.incluirTipoPuerto(puertoElementoAnterior);
        objetoAccionInicial.incluirTipoPuerto(puertoElementoAnterior);
        objetoAccionInicial.incluirTipoPuerto(puertoElementoAnterior);
        objetoAccionInicial.incluirTipoPuerto(puertoElementoAnterior);

        objetoAccion.incluirTipoPropiedad(propiedadNombreAccion);
        objetoAccion.incluirTipoPropiedad(propiedadDescripcionAccion);
        objetoAccion.incluirTipoPuerto(puertoElementoAnterior);
        objetoAccion.incluirTipoPuerto(puertoElementoSiguiente);
        objetoAccion.incluirTipoPuerto(puertoElementoAnterior);
        objetoAccion.incluirTipoPuerto(puertoElementoSiguiente);
        objetoAccion.incluirTipoPuerto(puertoElementoAnterior);
        objetoAccion.incluirTipoPuerto(puertoElementoSiguiente);
        objetoAccion.incluirTipoPuerto(puertoElementoAnterior);
        objetoAccion.incluirTipoPuerto(puertoElementoSiguiente);

        objetoDecision.incluirTipoPropiedad(propiedadNombreCondicion);
        objetoDecision.incluirTipoPropiedad(propiedadDescripcionCondicion);
        objetoDecision.incluirTipoPuerto(puertoElementoSiguiente);
        objetoDecision.incluirTipoPuerto(puertoElementoAnteriorCondicional);
        objetoDecision.incluirTipoPuerto(puertoElementoAnteriorCondicional);
        objetoDecision.incluirTipoPuerto(puertoElementoAnteriorCondicional);

        objetoAccionFinal.incluirTipoPropiedad(propiedadNombreAccionFinal);
        objetoAccionFinal.incluirTipoPropiedad(propiedadDescripcionAccionFinal);
        objetoAccionFinal.incluirTipoPuerto(puertoElementoSiguiente);
        objetoAccionFinal.incluirTipoPuerto(puertoElementoSiguiente);
        objetoAccionFinal.incluirTipoPuerto(puertoElementoSiguiente);
        objetoAccionFinal.incluirTipoPuerto(puertoElementoSiguiente);

        relacionFlujo.incluirTipoPropiedad(propiedadDescripcionFlujo);
        relacionFlujo.tipoRolInicio=rolElementoAnterior;
        relacionFlujo.tipoRolFinal=rolElementoSiguiente;

        relacionFlujoCondicionado.incluirTipoPropiedad(propiedadDecisionFlujoCondicional);
        relacionFlujoCondicionado.tipoRolInicio=rolElementoAnteriorCondicional;
        relacionFlujoCondicionado.tipoRolFinal=rolElementoSiguiente;

        this.incluirTipoObjeto(objetoAccionInicial);
        this.incluirTipoObjeto(objetoAccion);
        this.incluirTipoObjeto(objetoDecision);
        this.incluirTipoObjeto(objetoAccionFinal);
        this.incluirTipoRelacion(relacionFlujo);
        this.incluirTipoRelacion(relacionFlujoCondicionado);
    }
}
