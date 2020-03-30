module.exports = class TipoAporte {
    constructor(id,nombre,habilitadoInicio) {
        this._id = id;
        this._nombre = nombre;
        this._habilitadoInicio = habilitadoInicio;
        this._idTiposSucesores = [];
        this._tiposSucesores = [];
        this._tiposAntecesores = [];
    }
    set id(pId) {
        this._id = pId;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set habilitadoInicio(pHabilitadoInicio) {
        this._habilitadoInicio = pHabilitadoInicio;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get habilitadoInicio() {
        return this._habilitadoInicio;
    }
    get idTiposSucesores() {
        return this._tiposSucesores
    }
    get tiposSucesores() {
        return this._tiposSucesores
    }
    get tiposAntecesores() {
        return this._tiposAntecesores
    }
    incluirTipoSucesor(pTipoSucesor) {
        let i = this._tiposSucesores.length;
        this._tiposSucesores[i] = pTipoSucesor;
        this._idTiposSucesores[i] = pTipoSucesor._id;
        pTipoSucesor.incluirTipoAntecesor(this);
    }
    incluirTipoAntecesor(pTipoAntecesor) {
        let i = this._tiposAntecesores.length;
        this._tiposAntecesores[i] = pTipoAntecesor;
    }
}