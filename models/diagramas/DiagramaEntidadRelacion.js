const TipoDiagrama = require('../diagramas/TipoDiagrama');
const TipoObjeto = require('../diagramas/TipoObjeto');
const TipoRelacion = require('../diagramas/TipoRelacion');
const TipoPropiedad = require('../diagramas/TipoPropiedad');
const TipoRol = require('../diagramas/TipoRol');
const TipoPuerto = require('../diagramas/TipoPuerto');

module.exports = class DiagramaEntidadRelacion extends TipoDiagrama {
    constructor() {
        super(1,'Diagrama Entidad Relación');
        super.scriptDibujo = 'dibujarDiagramaEntidadRelacion.js';
        let objetoEntidad = new TipoObjeto(0,'Entidad',true);
        let objetoRelacion = new TipoObjeto(1,'Relación',true);
        let objetoAtributo = new TipoObjeto(2,'Atributo',true);
        let relacionParticipacion = new TipoRelacion(0,'Participación');
        let relacionDescripcionEntidad = new TipoRelacion(1,'Descripción de entidad');
        let relacionDescripcionRelacion = new TipoRelacion(2,'Descripción de relación');
        let propiedadNombreEntidad = new TipoPropiedad(0,'Nombre');
        let propiedadDescripcionEntidad = new TipoPropiedad(1,'Descripción');
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

        objetoEntidad.incluirTipoPropiedad(propiedadNombreEntidad);
        objetoEntidad.incluirTipoPropiedad(propiedadDescripcionEntidad);
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
}