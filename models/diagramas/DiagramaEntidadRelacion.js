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
        let propiedadCardinalidadParticipacion = new TipoPropiedad(7,'Cardinalidad [ 1 ó M ]');
        let rolEntidadParticipante = new TipoRol(0,'Entidad participante');
        let rolEntidadDescrita = new TipoRol(1,'Entidad descrita');
        let rolRelacionVinculante = new TipoRol(2,'Relación vinculante');
        let rolRelacionDescrita = new TipoRol(3,'Relación descrita');
        let rolAtributoDescriptor = new TipoRol(4,'Atributo descriptor');
        let rolInhabilitado = new TipoRol(5,'Rol inhabilitado');
        let puertoEntidadParticipante = new TipoPuerto(0, 'Entidad participante');
        let puertoEntidadDescrita = new TipoPuerto(1, 'Entidad descrita');
        let puertoRelacionVinculante = new TipoPuerto(2, 'Relación vinculante');
        let puertoRelacionDescrita = new TipoPuerto(3, 'Relación descrita');
        let puertoAtributoDescriptor = new TipoPuerto(4, 'Atributo descriptor');
        let puertoInhabilitado = new TipoPuerto(5, 'Inhabilitado');

        puertoEntidadParticipante.incluirTipoRol(rolEntidadParticipante);
        puertoEntidadDescrita.incluirTipoRol(rolEntidadDescrita);
        puertoRelacionVinculante.incluirTipoRol(rolRelacionVinculante);
        puertoRelacionDescrita.incluirTipoRol(rolRelacionDescrita);
        puertoAtributoDescriptor.incluirTipoRol(rolAtributoDescriptor);
        puertoInhabilitado.incluirTipoRol(rolInhabilitado);

        objetoEntidad.incluirTipoPropiedad(propiedadNombreEntidad);
        objetoEntidad.incluirTipoPropiedad(propiedadDescripcionEntidad);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoInhabilitado);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadParticipante);
        objetoEntidad.incluirTipoPuerto(puertoEntidadDescrita);

        objetoRelacion.incluirTipoPropiedad(propiedadNombreRelacion);
        objetoRelacion.incluirTipoPropiedad(propiedadDescripcionRelacion);
        objetoRelacion.incluirTipoPuerto(puertoRelacionVinculante);
        objetoRelacion.incluirTipoPuerto(puertoInhabilitado);
        objetoRelacion.incluirTipoPuerto(puertoRelacionVinculante);
        objetoRelacion.incluirTipoPuerto(puertoInhabilitado);
        objetoRelacion.incluirTipoPuerto(puertoRelacionVinculante);
        objetoRelacion.incluirTipoPuerto(puertoInhabilitado);
        objetoRelacion.incluirTipoPuerto(puertoRelacionVinculante);
        objetoRelacion.incluirTipoPuerto(puertoRelacionDescrita);

        objetoAtributo.incluirTipoPropiedad(propiedadNombreAtributo);
        objetoAtributo.incluirTipoPropiedad(propiedadDescripcionAtributo);
        objetoAtributo.incluirTipoPuerto(puertoAtributoDescriptor);

        relacionParticipacion.incluirTipoPropiedad(propiedadDescripcionParticipacion);
        relacionParticipacion.incluirTipoPropiedad(propiedadCardinalidadParticipacion);
        relacionParticipacion.tipoRolInicio=rolEntidadParticipante;
        relacionParticipacion.tipoRolFinal=rolRelacionVinculante;

        relacionDescripcionEntidad.tipoRolInicio=rolEntidadDescrita;
        relacionDescripcionEntidad.tipoRolFinal=rolAtributoDescriptor;

        relacionDescripcionRelacion.tipoRolInicio=rolRelacionDescrita;
        relacionDescripcionRelacion.tipoRolFinal=rolAtributoDescriptor;

        this.incluirTipoObjeto(objetoEntidad);
        this.incluirTipoObjeto(objetoRelacion);
        this.incluirTipoObjeto(objetoAtributo);
        this.incluirTipoRelacion(relacionParticipacion);
        this.incluirTipoRelacion(relacionDescripcionEntidad);
        this.incluirTipoRelacion(relacionDescripcionRelacion);
    }
}
