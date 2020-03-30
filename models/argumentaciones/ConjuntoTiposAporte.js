const TipoAporte = require('../argumentaciones/TipoAporte');

module.exports = class ConjuntoTiposAporte {
    constructor() {
        let tProposicion = new TipoAporte(0,'Proposición',true);
        let tApoyo = new TipoAporte(1,'Apoyo',false);
        let tRefutacion = new TipoAporte(2,'Refutación',false);
        let tEvidenciaApoyo = new TipoAporte(3,'Evidencia',false);
        let tContraevidenciaApoyo = new TipoAporte(4,'Contraevidencia',false);
        let tPreguntaApoyo = new TipoAporte(5,'Pregunta',false);
        let tRespuestaApoyo = new TipoAporte(6,'Respuesta',false);
        let tEvidenciaRefutacion = new TipoAporte(7,'Evidencia',false);
        let tContraevidenciaRefutacion = new TipoAporte(8,'Contraevidencia',false);
        let tPreguntaRefutacion = new TipoAporte(9,'Pregunta',false);
        let tRespuestaRefutacion = new TipoAporte(10,'Respuesta',false);
        tProposicion.incluirTipoSucesor(tApoyo);
        tProposicion.incluirTipoSucesor(tRefutacion);
        tProposicion.incluirTipoSucesor(tProposicion);
        tApoyo.incluirTipoSucesor(tEvidenciaApoyo);
        tApoyo.incluirTipoSucesor(tPreguntaApoyo);
        tRefutacion.incluirTipoSucesor(tEvidenciaRefutacion);
        tRefutacion.incluirTipoSucesor(tPreguntaRefutacion);
        tEvidenciaApoyo.incluirTipoSucesor(tContraevidenciaApoyo);
        tEvidenciaRefutacion.incluirTipoSucesor(tContraevidenciaRefutacion);
        tPreguntaApoyo.incluirTipoSucesor(tRespuestaApoyo);
        tPreguntaRefutacion.incluirTipoSucesor(tRespuestaRefutacion);
        this._tiposAporte = [];
        this.incluirTipoAporte(tProposicion);
        this.incluirTipoAporte(tApoyo);
        this.incluirTipoAporte(tRefutacion);
        this.incluirTipoAporte(tEvidenciaApoyo);
        this.incluirTipoAporte(tContraevidenciaApoyo);
        this.incluirTipoAporte(tPreguntaApoyo);
        this.incluirTipoAporte(tRespuestaApoyo);
        this.incluirTipoAporte(tEvidenciaRefutacion);
        this.incluirTipoAporte(tContraevidenciaRefutacion);
        this.incluirTipoAporte(tPreguntaRefutacion);
        this.incluirTipoAporte(tRespuestaRefutacion);
        this._tipoAporteInicio = tProposicion;
    }
    set tiposAporte(pTipoAporte) {
        this._tiposAporte = pTipoAporte;
    }
    get tiposAporte() {
        return this._tiposAporte;
    }
    get tipoAporteInicio() {
        return this._tipoAporteInicio;
    }
    tipoAporte(pIdTipoAporte) {
        return this._tiposAporte[pIdTipoAporte];
    }
    incluirTipoAporte(pTipoAporte) {
        let i = this._tiposAporte.length;
        this._tiposAporte[i] = pTipoAporte;
    }
}
