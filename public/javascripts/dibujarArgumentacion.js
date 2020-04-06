function dibujarArgumentacion(pCanvasId,pArgumentacionJson) {
    var imagenMapa = document.getElementById("imagenMapa");
    var mapa = document.getElementById("mapa");
    var canvas = document.getElementById(pCanvasId);
    var contexto = canvas.getContext("2d");
    var areas = [];

    let cadenaArgumentacion = pArgumentacionJson.replace(/&quot;/g, "'");
    cadenaArgumentacion = cadenaArgumentacion.replace(/'/g, '"');
    let pArgumentacion = JSON.parse(cadenaArgumentacion);

    contexto.font = "14px Arial";
    contexto.textBaseline = "top";
    contexto.textAlign = "center";

    let anchoCanvas = canvas.offsetWidth;
    let sangria = Math.ceil(0.3 * (Math.abs(contexto.measureText('X').actualBoundingBoxAscent) + Math.abs(contexto.measureText('X').actualBoundingBoxDescent)));
    let margen = 40;
    let altoRenglon = Math.ceil(1.4 * (Math.abs(contexto.measureText('X').actualBoundingBoxAscent) + Math.abs(contexto.measureText('X').actualBoundingBoxDescent)));
    let anchoCajaCentro = Math.ceil(3 * anchoCanvas / 4);
    let anchoCajaLateral = Math.ceil((anchoCanvas / 2) - (2 * margen));
    let anchoCajaAuxiliar = Math.ceil((anchoCajaLateral - margen) / 2);
    let curva = 0;
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
    let strokes = ["#F1B434", "#228848", "#F93822", "#228848", "#63666A", "#228848", "#63666A", "#F93822", "#63666A", "#F93822", "#63666A"];
    let fills = ["#F1B434", "#228848", "#F93822", "#228848", "#63666A", "#228848", "#63666A", "#F93822", "#63666A", "#F93822", "#63666A"];
    let fills2 = ["#FCF3CF", "#EAFAF1", "#F9EBEA", "#EAFAF1", "#EAFAF1", "#EAFAF1", "#EAFAF1", "#F9EBEA", "#F9EBEA", "#F9EBEA", "#F9EBEA"];

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
        curva = Math.ceil(alto / 8);

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
                pArgumentacion._aportes[i]._areasEnlace[0]._tipoCaja = pArgumentacion._aportes[i]._tipoAporte._id;
                pArgumentacion._aportes[i]._areasEnlace[0]._lineas = lineas;
                pArgumentacion._aportes[i]._areasEnlace[0]._lineasNombreUsuario = 1;
                pArgumentacion._aportes[i]._areasEnlace[0]._x = izquierda - solapa;
                pArgumentacion._aportes[i]._areasEnlace[0]._y = arriba;
                pArgumentacion._aportes[i]._areasEnlace[0]._ancho = 2 * solapa;
                pArgumentacion._aportes[i]._areasEnlace[0]._alto = alto;
                pArgumentacion._aportes[i]._areasEnlace[0]._curva = curva;
                pArgumentacion._aportes[i]._areasEnlace[1]._tipoCaja = pArgumentacion._aportes[i]._tipoAporte._id;
                pArgumentacion._aportes[i]._areasEnlace[1]._lineas = lineas;
                pArgumentacion._aportes[i]._areasEnlace[1]._lineasNombreUsuario = 1;
                pArgumentacion._aportes[i]._areasEnlace[1]._x = izquierda + ancho - solapa;
                pArgumentacion._aportes[i]._areasEnlace[1]._y = arriba;
                pArgumentacion._aportes[i]._areasEnlace[1]._ancho = 2 * solapa;
                pArgumentacion._aportes[i]._areasEnlace[1]._alto = alto;
                pArgumentacion._aportes[i]._areasEnlace[1]._curva = curva;
                pArgumentacion._aportes[i]._areasEnlace[2]._tipoCaja = pArgumentacion._aportes[i]._tipoAporte._id;
                pArgumentacion._aportes[i]._areasEnlace[2]._lineas = lineas;
                pArgumentacion._aportes[i]._areasEnlace[2]._lineasNombreUsuario = 1;
                pArgumentacion._aportes[i]._areasEnlace[2]._x = Math.ceil(izquierda + ancho / 2 - solapa);
                pArgumentacion._aportes[i]._areasEnlace[2]._y = Math.ceil(arriba + alto - solapa / 2);
                pArgumentacion._aportes[i]._areasEnlace[2]._ancho = 2 * solapa;
                pArgumentacion._aportes[i]._areasEnlace[2]._alto = 2 * solapa;
                pArgumentacion._aportes[i]._areasEnlace[2]._curva = curva;
                break;
            }
            case 1: {
                pArgumentacion._aportes[i]._areasEnlace[0]._tipoCaja = pArgumentacion._aportes[i]._tipoAporte._id;
                pArgumentacion._aportes[i]._areasEnlace[0]._lineas = lineas;
                pArgumentacion._aportes[i]._areasEnlace[0]._lineasNombreUsuario = 1;
                pArgumentacion._aportes[i]._areasEnlace[0]._x = izquierda - solapa;
                pArgumentacion._aportes[i]._areasEnlace[0]._y = arriba;
                pArgumentacion._aportes[i]._areasEnlace[0]._ancho = 2 * solapa;
                pArgumentacion._aportes[i]._areasEnlace[0]._alto = alto;
                pArgumentacion._aportes[i]._areasEnlace[0]._curva = curva;
                pArgumentacion._aportes[i]._areasEnlace[1]._tipoCaja = pArgumentacion._aportes[i]._tipoAporte._id;
                pArgumentacion._aportes[i]._areasEnlace[1]._lineas = lineas;
                pArgumentacion._aportes[i]._areasEnlace[1]._lineasNombreUsuario = 1;
                pArgumentacion._aportes[i]._areasEnlace[1]._x = izquierda + ancho - solapa;
                pArgumentacion._aportes[i]._areasEnlace[1]._y = arriba;
                pArgumentacion._aportes[i]._areasEnlace[1]._ancho = 2 * solapa;
                pArgumentacion._aportes[i]._areasEnlace[1]._alto = alto;
                pArgumentacion._aportes[i]._areasEnlace[1]._curva = curva;
                break;
            }
            case 2: {
                pArgumentacion._aportes[i]._areasEnlace[0]._tipoCaja = pArgumentacion._aportes[i]._tipoAporte._id;
                pArgumentacion._aportes[i]._areasEnlace[0]._lineas = lineas;
                pArgumentacion._aportes[i]._areasEnlace[0]._lineasNombreUsuario = 1;
                pArgumentacion._aportes[i]._areasEnlace[0]._x = izquierda + ancho - solapa;
                pArgumentacion._aportes[i]._areasEnlace[0]._y = arriba;
                pArgumentacion._aportes[i]._areasEnlace[0]._ancho = 2 * solapa;
                pArgumentacion._aportes[i]._areasEnlace[0]._alto = alto;
                pArgumentacion._aportes[i]._areasEnlace[0]._curva = curva;
                pArgumentacion._aportes[i]._areasEnlace[1]._tipoCaja = pArgumentacion._aportes[i]._tipoAporte._id;
                pArgumentacion._aportes[i]._areasEnlace[1]._lineas = lineas;
                pArgumentacion._aportes[i]._areasEnlace[1]._lineasNombreUsuario = 1;
                pArgumentacion._aportes[i]._areasEnlace[1]._x = izquierda - solapa;
                pArgumentacion._aportes[i]._areasEnlace[1]._y = arriba;
                pArgumentacion._aportes[i]._areasEnlace[1]._ancho = 2 * solapa;
                pArgumentacion._aportes[i]._areasEnlace[1]._alto = alto;
                pArgumentacion._aportes[i]._areasEnlace[1]._curva = curva;
                break;
            }
            case 3:
            case 9: {
                pArgumentacion._aportes[i]._areasEnlace[0]._tipoCaja = pArgumentacion._aportes[i]._tipoAporte._id;
                pArgumentacion._aportes[i]._areasEnlace[0]._lineas = lineas;
                pArgumentacion._aportes[i]._areasEnlace[0]._lineasNombreUsuario = 1;
                pArgumentacion._aportes[i]._areasEnlace[0]._x = izquierda + ancho - solapa;
                pArgumentacion._aportes[i]._areasEnlace[0]._y = arriba;
                pArgumentacion._aportes[i]._areasEnlace[0]._ancho = 2 * solapa;
                pArgumentacion._aportes[i]._areasEnlace[0]._alto = alto;
                pArgumentacion._aportes[i]._areasEnlace[0]._curva = curva;
                break;
            }
            case 5:
            case 7: {
                pArgumentacion._aportes[i]._areasEnlace[0]._tipoCaja = pArgumentacion._aportes[i]._tipoAporte._id;
                pArgumentacion._aportes[i]._areasEnlace[0]._lineas = lineas;
                pArgumentacion._aportes[i]._areasEnlace[0]._lineasNombreUsuario = 1;
                pArgumentacion._aportes[i]._areasEnlace[0]._x = izquierda - solapa;
                pArgumentacion._aportes[i]._areasEnlace[0]._y = arriba;
                pArgumentacion._aportes[i]._areasEnlace[0]._ancho = 2 * solapa;
                pArgumentacion._aportes[i]._areasEnlace[0]._alto = alto;
                pArgumentacion._aportes[i]._areasEnlace[0]._curva = curva;
                break;
            }
        }
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

        yIzquierda = Math.max(yIzquierda, yIzquierdaIzquierda, yIzquierdaCentro);
        yDerecha = Math.max(yDerecha, yDerechaDerecha, yDerechaCentro);
        yCentro = Math.max(yIzquierda, yDerecha, yCentro);
    }

    imagenMapa.style.position = "absolute";
    imagenMapa.style.left = (canvas.offsetLeft + 1) + "px";
    imagenMapa.style.top = canvas.offsetTop + "px";
    imagenMapa.style.height = (yCentro - altoRenglon / 2 + margen) + "px";

    contexto.strokeStyle = "#FFFFFF";
    contexto.fillStyle = "#FFFFFF";
    contexto.lineWidth = 1;
    contexto.fillRect(0, 0, anchoCanvas, Math.ceil(yCentro - altoRenglon / 2 + margen));

    p = 0;
    q = 0;
    contexto.strokeStyle = "#F6F6F6";
    contexto.fillStyle = "#D5D5D5";
    contexto.setLineDash([2, 4]);
    while (p <= anchoCanvas) {
        if (p % 100 == 0) {
            contexto.strokeStyle = "#D5D5D5";
        }
        contexto.beginPath();
        contexto.moveTo(p, q);
        contexto.lineTo(p, yCentro - altoRenglon / 2 + margen);
        contexto.closePath();
        contexto.stroke();
        if (p % 100 == 0) {
            contexto.strokeStyle = "#F6F6F6";
        }
        p = p + 10;
    }
    p = 0;
    q = 0;
    while (q <= yCentro - altoRenglon / 2 + margen) {
        if (q % 100 == 0) {
            contexto.strokeStyle = "#D5D5D5";
        }
        contexto.beginPath();
        contexto.moveTo(p, q);
        contexto.lineTo(anchoCanvas, q);
        contexto.closePath();
        contexto.stroke();
        if (q % 100 == 0) {
            contexto.strokeStyle = "#F6F6F6";
        }
        q = q + 10;
    }
    contexto.setLineDash([]);

    contexto.strokeStyle = "#1B4F72";
    contexto.fillStyle = "#D6EAF8";
    contexto.lineWidth = 1;

    if (pArgumentacion._aportes.length==0) {
        texto = "Pulse para iniciar argumentación";
        lineas = Math.ceil(contexto.measureText(texto).width / anchoCajaCentro);
        alto = Math.ceil((lineas + 0.2) * altoRenglon);
        contexto.strokeStyle = strokes[0];
        contexto.fillStyle = fills2[0];
        contexto.lineWidth = 4;
        curva = Math.ceil(alto / 8);
        izquierda = xCajaCentro;
        arriba = yCentro;
        ancho = anchoCajaCentro;
        contexto.beginPath();
        contexto.moveTo(izquierda, arriba + curva);
        contexto.quadraticCurveTo(izquierda, arriba, izquierda + curva, arriba);
        contexto.lineTo(izquierda + ancho - curva, arriba);
        contexto.quadraticCurveTo(izquierda + ancho, arriba, izquierda + ancho, arriba + curva);
        contexto.lineTo(izquierda + ancho, arriba + alto - curva);
        contexto.quadraticCurveTo(izquierda + ancho, arriba + alto, izquierda + ancho - curva, arriba + alto);
        contexto.lineTo(izquierda + curva, arriba + alto);
        contexto.quadraticCurveTo(izquierda, arriba + alto, izquierda, arriba + alto - curva);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();
        contexto.fillStyle = "#000000";
        contexto.lineWidth = 1;
        contexto.fillText(texto, Math.ceil(izquierda + ancho / 2), Math.ceil(arriba + sangria), ancho - 8);

        areas[areas.length] = document.createElement("area");
        areas[areas.length-1].shape="rect";
        areas[areas.length-1].coords=+izquierda+","+arriba+","+(izquierda+ancho)+","+(arriba+alto);
        areas[areas.length-1].href="#";
        areas[areas.length-1].setAttribute(
            "onclick",
            "inicioCapturaAporte('"+
            pArgumentacion._conjuntoTiposAporte._tipoAporteInicio._id+"','"+
            "','"+
            "','"+
            "','"+
            pArgumentacion._conjuntoTiposAporte._tipoAporteInicio._nombre+"','"+
            pArgumentacion._nombre+
            "')"
        );
        areas[areas.length-1].title=pArgumentacion._conjuntoTiposAporte._tipoAporteInicio._nombre;
        mapa.appendChild(areas[areas.length-1]);
    }

    for (i = 0; i < pArgumentacion._aportes.length; i++) {
        contexto.strokeStyle = strokes[pArgumentacion._aportes[i]._tipoAporte._id];
        contexto.fillStyle = fills[pArgumentacion._aportes[i]._tipoAporte._id];
        contexto.lineWidth = 3;
        contexto.beginPath();
        switch (pArgumentacion._aportes[i]._tipoAporte._id) {
            case 0: {
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
                contexto.beginPath();
                contexto.moveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2 - solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2 + solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2 + solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto + solapa, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2 + solapa - pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto + solapa);
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2 - solapa + pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto + solapa);
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2 - solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto + solapa, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2 - solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto + solapa - pArgumentacion._aportes[i]._datoGrafico._curva);
                contexto.closePath();
                contexto.stroke();
                contexto.fill();
                contexto.fillStyle = "#FCF3CF";
                break;
            }
            case 1:
            case 2: {
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
                contexto.fillStyle = "#EAFAF1";
                break;
            }
            case 3:
            case 9: {
                contexto.moveTo(pArgumentacion._aportes[i]._datoGrafico._x, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._curva);
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x, pArgumentacion._aportes[i]._datoGrafico._y, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y);
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa - pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y);
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa, pArgumentacion._aportes[i]._datoGrafico._y, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._curva);
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto - pArgumentacion._aportes[i]._datoGrafico._curva);
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa - pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto, pArgumentacion._aportes[i]._datoGrafico._x, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto - pArgumentacion._aportes[i]._datoGrafico._curva);
                contexto.closePath();
                contexto.stroke();
                contexto.fill();
                contexto.fillStyle = "#EAFAF1";
                break;
            }
            case 5:
            case 7: {
                contexto.moveTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._curva);
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa, pArgumentacion._aportes[i]._datoGrafico._y, pArgumentacion._aportes[i]._datoGrafico._x - solapa + pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y);
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho - pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y);
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho, pArgumentacion._aportes[i]._datoGrafico._y, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._curva);
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto - pArgumentacion._aportes[i]._datoGrafico._curva);
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho - pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa + pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto, pArgumentacion._aportes[i]._datoGrafico._x - solapa, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto - pArgumentacion._aportes[i]._datoGrafico._curva);
                contexto.closePath();
                contexto.stroke();
                contexto.fill();
                contexto.fillStyle = "#F4F6F6";
                break;
            }
        }

        p = -1;
        switch (pArgumentacion._aportes[i]._tipoAporte._id) {
            case 0: {
                p = 2;
                break;
            }
            case 1:
            case 2: {
                p = 1;
                break;
            }
            case 3:
            case 5:
            case 7:
            case 9: {
                p = 0;
                break;
            }
        }
        for (j=0; j<=p; j++) {
            areas[areas.length] = document.createElement("area");
            areas[areas.length-1].shape="rect";
            areas[areas.length-1].coords=+pArgumentacion._aportes[i]._areasEnlace[j]._x+","+pArgumentacion._aportes[i]._areasEnlace[j]._y+","+(pArgumentacion._aportes[i]._areasEnlace[j]._x+pArgumentacion._aportes[i]._areasEnlace[j]._ancho)+","+(pArgumentacion._aportes[i]._areasEnlace[j]._y+pArgumentacion._aportes[i]._areasEnlace[j]._alto);
            areas[areas.length-1].href="#";
            areas[areas.length-1].setAttribute(
                "onclick",
                "inicioCapturaAporte('"+
                    pArgumentacion._conjuntoTiposAporte._tiposAporte[pArgumentacion._aportes[i]._tipoAporte._id]._idTiposSucesores[j]+"','"+
                    pArgumentacion._aportes[i]._id+"','"+
                    pArgumentacion._aportes[i]._tipoAporte._nombre+"','"+
                    pArgumentacion._aportes[i]._contenido+"','"+
                    pArgumentacion._conjuntoTiposAporte._tiposAporte[pArgumentacion._conjuntoTiposAporte._tiposAporte[pArgumentacion._aportes[i]._tipoAporte._id]._idTiposSucesores[j]]._nombre+"','"+
                    pArgumentacion._nombre+
                "')"
            );
            areas[areas.length-1].title=pArgumentacion._conjuntoTiposAporte._tiposAporte[pArgumentacion._conjuntoTiposAporte._tiposAporte[pArgumentacion._aportes[i]._tipoAporte._id]._idTiposSucesores[j]]._nombre;
            mapa.appendChild(areas[areas.length-1]);
        }

        contexto.lineWidth = 3;
        contexto.fillStyle = fills2[pArgumentacion._aportes[i]._tipoAporte._id];
        contexto.beginPath();
        contexto.moveTo(pArgumentacion._aportes[i]._datoGrafico._x,pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._curva);
        contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x, pArgumentacion._aportes[i]._datoGrafico._y, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y);
        contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho - pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y);
        contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho, pArgumentacion._aportes[i]._datoGrafico._y,pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._curva );
        contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto - pArgumentacion._aportes[i]._datoGrafico._curva);
        contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho - pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
        contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._curva, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto);
        contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto, pArgumentacion._aportes[i]._datoGrafico._x, pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto - pArgumentacion._aportes[i]._datoGrafico._curva);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();

        contexto.fillStyle = fills[pArgumentacion._aportes[i]._tipoAporte._id];
        contexto.lineWidth = 1;
        rotuloAporte = pArgumentacion._aportes[i]._ordinalCronologia+'. '+pArgumentacion._aportes[i]._tipoAporte._nombre+' - '+pArgumentacion._aportes[i]._nombreUsuario;
        contexto.fillText(rotuloAporte, pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho / 2, pArgumentacion._aportes[i]._datoGrafico._y + sangria, pArgumentacion._aportes[i]._datoGrafico._ancho-8);

        contexto.strokeStyle = "#63666A";
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
                    contexto.moveTo(pArgumentacion._aportes[j]._datoGrafico._x + pArgumentacion._aportes[j]._datoGrafico._ancho / 2 , pArgumentacion._aportes[j]._datoGrafico._y + pArgumentacion._aportes[j]._datoGrafico._alto + solapa );
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
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x - (p + q) * solapa , pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto / 3 - solapa );
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x - (p + q) * solapa , pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto / 3 , pArgumentacion._aportes[i]._datoGrafico._x - p * solapa , pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto / 3 );
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x - solapa ,pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto / 3 );
                if (pArgumentacion._aportes[i]._tipoAporte._id  > 1) {
                    contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x ,pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto / 3 );
                }
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
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + (p + q) * solapa ,pArgumentacion._aportes[j]._datoGrafico._y + 2 * pArgumentacion._aportes[j]._datoGrafico._alto / 3 , pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + (p + q) * solapa , pArgumentacion._aportes[j]._datoGrafico._y + 2* pArgumentacion._aportes[j]._datoGrafico._alto / 3 + solapa );
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + (p + q) * solapa , pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto / 3 - solapa );
                contexto.quadraticCurveTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + (p + q) * solapa , pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto / 3 , pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + p * solapa , pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto / 3 );
                contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho + solapa ,pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto / 3 );
                if (pArgumentacion._aportes[i]._tipoAporte._id  > 2) {
                    contexto.lineTo(pArgumentacion._aportes[i]._datoGrafico._x + pArgumentacion._aportes[i]._datoGrafico._ancho ,pArgumentacion._aportes[i]._datoGrafico._y + pArgumentacion._aportes[i]._datoGrafico._alto / 3 );
                }
                contexto.stroke();
                break;
            }
        }

        contexto.fillStyle = "#000000";
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

}
