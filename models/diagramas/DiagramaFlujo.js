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
        let relacionFlujoSi = new TipoRelacion(1,'Flujo Sí');
        let relacionFlujoNo = new TipoRelacion(2,'Flujo No');
        let relacionInicioCiclo = new TipoRelacion(3,'Inicio ciclo');
        let relacionFinCiclo = new TipoRelacion(4,'Fin ciclo');
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
        let rolElementoAnteriorSi = new TipoRol(2,'Elemento anterior sí');
        let rolElementoAnteriorNo = new TipoRol(3,'Elemento anterior no');
        let rolInicioCiclo = new TipoRol(4,'Inicio ciclo');
        let rolFinCiclo = new TipoRol(5,'Fin ciclo');
        let puertoElementoAnterior = new TipoPuerto(0, 'Elemento anterior');
        let puertoElementoSiguiente = new TipoPuerto(1, 'Elemento siguiente');
        let puertoElementoAnteriorSi = new TipoPuerto(2, 'Elemento anterior sí');
        let puertoElementoAnteriorNo = new TipoPuerto(3, 'Elemento anterior no');
        let puertoInicioCiclo = new TipoPuerto(4, 'Inicio ciclo');
        let puertoFinCiclo = new TipoPuerto(5, 'Fin ciclo');

        puertoElementoAnterior.incluirTipoRol(rolElementoAnterior);
        puertoElementoSiguiente.incluirTipoRol(rolElementoSiguiente);
        puertoInicioCiclo.incluirTipoRol(rolInicioCiclo);
        puertoFinCiclo.incluirTipoRol(rolFinCiclo);
        puertoElementoAnteriorSi.incluirTipoRol(rolElementoAnteriorSi);
        puertoElementoAnteriorNo.incluirTipoRol(rolElementoAnteriorNo);

        objetoInicio.incluirTipoPropiedad(propiedadNombreInicio);
        objetoInicio.incluirTipoPuerto(puertoElementoAnterior);

        objetoEntrada.incluirTipoPropiedad(propiedadNombreEntrada);
        objetoEntrada.incluirTipoPropiedad(propiedadDescripcionEntrada);
        objetoEntrada.incluirTipoPuerto(puertoElementoSiguiente);
        objetoEntrada.incluirTipoPuerto(puertoElementoAnterior);

        objetoProceso.incluirTipoPropiedad(propiedadNombreProceso);
        objetoProceso.incluirTipoPropiedad(propiedadDescripcionProceso);
        objetoProceso.incluirTipoPuerto(puertoElementoSiguiente);
        objetoProceso.incluirTipoPuerto(puertoElementoAnterior);

        objetoCondicional.incluirTipoPropiedad(propiedadNombreCondicional);
        objetoCondicional.incluirTipoPropiedad(propiedadDescripcionCondicional);
        objetoCondicional.incluirTipoPuerto(puertoElementoSiguiente);
        objetoCondicional.incluirTipoPuerto(puertoElementoAnteriorNo);
        objetoCondicional.incluirTipoPuerto(puertoElementoAnteriorSi);

        objetoPara.incluirTipoPropiedad(propiedadNombrePara);
        objetoPara.incluirTipoPropiedad(propiedadDescripcionPara);
        objetoPara.incluirTipoPuerto(puertoElementoSiguiente);
        objetoPara.incluirTipoPuerto(puertoElementoAnterior);
        objetoPara.incluirTipoPuerto(puertoInicioCiclo);
        objetoPara.incluirTipoPuerto(puertoFinCiclo);

        objetoMientras.incluirTipoPropiedad(propiedadNombreMientras);
        objetoMientras.incluirTipoPropiedad(propiedadDescripcionMientras);
        objetoMientras.incluirTipoPuerto(puertoElementoSiguiente);
        objetoMientras.incluirTipoPuerto(puertoElementoAnterior);
        objetoMientras.incluirTipoPuerto(puertoInicioCiclo);
        objetoMientras.incluirTipoPuerto(puertoFinCiclo);

        objetoSalida.incluirTipoPropiedad(propiedadNombreSalida);
        objetoSalida.incluirTipoPropiedad(propiedadDescripcionSalida);
        objetoSalida.incluirTipoPuerto(puertoElementoSiguiente);
        objetoSalida.incluirTipoPuerto(puertoElementoAnterior);

        objetoFin.incluirTipoPropiedad(propiedadNombreFin);
        objetoFin.incluirTipoPuerto(puertoElementoSiguiente);

        relacionFlujo.tipoRolInicio=rolElementoAnterior;
        relacionFlujo.tipoRolFinal=rolElementoSiguiente;

        relacionFlujoSi.tipoRolInicio=rolElementoAnteriorSi;
        relacionFlujoSi.tipoRolFinal=rolElementoSiguiente;

        relacionFlujoNo.tipoRolInicio=rolElementoAnteriorNo;
        relacionFlujoNo.tipoRolFinal=rolElementoSiguiente;

        relacionInicioCiclo.tipoRolInicio=rolInicioCiclo;
        relacionInicioCiclo.tipoRolFinal=rolElementoSiguiente;

        relacionFinCiclo.tipoRolInicio=rolElementoAnterior;
        relacionFinCiclo.tipoRolFinal=rolFinCiclo;

        this.incluirTipoObjeto(objetoInicio);
        this.incluirTipoObjeto(objetoEntrada);
        this.incluirTipoObjeto(objetoProceso);
        this.incluirTipoObjeto(objetoCondicional);
        this.incluirTipoObjeto(objetoPara);
        this.incluirTipoObjeto(objetoMientras);
        this.incluirTipoObjeto(objetoSalida);
        this.incluirTipoObjeto(objetoFin);
        this.incluirTipoRelacion(relacionFlujo);
        this.incluirTipoRelacion(relacionFlujoSi);
        this.incluirTipoRelacion(relacionFlujoNo);
        this.incluirTipoRelacion(relacionInicioCiclo);
        this.incluirTipoRelacion(relacionFinCiclo);
    }
}
