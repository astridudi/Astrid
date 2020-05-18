const TipoDiagrama = require('../diagramas/TipoDiagrama');
const TipoObjeto = require('../diagramas/TipoObjeto');
const TipoRelacion = require('../diagramas/TipoRelacion');
const TipoPropiedad = require('../diagramas/TipoPropiedad');
const TipoRol = require('../diagramas/TipoRol');
const TipoPuerto = require('../diagramas/TipoPuerto');

module.exports = class DiagramaEntidadRelacion extends TipoDiagrama {
    constructor() {
        super(0,'Diagrama Entidad Relación');
        let objetoEntidad = new TipoObjeto(0,'Entidad',true);
        let objetoRelacion = new TipoObjeto(1,'Relación',true);
        let objetoAtributo = new TipoObjeto(2,'Atributo',true);
        let relacionParticipacion = new TipoRelacion(0,'Participación');
        let relacionDescripcionEntidad = new TipoRelacion(1,'Descripción de entidad');
        let relacionDescripcionRelacion = new TipoRelacion(2,'Descripción de relación');
        let propiedadNombreObjeto = new TipoPropiedad(0,'Nombre');
        let propiedadDescripcionObjeto = new TipoPropiedad(1,'Descripción');
        let propiedadNombreRelacion = new TipoPropiedad(2,'Nombre');
        let propiedadDescripcionRelacion = new TipoPropiedad(3,'Descripción');
        let propiedadNombreAtributo = new TipoPropiedad(4,'Nombre');
        let propiedadDescripcionAtributo = new TipoPropiedad(5,'Descripción');
        let propiedadDescripcionParticipacion = new TipoPropiedad(6,'Descripción');
        let propiedadCardinalidadParticipacion = new TipoPropiedad(7,'Cardinalidad');
        let rolRelacionVinculante = new TipoRol(0,'Relación vinculante');
        let rolEntidadParticipante = new TipoRol(1,'Entidad participante');
        let rolEntidadDescrita = new TipoRol(2,'Entidad descrita');
        let rolDescriptorEntidad = new TipoRol(3,'Descriptor entidad');
        let rolRelacionDescrita = new TipoRol(4,'Relación descrita');
        let rolDescriptorRelacion = new TipoRol(5,'Descriptor relación');
        let puertoEntidadParticipante = new TipoPuerto(0, 'Entidad participante');
        let puertoEntidadDescrita = new TipoPuerto(1, 'Entidad descrita');
        let puertoRelacionVinculante = new TipoPuerto(2, 'Relación vinculante');
        let puertoRelacionDescrita = new TipoPuerto(3, 'Relación descrita');
        let puertoAtributoDescriptor = new TipoPuerto(4, 'Descriptor');

        rolRelacionVinculante.tipoObjeto=objetoRelacion;
        rolEntidadParticipante.tipoObjeto=objetoEntidad;
        rolEntidadDescrita.tipoObjeto=objetoEntidad;
        rolDescriptorEntidad.tipoObjeto=objetoAtributo;
        rolRelacionDescrita.tipoObjeto=objetoRelacion;
        rolDescriptorRelacion.tipoObjeto=objetoAtributo;

        puertoEntidadParticipante.incluirTipoRol(rolEntidadParticipante);
        puertoEntidadDescrita.incluirTipoRol(rolEntidadDescrita);
        puertoRelacionVinculante.incluirTipoRol(rolRelacionVinculante);
        puertoRelacionDescrita.incluirTipoRol(rolRelacionDescrita);
        puertoAtributoDescriptor.incluirTipoRol(rolDescriptorEntidad);
        puertoAtributoDescriptor.incluirTipoRol(rolDescriptorRelacion);

        relacionParticipacion.tipoRolInicio=rolRelacionVinculante;
        relacionParticipacion.tipoRolFinal=rolEntidadParticipante;
        relacionDescripcionEntidad.tipoRolInicio=rolEntidadDescrita;
        relacionDescripcionEntidad.tipoRolFinal=rolDescriptorEntidad;
        relacionDescripcionRelacion.tipoRolInicio=rolRelacionDescrita;
        relacionDescripcionRelacion.tipoRolFinal=rolDescriptorRelacion;

        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadDescrita);
        objetoEntidad.incluirTipoPuerto(puertoEntidadDescrita);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadDescrita);
        objetoEntidad.incluirTipoPuerto(puertoEntidadDescrita);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadDescrita);
        objetoEntidad.incluirTipoPuerto(puertoEntidadDescrita);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadDescrita);
        objetoEntidad.incluirTipoPuerto(puertoEntidadDescrita);
        objetoRelacion.incluirTipoPuerto(puertoRelacionVinculante);
        objetoRelacion.incluirTipoPuerto(puertoRelacionDescrita);
        objetoRelacion.incluirTipoPuerto(puertoRelacionVinculante);
        objetoRelacion.incluirTipoPuerto(puertoRelacionDescrita);
        objetoRelacion.incluirTipoPuerto(puertoRelacionVinculante);
        objetoRelacion.incluirTipoPuerto(puertoRelacionDescrita);
        objetoAtributo.incluirTipoPuerto(puertoAtributoDescriptor);
        objetoAtributo.incluirTipoPuerto(puertoAtributoDescriptor);

        relacionParticipacion.incluirTipoPropiedad(propiedadDescripcionParticipacion);
        relacionParticipacion.incluirTipoPropiedad(propiedadCardinalidadParticipacion);

        objetoEntidad.incluirTipoPropiedad(propiedadNombreObjeto);
        objetoEntidad.incluirTipoPropiedad(propiedadDescripcionObjeto);
        objetoRelacion.incluirTipoPropiedad(propiedadNombreRelacion);
        objetoRelacion.incluirTipoPropiedad(propiedadDescripcionRelacion);
        objetoAtributo.incluirTipoPropiedad(propiedadNombreAtributo);
        objetoAtributo.incluirTipoPropiedad(propiedadDescripcionAtributo);

        this.incluirTipoObjeto(objetoEntidad);
        this.incluirTipoObjeto(objetoRelacion);
        this.incluirTipoObjeto(objetoAtributo);
        this.incluirTipoRelacion(relacionParticipacion);
        this.incluirTipoRelacion(relacionDescripcionEntidad);
        this.incluirTipoRelacion(relacionDescripcionRelacion);
    }
    dibujar() {
        let {createCanvas} = require('canvas');
        let canvas = createCanvas(1000, 2000);
        let contexto = canvas.getContext("2d");
        let i = 0;
        let d = 40;
        let we = 150;
        let he = 50;
        let wr = 150;
        let hr = 50;
        let wa = 150;
        let ha = 50;
        let r = 4;
        let x = d;
        let y = d;
        let lw = 1;
        let t = '';
        contexto.strokeStyle = "#1B4F72";
        contexto.fillStyle = "#D6EAF8";
        contexto.font = "14px Arial";
        contexto.textBaseline = "middle";
        for (i=0; i<this.sesion.diagrama.totalObjetos; i++) {
            switch (this.sesion.diagrama.objeto(i).tipoObjeto.id) {
                case 0: {
                    contexto.lineWidth = 2;
                    contexto.moveTo(x,y);
                    contexto.strokeRect(x, y, we, he);
                    contexto.fillRect(x+lw, y+lw, we-2*lw, he-2*lw);
                    this.sesion.diagrama.objeto(i).incluirAreaEnlace(x+(we/2) ,y+(he/2), we ,he,1);
                    x=x+we+d;
                    if (x>(800-we)) {
                        x=d;
                        y=y+he+d;
                    }
                    break;
                }
                case 1: {
                    contexto.lineWidth = 3;
                    contexto.beginPath();
                    contexto.moveTo(x,y+(hr/2));
                    contexto.lineTo(x+(wr/2),y);
                    contexto.lineTo(x+wr,y+(hr/2));
                    contexto.lineTo(x+(wr/2),y+hr);
                    contexto.closePath();
                    contexto.stroke();
                    contexto.fill();
                    this.sesion.diagrama.objeto(i).incluirAreaEnlace(x+(we/2) ,y+(he/2), we ,he,1);
                    x=x+wr+d;
                    if (x>(800-wr)) {
                        x=d;
                        y=y+hr+d;
                    }
                    break;
                }
                case 2: {
                    contexto.lineWidth = 3;
                    contexto.moveTo(x+r,y+(ha/2));
                    contexto.arc(x+r,y+(ha/2), r, 0, 2*Math.PI );
                    contexto.stroke();
                    contexto.fill();
                    this.sesion.diagrama.objeto(i).incluirAreaEnlace(x+(we/2) ,y+(he/2), we ,he,1);
                    x=x+wa+d;
                    if (x>(800-wa)) {
                        x=d;
                        y=y+ha+d;
                    }
                    break;
                }
            }
        }
        x=d;
        y=d;
        contexto.fillStyle = "#000000";
        contexto.lineWidth = 1;
        for (i=0; i<this.sesion.diagrama.totalObjetos; i++) {
            switch (this.sesion.diagrama.objeto(i).tipoObjeto.id) {
                case 0: {
                    contexto.textAlign = "center";
                    t = this.sesion.diagrama.objeto(i).cadenaDiagrama;
                    contexto.fillText(t, x+(we/2),y+(he/2), we-8);
                    x=x+we+d;
                    if (x>(800-we)) {
                        x=d;
                        y=y+he+d;
                    }
                    break;
                }
                case 1: {
                    contexto.textAlign = "center";
                    t = this.sesion.diagrama.objeto(i).cadenaDiagrama;
                    contexto.fillText(t, x+(wr/2),y+(hr/2), wr-8);
                    x=x+wr+d;
                    if (x>(800-wr)) {
                        x=d;
                        y=y+hr+d;
                    }
                    break;
                }
                case 2: {
                    contexto.textAlign = "left";
                    t = this.sesion.diagrama.objeto(i).cadenaDiagrama;
                    contexto.fillText(t, x+(4*r),y+(ha/2), wa-4);
                    x=x+wa+d;
                    if (x>(800-wa)) {
                        x=d;
                        y=y+ha+d;
                    }
                    break;
                }
            }
        }
        let canvasUrl = canvas.toDataURL();
        return canvasUrl;
    }
}