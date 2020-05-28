module.exports = class ConjuntoSesiones {
    constructor() {
        this._arreglo = [];
    }
    set arreglo(pArreglo) {
        this._arreglo = pArreglo;
    }
    get arreglo() {
        return this._arreglo;
    }
    get total() {
        return 1*this._arreglo.length;
    }
    incluirSesion(pSesion) {
        let i = this._arreglo.length;
        this._arreglo[i] = pSesion;
    }
    get sesionesJson() {
        let rSesionesJson = JSON.stringify(this);
        return rSesionesJson;
    }
    ordenarSesiones() {
        let i = 0;
        let j = 0;
        let k = 0;
        let tSesion = undefined;
        for (i=0; i<this._arreglo.length - 1; i++) {
            k=i;
            for (j=i+1; j<this._arreglo.length; j++) {
                if (this._arreglo[j].esAnteriorA(this._arreglo[k])) {
                    k=j;
                }
            }
            if (k != i) {
                tSesion = this._arreglo[i];
                this._arreglo[i] = this._arreglo[k];
                this._arreglo[k] = tSesion;
            }
        }
    }
}