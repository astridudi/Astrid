const TipoDiagrama = require('../diagramas/TipoDiagrama');
const TipoObjeto = require('../diagramas/TipoObjeto');
const TipoRelacion = require('../diagramas/TipoRelacion');
const TipoPropiedad = require('../diagramas/TipoPropiedad');
const TipoRol = require('../diagramas/TipoRol');
const TipoPuerto = require('../diagramas/TipoPuerto');

module.exports = class DiagramaFlujo extends TipoDiagrama {
    constructor() {
        super(0,'Diagrama de Flujo');
        super.scriptDibujo = 'dibujarDiagramaFlujo.js';
        let objetoInicio = new TipoObjeto(0,'Inicio',false);
        let objetoEntrada = new TipoObjeto(1,'Entrada',true);
        let objetoProceso = new TipoObjeto(2,'Proceso',true);
        let objetoCondicional = new TipoObjeto(3,'Condicional',true);
        let objetoPara = new TipoObjeto(4,'Ciclo para',true);
        let objetoMientras = new TipoObjeto(5,'Ciclo mientras',true);
        let objetoSalida = new TipoObjeto(6,'Salida',true);
        let objetoFin = new TipoObjeto(7,'Fin',false);
        let relacionFlujo = new TipoRelacion(0,'Flujo');
        let relacionInicioCiclo = new TipoRelacion(1,'Inicio ciclo');
        let relacionFinCiclo = new TipoRelacion(2,'Fin ciclo');

        let propiedadNombreInicio = new TipoPropiedad(0,'Nombre');
        let propiedadNombreEntrada = new TipoPropiedad(1,'Nombre');
        let propiedadDescripcionEntrada = new TipoPropiedad(2,'Descripción');
        let propiedadNombreProceso = new TipoPropiedad(3,'Nombre');
        let propiedadDescripcionProceso = new TipoPropiedad(4,'Descripción');
        let propiedadNombreCondicional = new TipoPropiedad(5,'Nombre');
        let propiedadDescripcionCondicional = new TipoPropiedad(6,'Descripción');
        let propiedadNombrePara = new TipoPropiedad(7,'Nombre');
        let propiedadDescripcionPara = new TipoPropiedad(8,'Descripción');
        let propiedadNombreMientras = new TipoPropiedad(9,'Nombre');
        let propiedadDescripcionMientras = new TipoPropiedad(10,'Descripción');
        let propiedadNombreSalida = new TipoPropiedad(11,'Nombre');
        let propiedadDescripcionSalida = new TipoPropiedad(12,'Descripción');
        let propiedadNombreFin = new TipoPropiedad(13,'Nombre');

        let rolElementoAnterior = new TipoRol(0,'Elemento anterior');
        let rolElementoSiguiente = new TipoRol(1,'Elemento siguiente');

        let puertoElementoAnterior = new TipoPuerto(0, 'Elemento anterior');
        let puertoElementoSiguiente = new TipoPuerto(1, 'Elemento siguiente');

        rolElementoAnterior.tipoObjeto=objetoCondicional;
        rolElementoSiguiente.tipoObjeto=objetoProceso;

        puertoElementoAnterior.incluirTipoRol(rolElementoAnterior);
        puertoElementoSiguiente.incluirTipoRol(rolElementoSiguiente);

        relacionFlujo.tipoRolInicio=rolElementoAnterior;
        relacionFlujo.tipoRolFinal=rolElementoSiguiente;
        relacionInicioCiclo.tipoRolInicio=rolElementoAnterior;
        relacionInicioCiclo.tipoRolFinal=rolElementoSiguiente;
        relacionFinCiclo.tipoRolInicio=rolElementoAnterior;
        relacionFinCiclo.tipoRolFinal=rolElementoSiguiente;

        objetoProceso.incluirTipoPuerto(puertoElementoAnterior);
        objetoCondicional.incluirTipoPuerto(puertoElementoAnterior);
        objetoCondicional.incluirTipoPuerto(puertoElementoSiguiente);
        objetoPara.incluirTipoPuerto(puertoElementoAnterior);
        objetoPara.incluirTipoPuerto(puertoElementoSiguiente);

        relacionFlujo.incluirTipoPropiedad(propiedadNombreMientras);
        relacionFlujo.incluirTipoPropiedad(propiedadDescripcionMientras);

        objetoInicio.incluirTipoPropiedad(propiedadNombreInicio);
        objetoEntrada.incluirTipoPropiedad(propiedadNombreEntrada);
        objetoEntrada.incluirTipoPropiedad(propiedadDescripcionEntrada);
        objetoProceso.incluirTipoPropiedad(propiedadNombreProceso);
        objetoProceso.incluirTipoPropiedad(propiedadDescripcionProceso);
        objetoCondicional.incluirTipoPropiedad(propiedadNombreCondicional);
        objetoCondicional.incluirTipoPropiedad(propiedadDescripcionCondicional);
        objetoPara.incluirTipoPropiedad(propiedadNombrePara);
        objetoPara.incluirTipoPropiedad(propiedadDescripcionPara);
        objetoMientras.incluirTipoPropiedad(propiedadNombreMientras);
        objetoMientras.incluirTipoPropiedad(propiedadDescripcionMientras);
        objetoSalida.incluirTipoPropiedad(propiedadNombreSalida);
        objetoSalida.incluirTipoPropiedad(propiedadDescripcionSalida);
        objetoFin.incluirTipoPropiedad(propiedadNombreFin);

        this.incluirTipoObjeto(objetoInicio);
        this.incluirTipoObjeto(objetoEntrada);
        this.incluirTipoObjeto(objetoProceso);
        this.incluirTipoObjeto(objetoCondicional);
        this.incluirTipoObjeto(objetoPara);
        this.incluirTipoObjeto(objetoMientras);
        this.incluirTipoObjeto(objetoSalida);
        this.incluirTipoObjeto(objetoFin);
        this.incluirTipoRelacion(relacionFlujo);
    }
}