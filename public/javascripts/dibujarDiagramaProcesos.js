function dibujarDiagrama(pCanvasId,pDiagramaJson,pHRef) {
    var imagenMapa = document.getElementById("imagenMapa");
    var mapa = document.getElementById("mapa");
    var canvas = document.getElementById(pCanvasId);
    var contexto = canvas.getContext("2d");
    var areas = [];

    let cadenaDiagrama = pDiagramaJson.replace(/&quot;/g, "'");
    cadenaDiagrama = cadenaDiagrama.replace(/'/g, '"');
    let pDiagrama = JSON.parse(cadenaDiagrama);

    contexto.font = "14px Arial";
    contexto.textBaseline = "top";
    contexto.textAlign = "center";

    let anchoCanvas = canvas.offsetWidth;
    let sangria = Math.ceil(0.3 * (Math.abs(contexto.measureText('X').actualBoundingBoxAscent) + Math.abs(contexto.measureText('X').actualBoundingBoxDescent)));
    let margen = 40;
    let altoRenglon = Math.ceil(1.4 * (Math.abs(contexto.measureText('X').actualBoundingBoxAscent) + Math.abs(contexto.measureText('X').actualBoundingBoxDescent)));
    let anchoAccionInicial = 160;
    let altoAccionInicial = 60;
    let anchoAccion = 160;
    let altoAccion = 60;
    let anchoDecision = 160;
    let altoDecision = 60;
    let anchoAccionFinal = 160;
    let altoAccionFinal = 60;
    let izquierda = 0;
    let arriba = 0;
    let ancho = 0;
    let alto = 0;
    let texto = '';
    let i = 0;
    let p = 0;
    let q = 0;
    let x = margen;
    let y = margen;
    let strokes = ["#F1B434", "#228848", "#F93822", "#228848", "#63666A", "#228848", "#63666A", "#F93822", "#63666A", "#F93822", "#63666A"];
    let fills = ["#F1B434", "#228848", "#F93822", "#228848", "#63666A", "#228848", "#63666A", "#F93822", "#63666A", "#F93822", "#63666A"];
    let fills2 = ["#FCF3CF", "#EAFAF1", "#F9EBEA", "#EAFAF1", "#EAFAF1", "#EAFAF1", "#EAFAF1", "#F9EBEA", "#F9EBEA", "#F9EBEA", "#F9EBEA"];

    for (i=0; i<pDiagrama._objetos.length; i++) {
        texto = pDiagrama._objetos[i]._valoresPropiedades[0];
        switch (pDiagrama._objetos[i]._tipoObjeto._id) {
            case 0: {
                ancho = anchoAccionInicial;
                alto = altoAccionInicial;
                break;
            }
            case 1: {
                ancho = anchoAccion;
                alto = altoAccion;
                break;
            }
            case 2: {
                ancho = anchoDecision;
                alto = altoDecision;
                break;
            }
            case 3: {
                ancho = anchoAccionFinal;
                alto = altoAccionFinal;
                break;
            }
        }
        izquierda = x;
        arriba = y;

        pDiagrama._objetos[i]._datoGrafico._tipoCaja = pDiagrama._objetos[i]._tipoObjeto._id;
        pDiagrama._objetos[i]._datoGrafico._lineas = 1;
        pDiagrama._objetos[i]._datoGrafico._lineasNombreUsuario = 1;
        pDiagrama._objetos[i]._datoGrafico._x = izquierda;
        pDiagrama._objetos[i]._datoGrafico._y = arriba;
        pDiagrama._objetos[i]._datoGrafico._ancho = ancho;
        pDiagrama._objetos[i]._datoGrafico._alto = alto;
        pDiagrama._objetos[i]._datoGrafico._curva = 0;

        pDiagrama._objetos[i]._areasEnlace[0]._tipoCaja = pDiagrama._objetos[i]._tipoObjeto._id;
        pDiagrama._objetos[i]._areasEnlace[0]._lineas = 1;
        pDiagrama._objetos[i]._areasEnlace[0]._lineasNombreUsuario = 1;
        pDiagrama._objetos[i]._areasEnlace[0]._x = izquierda;
        pDiagrama._objetos[i]._areasEnlace[0]._y = arriba;
        pDiagrama._objetos[i]._areasEnlace[0]._ancho = ancho;
        pDiagrama._objetos[i]._areasEnlace[0]._alto = alto;
        pDiagrama._objetos[i]._areasEnlace[0]._curva = 0;

        x = x + ancho + margen;
        if (x > (anchoCanvas - Math.max(anchoAccionInicial,anchoAccion,anchoDecision,anchoAccionFinal) - margen )) {
            x = margen;
            y = y + Math.max(altoAccionInicial,altoAccion,altoDecision,altoAccionFinal) + margen;
        }

    }

    contexto.strokeStyle = "#FFFFFF";
    contexto.fillStyle = "#FFFFFF";
    contexto.lineWidth = 1;
    if (x > margen) {
        y = y + Math.max(altoAccionInicial,altoAccion,altoDecision,altoAccionFinal) + margen;
    }

    imagenMapa.style.position = "absolute";
    imagenMapa.style.left = (canvas.offsetLeft + 1) + "px";
    imagenMapa.style.top = canvas.offsetTop + "px";
    imagenMapa.style.height = y + "px";

    contexto.fillRect(0,0, anchoCanvas, y);

    p = 0;
    q = 0;
    contexto.strokeStyle = "#F6F6F6";
    contexto.fillStyle = "#D5D5D5";
    contexto.setLineDash([2,4]);
    contexto.font = "10px Arial";
    while (p<=anchoCanvas) {
        if (p % 100 == 0) {
            contexto.strokeStyle = "#D5D5D5";
        }
        contexto.beginPath();
        contexto.moveTo(p, q);
        contexto.lineTo(p, y);
        contexto.closePath();
        contexto.stroke();
        if (p % 100 == 0) {
            if (p % 1000 > 0) {
                contexto.fillStyle = "#63666A";
                contexto.textBaseline = "top";
                contexto.fillText(p, p, q, );
                contexto.textBaseline = "bottom";
                contexto.fillText(p, p, y, );
            }
            contexto.strokeStyle = "#F6F6F6";
        }
        p=p+10;
    }
    p = 0;
    q = 0;
    contexto.textBaseline = "middle";
    while (q <= y) {
        if (q % 100 == 0) {
            contexto.strokeStyle = "#D5D5D5";
        }
        contexto.beginPath();
        contexto.moveTo(p, q);
        contexto.lineTo(anchoCanvas, q);
        contexto.closePath();
        contexto.stroke();
        if (q % 100 == 0) {
            if (q % 1000 > 0) {
                contexto.fillStyle = "#63666A";
                contexto.textAlign = "left";
                contexto.fillText(q, p, q, );
                contexto.textAlign = "right";
                contexto.fillText(q,anchoCanvas, q, );
            }
            contexto.strokeStyle = "#F6F6F6";
        }
        q = q + 10;
    }
    contexto.setLineDash([]);

    contexto.strokeStyle = "#1B4F72";
    contexto.fillStyle = "#D6EAF8";
    contexto.font = "14px Arial";
    contexto.textBaseline = "middle";

    for (i = 0; i < pDiagrama._objetos.length; i++) {
        switch (pDiagrama._objetos[i]._tipoObjeto._id) {
            case 0: {
                contexto.lineWidth = 3;
                contexto.beginPath();
                contexto.moveTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto / 2);
                contexto.ellipse(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto / 2, pDiagrama._objetos[i]._datoGrafico._ancho / 2, pDiagrama._objetos[i]._datoGrafico._alto / 2, 0, 0, 2*Math.PI );
                contexto.stroke();
                contexto.fill();
                break;
            }
            case 1: {
                contexto.lineWidth = 3;
                contexto.moveTo(pDiagrama._objetos[i]._datoGrafico._x, pDiagrama._objetos[i]._datoGrafico._y);
                contexto.strokeRect(pDiagrama._objetos[i]._datoGrafico._x, pDiagrama._objetos[i]._datoGrafico._y, pDiagrama._objetos[i]._datoGrafico._ancho, pDiagrama._objetos[i]._datoGrafico._alto);
                contexto.fillRect(pDiagrama._objetos[i]._datoGrafico._x, pDiagrama._objetos[i]._datoGrafico._y, pDiagrama._objetos[i]._datoGrafico._ancho, pDiagrama._objetos[i]._datoGrafico._alto);
                break;
            }
            case 2: {
                contexto.lineWidth = 3;
                contexto.beginPath();
                contexto.moveTo(pDiagrama._objetos[i]._datoGrafico._x,pDiagrama._objetos[i]._datoGrafico._y +(pDiagrama._objetos[i]._datoGrafico._alto/2));
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + Math.ceil(pDiagrama._objetos[i]._datoGrafico._ancho / 2),pDiagrama._objetos[i]._datoGrafico._y);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho ,pDiagrama._objetos[i]._datoGrafico._y + Math.ceil( pDiagrama._objetos[i]._datoGrafico._alto / 2));
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + Math.ceil( pDiagrama._objetos[i]._datoGrafico._ancho / 2),pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto );
                contexto.closePath();
                contexto.stroke();
                contexto.fill();
                break;
            }
            case 3: {
                contexto.lineWidth = 3;
                contexto.beginPath();
                contexto.moveTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto / 2);
                contexto.ellipse(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto / 2, pDiagrama._objetos[i]._datoGrafico._ancho / 2, pDiagrama._objetos[i]._datoGrafico._alto / 2, 0, 0, 2*Math.PI );
                contexto.stroke();
                contexto.fill();
                break;
            }
        }
        areas[areas.length] = document.createElement("area");
        areas[areas.length-1].draggable=true;
        areas[areas.length-1].shape="rect";
        areas[areas.length-1].coords=+pDiagrama._objetos[i]._areasEnlace[0]._x+","+pDiagrama._objetos[i]._areasEnlace[0]._y+","+(pDiagrama._objetos[i]._areasEnlace[0]._x+pDiagrama._objetos[i]._areasEnlace[0]._ancho)+","+(pDiagrama._objetos[i]._areasEnlace[0]._y+pDiagrama._objetos[i]._areasEnlace[0]._alto);
        areas[areas.length-1].href=pHRef+pDiagrama._objetos[i]._id;
        areas[areas.length-1].setAttribute(
            "ondragstart",
            "drag(event)"
        );
        /*
        areas[areas.length-1].setAttribute(
            "ondragstart",
            "inicioCapturaAporte('"+
            pArgumentacion._conjuntoTiposAporte._tiposAporte[pDiagrama._objetos[i]._tipoAporte._id]._idTiposSucesores[j]+"','"+
            pDiagrama._objetos[i]._id+"','"+
            pDiagrama._objetos[i]._tipoAporte._nombre+"','"+
            pDiagrama._objetos[i]._contenido+"','"+
            pArgumentacion._conjuntoTiposAporte._tiposAporte[pArgumentacion._conjuntoTiposAporte._tiposAporte[pDiagrama._objetos[i]._tipoAporte._id]._idTiposSucesores[j]]._nombre+"','"+
            pArgumentacion._nombre[0]+
            "')"
        );
         */
        areas[areas.length-1].title=pDiagrama._objetos[i]._valoresPropiedades[1];
        mapa.appendChild(areas[areas.length-1]);
    }

    contexto.fillStyle = "#000000";
    contexto.lineWidth = 1;
    for (i=0; i<pDiagrama._objetos.length; i++) {
        texto = pDiagrama._objetos[i]._valoresPropiedades[0];
        switch (pDiagrama._objetos[i]._tipoObjeto._id) {
            case 0: {
                contexto.textAlign = "center";
                contexto.fillText(texto, pDiagrama._objetos[i]._datoGrafico._x + Math.ceil(pDiagrama._objetos[i]._datoGrafico._ancho / 2),pDiagrama._objetos[i]._datoGrafico._y + Math.ceil(pDiagrama._objetos[i]._datoGrafico._alto / 2), pDiagrama._objetos[i]._datoGrafico._ancho - 8);
                break;
            }
            case 1: {
                contexto.textAlign = "center";
                contexto.fillText(texto, pDiagrama._objetos[i]._datoGrafico._x + Math.ceil(pDiagrama._objetos[i]._datoGrafico._ancho / 2),pDiagrama._objetos[i]._datoGrafico._y + Math.ceil(pDiagrama._objetos[i]._datoGrafico._alto / 2), pDiagrama._objetos[i]._datoGrafico._ancho - 8);
                break;
            }
            case 2: {
                contexto.textAlign = "center";
                contexto.fillText(texto, pDiagrama._objetos[i]._datoGrafico._x + Math.ceil(pDiagrama._objetos[i]._datoGrafico._ancho / 2),pDiagrama._objetos[i]._datoGrafico._y + Math.ceil(pDiagrama._objetos[i]._datoGrafico._alto / 2), pDiagrama._objetos[i]._datoGrafico._ancho - 8);
                break;
            }
            case 3: {
                contexto.textAlign = "center";
                contexto.fillText(texto, pDiagrama._objetos[i]._datoGrafico._x + Math.ceil(pDiagrama._objetos[i]._datoGrafico._ancho / 2),pDiagrama._objetos[i]._datoGrafico._y + Math.ceil(pDiagrama._objetos[i]._datoGrafico._alto / 2), pDiagrama._objetos[i]._datoGrafico._ancho - 8);
                break;
            }
        }
    }

}
