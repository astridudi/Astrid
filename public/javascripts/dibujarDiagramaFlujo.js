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
    let anchoInicio = 60;
    let altoInicio = 20;
    let anchoEntrada = 160;
    let altoEntrada = 40;
    let anchoProceso = 160;
    let altoProceso = 40;
    let anchoCondicional = 160;
    let altoCondicional = 40;
    let anchoPara = 160;
    let altoPara = 40;
    let anchoMientras = 160;
    let altoMientras = 40;
    let anchoSalida = 160;
    let altoSalida = 40;
    let anchoFin = 60;
    let altoFin = 20;
    let solapa = 30;
    let izquierda = 0;
    let arriba = 0;
    let ancho = 0;
    let alto = 0;
    let texto = '';
    let fragmentos = [];
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
                ancho = anchoInicio;
                alto = altoInicio;
                break;
            }
            case 1: {
                ancho = anchoEntrada;
                alto = altoEntrada;
                break;
            }
            case 2: {
                ancho = anchoProceso;
                alto = altoProceso;
                break;
            }
            case 3: {
                ancho = anchoCondicional;
                alto = altoCondicional;
                break;
            }
            case 4: {
                ancho = anchoPara;
                alto = altoPara;
                break;
            }
            case 5: {
                ancho = anchoMientras;
                alto = altoMientras;
                break;
            }
            case 6: {
                ancho = anchoSalida;
                alto = altoSalida;
                break;
            }
            case 7: {
                ancho = anchoFin;
                alto = altoFin;
                break;
            }
        }
        izquierda = x;
        arriba = y;
        lineas = Math.ceil(contexto.measureText(texto).width / ancho);

        pDiagrama._objetos[i]._datoGrafico._tipoCaja = pDiagrama._objetos[i]._tipoObjeto._id;
        pDiagrama._objetos[i]._datoGrafico._lineas = lineas;
        pDiagrama._objetos[i]._datoGrafico._lineasNombreUsuario = 1;
        pDiagrama._objetos[i]._datoGrafico._ancho = ancho;
        pDiagrama._objetos[i]._datoGrafico._alto = alto;
        pDiagrama._objetos[i]._datoGrafico._curva = 0;

        pDiagrama._objetos[i]._areasEnlace[0]._tipoCaja = pDiagrama._objetos[i]._tipoObjeto._id;
        pDiagrama._objetos[i]._areasEnlace[0]._lineas = lineas;
        pDiagrama._objetos[i]._areasEnlace[0]._lineasNombreUsuario = 1;
        pDiagrama._objetos[i]._areasEnlace[0]._x = pDiagrama._objetos[i]._datoGrafico._x;
        pDiagrama._objetos[i]._areasEnlace[0]._y = pDiagrama._objetos[i]._datoGrafico._y;
        pDiagrama._objetos[i]._areasEnlace[0]._ancho = ancho;
        pDiagrama._objetos[i]._areasEnlace[0]._alto = alto;
        pDiagrama._objetos[i]._areasEnlace[0]._curva = 0;

        x = Math.max( x, pDiagrama._objetos[i]._datoGrafico._x + ancho + margen );
        y = Math.max( y, pDiagrama._objetos[i]._datoGrafico._y );
    }

    if (x > (anchoCanvas - Math.max(anchoInicio,anchoEntrada,anchoProceso,anchoCondicional) - margen )) {
        x = margen;
        y = y + Math.max(altoInicio,altoEntrada,altoProceso,altoCondicional) + margen;
    }
    document.getElementById('xNuevoObjeto').value = x;
    document.getElementById('yNuevoObjeto').value = y;

    contexto.strokeStyle = "#FFFFFF";
    contexto.fillStyle = "#FFFFFF";
    contexto.lineWidth = 1;
    if (x > margen) {
        y = y + Math.max(altoInicio,altoEntrada,altoProceso,altoCondicional) + margen;
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

    contexto.strokeStyle = "#0B5345";
    contexto.fillStyle = "#EAFAF1";
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
                contexto.lineWidth = 1;
                contexto.beginPath();
                contexto.moveTo(pDiagrama._objetos[i]._datoGrafico._x + solapa / 2 , pDiagrama._objetos[i]._datoGrafico._y );
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho , pDiagrama._objetos[i]._datoGrafico._y);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho - solapa / 2 ,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto );
                contexto.closePath();
                contexto.stroke();
                contexto.fill();
                contexto.moveTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho + solapa / 2 , pDiagrama._objetos[i]._datoGrafico._y);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho , pDiagrama._objetos[i]._datoGrafico._y);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho + solapa / 4 , pDiagrama._objetos[i]._datoGrafico._y - solapa / 8);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho , pDiagrama._objetos[i]._datoGrafico._y);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho + solapa / 4 , pDiagrama._objetos[i]._datoGrafico._y + solapa / 8);
                contexto.stroke();
                break;
            }
            case 2: {
                contexto.lineWidth = 3;
                contexto.moveTo(pDiagrama._objetos[i]._datoGrafico._x, pDiagrama._objetos[i]._datoGrafico._y);
                contexto.strokeRect(pDiagrama._objetos[i]._datoGrafico._x, pDiagrama._objetos[i]._datoGrafico._y, pDiagrama._objetos[i]._datoGrafico._ancho, pDiagrama._objetos[i]._datoGrafico._alto);
                contexto.fillRect(pDiagrama._objetos[i]._datoGrafico._x, pDiagrama._objetos[i]._datoGrafico._y, pDiagrama._objetos[i]._datoGrafico._ancho, pDiagrama._objetos[i]._datoGrafico._alto);
                break;
            }
            case 3: {
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
            case 4: {
                contexto.lineWidth = 3;
                contexto.beginPath();
                contexto.moveTo(pDiagrama._objetos[i]._datoGrafico._x + solapa / 2 ,pDiagrama._objetos[i]._datoGrafico._y );
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho - solapa / 2 , pDiagrama._objetos[i]._datoGrafico._y);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto / 2);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho - solapa / 2 ,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + solapa / 2 ,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto );
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x ,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto / 2 );
                contexto.closePath();
                contexto.stroke();
                contexto.fill();
                break;
            }
            case 5: {
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
            case 6: {
                contexto.lineWidth = 1;
                contexto.beginPath();
                contexto.moveTo(pDiagrama._objetos[i]._datoGrafico._x + solapa / 2 , pDiagrama._objetos[i]._datoGrafico._y );
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho , pDiagrama._objetos[i]._datoGrafico._y);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho - solapa / 2 ,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto );
                contexto.closePath();
                contexto.stroke();
                contexto.fill();
                contexto.moveTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho , pDiagrama._objetos[i]._datoGrafico._y);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho + solapa / 2 , pDiagrama._objetos[i]._datoGrafico._y);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho + solapa / 4 , pDiagrama._objetos[i]._datoGrafico._y - solapa / 8);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho + solapa / 2 , pDiagrama._objetos[i]._datoGrafico._y);
                contexto.lineTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho + solapa / 4 , pDiagrama._objetos[i]._datoGrafico._y + solapa / 8);
                contexto.stroke();
                break;
            }
            case 7: {
                contexto.lineWidth = 3;
                contexto.beginPath();
                contexto.moveTo(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto / 2);
                contexto.ellipse(pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto / 2, pDiagrama._objetos[i]._datoGrafico._ancho / 2, pDiagrama._objetos[i]._datoGrafico._alto / 2, 0, 0, 2*Math.PI );
                contexto.stroke();
                contexto.fill();
                break;
            }
        }
        if (document.getElementById('area'+i) == undefined) {
            areas[areas.length] = document.createElement("area");
            areas[areas.length-1].id='area'+i;
            areas[areas.length-1].draggable=true;
            areas[areas.length-1].shape="rect";
            areas[areas.length-1].coords=pDiagrama._objetos[i]._areasEnlace[0]._x+","+pDiagrama._objetos[i]._areasEnlace[0]._y+","+(pDiagrama._objetos[i]._areasEnlace[0]._x+pDiagrama._objetos[i]._areasEnlace[0]._ancho)+","+(pDiagrama._objetos[i]._areasEnlace[0]._y+pDiagrama._objetos[i]._areasEnlace[0]._alto);
            areas[areas.length-1].href=pHRef+pDiagrama._objetos[i]._id;
            areas[areas.length-1].setAttribute(
                "ondragstart",
                "drag(event)"
            );
            areas[areas.length-1].title=pDiagrama._objetos[i]._valoresPropiedades[1];
            mapa.appendChild(areas[areas.length-1]);
        } else {
            document.getElementById('area'+i).coords=pDiagrama._objetos[i]._areasEnlace[0]._x+","+pDiagrama._objetos[i]._areasEnlace[0]._y+","+(pDiagrama._objetos[i]._areasEnlace[0]._x+pDiagrama._objetos[i]._areasEnlace[0]._ancho)+","+(pDiagrama._objetos[i]._areasEnlace[0]._y+pDiagrama._objetos[i]._areasEnlace[0]._alto);
        }
    }

    contexto.fillStyle = "#000000";
    contexto.lineWidth = 1;
    for (i=0; i<pDiagrama._objetos.length; i++) {
        texto = pDiagrama._objetos[i]._valoresPropiedades[0];
        if (pDiagrama._objetos[i]._datoGrafico._lineas > 1) {
            r = 0;
            for (j=0; j<pDiagrama._objetos[i]._datoGrafico._lineas-1; j++) {
                p = (texto.length / pDiagrama._objetos[i]._datoGrafico._lineas) * (j+1);
                q = 0;
                while ((texto.substring(p-q,p-q+1)!=" ") && (q<(texto.length / pDiagrama._objetos[i]._datoGrafico._lineas))) {
                    q++;
                }
                fragmentos[j] = texto.substring(r,p-q+1);
                r = p-q+1;
            }
            fragmentos[j] = texto.substring(r,texto.length);
            sangria = Math.ceil((pDiagrama._objetos[i]._datoGrafico._alto - pDiagrama._objetos[i]._datoGrafico._lineas * altoRenglon) / 2);
            contexto.textBaseline = "top";

            switch (pDiagrama._objetos[i]._tipoObjeto._id) {
                case 0: {
                    contexto.textAlign = "center";
                    for (j=0; j<pDiagrama._objetos[i]._datoGrafico._lineas; j++) {
                        contexto.fillText(fragmentos[j], pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + sangria + altoRenglon * j, pDiagrama._objetos[i]._datoGrafico._ancho-8);
                    }
                    break;
                }
                case 1: {
                    contexto.textAlign = "center";
                    for (j=0; j<pDiagrama._objetos[i]._datoGrafico._lineas; j++) {
                        contexto.fillText(fragmentos[j], pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + sangria + altoRenglon * j, pDiagrama._objetos[i]._datoGrafico._ancho-8);
                    }
                    break;
                }
                case 2: {
                    contexto.textAlign = "center";
                    for (j=0; j<pDiagrama._objetos[i]._datoGrafico._lineas; j++) {
                        contexto.fillText(fragmentos[j], pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + sangria + altoRenglon * j, pDiagrama._objetos[i]._datoGrafico._ancho-8);
                    }
                    break;
                }
                case 3: {
                    contexto.textAlign = "center";
                    for (j=0; j<pDiagrama._objetos[i]._datoGrafico._lineas; j++) {
                        contexto.fillText(fragmentos[j], pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + sangria + altoRenglon * j, pDiagrama._objetos[i]._datoGrafico._ancho-8);
                    }
                    break;
                }
                case 4: {
                    contexto.textAlign = "center";
                    for (j=0; j<pDiagrama._objetos[i]._datoGrafico._lineas; j++) {
                        contexto.fillText(fragmentos[j], pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + sangria + altoRenglon * j, pDiagrama._objetos[i]._datoGrafico._ancho-8);
                    }
                    break;
                }
                case 5: {
                    contexto.textAlign = "center";
                    for (j=0; j<pDiagrama._objetos[i]._datoGrafico._lineas; j++) {
                        contexto.fillText(fragmentos[j], pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + sangria + altoRenglon * j, pDiagrama._objetos[i]._datoGrafico._ancho-8);
                    }
                    break;
                }
                case 6: {
                    contexto.textAlign = "center";
                    for (j=0; j<pDiagrama._objetos[i]._datoGrafico._lineas; j++) {
                        contexto.fillText(fragmentos[j], pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + sangria + altoRenglon * j, pDiagrama._objetos[i]._datoGrafico._ancho-8);
                    }
                    break;
                }
                case 7: {
                    contexto.textAlign = "center";
                    for (j=0; j<pDiagrama._objetos[i]._datoGrafico._lineas; j++) {
                        contexto.fillText(fragmentos[j], pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho / 2,pDiagrama._objetos[i]._datoGrafico._y + sangria + altoRenglon * j, pDiagrama._objetos[i]._datoGrafico._ancho-8);
                    }
                    break;
                }
            }
        }
        else {
            contexto.textBaseline = "middle";
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
                case 4: {
                    contexto.textAlign = "center";
                    contexto.fillText(texto, pDiagrama._objetos[i]._datoGrafico._x + Math.ceil(pDiagrama._objetos[i]._datoGrafico._ancho / 2),pDiagrama._objetos[i]._datoGrafico._y + Math.ceil(pDiagrama._objetos[i]._datoGrafico._alto / 2), pDiagrama._objetos[i]._datoGrafico._ancho - 8);
                    break;
                }
                case 5: {
                    contexto.textAlign = "center";
                    contexto.fillText(texto, pDiagrama._objetos[i]._datoGrafico._x + Math.ceil(pDiagrama._objetos[i]._datoGrafico._ancho / 2),pDiagrama._objetos[i]._datoGrafico._y + Math.ceil(pDiagrama._objetos[i]._datoGrafico._alto / 2), pDiagrama._objetos[i]._datoGrafico._ancho - 8);
                    break;
                }
                case 6: {
                    contexto.textAlign = "center";
                    contexto.fillText(texto, pDiagrama._objetos[i]._datoGrafico._x + Math.ceil(pDiagrama._objetos[i]._datoGrafico._ancho / 2),pDiagrama._objetos[i]._datoGrafico._y + Math.ceil(pDiagrama._objetos[i]._datoGrafico._alto / 2), pDiagrama._objetos[i]._datoGrafico._ancho - 8);
                    break;
                }
                case 7: {
                    contexto.textAlign = "center";
                    contexto.fillText(texto, pDiagrama._objetos[i]._datoGrafico._x + Math.ceil(pDiagrama._objetos[i]._datoGrafico._ancho / 2),pDiagrama._objetos[i]._datoGrafico._y + Math.ceil(pDiagrama._objetos[i]._datoGrafico._alto / 2), pDiagrama._objetos[i]._datoGrafico._ancho - 8);
                    break;
                }
            }
        }
    }

}
