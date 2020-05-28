module.exports = class Institucion {
    constructor(id,identificacion,sigla,nombre) {
        this._id = id;
        this._identificacion = identificacion;
        this._sigla = sigla;
        this._nombre = nombre;
        this._programas = [];
    }
    set id(pId) {
        this._id = pId;
    }
    set identificacion(pIdentificacion) {
        this._identificacion = pIdentificacion;
    }
    set sigla(pSigla) {
        this._sigla = pSigla;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set programas(pProgramas) {
        this._programas = pProgramas;
    }
    get id() {
        return this._id;
    }
    get identificacion() {
        return this._identificacion;
    }
    get sigla() {
        return this._sigla;
    }
    get nombre() {
        return this._nombre;
    }
    get programas() {
        return this._programas;
    }
    get total() {
        return 1*this._programas.length;
    }
    get validez() {
        var rValidez;
        rValidez = ((1*this._identificacion.length>0) && (1*this._nombre.length>0));
        return rValidez;
    }
    incluirPrograma(pPrograma) {
        let i = this._programas.length;
        this._programas[i] = pPrograma;
    }
    get institucionJson() {
        let rInstitucionJson = JSON.stringify(this);
        return rInstitucionJson;
    }
    ordenarProgramas() {
        let i = 0;
        let j = 0;
        let k = 0;
        let tPrograma = undefined;
        for (i=0; i<this._programas.length - 1; i++) {
            k=i;
            for (j=i+1; j<this._programas.length; j++) {
                if (this._programas[j].esAnteriorA(this._programas[k])) {
                    k=j;
                }
            }
            if (k != i) {
                tPrograma = this._programas[i];
                this._programas[i] = this._programas[k];
                this._programas[k] = tPrograma;
            }
        }
    }
}