function dibujarChat(pChatJson,pNombreUsuario) {
    var divPresentacionChat = document.getElementById("divPresentacionChat");
    var mapaChat = document.getElementById("mapaChat");
    var canvasChat = document.getElementById("canvasChat");
    var contexto = canvasChat.getContext("2d");
    var areas = [];
    let pChat = cadenaJson(pChatJson);

    /*
    Inicialización de parámetros gráficos globales de trazado
     */
    contexto.font = "17px Arial";
    contexto.textBaseline = "top";
    let colorBlancoFondo = "#FFFFFF";
    let colorModerador = "#00689E";
    let colorTerceraPersona = "#F7931E";
    let colorPrimeraPersona = "#1D8649";
    let colorGrisLibre = "#F2F2F2";
    let colorGrisResaltado = "#BDBDBD";
    let colorGrisOscuro = "#808080";
    let colorTextoNormal = "#151515";
    let strokes = [colorModerador,colorTerceraPersona,colorPrimeraPersona];
    let fills = [colorBlancoFondo,colorGrisLibre,colorGrisLibre];

    /*
    Inicialización de parámetros numéricos de dibujo
     */
    let anchoCanvas = canvasChat.offsetWidth;
    let altoCanvas = 0;
    let sangria = Math.ceil(0.3 * (Math.abs(contexto.measureText('X').actualBoundingBoxAscent) + Math.abs(contexto.measureText('X').actualBoundingBoxDescent)));
    let margen = 40;
    let altoRenglon = Math.ceil(1.4 * (Math.abs(contexto.measureText('X').actualBoundingBoxAscent) + Math.abs(contexto.measureText('X').actualBoundingBoxDescent)));
    let anchoCaja = Math.ceil(5 * anchoCanvas / 8);
    let curva = Math.ceil(altoRenglon / 3);
    let yCaja = margen;
    let texto = '';
    let tipoCaja=0;
    let lineas = 0;
    let lineasNombreUsuario = 0;
    let izquierda = 0;
    let arriba = 0;
    let ancho = 0;
    let alto = 0;
    let fragmentos = [];
    let i = 0;
    let j = 0;
    let p = 0;
    let q = 0;
    let r = 0;

    /*
    Determinación de dimensiones y coordenadas de cada caja de mensaje en el chat y en la interfaz.
     */
    for (i=0; i<pChat._arreglo.length; i++) {
        texto = pChat._arreglo[i]._contenido;
        arriba = yCaja;
        lineas = Math.ceil(contexto.measureText(texto).width / anchoCaja);
        if (lineas > 1) {
            ancho = Math.ceil(contexto.measureText(texto).width / lineas) +  margen;
        } else {
            ancho = Math.max( Math.ceil(contexto.measureText(texto).width), Math.ceil(contexto.measureText(pChat._arreglo[i]._nombreUsuario).width)) +  margen;
        }
        if (pChat._arreglo[i]._nombreUsuario == pNombreUsuario) {
            tipoCaja = 2;
            izquierda = Math.ceil(anchoCanvas - margen - ancho );
        } else if (pChat._arreglo[i]._nombreUsuario != pChat._correoModerador) {
            tipoCaja = 1;
            izquierda = margen;
        } else {
            tipoCaja = 0;
            izquierda = Math.ceil((anchoCanvas - ancho) / 2 );
        }
        if ((i==0) || ((i!=0) && (pChat._arreglo[i]._nombreUsuario != pChat._arreglo[i-1]._nombreUsuario))) {
            lineasNombreUsuario = 1;
        } else {
            lineasNombreUsuario = 0;
        }

        alto = Math.ceil((lineas + lineasNombreUsuario + 0.2) * altoRenglon);

        /*
        Dimensiones de cada caja de mensaje
         */
        pChat._arreglo[i]._datoGrafico._tipoCaja = tipoCaja;
        pChat._arreglo[i]._datoGrafico._lineas = lineas;
        pChat._arreglo[i]._datoGrafico._lineasNombreUsuario = lineasNombreUsuario;
        pChat._arreglo[i]._datoGrafico._x = izquierda;
        pChat._arreglo[i]._datoGrafico._y = arriba;
        pChat._arreglo[i]._datoGrafico._ancho = ancho;
        pChat._arreglo[i]._datoGrafico._alto = alto;
        pChat._arreglo[i]._datoGrafico._curva = curva;

        yCaja=Math.ceil(yCaja+alto+altoRenglon/2);
    }
    altoCanvas = Math.ceil(yCaja-altoRenglon/2+margen)

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
    Trazado de cada caja de mensaje del chat
     */
    for (i=0; i<pChat._arreglo.length; i++) {
        contexto.strokeStyle = strokes[pChat._arreglo[i]._datoGrafico._tipoCaja];
        contexto.fillStyle = fills[pChat._arreglo[i]._datoGrafico._tipoCaja];
        contexto.lineWidth = 3;
        contexto.beginPath();
        switch (pChat._arreglo[i]._datoGrafico._tipoCaja) {
            case 0: {
                contexto.moveTo(pChat._arreglo[i]._datoGrafico._x,pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._curva);
                if (pChat._arreglo[i]._datoGrafico._lineasNombreUsuario > 0) {
                    contexto.lineTo(pChat._arreglo[i]._datoGrafico._x - 2 * pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y);
                } else {
                    contexto.quadraticCurveTo(pChat._arreglo[i]._datoGrafico._x, pChat._arreglo[i]._datoGrafico._y, pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y);
                }
                contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho - pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y);
                contexto.quadraticCurveTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho, pChat._arreglo[i]._datoGrafico._y,pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho, pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._curva );
                break;
            }
            case 1: {
                contexto.moveTo(pChat._arreglo[i]._datoGrafico._x,pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._curva);
                if (pChat._arreglo[i]._datoGrafico._lineasNombreUsuario > 0) {
                    contexto.lineTo(pChat._arreglo[i]._datoGrafico._x - 2 * pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y);
                } else {
                    contexto.quadraticCurveTo(pChat._arreglo[i]._datoGrafico._x, pChat._arreglo[i]._datoGrafico._y, pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y);
                }
                contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho - pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y);
                contexto.quadraticCurveTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho, pChat._arreglo[i]._datoGrafico._y,pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho, pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._curva );
                break;
            }
            case 2: {
                contexto.moveTo(pChat._arreglo[i]._datoGrafico._x,pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._curva);
                contexto.quadraticCurveTo(pChat._arreglo[i]._datoGrafico._x, pChat._arreglo[i]._datoGrafico._y, pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y);
                if (pChat._arreglo[i]._datoGrafico._lineasNombreUsuario > 0) {
                    contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho + 2 * pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y);
                    contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho, pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._curva);
                } else {
                    contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho - pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y);
                    contexto.quadraticCurveTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho, pChat._arreglo[i]._datoGrafico._y, pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho, pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._curva);
                }
                break;
            }
        }
        contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho, pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._alto - pChat._arreglo[i]._datoGrafico._curva);
        contexto.quadraticCurveTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho, pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._alto, pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho - pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._alto);
        contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._alto);
        contexto.quadraticCurveTo(pChat._arreglo[i]._datoGrafico._x, pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._alto, pChat._arreglo[i]._datoGrafico._x, pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._alto - pChat._arreglo[i]._datoGrafico._curva);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();

        /*
        Creación de las áreas sensibles de la interfaz asociadas a las cajas de mensaje del chat.
         */
        areas[i] = document.createElement("area");
        areas[i].shape="rect";
        areas[i].coords=+pChat._arreglo[i]._datoGrafico._x+","+pChat._arreglo[i]._datoGrafico._y+","+(pChat._arreglo[i]._datoGrafico._x+pChat._arreglo[i]._datoGrafico._ancho)+","+(pChat._arreglo[i]._datoGrafico._y+pChat._arreglo[i]._datoGrafico._alto);
        areas[i].href="#";
        mapaChat.appendChild(areas[i]);

        /*
        Actualización de parámetros gráficos globales para rotulado de objetos
         */
        contexto.fillStyle = strokes[pChat._arreglo[i]._datoGrafico._tipoCaja];
        contexto.lineWidth = 1;

        /*
        Trazado de mensaje de cada caja en el chat
         */
        switch (pChat._arreglo[i]._datoGrafico._tipoCaja) {
            case 0: {
                contexto.textAlign = "center";
                izquierda = pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho/2;
                if (pChat._arreglo[i]._datoGrafico._lineasNombreUsuario>0) {
                    contexto.fillText(pChat._arreglo[i]._nombreUsuario , izquierda,  pChat._arreglo[i]._datoGrafico._y + sangria, pChat._arreglo[i]._datoGrafico._ancho-8);
                }
                break;
            }
            case 1: {
                contexto.textAlign = "left";
                izquierda = pChat._arreglo[i]._datoGrafico._x + sangria;
                if (pChat._arreglo[i]._datoGrafico._lineasNombreUsuario>0) {
                    contexto.textAlign = "left";
                    contexto.fillText(pChat._arreglo[i]._nombreUsuario , izquierda ,pChat._arreglo[i]._datoGrafico._y + sangria,pChat._arreglo[i]._datoGrafico._ancho-8);
                }
                break;
            }
            case 2: {
                izquierda = pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho - sangria;
                contexto.textAlign = "right";
                if (pChat._arreglo[i]._datoGrafico._lineasNombreUsuario>0) {
                    contexto.fillText(pChat._arreglo[i]._nombreUsuario , izquierda,  pChat._arreglo[i]._datoGrafico._y + sangria, pChat._arreglo[i]._datoGrafico._ancho-8);
                }
                break;
            }
        }
        contexto.fillStyle = colorTextoNormal;
        texto = pChat._arreglo[i]._contenido;
        if (pChat._arreglo[i]._datoGrafico._lineas>1) {
            r = 0;
            for (j=0; j<pChat._arreglo[i]._datoGrafico._lineas-1; j++) {
                p = (texto.length / pChat._arreglo[i]._datoGrafico._lineas) * (j+1);
                q = 0;
                while ((texto.substring(p-q,p-q+1)!=" ") && (q<(texto.length / pChat._arreglo[i]._datoGrafico._lineas))) {
                    q++;
                }
                fragmentos[j] = texto.substring(r,p-q+1);
                r = p-q+1;
            }
            fragmentos[j] = texto.substring(r,texto.length);
            for (j=0; j<pChat._arreglo[i]._datoGrafico._lineas; j++) {
                switch (pChat._arreglo[i]._datoGrafico._tipoCaja) {
                    case 0: {
                        contexto.fillText(fragmentos[j], izquierda,pChat._arreglo[i]._datoGrafico._y + sangria + altoRenglon * (j + pChat._arreglo[i]._datoGrafico._lineasNombreUsuario), pChat._arreglo[i]._datoGrafico._ancho-8);
                        break;
                    }
                    case 1: {
                        contexto.fillText(fragmentos[j], izquierda ,pChat._arreglo[i]._datoGrafico._y + sangria + altoRenglon * (j + pChat._arreglo[i]._datoGrafico._lineasNombreUsuario), pChat._arreglo[i]._datoGrafico._ancho-8);
                        break;
                    }
                    case 2: {
                        contexto.fillText(fragmentos[j], izquierda ,pChat._arreglo[i]._datoGrafico._y + sangria + altoRenglon * (j + pChat._arreglo[i]._datoGrafico._lineasNombreUsuario), pChat._arreglo[i]._datoGrafico._ancho-8);
                        break;
                    }
                }
            }
        }
        else {
            contexto.fillText(texto, izquierda, pChat._arreglo[i]._datoGrafico._y + sangria + altoRenglon * pChat._arreglo[i]._datoGrafico._lineasNombreUsuario,pChat._arreglo[i]._datoGrafico._ancho-8);
        }
    }

    /*
    Recortado de áreas sobrantes del redibujado
     */
    document.getElementById("imgChat").style.height = altoCanvas+"px";
    var imagenDefinitiva = contexto.getImageData(0, 0, anchoCanvas, altoCanvas);
    var canvasRecortado = document.createElement('canvas');
    canvasRecortado.width = anchoCanvas;
    canvasRecortado.height = altoCanvas;
    var contextoRecortado = canvasRecortado.getContext('2d');
    contextoRecortado.putImageData(imagenDefinitiva, 0, 0);

    /*
    Copiado del canvas definitivo
     */
    document.getElementById("imgChat").src = canvasRecortado.toDataURL();
    contexto.strokeStyle = colorBlancoFondo;
    contexto.fillStyle = colorBlancoFondo;
    contexto.lineWidth = 0;
    contexto.fillRect(0,0, anchoCanvas, 2*altoCanvas);

    /*
    Posicionamiento del scroll
     */
    if (yCaja + margen > divPresentacionChat.offsetHeight) {
        divPresentacionChat.scrollTop = yCaja + margen - divPresentacionChat.offsetHeight;
    }
}
