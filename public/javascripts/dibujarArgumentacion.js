function dibujarArgumentacion(pArgumentacionJson) {
    var divPresentacionArgumentacion = document.getElementById("divPresentacionArgumentacion");
    var mapaArgumentacion = document.getElementById("mapaArgumentacion");
    var canvasArgumentacion = document.getElementById("canvasArgumentacion");
    var contexto = canvasArgumentacion.getContext("2d");
    var areas = [];
    let pArgumentacion = cadenaJson(pArgumentacionJson);

    /*
    Inicialización de parámetros gráficos globales de trazado
     */
    contexto.font = "17px Arial";
    contexto.textBaseline = "top";
    contexto.textAlign = "center";
    let colorBlancoFondo = "#FFFFFF";
    let colorProposicion = "#F7931E";
    let colorApoyo = "#1D8649";
    let colorRefutacion = "#D93025";
    let colorGrisLibre = "#F2F2F2";
    let colorGrisResaltado = "#BDBDBD";
    let colorGrisOscuro = "#808080";
    let colorTextoNormal = "#151515";
    let strokes = [colorProposicion, colorApoyo, colorRefutacion, colorApoyo, colorGrisOscuro, colorApoyo, colorGrisOscuro, colorRefutacion, colorGrisOscuro, colorRefutacion, colorGrisOscuro];
    let fills = [colorProposicion, colorApoyo, colorRefutacion, colorApoyo, colorGrisOscuro, colorApoyo, colorGrisOscuro, colorRefutacion, colorGrisOscuro, colorRefutacion, colorGrisOscuro];

    /*
    Inicialización de parámetros numéricos de dibujo
     */
    let anchoCanvas = canvasArgumentacion.offsetWidth;
    let altoCanvas = 0;
    let sangria = Math.ceil(0.3 * (Math.abs(contexto.measureText('X').actualBoundingBoxAscent) + Math.abs(contexto.measureText('X').actualBoundingBoxDescent)));
    let margen = 40;
    let altoRenglon = Math.ceil(1.4 * (Math.abs(contexto.measureText('X').actualBoundingBoxAscent) + Math.abs(contexto.measureText('X').actualBoundingBoxDescent)));
    let anchoCajaCentro = Math.ceil(anchoCanvas - 2 * margen);
    let anchoCajaLateral = Math.ceil((anchoCanvas / 2) - (2 * margen));
    let anchoCajaAuxiliar = Math.ceil((anchoCajaLateral - margen) / 2);
    let curva = Math.ceil(altoRenglon / 3);
    let xCajaCentro = Math.ceil((anchoCanvas - anchoCajaCentro) / 2);
    let xCajaIzquierda = margen;
    let xCajaDerecha = anchoCanvas - margen - anchoCajaLateral;
    let xCajaIzquierdaCentro = xCajaIzquierda + anchoCajaLateral - anchoCajaAuxiliar;
    let xCajaDerechaCentro = xCajaDerecha + anchoCajaLateral - anchoCajaAuxiliar;
    let yCentro = margen;
    let yIzquierda = margen;
    let yDerecha = margen;
    let yIzquierdaIzquierda = margen;
    let yIzquierdaCentro = margen;
    let yDerechaCentro = margen;
    let yDerechaDerecha = margen;
    let texto = '';
    let lineas = 0;
    let izquierda = 0;
    let arriba = 0;
    let ancho = 0;
    let alto = 0;
    let solapa = Math.ceil(altoRenglon / 2);
    let rotuloAporte = '';
    let fragmentos = [];
    let i = 0;
    let j = 0;
    let p = 0;
    let q = 0;
    let r = 0;

    /*
    Determinación de dimensiones y coordenadas de cada caja de aporte en la argumentación y en la interfaz.
     */
    for (i = 0; i < pArgumentacion._aportes.length; i++) {
        texto = pArgumentacion._aportes[i]._contenido;
        switch (pArgumentacion._aportes[i]._tipoAporte._id) {
            case 0: {
                arriba = yCentro;
                izquierda = xCajaCentro;
                ancho = anchoCajaCentro;
                break;
            }
            case 1: {
                arriba = yIzquierda;
                izquierda = xCajaIzquierda;
                ancho = anchoCajaLateral;
                break;
            }
            case 2: {
                arriba = yDerecha;
                izquierda = xCajaDerecha;
                ancho = anchoCajaLateral;
                break;
            }
            case 3:
            case 4: {
                arriba = yIzquierdaIzquierda;
                izquierda = xCajaIzquierda;
                ancho = anchoCajaAuxiliar;
                break;
            }
            case 5:
            case 6: {
                arriba = yIzquierdaCentro;
                izquierda = xCajaIzquierdaCentro;
                ancho = anchoCajaAuxiliar;
                break;
            }
            case 7:
            case 8: {
                arriba = yDerechaDerecha;
                izquierda = xCajaDerechaCentro;
                ancho = anchoCajaAuxiliar;
                break;
            }
            case 9:
            case 10: {
                arriba = yDerechaCentro;
                izquierda = xCajaDerecha;
                ancho = anchoCajaAuxiliar;
                break;
            }
        }
        lineas = Math.ceil(contexto.measureText(texto).width / ancho);
        alto = Math.ceil((lineas + 1 + 0.2) * altoRenglon);

        /*
        Dimensiones de cada caja de aporte
         */
        pArgumentacion._aportes[i]._datoGrafico._tipoCaja = pArgumentacion._aportes[i]._tipoAporte._id;
        pArgumentacion._aportes[i]._datoGrafico._lineas = lineas;
        pArgumentacion._aportes[i]._datoGrafico._lineasNombreUsuario = 1;
        pArgumentacion._aportes[i]._datoGrafico._x = izquierda;
        pArgumentacion._aportes[i]._datoGrafico._y = arriba;
        pArgumentacion._aportes[i]._datoGrafico._ancho = ancho;
        pArgumentacion._aportes[i]._datoGrafico._alto = alto;
        pArgumentacion._aportes[i]._datoGrafico._curva = curva;

        switch (pArgumentacion._aportes[i]._tipoAporte._id) {
            case 0: {
                yCentro = Math.ceil(yCentro + alto + altoRenglon / 2);
                yIzquierdaIzquierda = yCentro;
                yIzquierdaCentro = yCentro;
                yDerechaDerecha = yCentro;
                yDerechaCentro = yCentro;
                break;
            }
            case 1: {
                yIzquierda = Math.ceil(yIzquierda + alto + altoRenglon / 2);
                yIzquierdaIzquierda = yIzquierda;
                yIzquierdaCentro = yIzquierda;
                break;
            }
            case 2: {
                yDerecha = Math.ceil(yDerecha + alto + altoRenglon / 2);
                yDerechaDerecha = yDerecha;
                yDerechaCentro = yDerecha;
                break;
            }
            case 3:
            case 4: {
                yIzquierdaIzquierda = Math.ceil(yIzquierdaIzquierda + alto + altoRenglon / 2);
                break;
            }
            case 5:
            case 6: {
                yIzquierdaCentro = Math.ceil(yIzquierdaCentro + alto + altoRenglon / 2);
                break;
            }
            case 7:
            case 8: {
                yDerechaDerecha = Math.ceil(yDerechaDerecha + alto + altoRenglon / 2);
                break;
            }
            case 9:
            case 10: {
                yDerechaCentro = Math.ceil(yDerechaCentro + alto + altoRenglon / 2);
                break;
            }
        }

        /*
        Posicionamiento por defecto del siguiente objeto de la argumentación
         */
        yIzquierda = Math.max(yIzquierda, yIzquierdaIzquierda, yIzquierdaCentro);
        yDerecha = Math.max(yDerecha, yDerechaDerecha, yDerechaCentro);
        yCentro = Math.max(yIzquierda, yDerecha, yCentro);
    }
    altoCanvas = Math.ceil(yCentro - altoRenglon / 2 + margen)

    /*
    Trazado de la cuadrícula de fondo del diagrama
     */
    dibujarCuadricula(contexto,anchoCanvas,altoCanvas,colorBlancoFondo,colorGrisLibre,colorGrisOscuro,false);

    /*
    Actualización de parámetros gráficos globales para trazado de objetos
     */
    contexto.strokeStyle = strokes[1];
    contexto.fillStyle = fills[1];
    contexto.font = "17px Arial";
    contexto.textBaseline = "top";

    /*
    Trazado de cada caja de aporte de la argumentación
     */
    for (i = 0; i < pArgumentacion._aportes.length; i++) {
        contexto.strokeStyle = strokes[pArgumentacion._aportes[i]._tipoAporte._id];
        contexto.fillStyle = fills[pArgumentacion._aportes[i]._tipoAporte._id];
        contexto.lineWidth = 3;
        contexto.beginPath();
        contexto.moveTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._curva);
        contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa, pArgumentacion._aportes[i]._datoGrafico._y, pArgumentacion._aportes[i]._datoGrafico._x - solapa + pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y);
        contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa - pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y);
        contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa, pArgumentacion._aportes[i]._datoGrafico._y, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._curva);
        contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto - pArgumentacion._aportes[i]._datoGrafico._curva);
        contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa - pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
        contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa + pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
        contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto, pArgumentacion._aportes[i]._datoGrafico._x - solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto - pArgumentacion._aportes[i]._datoGrafico._curva);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();

        /*
        Creación de las áreas sensibles de la interfaz asociadas a las cajas de aporte de la argumentación.
         */
        if (pArgumentacion._aportes[i]._tipoAporte._id != 4 && pArgumentacion._aportes[i]._tipoAporte._id != 6 && pArgumentacion._aportes[i]._tipoAporte._id != 8 && pArgumentacion._aportes[i]._tipoAporte._id != 10) {
            areas[areas.length] = document.createElement("area");
            areas[areas.length-1].shape="rect";
            areas[areas.length-1].coords=+pArgumentacion._aportes[i]._datoGrafico._x+","+pArgumentacion._aportes[i]._datoGrafico._y+","+(pArgumentacion._aportes[i]._datoGrafico._x+pArgumentacion._aportes[i]._datoGrafico._ancho)+","+(pArgumentacion._aportes[i]._datoGrafico._y+pArgumentacion._aportes[i]._datoGrafico._alto);
            areas[areas.length-1].href="#";
            areas[areas.length-1].setAttribute(
                "onclick",
                "inicioCapturaAporte('"+
                    pArgumentacion._aportes[i]._id+"','"+
                    pArgumentacion._aportes[i]._tipoAporte._id+"','"+
                    pArgumentacion._aportes[i]._tipoAporte._nombre+"','"+
                    pArgumentacion._aportes[i]._contenido+"','"+
                    pArgumentacion._nombre+
                "')"
            );
            mapaArgumentacion.appendChild(areas[areas.length-1]);
        }

        contexto.lineWidth = 3;
        contexto.fillStyle = colorBlancoFondo;
        contexto.beginPath();

        contexto.moveTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa, pArgumentacion._aportes[i]._datoGrafico._y + altoRenglon + 2);
        contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa, pArgumentacion._aportes[i]._datoGrafico._y + altoRenglon + 2);
        contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto - pArgumentacion._aportes[i]._datoGrafico._curva);
        contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa - pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
        contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa + pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
        contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto, pArgumentacion._aportes[i]._datoGrafico._x - solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto - pArgumentacion._aportes[i]._datoGrafico._curva);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();

        contexto.fillStyle = colorBlancoFondo;
        contexto.lineWidth = 1;
        rotuloAporte = pArgumentacion._aportes[i]._ordinalCronologia+'. '+pArgumentacion._aportes[i]._tipoAporte._nombre+' - '+pArgumentacion._aportes[i]._nombreUsuario;
        contexto.fillText(rotuloAporte, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2, pArgumentacion._aportes[i]._datoGrafico._y + sangria, pArgumentacion._aportes[i]._datoGrafico._ancho-8);

        contexto.strokeStyle = colorGrisOscuro;
        contexto.lineWidth = 2;

        p = 1;
        q = 2;
        if (pArgumentacion._aportes[i]._aportePredecesor !== undefined) {
            j = pArgumentacion._aportes[i]._aportePredecesor._ordinalEstructura-1;
            if (pArgumentacion._aportes[i]._tipoAporte._id  > 2) {
                q = 0.7;
                if ((pArgumentacion._aportes[i]._tipoAporte._id  == 3) || (pArgumentacion._aportes[i]._tipoAporte._id  == 5) || (pArgumentacion._aportes[i]._tipoAporte._id  == 7) || (pArgumentacion._aportes[i]._tipoAporte._id  == 9)){
                    q = 1;
                }
            }
        }
        switch (pArgumentacion._aportes[i]._tipoAporte._id) {
            case 0: {
                if (pArgumentacion._aportes[i]._aportePredecesor !== undefined) {
                    contexto.beginPath();
                    contexto.moveTo(pArgumentacion._aportes[j]._datoGrafico._x + pArgumentacion._aportes[j]._datoGrafico._ancho / 2 , pArgumentacion._aportes[j]._datoGrafico._y + pArgumentacion._aportes[j]._datoGrafico._alto );
                    contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2 , pArgumentacion._aportes[i]._datoGrafico._y );
                    contexto.stroke();
                }
                break;
            }
            case 1:
            case 3:
            case 6:
            case 8:
            case 9: {
                contexto.beginPath();
                contexto.moveTo(pArgumentacion._aportes[j]._datoGrafico._x - solapa , pArgumentacion._aportes[j]._datoGrafico._y + 2 * pArgumentacion._aportes[j]._datoGrafico._alto / 3 );
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x - p * solapa , pArgumentacion._aportes[j]._datoGrafico._y + 2 * pArgumentacion._aportes[j]._datoGrafico._alto / 3 );
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x - (p + q) * solapa ,pArgumentacion._aportes[j]._datoGrafico._y + 2 * pArgumentacion._aportes[j]._datoGrafico._alto / 3 , pArgumentacion._aportes[i]._datoGrafico._x - (p + q) * solapa , pArgumentacion._aportes[j]._datoGrafico._y + 2 * pArgumentacion._aportes[j]._datoGrafico._alto / 3 + solapa );
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x - (p + q) * solapa , pArgumentacion._aportes[i]._datoGrafico._y + altoRenglon - solapa );
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x - (p + q) * solapa , pArgumentacion._aportes[i]._datoGrafico._y + altoRenglon , pArgumentacion._aportes[i]._datoGrafico._x - p * solapa , pArgumentacion._aportes[i]._datoGrafico._y + altoRenglon );
                contexto.stroke();
                break;
            }
            case 2:
            case 4:
            case 5:
            case 7:
            case 10: {
                contexto.beginPath();
                contexto.moveTo(pArgumentacion._aportes[j]._datoGrafico._x + pArgumentacion._aportes[j]._datoGrafico._ancho + solapa , pArgumentacion._aportes[j]._datoGrafico._y + 2 * pArgumentacion._aportes[j]._datoGrafico._alto / 3 );
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + p * solapa , pArgumentacion._aportes[j]._datoGrafico._y + 2 * pArgumentacion._aportes[j]._datoGrafico._alto / 3 );
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + (p + q) * solapa ,pArgumentacion._aportes[j]._datoGrafico._y + 2 * pArgumentacion._aportes[j]._datoGrafico._alto / 3 , pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + (p + q) * solapa , pArgumentacion._aportes[j]._datoGrafico._y + 2 * pArgumentacion._aportes[j]._datoGrafico._alto / 3 + solapa );
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + (p + q) * solapa , pArgumentacion._aportes[i]._datoGrafico._y + altoRenglon - solapa );
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + (p + q) * solapa , pArgumentacion._aportes[i]._datoGrafico._y + altoRenglon , pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + p * solapa , pArgumentacion._aportes[i]._datoGrafico._y + altoRenglon );
                contexto.stroke();
                break;
            }
        }

        /*
        Trazado de mensaje de cada caja de aporte en la argumentación
         */
        contexto.fillStyle = colorTextoNormal;
        texto = pArgumentacion._aportes[i]._contenido;
        if (pArgumentacion._aportes[i]._datoGrafico._lineas>1) {
            r = 0;
            for (j=0; j<pArgumentacion._aportes[i]._datoGrafico._lineas-1; j++) {
                p = (texto.length / pArgumentacion._aportes[i]._datoGrafico._lineas) * (j+1);
                q = 0;
                while ((texto.substring(p-q,p-q+1)!=" ") && (q<(texto.length / pArgumentacion._aportes[i]._datoGrafico._lineas))) {
                    q++;
                }
                fragmentos[j] = texto.substring(r,p-q+1);
                r = p-q+1;
            }
            fragmentos[j] = texto.substring(r,texto.length);
            for (j=0; j<pArgumentacion._aportes[i]._datoGrafico._lineas; j++) {
                contexto.fillText(fragmentos[j], pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2,pArgumentacion._aportes[i]._datoGrafico._y + sangria + altoRenglon * (j + pArgumentacion._aportes[i]._datoGrafico._lineasNombreUsuario), pArgumentacion._aportes[i]._datoGrafico._ancho-8);
            }
        }
        else {
            contexto.fillText(texto, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2,pArgumentacion._aportes[i]._datoGrafico._y + sangria + altoRenglon, pArgumentacion._aportes[i]._datoGrafico._ancho-8);
        }
    }

    /*
    Recortado de áreas sobrantes del redibujado
     */
    document.getElementById("imgArgumentacion").style.height = altoCanvas+"px";
    var imagenDefinitiva = contexto.getImageData(0, 0, anchoCanvas, altoCanvas);
    var canvasRecortado = document.createElement('canvas');
    canvasRecortado.width = anchoCanvas;
    canvasRecortado.height = altoCanvas;
    var contextoRecortado = canvasRecortado.getContext('2d');
    contextoRecortado.putImageData(imagenDefinitiva, 0, 0);

    /*
    Copiado del canvas definitivo
     */
    document.getElementById("imgArgumentacion").src = canvasRecortado.toDataURL();
    contexto.strokeStyle = colorBlancoFondo;
    contexto.fillStyle = colorBlancoFondo;
    contexto.lineWidth = 0;
    contexto.fillRect(0,0, anchoCanvas, 2*altoCanvas);

    /*
    Posicionamiento del scroll
     */
    if (yCentro + margen > divPresentacionArgumentacion.offsetHeight) {
        divPresentacionArgumentacion.scrollTop = yCentro + margen - divPresentacionArgumentacion.offsetHeight;
    }
}
