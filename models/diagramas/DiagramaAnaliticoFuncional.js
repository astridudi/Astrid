const TipoDiagrama = require('../diagramas/TipoDiagrama');
const TipoObjeto = require('../diagramas/TipoObjeto');
const TipoRelacion = require('../diagramas/TipoRelacion');
const TipoPropiedad = require('../diagramas/TipoPropiedad');
const TipoRol = require('../diagramas/TipoRol');
const TipoPuerto = require('../diagramas/TipoPuerto');

module.exports = class DiagramaAnaliticoFuncional extends TipoDiagrama {
    constructor() {
        super(12,'Diagrama analítico funcional');
        super.scriptDibujo = 'dibujarDiagramaAnaliticoFuncional.js';
        let objetoVariableCausalInmodificable = new TipoObjeto(0,'Variable causal inmodificable',true);
        let objetoVariableCausal = new TipoObjeto(1,'Variable causal',true);
        let objetoProblema = new TipoObjeto(2,'Problema',true);
        let relacionCausalidadUnidireccional = new TipoRelacion(0,'Causalidad unidireccional');
        let relacionCausalidadBidireccional = new TipoRelacion(1,'Causalidad bidireccional');
        let relacionCausalidadModeradora = new TipoRelacion(2,'Causalidad moderadora');
        let propiedadNombreVariableCausalInmodificable = new TipoPropiedad(0,'Nombre');
        let propiedadDescripcionVariableCausalInmodificable = new TipoPropiedad(1,'Descripción');
        let propiedadNombreVariableCausal = new TipoPropiedad(2,'Nombre');
        let propiedadDescripcionVariableCausal = new TipoPropiedad(3,'Descripción');
        let propiedadHipoteticaVariableCausal = new TipoPropiedad(4,'Hipotética (S/N)');
        let propiedadModificabilidadVariableCausal = new TipoPropiedad(5,'Grado de modificabilidad (+/-)');
        let propiedadNombreProblema = new TipoPropiedad(6,'Nombre');
        let propiedadDescripcionProblema = new TipoPropiedad(7,'Descripción');
        let propiedadHipoteticoProblema = new TipoPropiedad(8,'Hipotético (S/N)');
        let propiedadImportanciaProblema = new TipoPropiedad(9,'Grado de importancia (+/-)');
        let propiedadDescripcionCausalidadUnidireccional = new TipoPropiedad(10,'Descripción');
        let propiedadIntensidadCausalidadUnidireccional = new TipoPropiedad(11,'Intensidad (Débil / Moderada / Fuerte)');
        let propiedadDescripcionCausalidadBidireccional = new TipoPropiedad(12,'Descripción');
        let propiedadDescripcionCausalidadModeradora = new TipoPropiedad(13,'Descripción');
        let rolCausaUnidireccional = new TipoRol(0,'Causa unidireccional');
        let rolCausaBidireccional = new TipoRol(1,'Causa bidireccional');
        let rolCausaModeradora = new TipoRol(2,'Causa moderadora');
        let rolEfectoUnidireccional = new TipoRol(3,'Efecto unidireccional');
        let rolEfectoModerado = new TipoRol(4,'Efecto moderado');
        let puertoCausaUnidireccional = new TipoPuerto(0, 'Causa unidireccional');
        let puertoCausaBidireccional = new TipoPuerto(1, 'Causa bidireccional');
        let puertoCausaModeradora = new TipoPuerto(2, 'Causa moderadora');
        let puertoEfectoUnidireccional = new TipoPuerto(3, 'Efecto unidireccional');
        let puertoEfectoModerado = new TipoPuerto(4, 'Efecto moderado');

        rolCausaUnidireccional.tipoObjeto=objetoVariableCausalInmodificable;
        rolCausaBidireccional.tipoObjeto=objetoVariableCausal;
        rolCausaModeradora.tipoObjeto=objetoVariableCausal;
        rolEfectoUnidireccional.tipoObjeto=objetoProblema;

        puertoCausaUnidireccional.incluirTipoRol(rolCausaUnidireccional);
        puertoCausaBidireccional.incluirTipoRol(rolCausaBidireccional);
        puertoCausaModeradora.incluirTipoRol(rolCausaModeradora);
        puertoEfectoUnidireccional.incluirTipoRol(rolEfectoUnidireccional);
        puertoEfectoModerado.incluirTipoRol(rolEfectoModerado);

        relacionCausalidadUnidireccional.tipoRolInicio=rolCausaUnidireccional;
        relacionCausalidadUnidireccional.tipoRolFinal=rolEfectoUnidireccional;
        relacionCausalidadBidireccional.tipoRolInicio=rolCausaBidireccional;
        relacionCausalidadBidireccional.tipoRolFinal=rolCausaBidireccional;
        relacionCausalidadModeradora.tipoRolInicio=rolCausaModeradora;
        relacionCausalidadModeradora.tipoRolFinal=rolEfectoModerado;

        objetoVariableCausalInmodificable.incluirTipoPuerto(puertoCausaUnidireccional);
        objetoVariableCausal.incluirTipoPuerto(puertoCausaUnidireccional);
        objetoVariableCausal.incluirTipoPuerto(puertoCausaBidireccional);
        objetoVariableCausal.incluirTipoPuerto(puertoCausaModeradora);
        objetoProblema.incluirTipoPuerto(puertoEfectoUnidireccional);
        objetoProblema.incluirTipoPuerto(puertoCausaBidireccional);
        objetoProblema.incluirTipoPuerto(puertoEfectoModerado);

        relacionCausalidadUnidireccional.incluirTipoPropiedad(propiedadDescripcionCausalidadUnidireccional);
        relacionCausalidadUnidireccional.incluirTipoPropiedad(propiedadIntensidadCausalidadUnidireccional);
        relacionCausalidadBidireccional.incluirTipoPropiedad(propiedadDescripcionCausalidadBidireccional);
        relacionCausalidadModeradora.incluirTipoPropiedad(propiedadDescripcionCausalidadModeradora);

        objetoVariableCausalInmodificable.incluirTipoPropiedad(propiedadNombreVariableCausalInmodificable);
        objetoVariableCausalInmodificable.incluirTipoPropiedad(propiedadDescripcionVariableCausalInmodificable);
        objetoVariableCausal.incluirTipoPropiedad(propiedadNombreVariableCausal);
        objetoVariableCausal.incluirTipoPropiedad(propiedadDescripcionVariableCausal);
        objetoVariableCausal.incluirTipoPropiedad(propiedadHipoteticaVariableCausal);
        objetoVariableCausal.incluirTipoPropiedad(propiedadModificabilidadVariableCausal);
        objetoProblema.incluirTipoPropiedad(propiedadNombreProblema);
        objetoProblema.incluirTipoPropiedad(propiedadDescripcionProblema);
        objetoProblema.incluirTipoPropiedad(propiedadHipoteticoProblema);
        objetoProblema.incluirTipoPropiedad(propiedadImportanciaProblema);

        this.incluirTipoObjeto(objetoVariableCausalInmodificable);
        this.incluirTipoObjeto(objetoVariableCausal);
        this.incluirTipoObjeto(objetoProblema);
        this.incluirTipoRelacion(relacionCausalidadUnidireccional);
        this.incluirTipoRelacion(relacionCausalidadBidireccional);
        this.incluirTipoRelacion(relacionCausalidadModeradora);
    }
    dibujar() {
        let {createCanvas} = require('canvas');
        let canvas = createCanvas(1000, 800);
        let contexto = canvas.getContext("2d");
        let i = 0;
        let d = 40;
        let x = d;
        let y = d;
        let w = 160;
        let h = 80;
        let r = h/2;
        let lw = 1;
        let t = '';
        contexto.strokeStyle = "#1B4F72";
        contexto.fillStyle = "#D6EAF8";
        contexto.font = "14px Arial";
        contexto.textBaseline = "middle";
        for (i=0; i<this.diagrama.totalObjetos; i++) {
            switch (this.diagrama.objeto(i).tipoObjeto.id) {
                case 0: {
                    contexto.lineWidth = 3;
                    contexto.beginPath();
                    contexto.moveTo(x,y+(h/2));
                    contexto.lineTo(x+(w/2),y);
                    contexto.lineTo(x+w,y+(h/2));
                    contexto.lineTo(x+(w/2),y+h);
                    contexto.closePath();
                    contexto.stroke();
                    contexto.fill();
                    x=x+w+d;
                    if (x>(800-w)) {
                        x=10;
                        y=y+h+d;
                    }
                    break;
                }
                case 1: {
                    contexto.lineWidth = 3;
                    contexto.moveTo(x+(w/2),y+(h/2));
                    contexto.arc(x+(w/2),y+(h/2), r, 0, 2*Math.PI );
                    contexto.stroke();
                    contexto.fill();
                    x=x+w+d;
                    if (x>(800-w)) {
                        x=10;
                        y=y+h+d;
                    }
                    break;
                }
                case 2: {
                    contexto.lineWidth = 2;
                    contexto.moveTo(x,y);
                    contexto.strokeRect(x, y, w, h);
                    contexto.fillRect(x+lw, y+lw, w-2*lw, h-2*lw);
                    x=x+w+d;
                    if (x>(800-w)) {
                        x=10;
                        y=y+h+d;
                    }
                    break;
                }
            }
        }
        x=d;
        y=d;
        contexto.lineWidth = 1;
        for (i=0; i<this.diagrama.totalObjetos; i++) {
            switch (this.diagrama.objeto(i).tipoObjeto.id) {
                case 0: {
                    contexto.textAlign = "center";
                    t = this.diagrama.objeto(i).cadenaDiagrama;
                    contexto.strokeText(t, x+(w/2),y+(h/2), w-8);
                    x=x+w+d;
                    if (x>(800-w)) {
                        x=10;
                        y=y+h+d;
                    }
                    break;
                }
                case 1: {
                    contexto.textAlign = "center";
                    t = this.diagrama.objeto(i).cadenaDiagrama;
                    contexto.strokeText(t, x+(w/2),y+(h/2), w-8);
                    x=x+w+d;
                    if (x>(800-w)) {
                        x=10;
                        y=y+h+d;
                    }
                    break;
                }
                case 2: {
                    contexto.textAlign = "center";
                    t = this.diagrama.objeto(i).cadenaDiagrama;
                    contexto.strokeText(t, x+(w/2),y+(h/2), w-8);
                    x=x+w+d;
                    if (x>(800-w)) {
                        x=10;
                        y=y+h+d;
                    }
                    break;
                }
            }
        }
        let canvasUrl = canvas.toDataURL();
        return canvasUrl;
    }
}