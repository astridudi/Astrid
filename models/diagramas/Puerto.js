const Diagrama = require('../diagramas/Diagrama');
const DatoGrafico = require('../DatoGrafico');

module.exports = class Puerto {
    constructor(id,tipoPuerto) {
        this._id = id;
        this._tipoPuerto = tipoPuerto;
        this._datoGrafico = new DatoGrafico('','','','');
    }
    get id() {
        return this._id;
    }
    get tipoPuerto() {
        return this._tipoPuerto;
    }
}
