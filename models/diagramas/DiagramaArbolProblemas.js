const TipoDiagrama = require('../diagramas/TipoDiagrama');
const TipoObjeto = require('../diagramas/TipoObjeto');
const TipoRelacion = require('../diagramas/TipoRelacion');
const TipoPropiedad = require('../diagramas/TipoPropiedad');
const TipoRol = require('../diagramas/TipoRol');
const TipoPuerto = require('../diagramas/TipoPuerto');

module.exports = class DiagramaArbolProblemas extends TipoDiagrama {
    constructor() {
        super(1,'Arbol de problemas');
        let objetoProblema = new TipoObjeto(0,'Problema',true);
        let objetoCausa = new TipoObjeto(1,'Causa',true);
        let objetoEfecto = new TipoObjeto(2,'Efecto',true);
        let relacionCausalidadDirecta = new TipoRelacion(0,'Causalidad directa');
        let relacionCausalidadIndirecta = new TipoRelacion(1,'Causalidad indirecta');
        let relacionConsecuenciaDirecta = new TipoRelacion(2,'Consecuencia directa');
        let relacionConsecuenciaIndirecta = new TipoRelacion(2,'Consecuencia indirecta');
        let propiedadNombreProblema = new TipoPropiedad(0,'Nombre');
        let propiedadDescripcionProblema = new TipoPropiedad(1,'Descripción');
        let propiedadNombreCausa = new TipoPropiedad(2,'Nombre');
        let propiedadDescripcionCausa = new TipoPropiedad(3,'Descripción');
        let propiedadNombreEfecto = new TipoPropiedad(4,'Nombre');
        let propiedadDescripcionEfecto = new TipoPropiedad(5,'Descripción');
        let propiedadDescripcionCausalidadDirecta = new TipoPropiedad(6,'Descripción');
        let propiedadDescripcionCausalidadIndirecta = new TipoPropiedad(7,'Descripción');
        let propiedadDescripcionConsecuenciaDirecta = new TipoPropiedad(8,'Descripción');
        let propiedadDescripcionConsecuenciaIndirecta = new TipoPropiedad(9,'Descripción');
        let rolCausaIncidente = new TipoRol(0,'Causa incidente');
        let rolProblemaConsecuente = new TipoRol(1,'Problema consecuente');
        let rolCausaSubsecuente = new TipoRol(2,'Causa subsecuente');
        let rolProblemaIncidente = new TipoRol(3,'Problema incidente');
        let rolEfectoSubsecuente = new TipoRol(4,'Efecto subsecuente');
        let rolEfectoIncidente = new TipoRol(5,'Efecto incidente');
        let puertoProblemaIncidente = new TipoPuerto(0, 'Problema incidente');
        let puertoProblemaConsecuente = new TipoPuerto(1, 'Problema consecuente');
        let puertoCausaIncidente = new TipoPuerto(2, 'Causa incidente');
        let puertoCausaSubsecuente = new TipoPuerto(3, 'Causa subsecuente');
        let puertoEfectoIncidente = new TipoPuerto(4, 'Efecto incidente');
        let puertoEfectoSubsecuente = new TipoPuerto(5, 'Efecto subsecuente');

        rolCausaIncidente.tipoObjeto=objetoCausa;
        rolProblemaConsecuente.tipoObjeto=objetoProblema;
        rolCausaSubsecuente.tipoObjeto=objetoCausa;
        rolProblemaIncidente.tipoObjeto=objetoProblema;
        rolEfectoSubsecuente.tipoObjeto=objetoEfecto;
        rolEfectoIncidente.tipoObjeto=objetoEfecto;

        puertoProblemaIncidente.incluirTipoRol(rolProblemaIncidente);
        puertoProblemaConsecuente.incluirTipoRol(rolProblemaConsecuente);
        puertoCausaIncidente.incluirTipoRol(rolCausaIncidente);
        puertoCausaSubsecuente.incluirTipoRol(rolCausaSubsecuente);
        puertoEfectoIncidente.incluirTipoRol(rolEfectoIncidente);
        puertoEfectoSubsecuente.incluirTipoRol(rolEfectoSubsecuente);

        relacionCausalidadDirecta.tipoRolInicio=rolCausaIncidente;
        relacionCausalidadDirecta.tipoRolFinal=rolProblemaConsecuente;
        relacionCausalidadIndirecta.tipoRolInicio=rolCausaIncidente;
        relacionCausalidadIndirecta.tipoRolFinal=rolCausaSubsecuente;
        relacionConsecuenciaDirecta.tipoRolInicio=rolProblemaIncidente;
        relacionConsecuenciaDirecta.tipoRolFinal=rolEfectoSubsecuente;
        relacionConsecuenciaIndirecta.tipoRolInicio=rolEfectoIncidente;
        relacionConsecuenciaIndirecta.tipoRolFinal=rolEfectoSubsecuente;

        objetoProblema.incluirTipoPuerto(puertoProblemaIncidente);
        objetoProblema.incluirTipoPuerto(puertoProblemaIncidente);
        objetoProblema.incluirTipoPuerto(puertoProblemaIncidente);
        objetoProblema.incluirTipoPuerto(puertoProblemaIncidente);
        objetoProblema.incluirTipoPuerto(puertoProblemaIncidente);
        objetoProblema.incluirTipoPuerto(puertoProblemaConsecuente);
        objetoProblema.incluirTipoPuerto(puertoProblemaConsecuente);
        objetoProblema.incluirTipoPuerto(puertoProblemaConsecuente);
        objetoProblema.incluirTipoPuerto(puertoProblemaConsecuente);
        objetoProblema.incluirTipoPuerto(puertoProblemaConsecuente);
        objetoCausa.incluirTipoPuerto(puertoCausaIncidente);
        objetoCausa.incluirTipoPuerto(puertoCausaIncidente);
        objetoCausa.incluirTipoPuerto(puertoCausaIncidente);
        objetoCausa.incluirTipoPuerto(puertoCausaIncidente);
        objetoCausa.incluirTipoPuerto(puertoCausaIncidente);
        objetoCausa.incluirTipoPuerto(puertoCausaSubsecuente);
        objetoCausa.incluirTipoPuerto(puertoCausaSubsecuente);
        objetoCausa.incluirTipoPuerto(puertoCausaSubsecuente);
        objetoCausa.incluirTipoPuerto(puertoCausaSubsecuente);
        objetoCausa.incluirTipoPuerto(puertoCausaSubsecuente);
        objetoEfecto.incluirTipoPuerto(puertoEfectoIncidente);
        objetoEfecto.incluirTipoPuerto(puertoEfectoIncidente);
        objetoEfecto.incluirTipoPuerto(puertoEfectoIncidente);
        objetoEfecto.incluirTipoPuerto(puertoEfectoIncidente);
        objetoEfecto.incluirTipoPuerto(puertoEfectoIncidente);
        objetoEfecto.incluirTipoPuerto(puertoEfectoSubsecuente);
        objetoEfecto.incluirTipoPuerto(puertoEfectoSubsecuente);
        objetoEfecto.incluirTipoPuerto(puertoEfectoSubsecuente);
        objetoEfecto.incluirTipoPuerto(puertoEfectoSubsecuente);
        objetoEfecto.incluirTipoPuerto(puertoEfectoSubsecuente);

        relacionCausalidadDirecta.incluirTipoPropiedad(propiedadDescripcionCausalidadDirecta);
        relacionCausalidadIndirecta.incluirTipoPropiedad(propiedadDescripcionCausalidadIndirecta);
        relacionConsecuenciaDirecta.incluirTipoPropiedad(propiedadDescripcionConsecuenciaDirecta);
        relacionConsecuenciaIndirecta.incluirTipoPropiedad(propiedadDescripcionConsecuenciaIndirecta);

        objetoProblema.incluirTipoPropiedad(propiedadNombreProblema);
        objetoProblema.incluirTipoPropiedad(propiedadDescripcionProblema);
        objetoCausa.incluirTipoPropiedad(propiedadNombreCausa);
        objetoCausa.incluirTipoPropiedad(propiedadDescripcionCausa);
        objetoEfecto.incluirTipoPropiedad(propiedadNombreEfecto);
        objetoEfecto.incluirTipoPropiedad(propiedadDescripcionEfecto);

        this.incluirTipoObjeto(objetoProblema);
        this.incluirTipoObjeto(objetoCausa);
        this.incluirTipoObjeto(objetoEfecto);
        this.incluirTipoRelacion(relacionCausalidadDirecta);
        this.incluirTipoRelacion(relacionCausalidadIndirecta);
        this.incluirTipoRelacion(relacionConsecuenciaDirecta);
        this.incluirTipoRelacion(relacionConsecuenciaIndirecta);
    }
    dibujar() {
        let {createCanvas} = require('canvas');
        let canvas = createCanvas(1000, 800);
        let contexto = canvas.getContext("2d");
        let i = 0;
        let d = 40;
        let wp = 800-2*d;
        let hp = 50;
        let wc = 150;
        let hc = 50;
        let we = 150;
        let he = 50;
        let xp = d;
        let yp = d+hc+d;
        let xe = d;
        let ye = d;
        let xc = d;
        let yc = d+he+d+hp+d;
        let lw = 1;
        let t = '';
        contexto.strokeStyle = "#1B4F72";
        contexto.fillStyle = "#D6EAF8";
        contexto.font = "14px Arial";
        contexto.textBaseline = "middle";
        for (i=0; i<this.diagrama.totalObjetos; i++) {
            switch (this.diagrama.objeto(i).tipoObjeto.id) {
                case 0: {
                    contexto.lineWidth = 2;
                    contexto.moveTo(xp,yp);
                    contexto.strokeRect(xp, yp, wp, hp);
                    contexto.fillRect(xp+lw, yp+lw, wp-2*lw, hp-2*lw);
                    xp=xp+wp+d;
                    if (xp>(800-wp)) {
                        xp=10;
                        yp=yp+hp+d;
                    }
                    break;
                }
                case 1: {
                    contexto.lineWidth = 2;
                    contexto.moveTo(xc,yc);
                    contexto.strokeRect(xc, yc, wc, hc);
                    contexto.fillRect(xc+lw, yc+lw, wc-2*lw, hc-2*lw);
                    xc=xc+wc+d;
                    if (xc>(800-wc)) {
                        xc=d;
                        yc=yc+hc+d;
                    }
                    break;
                }
                case 2: {
                    contexto.lineWidth = 2;
                    contexto.moveTo(xe,ye);
                    contexto.strokeRect(xe, ye, we, he);
                    contexto.fillRect(xe+lw, ye+lw, we-2*lw, he-2*lw);
                    xe=xe+we+d;
                    if (xe>(800-we)) {
                        xe=d;
                        ye=ye+he+d;
                    }
                    break;
                }
            }
        }
        xp = d;
        yp = d+hc+d;
        xe = d;
        ye = d;
        xc = d;
        yc = d+he+d+hp+d;
        contexto.lineWidth = 1;
        for (i=0; i<this.diagrama.totalObjetos; i++) {
            switch (this.diagrama.objeto(i).tipoObjeto.id) {
                case 0: {
                    contexto.textAlign = "center";
                    t = this.diagrama.objeto(i).cadenaDiagrama;
                    contexto.strokeText(t, xp+(wp/2),yp+(hp/2), wp-8);
                    xp=xp+wp+d;
                    if (xp>(800-wp)) {
                        xp=d;
                        yp=yp+hp+d;
                    }
                    break;
                }
                case 1: {
                    contexto.textAlign = "center";
                    t = this.diagrama.objeto(i).cadenaDiagrama;
                    contexto.strokeText(t, xc+(wc/2),yc+(hc/2), wc-8);
                    xc=xc+wc+d;
                    if (xc>(800-wc)) {
                        xc=10;
                        yc=yc+hc+d;
                    }
                    break;
                }
                case 2: {
                    contexto.textAlign = "center";
                    t = this.diagrama.objeto(i).cadenaDiagrama;
                    contexto.strokeText(t, xe+(we/2),ye+(he/2), we-8);
                    xe=xe+we+d;
                    if (xe>(800-we)) {
                        xe=10;
                        ye=ye+he+d;
                    }
                    break;
                }
            }
        }
        let canvasUrl = canvas.toDataURL();
        return canvasUrl;
    }
}