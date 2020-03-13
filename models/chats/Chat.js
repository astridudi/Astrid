module.exports = class Chat {
    constructor(id,nombre,inicio) {
        this._id = id;
        this._nombre = nombre;
        if (inicio.length==0){
            this._inicio = new Date();
        } else {
            this._inicio = inicio;
        }
        this._arreglo = [];
        this._sesion = require ('../sesiones/Sesion');
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
    set arreglo(pArreglo) {
        this._arreglo = pArreglo;
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
    get inicio() {
        return this._inicio;
    }
    get arreglo() {
        return this._arreglo;
    }
    get sesion() {
        return this._sesion;
    }
    get total() {
        return 1*this._arreglo.length;
    }
    get vacio() {
        return (this.total==0);
    }
    get validez() {
        var rValidez;
        rValidez = (1*this._nombre.length>0);
        return rValidez;
    }
    incluirMensaje(pMensajeChat) {
        let i = this._arreglo.length;
        this._arreglo[i] = pMensajeChat;
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

        contexto.strokeStyle = "#0B5345";
        contexto.fillStyle = "#EAFAF1";
        contexto.font = "14px Arial";
        contexto.font
        contexto.textBaseline = "middle";
        contexto.lineWidth = 1;
        let altoRenglon = contexto.measureText('X').emHeightAscent + contexto.measureText('X').emHeightDescent;
        let i = 0;
        let j = 0;
        let margen = 40;
        let curva = 0;
        let yCentro = margen;
        let alto = altoRenglon;
        let lineas = 0;
        let anchoCaja = 5 * anchoCanvas / 8;
        let xCajaIzquierda = margen;
        let xCajaCentro = (anchoCanvas - anchoCaja) / 2;
        let xCajaDerecha = anchoCanvas - margen - anchoCaja;
        let t = '';
        let x = 0;
        let y = 0;
        let ancho = 0;
        let strokes = ["#D68910","#D68910","#0B5345"];
        //let strokes = ["#FCF3CF","#FCF3CF","#EAFAF1"];
        let fills = ["#FCF3CF","#FCF3CF","#EAFAF1"];
        let f = [];
        let k = 0;
        let p = 0;
        let tipoCaja=2;
        x = xCajaDerecha;
        for (i=0; i<this.sesion.chat.total; i++) {
            t = this.sesion.chat.arreglo[i].contenido;
            if (this.sesion.chat.arreglo[i].nombreUsuario == this.sesion.nombreUsuario) {
                tipoCaja=2;
            }
            else {
                tipoCaja=1;
            }
            switch (tipoCaja) {
                case 0: {
                    x = xCajaCentro;
                    break;
                }
                case 1: {
                    x = xCajaIzquierda;
                    break;
                }
                case 2: {
                    x = xCajaDerecha;
                    break;
                }
            }
            contexto.strokeStyle = strokes[tipoCaja];
            contexto.fillStyle = fills[tipoCaja];
            y = yCentro;
            ancho = anchoCaja;
            lineas = Math.ceil(contexto.measureText(t).width / ancho);
            alto = lineas * altoRenglon * 1.2;
            curva = alto / 8;
            this.sesion.chat.arreglo[i].incluirDatoGrafico(x + ancho/2,y+alto/2,ancho,alto,lineas);
            this.sesion.chat.arreglo[i].incluirAreaEnlace(x ,y, ancho ,alto,lineas);
            contexto.lineWidth = 3;
            contexto.beginPath();
            switch (tipoCaja) {
                case 0: {
                    contexto.moveTo(x,y + curva);
                    contexto.quadraticCurveTo(x, y, x + curva, y);
                    contexto.lineTo(x + ancho/2 - curva/2, y);
                    contexto.lineTo(x + ancho/2, y - curva);
                    contexto.lineTo(x + ancho/2 + curva/2, y);
                    contexto.lineTo(x + ancho - curva, y);
                    contexto.quadraticCurveTo(x + ancho, y,x + ancho, y + curva );
                    break;
                }
                case 1: {
                    contexto.moveTo(x,y + curva);
                    contexto.lineTo(x - 2 * curva, y);
                    contexto.lineTo(x + ancho - curva, y);
                    contexto.quadraticCurveTo(x + ancho, y,x + ancho, y + curva );
                    break;
                }
                case 2: {
                    contexto.moveTo(x,y + curva);
                    contexto.quadraticCurveTo(x, y, x + curva, y);
                    contexto.lineTo(x + ancho + 2 * curva, y);
                    contexto.lineTo(x + ancho, y + curva);
                    break;
                }
            }
            contexto.lineTo(x + ancho, y + alto - curva);
            contexto.quadraticCurveTo(x + ancho, y + alto, x + ancho - curva, y + alto);
            contexto.lineTo(x + curva, y + alto);
            contexto.quadraticCurveTo(x, y + alto, x, y + alto - curva);
            contexto.closePath();
            contexto.stroke();
            contexto.fill();
            contexto.fillStyle = "#000000";
            contexto.textAlign = "center";
            contexto.lineWidth = 1;
            let n = 0;
            if (tipoCaja==1) {
                contexto.font = "12px Arial";
                contexto.textAlign = "left";
                contexto.fillText(this.sesion.chat.arreglo[i].nombreUsuario , this.sesion.chat.arreglo[i].datoGrafico.x - ancho / 2 - 2 * curva,this.sesion.chat.arreglo[i].datoGrafico.y - alto/2 - (altoRenglon / 2), this.sesion.chat.arreglo[i].datoGrafico.ancho-8);
                contexto.font = "14px Arial";
                contexto.textAlign = "center";
            }
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
                    contexto.fillText(f[j], this.sesion.chat.arreglo[i].datoGrafico.x,this.sesion.chat.arreglo[i].datoGrafico.y - alto/2 + (altoRenglon / 2) + altoRenglon * j, this.sesion.chat.arreglo[i].datoGrafico.ancho-8);
                }
            }
            else {
                contexto.fillText(t, this.sesion.chat.arreglo[i].datoGrafico.x,this.sesion.chat.arreglo[i].datoGrafico.y, this.sesion.chat.arreglo[i].datoGrafico.ancho-8);
            }
            yCentro=yCentro+alto+altoRenglon;
        }
        let canvasUrl = canvas.toDataURL();
        return canvasUrl;
    }
}