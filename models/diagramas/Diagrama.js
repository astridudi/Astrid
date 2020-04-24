const ConjuntoTiposDiagrama = require('../diagramas/ConjuntoTiposDiagrama');

module.exports = class Diagrama {
    constructor(id,tipoDiagramaId,nombre,inicio) {
        this._id = id;
        this._nombre = nombre;
        this._tiposDiagrama = new ConjuntoTiposDiagrama();
        this._tipoDiagrama = this._tiposDiagrama.tipoDiagrama(tipoDiagramaId);
        if (inicio.length==0){
            this._inicio = new Date();
        } else {
            this._inicio = inicio;
        }
        this._objetos = [];
        this._relaciones = [];
        this._sesion = require ('../sesiones/Sesion');
    }
    set id(pId) {
        this._id = pId;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set tipoDiagrama(pTipoDiagrama) {
        this._tipoDiagrama = pTipoDiagrama;
        pTipoDiagrama._diagrama = this;
    }
    set inicio(pInicio) {
        this._inicio = pInicio;
    }
    set sesion(pSesion) {
        this._sesion = pSesion;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get tipoDiagrama() {
        return this._tipoDiagrama;
    }
    get inicio() {
        return this._inicio;
    }
    get objetos() {
        return this._objetos;
    }
    get relaciones() {
        return this._relaciones;
    }
    get sesion() {
        return this._sesion;
    }
    get tiposDiagrama() {
        return this._tiposDiagrama;
    }
    get totalObjetos() {
        return 1*this._objetos.length;
    }
    get totalRelaciones() {
        return 1*this._relaciones.length;
    }
    get validez() {
        return true;
    }
    get diagramaJson() {
        let rDiagramaJson = JSON.stringify(this, ['_id', '_nombre', '_tipoDiagrama', '_tiposObjeto', '_tiposRelacion', '_tipoRolInicio', '_tipoRolFinal', '_objetos', '_tipoObjeto', '_puertos', '_tipoPuerto', '_tiposRol', '_valoresPropiedades', '_tiempo', '_nombreUsuario', '_datoGrafico', '_x', '_y', '_areasEnlace', '_relaciones', '_tipoRelacion', '_objetoInicial', '_numeroPuertoObjetoInicial', '_objetoFinal', '_numeroPuertoObjetoFinal']);
        return rDiagramaJson;
    }
    objetoPorId(pObjetoId) {
        let rObjeto = undefined;
        let rObjetoHallado = false;
        let i = 0;
        while ((!rObjetoHallado) && (i<this._objetos.length)) {
            rObjetoHallado = (rObjetoHallado || (this._objetos[i].id == pObjetoId));
            if (rObjetoHallado) {
                rObjeto = this._objetos[i];
            }
            i++;
        }
        return rObjeto;
    }
    objeto(pObjetoIndice) {
        if (pObjetoIndice<this.totalObjetos) {
            return this._objetos[pObjetoIndice];
        } else {
            return undefined;
        }
    }
    relacionPorId(pRelacionId) {
        let rRelacion = undefined;
        let rRelacionHallada = false;
        let i = 0;
        while ((!rRelacionHallada) && (i<this._relaciones.length)) {
            rRelacionHallada = (rRelacionHallada || (this._relaciones[i].id == pRelacionId));
            if (rRelacionHallada) {
                rRelacion = this._relaciones[i];
            }
            i++;
        }
        return rRelacion;
    }
    relacion(pRelacionIndice) {
        if (pRelacionIndice<this.totalRelaciones) {
            return this._relaciones[pRelacionIndice];
        } else {
            return undefined;
        }
    }
    incluirObjeto(pObjeto) {
        let i = this._objetos.length;
        this._objetos[i] = pObjeto;
    }
    incluirRelacion(pRelacion) {
        let i = this._relaciones.length;
        this._relaciones[i] = pRelacion;
    }
}