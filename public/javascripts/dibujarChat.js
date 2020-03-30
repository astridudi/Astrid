function dibujarChat(pCanvasId,pChatJson,pNombreUsuario) {
    var imagenMapa = document.getElementById("imagenMapa");
    var mapa = document.getElementById("mapa");
    var canvas = document.getElementById(pCanvasId);
    var contexto = canvas.getContext("2d");
    var areas = [];

    let cadenaChat = pChatJson.replace(/&quot;/g,"'");
    cadenaChat = cadenaChat.replace(/'/g,'"');
    let pChat = JSON.parse(cadenaChat);

    contexto.font = "14px Arial";
    contexto.textBaseline = "top";

    let anchoCanvas = canvas.offsetWidth;
    let sangria = Math.ceil(0.3 * (Math.abs(contexto.measureText('X').actualBoundingBoxAscent) + Math.abs(contexto.measureText('X').actualBoundingBoxDescent)));
    let margen = 40;
    let altoRenglon = Math.ceil(1.4 * (Math.abs(contexto.measureText('X').actualBoundingBoxAscent) + Math.abs(contexto.measureText('X').actualBoundingBoxDescent)));
    let anchoCaja = Math.ceil(5 * anchoCanvas / 8);
    let curva = 0;
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
    let strokes = ["#D68910","#D68910","#0B5345"];
    let fills = ["#FCF3CF","#FCF3CF","#EAFAF1"];

    for (i=0; i<pChat._arreglo.length; i++) {
        texto = pChat._arreglo[i]._contenido;
        arriba = yCaja;
        lineas = Math.ceil(contexto.measureText(texto).width / anchoCaja);
        if (lineas > 1) {
            ancho = Math.ceil(contexto.measureText(texto).width / lineas) +  margen;
        } else {
            ancho = Math.ceil(contexto.measureText(texto).width) +  margen;
        }
        if (pChat._arreglo[i]._nombreUsuario == pNombreUsuario) {
            tipoCaja = 2;
            izquierda = Math.ceil(anchoCanvas - margen - ancho );
        } else if (pChat._arreglo[i]._nombreUsuario != pNombreUsuario) {
            tipoCaja = 1;
            izquierda = margen;
        } else {
            tipoCaja = 0;
            izquierda = Math.ceil(anchoCanvas / 2 );
        }
        if (((i==0) && (tipoCaja!=2))|| ((tipoCaja!=2) && (pChat._arreglo[i]._nombreUsuario != pChat._arreglo[i-1]._nombreUsuario))) {
            lineasNombreUsuario = 1;
        } else {
            lineasNombreUsuario = 0;
        }

        alto = Math.ceil((lineas + lineasNombreUsuario + 0.2) * altoRenglon);
        curva = Math.ceil(alto / 8);

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

    imagenMapa.style.position = "absolute";
    imagenMapa.style.left = (canvas.offsetLeft + 1) + "px";
    imagenMapa.style.top = canvas.offsetTop + "px";
    imagenMapa.style.height = (yCaja-altoRenglon/2+margen) + "px";

    contexto.strokeStyle = "#FFFFFF";
    contexto.fillStyle = "#FFFFFF";
    contexto.lineWidth = 1;
    contexto.fillRect(0,0,anchoCanvas,Math.ceil(yCaja-altoRenglon/2+margen));

    p = 0;
    q = 0;
    contexto.strokeStyle = "#F6F6F6";
    contexto.fillStyle = "#D5D5D5";
    contexto.setLineDash([2,4]);
    while (p<=1000) {
        if (p%100==0) {
            contexto.strokeStyle = "#D5D5D5";
        }
        contexto.beginPath();
        contexto.moveTo(p,q);
        contexto.lineTo(p,yCaja-altoRenglon/2+margen);
        contexto.closePath();
        contexto.stroke();
        if (p%100==0) {
            contexto.strokeStyle = "#F6F6F6";
        }
        p=p+10;
    }
    p = 0;
    q = 0;
    while (q<=yCaja-altoRenglon/2+margen) {
        if (q%100==0) {
            contexto.strokeStyle = "#D5D5D5";
        }
        contexto.beginPath();
        contexto.moveTo(p,q);
        contexto.lineTo(1000,q);
        contexto.closePath();
        contexto.stroke();
        if (q%100==0) {
            contexto.strokeStyle = "#F6F6F6";
        }
        q=q+10;
    }
    contexto.setLineDash([]);

    for (i=0; i<pChat._arreglo.length; i++) {
        contexto.strokeStyle = strokes[pChat._arreglo[i]._datoGrafico._tipoCaja];
        contexto.fillStyle = fills[pChat._arreglo[i]._datoGrafico._tipoCaja];
        contexto.lineWidth = 3;
        contexto.beginPath();
        switch (pChat._arreglo[i]._datoGrafico._tipoCaja) {
            case 0: {
                contexto.moveTo(pChat._arreglo[i]._datoGrafico._x,pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._curva);
                contexto.quadraticCurveTo(pChat._arreglo[i]._datoGrafico._x, pChat._arreglo[i]._datoGrafico._y, pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y);
                contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho/2 - pChat._arreglo[i]._datoGrafico._curva/2, pChat._arreglo[i]._datoGrafico._y);
                contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho/2, pChat._arreglo[i]._datoGrafico._y - pChat._arreglo[i]._datoGrafico._curva);
                contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho/2 + pChat._arreglo[i]._datoGrafico._curva/2, pChat._arreglo[i]._datoGrafico._y);
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
                contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho + 2 * pChat._arreglo[i]._datoGrafico._curva, pChat._arreglo[i]._datoGrafico._y);
                contexto.lineTo(pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho, pChat._arreglo[i]._datoGrafico._y + pChat._arreglo[i]._datoGrafico._curva);
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

        areas[i] = document.createElement("area");
        areas[i].shape="rect";
        areas[i].coords=+pChat._arreglo[i]._datoGrafico._x+","+pChat._arreglo[i]._datoGrafico._y+","+(pChat._arreglo[i]._datoGrafico._x+pChat._arreglo[i]._datoGrafico._ancho)+","+(pChat._arreglo[i]._datoGrafico._y+pChat._arreglo[i]._datoGrafico._alto);
        areas[i].href="#";
        mapa.appendChild(areas[i]);

        contexto.fillStyle = strokes[pChat._arreglo[i]._datoGrafico._tipoCaja];
        contexto.lineWidth = 1;
        switch (pChat._arreglo[i]._datoGrafico._tipoCaja) {
            case 0: {
                contexto.textAlign = "center";
                izquierda = pChat._arreglo[i]._datoGrafico._x + pChat._arreglo[i]._datoGrafico._ancho/2;
                contexto.fillText(pChat._arreglo[i]._nombreUsuario , izquierda,  pChat._arreglo[i]._datoGrafico._y + sangria, pChat._arreglo[i]._datoGrafico._ancho-8);
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
                break;
            }
        }
        contexto.fillStyle = "#000000";
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
}