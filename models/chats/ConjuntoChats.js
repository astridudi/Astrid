module.exports = class ConjuntoChats {
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
    incluirChat(pChat) {
        let i = this._arreglo.length;
        this._arreglo[i] = pChat;
    }
}