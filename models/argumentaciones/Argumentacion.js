const ConjuntoTiposAporte = require('../argumentaciones/ConjuntoTiposAporte');

module.exports = class Argumentacion {
    constructor(id,nombre,inicio) {
        this._id = id;
        this._nombre = nombre;
        if (inicio.length==0){
            this._inicio = new Date();
        } else {
            this._inicio = inicio;
        }
        this._aportes = [];
        this._conjuntoTiposAporte = new ConjuntoTiposAporte();
        this._objeto = require ('../diagramas/Objeto');
    }
    set id(pId) {
        this._id = pId;
    }
    set nombre(pNombre) {
        this._nombre = pNombre;
    }
    set inicio(pInicio) {
        this._inicio = pInicio;
    }
    set aportes(pAportes) {
        this._aportes = pAportes;
    }
    set objeto(pObjeto) {
        this._objeto = pObjeto;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get inicio() {
        return this._inicio;
    }
    get aportes() {
        return this._aportes;
    }
    get conjuntoTiposAporte() {
        return this._conjuntoTiposAporte;
    }
    get total() {
        return 1*this._aportes.length;
    }
    get vacio() {
        return (this.total==0);
    }
    get objeto() {
        return this._objeto;
    }
    get validez() {
        var rValidez;
        rValidez = (1*this._nombre.length>0);
        return rValidez;
    }
    get argumentacionJson() {
        let rArgumentacionJson = JSON.stringify(this, ['_id', '_nombre', '_conjuntoTiposAporte', '_tiposAporte', '_tipoAporteInicio', '_idTiposSucesores', '_aportes', '_ordinalEstructura', '_ordinalCronologia', '_contenido', '_tipoAporte', '_nombreUsuario', '_datoGrafico', '_areasEnlace', '_aportePredecesor']);
        return rArgumentacionJson;
    }
    ordinal(pTiempo) {
        let i = 0;
        let rOrdinal = 0;
        while (i<this.total) {
            if (this._aportes[i].tiempo <= pTiempo) {
                rOrdinal++;
            }
            i++;
        }
        return rOrdinal;
    }
    incluirAporte(pAporte) {
        let i = this._aportes.length;
        this._aportes[i] = pAporte;
        this._aportes[i]._ordinalEstructura = i+1;
        this._aportes[i]._ordinalCronologia = i+1;
    }
    aporte(pAporteId) {
        let i = 0;
        while ((i<this.total) && (this._aportes[i]._id!=pAporteId)) {
            i++;
        }
        if (i<this.total) {
            return this._aportes[i];
        } else {
            return undefined;
        }
    }
    contieneAporte(pAporteId) {
        let i = 0;
        while ((i<this.total) && (this._aportes[i].id!=pAporteId)) {
            i++;
        }
        return (i<this.total);
    }
    ordenar() {
        let i = 0;
        if (this.total>1) {
            let argumentacionOrdenada = new Argumentacion(this._id, this._nombre, this._inicio);
            let aporteReferencia = undefined;
            aporteReferencia = this._aportes[0];
            while (aporteReferencia!=undefined) {
                if (!argumentacionOrdenada.contieneAporte(aporteReferencia.id)) {
                    argumentacionOrdenada.incluirAporte(aporteReferencia);
                } else {
                    do {
                        if (aporteReferencia.tieneMasHermanos) {
                            aporteReferencia = aporteReferencia.siguienteHermano;
                        } else {
                            aporteReferencia = aporteReferencia.siguientePariente;
                        }
                    } while (!argumentacionOrdenada.contieneAporte(aporteReferencia.id));
                }
                aporteReferencia = aporteReferencia.siguiente;
            }
            this._aportes = argumentacionOrdenada._aportes;
            for (i=0; i<this.total; i++) {
                this._aportes[i]._ordinalCronologia = this.ordinal(this._aportes[i]._tiempo);
            }
        }
    }
}