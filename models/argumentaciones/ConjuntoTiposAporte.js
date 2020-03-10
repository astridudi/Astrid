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
        this._argumentacion = require('../argumentaciones/Argumentacion');
    }
    set tiposAporte(pTipoAporte) {
        this._tiposAporte = pTipoAporte;
    }
    set argumentacion(pArgumentacion) {
        this._argumentacion = pArgumentacion;
    }
    get tiposAporte() {
        return this._tiposAporte;
    }
    get tipoAporteInicio() {
        return this._tipoAporteInicio;
    }
    get argumentacion() {
        return this._argumentacion;
    }
    tipoAporte(pIdTipoAporte) {
        return this._tiposAporte[pIdTipoAporte];
    }
    incluirTipoAporte(pTipoAporte) {
        let i = this._tiposAporte.length;
        this._tiposAporte[i] = pTipoAporte;
    }
    dibujar() {
        let anchoCanvas = 1000;
        let altoCanvas = 2000;
        let {createCanvas} = require('canvas');
        let canvas = createCanvas(anchoCanvas, altoCanvas);
        let contexto = canvas.getContext("2d");

        contexto.strokeStyle = "#FFFFFF";
        contexto.fillStyle = "#FFFFFF";
        contexto.lineWidth = 1;
        contexto.fillRect(0,0,1000,2000);

        contexto.strokeStyle = "#1B4F72";
        contexto.fillStyle = "#D6EAF8";
        contexto.font = "14px Arial";
        contexto.textBaseline = "middle";
        contexto.lineWidth = 1;
        let altoRenglon = contexto.measureText('X').emHeightAscent + contexto.measureText('X').emHeightDescent;
        let i = 0;
        let j = 0;
        let margen = 40;
        let curva = 0;
        let yIzquierda = margen;
        let yIzquierdaIzquierda = margen;
        let yIzquierdaCentro = margen;
        let yCentro = margen;
        let yDerecha = margen;
        let yDerechaDerecha = margen;
        let yDerechaCentro = margen;
        let alto = altoRenglon;
        let lineas = 0;
        let anchoCajaCentro = 3 * anchoCanvas / 4;
        let xCajaCentro = (anchoCanvas - anchoCajaCentro) / 2;
        let anchoCajaLateral = (anchoCanvas / 2) - (2 * margen);
        let xCajaIzquierda = margen;
        let xCajaDerecha = anchoCanvas - margen - anchoCajaLateral;
        let anchoCajaAuxiliar = (anchoCajaLateral - margen) / 2;
        let xCajaIzquierdaCentro = xCajaIzquierda + anchoCajaLateral - anchoCajaAuxiliar;
        let xCajaDerechaCentro = xCajaDerecha + anchoCajaLateral - anchoCajaAuxiliar;
        let t = '';
        let x = 0;
        let y = 0;
        let ancho = 0;
        let solapa = altoRenglon/2;
        let strokes = ["#F1B434","#228848","#F93822","#228848","#63666A","#228848","#63666A","#F93822","#63666A","#F93822","#63666A"];
        let fills = ["#F1B434","#228848","#F93822","#228848","#63666A","#228848","#63666A","#F93822","#63666A","#F93822","#63666A"];
        let fills2 = ["#FCF3CF","#EAFAF1","#F9EBEA","#EAFAF1","#EAFAF1","#EAFAF1","#EAFAF1","#F9EBEA","#F9EBEA","#F9EBEA","#F9EBEA"];
        //let fills2 = ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"];
        //let fills = ["#D68910","#0B5345","#CB4335","#85929E","#F9EBEA","#229954","#F4F6F6","#85929E","#EAFAF1","#E74C3C","#F4F6F6"];
        //let fills2 = ["#FCF3CF","#EAFAF1","#F9EBEA","#EAFAF1","#F9EBEA","#F4F6F6","#F4F6F6","#F9EBEA","#EAFAF1","#F4F6F6","#F4F6F6"];
        let f = [];
        let k = 0;
        let p = 0;
        if (this.argumentacion.vacio) {
            contexto.lineWidth = 1;
            t = "Pulse para iniciar";
            lineas = Math.ceil(contexto.measureText(t).width / anchoCajaCentro);
            alto = lineas * altoRenglon * 1.2;
            contexto.strokeStyle = "#D68910";
            contexto.fillStyle = "#FCF3CF";
            contexto.lineWidth = 3;
            curva = alto / 8;
            x = xCajaCentro;
            y = yCentro;
            ancho = anchoCajaCentro;
            contexto.beginPath();
            contexto.moveTo(x,y + curva);
            contexto.quadraticCurveTo(x, y, x + curva, y);
            contexto.lineTo(x + ancho - curva, y);
            contexto.quadraticCurveTo(x + ancho, y,x + ancho, y + curva );
            contexto.lineTo(x + ancho, y + alto - curva);
            contexto.quadraticCurveTo(x + ancho, y + alto, x + ancho - curva, y + alto);
            contexto.lineTo(x + curva, y + alto);
            contexto.quadraticCurveTo(x, y + alto, x, y + alto - curva);
            contexto.closePath();
            contexto.stroke();
            contexto.fill();
            contexto.strokeStyle = "#1B4F72";
            contexto.textAlign = "center";
            contexto.lineWidth = 1;
            contexto.strokeText(t, x + ancho/2,y+alto/2, ancho-8);
        }
        for (i=0; i<this.argumentacion.total; i++) {
            t = this.argumentacion.aportes[i].contenido;
            contexto.lineWidth = 1;
            // Parte 1:  Calcula coordenadas y parámetros de dibujo
            switch (this.argumentacion.aportes[i].tipoAporte.id) {
                case 0: {
                    x = xCajaCentro;
                    y = yCentro;
                    ancho = anchoCajaCentro;
                    break;
                }
                case 1: {
                    x = xCajaIzquierda;
                    y = yIzquierda;
                    ancho = anchoCajaLateral;
                    break;
                }
                case 2: {
                    x = xCajaDerecha;
                    y = yDerecha;
                    ancho = anchoCajaLateral;
                    break;
                }
                case 3: {
                    x = xCajaIzquierda;
                    y = yIzquierdaIzquierda;
                    ancho = anchoCajaAuxiliar;
                    break;
                }
                case 4: {
                    x = xCajaIzquierda;
                    y = yIzquierdaIzquierda;
                    ancho = anchoCajaAuxiliar;
                    break;
                }
                case 5: {
                    x = xCajaIzquierdaCentro;
                    y = yIzquierdaCentro;
                    ancho = anchoCajaAuxiliar;
                    break;
                }
                case 6: {
                    x = xCajaIzquierdaCentro;
                    y = yIzquierdaCentro;
                    ancho = anchoCajaAuxiliar;
                    break;
                }
                case 7: {
                    x = xCajaDerechaCentro;
                    y = yDerechaDerecha;
                    ancho = anchoCajaAuxiliar;
                    break;
                }
                case 8: {
                    x = xCajaDerechaCentro;
                    y = yDerechaDerecha
                    ancho = anchoCajaAuxiliar;
                    break;
                }
                case 9: {
                    x = xCajaDerecha;
                    y = yDerechaCentro;
                    ancho = anchoCajaAuxiliar;
                    break;
                }
                case 10: {
                    x = xCajaDerecha;
                    y = yDerechaCentro;
                    ancho = anchoCajaAuxiliar;
                    break;
                }
            }
            lineas = Math.ceil(contexto.measureText(t).width / ancho);
            alto = lineas * altoRenglon * 1.2;
            curva = alto / 8;
            this.argumentacion.aportes[i].incluirDatoGrafico(x + ancho/2,y+alto/2,ancho,alto,lineas);
            // Parte 1:  Calcula coordenadas y parámetros de dibujo
            switch (this.argumentacion.aportes[i].tipoAporte.id) {
                case 0: {
                    this.argumentacion.aportes[i].incluirAreaEnlace(x ,y+alto/2, 2 * solapa ,alto,lineas);
                    this.argumentacion.aportes[i].incluirAreaEnlace(x + ancho ,y+alto/2, 2 * solapa ,alto,lineas);
                    this.argumentacion.aportes[i].incluirAreaEnlace(x + ancho/2 ,y + alto , 2 * solapa ,2*solapa ,lineas);
                    break;
                }
                case 1: {
                    this.argumentacion.aportes[i].incluirAreaEnlace(x ,y+alto/2, 2 * solapa ,alto,lineas);
                    this.argumentacion.aportes[i].incluirAreaEnlace(x + ancho ,y+alto/2, 2 * solapa ,alto,lineas);
                    break;
                }
                case 2: {
                    this.argumentacion.aportes[i].incluirAreaEnlace(x + ancho ,y+alto/2, 2 * solapa ,alto,lineas);
                    this.argumentacion.aportes[i].incluirAreaEnlace(x ,y+alto/2, 2 * solapa ,alto,lineas);
                    break;
                }
                case 3:
                case 9: {
                    this.argumentacion.aportes[i].incluirAreaEnlace(x + ancho ,y+alto/2, 2 * solapa ,alto,lineas);
                    break;
                }
                case 5:
                case 7: {
                    this.argumentacion.aportes[i].incluirAreaEnlace(x ,y+alto/2, 2 * solapa ,alto,lineas);
                    break;
                }
            }
            contexto.strokeStyle = strokes[this.argumentacion.aportes[i].tipoAporte.id];
            contexto.fillStyle = fills[this.argumentacion.aportes[i].tipoAporte.id];
            contexto.lineWidth = 3;
            contexto.beginPath();
            // Parte 2: Traza cajas y solapas
            switch (this.argumentacion.aportes[i].tipoAporte.id) {
                case 0: {
                    contexto.moveTo(x - solapa,y + curva);
                    contexto.quadraticCurveTo(x - solapa, y, x - solapa + curva, y);
                    contexto.lineTo(x + ancho + solapa - curva, y);
                    contexto.quadraticCurveTo(x + ancho + solapa, y,x + ancho + solapa, y + curva );
                    contexto.lineTo(x + ancho + solapa, y + alto - curva);
                    contexto.quadraticCurveTo(x + ancho + solapa, y + alto, x + ancho + solapa - curva, y + alto);
                    contexto.lineTo(x - solapa + curva, y + alto);
                    contexto.quadraticCurveTo(x - solapa, y + alto, x - solapa, y + alto - curva);
                    contexto.closePath();
                    contexto.stroke();
                    contexto.fill();
                    contexto.beginPath();
                    contexto.moveTo(x + ancho/2 - solapa,y + alto);
                    contexto.lineTo(x + ancho/2 + solapa, y + alto);
                    contexto.quadraticCurveTo(x + ancho/2 + solapa, y + alto + solapa,x + ancho/2 + solapa - curva, y + alto + solapa );
                    contexto.lineTo(x + ancho/2 - solapa + curva,y + alto + solapa);
                    contexto.quadraticCurveTo(x + ancho/2 - solapa, y + alto + solapa, x + ancho/2 - solapa, y + alto + solapa - curva);
                    contexto.closePath();
                    contexto.stroke();
                    contexto.fill();
                    contexto.fillStyle = "#FCF3CF";
                    break;
                }
                case 1:
                case 2: {
                    contexto.moveTo(x - solapa,y + curva);
                    contexto.quadraticCurveTo(x - solapa, y, x - solapa + curva, y);
                    contexto.lineTo(x + ancho + solapa - curva, y);
                    contexto.quadraticCurveTo(x + ancho + solapa, y,x + ancho + solapa, y + curva );
                    contexto.lineTo(x + ancho + solapa, y + alto - curva);
                    contexto.quadraticCurveTo(x + ancho + solapa, y + alto, x + ancho + solapa - curva, y + alto);
                    contexto.lineTo(x - solapa + curva, y + alto);
                    contexto.quadraticCurveTo(x - solapa, y + alto, x - solapa, y + alto - curva);
                    contexto.closePath();
                    contexto.stroke();
                    contexto.fill();
                    contexto.fillStyle = "#EAFAF1";
                    break;
                }
                case 3:
                case 9: {
                    contexto.moveTo(x ,y + curva);
                    contexto.quadraticCurveTo(x , y, x + curva, y);
                    contexto.lineTo(x + ancho + solapa - curva, y);
                    contexto.quadraticCurveTo(x + ancho + solapa, y,x + ancho + solapa, y + curva );
                    contexto.lineTo(x + ancho + solapa, y + alto - curva);
                    contexto.quadraticCurveTo(x + ancho + solapa, y + alto, x + ancho + solapa - curva, y + alto);
                    contexto.lineTo(x + curva, y + alto);
                    contexto.quadraticCurveTo(x , y + alto, x , y + alto - curva);
                    contexto.closePath();
                    contexto.stroke();
                    contexto.fill();
                    contexto.fillStyle = "#EAFAF1";
                    break;
                }
                case 5:
                case 7: {
                    contexto.moveTo(x - solapa,y + curva);
                    contexto.quadraticCurveTo(x - solapa, y, x - solapa + curva, y);
                    contexto.lineTo(x + ancho - curva, y);
                    contexto.quadraticCurveTo(x + ancho , y,x + ancho , y + curva );
                    contexto.lineTo(x + ancho , y + alto - curva);
                    contexto.quadraticCurveTo(x + ancho , y + alto, x + ancho - curva, y + alto);
                    contexto.lineTo(x - solapa + curva, y + alto);
                    contexto.quadraticCurveTo(x - solapa, y + alto, x - solapa, y + alto - curva);
                    contexto.closePath();
                    contexto.stroke();
                    contexto.fill();
                    contexto.fillStyle = "#F4F6F6";
                    break;
                }
            }
            contexto.fillStyle = "#000000";
            contexto.font = "12px Arial";
            contexto.lineWidth = 1;
            switch (this.argumentacion.aportes[i].tipoAporte.id) {
                case 0: {
                    contexto.textAlign = "left";
                    contexto.fillText(this.argumentacion.aportes[i].ordinal+' - '+this.argumentacion.aportes[i].tipoAporte.nombre, x, y - solapa, this.argumentacion.aportes[i].datoGrafico.ancho-8);
                    break;
                }
                case 1:
                case 2: {
                    contexto.textAlign = "center";
                    contexto.fillText(this.argumentacion.aportes[i].ordinal+' - '+this.argumentacion.aportes[i].tipoAporte.nombre, x + anchoCajaLateral / 2 , y - solapa, this.argumentacion.aportes[i].datoGrafico.ancho-8);
                    break;
                }
                case 3:
                case 4:
                case 5:
                case 6: 
                case 7:
                case 8:
                case 9:
                case 10: {
                    contexto.textAlign = "center";
                    contexto.fillText(this.argumentacion.aportes[i].ordinal+' - '+this.argumentacion.aportes[i].tipoAporte.nombre, x + anchoCajaAuxiliar / 2 , y - solapa, this.argumentacion.aportes[i].datoGrafico.ancho-8);
                    break;
                }
            }
            contexto.textAlign = "center";
            contexto.font = "14px Arial";
            contexto.lineWidth = 3;
            // Parte 3: Actualiza parámetro de trazo
            contexto.fillStyle = fills2[this.argumentacion.aportes[i].tipoAporte.id];
            contexto.beginPath();
            contexto.moveTo(x,y + curva);
            contexto.quadraticCurveTo(x, y, x + curva, y);
            contexto.lineTo(x + ancho - curva, y);
            contexto.quadraticCurveTo(x + ancho, y,x + ancho, y + curva );
            contexto.lineTo(x + ancho, y + alto - curva);
            contexto.quadraticCurveTo(x + ancho, y + alto, x + ancho - curva, y + alto);
            contexto.lineTo(x + curva, y + alto);
            contexto.quadraticCurveTo(x, y + alto, x, y + alto - curva);
            contexto.closePath();
            contexto.stroke();
            contexto.fill();
            contexto.strokeStyle = "#63666A";
            contexto.lineWidth = 2;
            switch (this.argumentacion.aportes[i].tipoAporte.id) {
                case 0: {
                    if (this.argumentacion.aportes[i].tienePredecesor) {
                        contexto.beginPath();
                        contexto.moveTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.x, this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo + solapa );
                        contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.x,this.argumentacion.aportes[i].datoGrafico.yArriba);
                        contexto.stroke();
                    }
                    yCentro=yCentro+alto+altoRenglon;
                    yIzquierdaIzquierda=yCentro;
                    yIzquierdaCentro=yCentro;
                    yDerechaDerecha=yCentro;
                    yDerechaCentro=yCentro;
                    break;
                }
                case 1: {
                    contexto.beginPath();
                    contexto.moveTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xIzquierda - solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen) + solapa, this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen), this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa, this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen), this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen),this.argumentacion.aportes[i].datoGrafico.yArriba);
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen) ,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa ,this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen) + solapa ,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xIzquierda - solapa ,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa);
                    contexto.stroke();
                    yIzquierda=yIzquierda+alto+altoRenglon;
                    yIzquierdaIzquierda=yIzquierda;
                    yIzquierdaCentro=yIzquierda;
                    break;
                }
                case 2: {
                    contexto.beginPath();
                    contexto.moveTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xDerecha + solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen) - solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen) ,this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa , this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen) , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen),this.argumentacion.aportes[i].datoGrafico.yArriba );
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen) , this.argumentacion.aportes[i].datoGrafico.yArriba + solapa , this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen) - solapa , this.argumentacion.aportes[i].datoGrafico.yArriba + solapa);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xDerecha + solapa ,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.stroke();
                    yDerecha=yDerecha+alto+altoRenglon;
                    yDerechaDerecha=yDerecha;
                    yDerechaCentro=yDerecha;
                    break;
                }
                case 3: {
                    contexto.beginPath();
                    contexto.moveTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xIzquierda - solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMediaMargenIzquierda(margen) + solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMediaMargenIzquierda(margen), this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa, this.argumentacion.aportes[i].datoGrafico.xMediaMargenIzquierda(margen), this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMediaMargenIzquierda(margen),this.argumentacion.aportes[i].datoGrafico.yArriba );
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMediaMargenIzquierda(margen) ,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa ,this.argumentacion.aportes[i].datoGrafico.xMediaMargenIzquierda(margen) + solapa ,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xIzquierda ,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.stroke();
                    yIzquierdaIzquierda=yIzquierdaIzquierda+alto+altoRenglon;
                    break;
                }
                case 4: {
                    contexto.beginPath();
                    contexto.moveTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xDerecha + solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xDerecha + 2* solapa, this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xDerecha + 2* solapa, this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xDerecha,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.stroke();
                    yIzquierdaIzquierda=yIzquierdaIzquierda+alto+altoRenglon;
                    break;
                }
                case 5: {
                    contexto.beginPath();
                    contexto.moveTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xDerecha + solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen) - solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen), this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa, this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen), this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen),this.argumentacion.aportes[i].datoGrafico.yArriba );
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen) ,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa ,this.argumentacion.aportes[i].datoGrafico.xMargenDerecha(margen) - solapa ,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xDerecha,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.stroke();
                    yIzquierdaCentro=yIzquierdaCentro+alto+altoRenglon;
                    break;
                }
                case 6: {
                    contexto.beginPath();
                    contexto.moveTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xIzquierda - solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xIzquierda - 2 * solapa, this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xIzquierda - 2 * solapa, this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xIzquierda,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.stroke();
                    yIzquierdaCentro=yIzquierdaCentro+alto+altoRenglon;
                    break;
                }
                case 7: {
                    contexto.beginPath();
                    contexto.moveTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xDerecha + solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMediaMargenDerecha(margen) - solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMediaMargenDerecha(margen), this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa, this.argumentacion.aportes[i].datoGrafico.xMediaMargenDerecha(margen), this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMediaMargenDerecha(margen),this.argumentacion.aportes[i].datoGrafico.yArriba );
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMediaMargenDerecha(margen), this.argumentacion.aportes[i].datoGrafico.yArriba + solapa, this.argumentacion.aportes[i].datoGrafico.xDerecha + solapa, this.argumentacion.aportes[i].datoGrafico.yArriba + solapa);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xDerecha,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.stroke();
                    yDerechaDerecha=yDerechaDerecha+alto+altoRenglon;
                    break;
                }
                case 8: {
                    contexto.beginPath();
                    contexto.moveTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xIzquierda - solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xIzquierda - 2 * solapa, this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xIzquierda - 2 * solapa, this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xIzquierda,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.stroke();
                    yDerechaDerecha=yDerechaDerecha+alto+altoRenglon;
                    break;
                }
                case 9: {
                    contexto.beginPath();
                    contexto.moveTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xIzquierda - solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen) + solapa, this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen), this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa , this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen), this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen),this.argumentacion.aportes[i].datoGrafico.yArriba );
                    contexto.quadraticCurveTo(this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen), this.argumentacion.aportes[i].datoGrafico.yArriba + solapa , this.argumentacion.aportes[i].datoGrafico.xMargenIzquierda(margen) + solapa, this.argumentacion.aportes[i].datoGrafico.yArriba + solapa);
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xIzquierda,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.stroke();
                    yDerechaCentro=yDerechaCentro+alto+altoRenglon;
                    break;
                }
                case 10: {
                    contexto.beginPath();
                    contexto.moveTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xDerecha + solapa , this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xDerecha + 2 * solapa, this.argumentacion.aportes[i].aportePredecesor.datoGrafico.yAbajo - solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].aportePredecesor.datoGrafico.xDerecha + 2 * solapa, this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.lineTo(this.argumentacion.aportes[i].datoGrafico.xDerecha,this.argumentacion.aportes[i].datoGrafico.yArriba + solapa );
                    contexto.stroke();
                    yDerechaCentro=yDerechaCentro+alto+altoRenglon;
                    break;
                }
            }
            yIzquierda = Math.max(yIzquierda, yIzquierdaIzquierda, yIzquierdaCentro);
            yDerecha = Math.max(yDerecha, yDerechaDerecha, yDerechaCentro);
            yCentro = Math.max(yIzquierda, yDerecha, yCentro);
            contexto.fillStyle = "#000000";
            contexto.textAlign = "center";
            contexto.lineWidth = 1;
            let n = 0;
            if (lineas>1) {
                n = 0;
                for (j=0; j<lineas-1; j++) {
                    k = (t.length / lineas) * (j+1);
                    p = 0;
                    while ((t.substring(k-p,k-p+1)!=" ") && (p<(t.length / lineas))) {
                        p++;
                    }
                    f[j] = t.substring(n,k-p+1);
                    n = k-p+1;
                }
                f[j] = t.substring(n,t.length);
                for (j=0; j<lineas; j++) {
                    contexto.fillText(f[j], this.argumentacion.aportes[i].datoGrafico.x,this.argumentacion.aportes[i].datoGrafico.y - alto/2 + (altoRenglon / 2) + altoRenglon * j, this.argumentacion.aportes[i].datoGrafico.ancho-8);
                }
            }
            else {
                contexto.fillText(t, this.argumentacion.aportes[i].datoGrafico.x,this.argumentacion.aportes[i].datoGrafico.y, this.argumentacion.aportes[i].datoGrafico.ancho-8);
            }
            yCentro = Math.max(yIzquierda,yCentro,yDerecha);
            for (j=0; j<this.argumentacion.aportes[i].areasEnlace.length; j++) {
                this.argumentacion.aportes[i].areasEnlace[j].tipoSucesor = this.argumentacion.aportes[i].tipoAporte.tiposSucesores[j];
            }
        }
        let canvasUrl = canvas.toDataURL();
        return canvasUrl;
    }
}
