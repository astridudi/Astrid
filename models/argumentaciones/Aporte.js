const Argumentacion = require('../argumentaciones/Argumentacion');
const DatoGrafico = require('../argumentaciones/DatoGrafico');

module.exports = class Aporte {
    constructor(id,tipoAporteId,contenido,tiempo,nombreUsuario) {
        this._id = id;
        this._argumentacion = new Argumentacion('','','');
        this._aportePredecesor = undefined;
        this._aportesSucesores = [];
        this._tipoAporte = this._argumentacion.tiposAporte.tipoAporte(tipoAporteId);
        this._contenido = contenido;
        if (tiempo.length==0){
            this._tiempo = new Date();
        } else {
            this._tiempo = tiempo;
        }
        this._nombreUsuario = nombreUsuario;
        this._datoGrafico = undefined;
        this._areasEnlace = [];
    }
    set id(pId) {
        this._id = pId;
    }
    set argumentacion(pArgumentacion) {
        this._argumentacion = pArgumentacion;
    }
    set aportePredecesor(pAportePredecesor) {
        if (pAportePredecesor!=undefined) {
            this._aportePredecesor = pAportePredecesor;
            pAportePredecesor.incluirSucesor(this);
        }
    }
    set tipoAPorte(pTipoAporte) {
        this._tipoAporte = pTipoAporte;
    }
    set contenido(pContenido) {
        this._contenido = pContenido;
    }
    set tiempo(pTiempo) {
        this._tiempo = pTiempo;
    }
    set nombreUsuario(pNombreUsuario) {
        this._nombreUsuario = pNombreUsuario;
    }
    get id() {
        return this._id;
    }
    get argumentacion() {
        return this._argumentacion;
    }
    get aportePredecesor() {
        return this._aportePredecesor;
    }
    get aportesSucesores() {
        return this._aportesSucesores;
    }
    get tipoAporte() {
        return this._tipoAporte;
    }
    get contenido() {
        return this._contenido;
    }
    get tiempo() {
        return this._tiempo;
    }
    get nombreUsuario() {
        return this._nombreUsuario;
    }
    get tiposSucesores() {
        return this._argumentacion.aporte(this._tipoAporteId).tiposSucesores;
    }
    get datoGrafico() {
        return this._datoGrafico;
    }
    get areasEnlace() {
        return this._areasEnlace;
    }
    get validez() {
        var rValidez;
        rValidez = (1*this._contenido.length>0);
        return rValidez;
    }
    get siguiente() {
        let rSiguiente = undefined;
        if (this.tieneSucesores) {
            rSiguiente = this._aportesSucesores[0];
        }
        else {
            if (this.tieneMasHermanos) {
                rSiguiente = this.siguienteHermano;
            } else {
                rSiguiente = this.siguientePariente;
            }
        }
        return rSiguiente;
    }
    get tieneSucesores() {
        return (this._aportesSucesores.length>0);
    }
    get tieneMasHermanos() {
        let i = 0;
        if (this.tienePredecesor) {
            while ((this._aportePredecesor._aportesSucesores[i].id!=this._id) && (i<this._aportePredecesor._aportesSucesores.length)) {
                i = i+1;
            }
            i=i+1;
        }
        return (i<this._aportePredecesor._aportesSucesores.length);
    }
    get siguienteHermano() {
        let rSiguienteHermano = undefined;
        let i = 0;
        if (this.tienePredecesor) {
            while ((this._aportePredecesor._aportesSucesores[i].id!=this._id) && (i<this._aportePredecesor._aportesSucesores.length)) {
                i = i+1;
            }
            i=i+1;
        }
        rSiguienteHermano = this._aportePredecesor._aportesSucesores[i]
        return rSiguienteHermano;
    }
    get siguientePariente() {
        let rSiguientePariente = this._aportePredecesor;
        while ((rSiguientePariente!=undefined) && (rSiguientePariente.tienePredecesor) && (!rSiguientePariente.tieneMasHermanos)) {
            rSiguientePariente = rSiguientePariente._aportePredecesor;
        }
        if ((rSiguientePariente!=undefined) && (rSiguientePariente.tienePredecesor)) {
            rSiguientePariente = rSiguientePariente.siguienteHermano;
        }
        else {
            rSiguientePariente = undefined;
        }
        return rSiguientePariente;
    }
    get tienePredecesor() {
        return (this._aportePredecesor!=undefined);
    }
    get ordinal() {
        return (this._argumentacion.ordinal(this));
    }
    siguienteSucesor(pId) {
        if (pId = this.pId) {
            return this._aportesSucesores[0];
        }
        else {
            let i = 0;

        }
    }
    getIndiceSucesor(pIndice) {
        return (this._aportesSucesores[pIndice]);
    }
    incluirSucesor(pSucesor) {
        let j = this._aportesSucesores.length;
        if (j>0) {
            let a = this._aportesSucesores[j-1].tipoAporte.id;
            let b = pSucesor.tipoAporte.id;
            a = a + b;
            b = a + b;
        }
        while ((j>0) && (this._aportesSucesores[j-1].tipoAporte.id < pSucesor.tipoAporte.id)) {
            this._aportesSucesores[j] = this._aportesSucesores[j-1];
            j = j - 1;
        }
        this._aportesSucesores[j] = pSucesor;
//        this._aportesSucesores[this._aportesSucesores.length] = pSucesor;
    }
    incluirDatoGrafico(pX,pY,pAncho,pAlto,pLineas) {
        this._datoGrafico = new DatoGrafico(pX,pY,pAncho,pAlto,pLineas);
    }
    incluirAreaEnlace(pX,pY,pAncho,pAlto,pLineas) {
        this._areasEnlace[this._areasEnlace.length] = new DatoGrafico(pX,pY,pAncho,pAlto,pLineas);
    }
}