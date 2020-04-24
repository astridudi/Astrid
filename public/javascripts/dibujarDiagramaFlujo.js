function dibujarDiagrama(pCanvasId,pDiagramaJson,pHRef,pTipoDibujo) {

    /*
    pTipoDibujo es un parámetro numérico para determinar que:
    0 : Dibujado del diagrama por defecto. No requiere el parámetro.
        Incluye cálculo de todas las coordenadas y dimensiones.
        Incluye creación de las áreas sensibles para los objetos.
    1 : Dibujado del diagrama para captura del objeto de inicio de una relación.
        Tomará el tipo de relación de document.getElementById('tipoRelacion').value.
        Habilitará las áreas sensibles para los puertos que puedan iniciar la relación requerida.
    2 : Dibujado del diagrama para captura del puerto inicial de una relación.
        Tomará el tipo de relación de document.getElementById('tipoRelacion').value.
        Habilitará las áreas sensibles para los puertos que puedan iniciar la relación requerida.
    3 : Dibujado del diagrama para captura del objeto final de una relación.
        Tomará el tipo de relación de document.getElementById('tipoRelacion').value.
        Habilitará las áreas sensibles para los puertos que puedan iniciar la relación requerida.
    4 : Dibujado del diagrama para captura del puerto final de una relación.
        Tomará el tipo de relación de document.getElementById('tipoRelacion').value.
        Habilitará las áreas sensibles para los puertos que puedan terminar la relación requerida.
    5 : Dibujado del diagrama para presentación de la relación en construcción.
        Tomará el tipo de relación de document.getElementById('tipoRelacion').value.
     */

    var imagenMapa = document.getElementById("imagenMapa");
    var mapa = document.getElementById("mapa");
    var canvas = document.getElementById(pCanvasId);
    var contexto = canvas.getContext("2d");
    var areas = [];

    if (pTipoDibujo == undefined) {
        pTipoDibujo = 0;
    }

    /*
    Procesamiento del objeto JSON que contiene los datos del diagrama
     */
    let cadenaDiagrama = pDiagramaJson.replace(/&quot;/g, "'");
    cadenaDiagrama = cadenaDiagrama.replace(/'/g, '"');
    let pDiagrama = JSON.parse(cadenaDiagrama);

    /*
    Inicialización de parámetros gráficos globales de trazado
     */
    contexto.font = "14px Arial";
    contexto.textBaseline = "top";
    contexto.textAlign = "center";

    /*
    Inicialización de parámetros numéricos de dibujo
     */
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
    let mitadAnchoPuerto = 5;
    let izquierda = 0;
    let arriba = 0;
    let ancho = 0;
    let alto = 0;
    let lineas = 0;
    let texto = '';
    let fragmentos = [];
    let i = 0;
    let j = 0;
    let p = 0;
    let q = 0;
    let x = margen;
    let y = margen;
    let l = 0;
    let x1 = 0;
    let x2 = 0;
    let x3 = 0;
    let x4 = 0;
    let x5 = 0;
    let y1 = 0;
    let y2 = 0;
    let y3 = 0;
    let y4 = 0;
    let y5 = 0;
    let m = 0;
    let b = 0;
    let mt = 0;
    let bt = 0;
    let ap = 0;
    let bp = 0;
    let cp = 0;
    let saeta = 10;
    let strokes = ["#F1B434", "#228848", "#F93822", "#228848", "#63666A", "#228848", "#63666A", "#F93822", "#63666A", "#F93822", "#63666A"];
    let fills = ["#F1B434", "#228848", "#F93822", "#228848", "#63666A", "#228848", "#63666A", "#F93822", "#63666A", "#F93822", "#63666A"];
    let fills2 = ["#FCF3CF", "#EAFAF1", "#F9EBEA", "#EAFAF1", "#EAFAF1", "#EAFAF1", "#EAFAF1", "#F9EBEA", "#F9EBEA", "#F9EBEA", "#F9EBEA"];

    /*
    Determinación de dimensiones y coordenadas de cada objeto en el diagrama y en la interfaz.
     */
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

        /*
        Dimensiones de cada objeto
         */
        pDiagrama._objetos[i]._datoGrafico._tipoCaja = pDiagrama._objetos[i]._tipoObjeto._id;
        pDiagrama._objetos[i]._datoGrafico._lineas = lineas;
        pDiagrama._objetos[i]._datoGrafico._lineasNombreUsuario = 1;
        pDiagrama._objetos[i]._datoGrafico._ancho = ancho;
        pDiagrama._objetos[i]._datoGrafico._alto = alto;
        pDiagrama._objetos[i]._datoGrafico._curva = 0;

        /*
        Coordenadas y dimensiones de cada área sensible de la interfaz
         */
        pDiagrama._objetos[i]._areasEnlace[0]._tipoCaja = pDiagrama._objetos[i]._tipoObjeto._id;
        pDiagrama._objetos[i]._areasEnlace[0]._lineas = lineas;
        pDiagrama._objetos[i]._areasEnlace[0]._lineasNombreUsuario = 1;
        pDiagrama._objetos[i]._areasEnlace[0]._x = pDiagrama._objetos[i]._datoGrafico._x;
        pDiagrama._objetos[i]._areasEnlace[0]._y = pDiagrama._objetos[i]._datoGrafico._y;
        pDiagrama._objetos[i]._areasEnlace[0]._ancho = ancho;
        pDiagrama._objetos[i]._areasEnlace[0]._alto = alto;
        pDiagrama._objetos[i]._areasEnlace[0]._curva = 0;

        /*
        Coordenadas de cada puerto
         */
        switch (pDiagrama._objetos[i]._tipoObjeto._id) {
            case 0: {
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto;
                break;
            }
            case 1: {
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y;
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto;
                break;
            }
            case 2: {
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y;
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto;
                break;
            }
            case 3: {
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y;
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho;
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + Math.round(pDiagrama._objetos[i]._datoGrafico._alto / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[2]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x;
                pDiagrama._objetos[i]._tipoObjeto._puertos[2]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + Math.round(pDiagrama._objetos[i]._datoGrafico._alto / 2);
                break;
            }
            case 4: {
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y;
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho;
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + Math.round(pDiagrama._objetos[i]._datoGrafico._alto / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[2]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[2]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto;
                pDiagrama._objetos[i]._tipoObjeto._puertos[3]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x;
                pDiagrama._objetos[i]._tipoObjeto._puertos[3]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + Math.round(pDiagrama._objetos[i]._datoGrafico._alto / 2);
                break;
            }
            case 5: {
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y;
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + pDiagrama._objetos[i]._datoGrafico._ancho;
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + Math.round(pDiagrama._objetos[i]._datoGrafico._alto / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[2]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[2]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto;
                pDiagrama._objetos[i]._tipoObjeto._puertos[3]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x;
                pDiagrama._objetos[i]._tipoObjeto._puertos[3]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + Math.round(pDiagrama._objetos[i]._datoGrafico._alto / 2);
                break;
            }
            case 6: {
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y;
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[1]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y + pDiagrama._objetos[i]._datoGrafico._alto;
                break;
            }
            case 7: {
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._x = pDiagrama._objetos[i]._datoGrafico._x + Math.round(pDiagrama._objetos[i]._datoGrafico._ancho / 2);
                pDiagrama._objetos[i]._tipoObjeto._puertos[0]._datoGrafico._y = pDiagrama._objetos[i]._datoGrafico._y;
                break;
            }
        }

        /*
        Posicionamiento por defecto del siguiente objeto del diagrama
         */
        x = Math.max( x, pDiagrama._objetos[i]._datoGrafico._x + ancho + margen );
        y = Math.max( y, pDiagrama._objetos[i]._datoGrafico._y );
    }

    /*
    Determinación de las coordenadas por defecto para el siguiente objeto creado en el diagrama
     */
    if (x > (anchoCanvas - Math.max(anchoInicio,anchoEntrada,anchoProceso,anchoCondicional) - margen )) {
        x = margen;
        y = y + Math.max(altoInicio,altoEntrada,altoProceso,altoCondicional) + margen;
    }
    document.getElementById('xNuevoObjeto').value = x;
    document.getElementById('yNuevoObjeto').value = y;

    /*
    Trazado de la cuadrícula de fondo del diagrama
     */
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

    /*
    Actualización de parámetros gráficos globales para trazado de objetos
     */
    contexto.strokeStyle = "#0B5345";
    contexto.fillStyle = "#EAFAF1";
    contexto.font = "14px Arial";
    contexto.textBaseline = "middle";

    /*
    Trazado de cada objeto del diagrama
     */
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

        /*
        Creación de las áreas sensibles de la interfaz asociadas a los objetos del diagrama, sólo si se dibuja por
        primera vez. Si es un redibujo del diagrama sólo se actualizan los href y las coordenadas.
         */
        if (document.getElementById('area'+i) == undefined) {
            areas[areas.length] = document.createElement("area");
            areas[areas.length-1].id='area'+i;
            areas[areas.length-1].shape="rect";
            areas[areas.length-1].coords=pDiagrama._objetos[i]._areasEnlace[0]._x+","+pDiagrama._objetos[i]._areasEnlace[0]._y+","+(pDiagrama._objetos[i]._areasEnlace[0]._x+pDiagrama._objetos[i]._areasEnlace[0]._ancho)+","+(pDiagrama._objetos[i]._areasEnlace[0]._y+pDiagrama._objetos[i]._areasEnlace[0]._alto);
            areas[areas.length-1].title=pDiagrama._objetos[i]._valoresPropiedades[1];
            mapa.appendChild(areas[areas.length-1]);
        } else {
            document.getElementById('area'+i).coords=pDiagrama._objetos[i]._areasEnlace[0]._x+","+pDiagrama._objetos[i]._areasEnlace[0]._y+","+(pDiagrama._objetos[i]._areasEnlace[0]._x+pDiagrama._objetos[i]._areasEnlace[0]._ancho)+","+(pDiagrama._objetos[i]._areasEnlace[0]._y+pDiagrama._objetos[i]._areasEnlace[0]._alto);
        }
        if (pTipoDibujo == 0) {
            document.getElementById('area'+i).draggable=true;
            document.getElementById('area'+i).setAttribute(
                "ondragstart",
                "drag(event)"
            );
            document.getElementById('area'+i).setAttribute(
                "onmousedown",
                ""
            );
            document.getElementById('area'+i).href=pHRef+pDiagrama._objetos[i]._id;
        }
        if (pTipoDibujo == 1) {
            document.getElementById('area'+i).draggable=false;
            document.getElementById('area'+i).setAttribute(
                "ondragstart",
                ""
            );
            document.getElementById('area'+i).setAttribute(
                "onmousedown",
                "downObjetoInicial(event,"+i+",'"+pDiagrama._objetos[i]._id+"','"+pDiagrama._objetos[i]._valoresPropiedades[0]+"')"
            );
            document.getElementById('area'+i).href="#";
        }
        if (pTipoDibujo == 2) {
            document.getElementById('area'+i).coords = '0,0,0,0';
        }
        if (pTipoDibujo == 3) {
            document.getElementById('area'+i).draggable=false;
            document.getElementById('area'+i).setAttribute(
                "ondragstart",
                ""
            );
            document.getElementById('area'+i).setAttribute(
                "onmousedown",
                "downObjetoFinal(event,"+i+",'"+pDiagrama._objetos[i]._id+"','"+pDiagrama._objetos[i]._valoresPropiedades[0]+"')"
            );
            document.getElementById('area'+i).href="#";
        }
        if (pTipoDibujo == 4) {
            document.getElementById('area'+i).coords = '0,0,0,0';
        }

        /*
        Creación de las áreas sensibles de la interfaz asociadas a los puertos de los objetos, sólo si se dibuja por
        primera vez. Si es un redibujo del diagrama sólo se actualizan los href y las coordenadas.
         */
        for (j = 0; j < pDiagrama._objetos[i]._tipoObjeto._puertos.length; j++) {
            if (document.getElementById('area'+i+'-'+j) == undefined) {
                areas[areas.length] = document.createElement("area");
                areas[areas.length-1].id='area'+i+'-'+j;
                areas[areas.length-1].draggable=true;
                areas[areas.length-1].shape="rect";
                areas[areas.length-1].coords=(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._x-mitadAnchoPuerto)+","+(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._y-mitadAnchoPuerto)+","+(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._x+mitadAnchoPuerto)+","+(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._y+mitadAnchoPuerto);
                areas[areas.length-1].href="#";
                areas[areas.length-1].title="Puerto "+j+" - "+pDiagrama._objetos[i]._tipoObjeto._puertos[j]._tipoPuerto._tiposRol[0]._nombre;
                areas[areas.length-1].style.display="none";
                mapa.appendChild(areas[areas.length-1]);
            } else {
                document.getElementById('area'+i+'-'+j).coords=(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._x-mitadAnchoPuerto)+","+(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._y-mitadAnchoPuerto)+","+(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._x+mitadAnchoPuerto)+","+(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._y+mitadAnchoPuerto);
                document.getElementById('area'+i+'-'+j).style.display="none";
            }
        }

        /*
        Trazado de puertos para el inicio de una relación y habilitación de sus áreas sensibles correspondientes
         */
        contexto.strokeStyle = "#F1B434";
        contexto.fillStyle = "#FCF3CF";
        if (pTipoDibujo == 2) {
            if (i == document.getElementById('indiceObjetoInicial').value) {
                k = document.getElementById('tipoRelacion').value;
                for (j = 0; j < pDiagrama._objetos[i]._tipoObjeto._puertos.length; j++) {
                    if (pDiagrama._objetos[i]._tipoObjeto._puertos[j]._tipoPuerto._tiposRol[0]._id == pDiagrama._tipoDiagrama._tiposRelacion[k]._tipoRolInicio._id) {
                        contexto.moveTo(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._x - 1, pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._y - 1);
                        contexto.strokeRect(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._x - 1, pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._y - 1, 3, 3);
                        document.getElementById('area'+i+'-'+j).setAttribute(
                            "onmousedown",
                            "downPuertoInicial(event,"+j+")"
                        );
                        document.getElementById('area'+i+'-'+j).style.display="block";
                    }
                }
            }
        }
        if (pTipoDibujo == 4) {
            if (i == document.getElementById('indiceObjetoFinal').value) {
                k = document.getElementById('tipoRelacion').value;
                for (j = 0; j < pDiagrama._objetos[i]._tipoObjeto._puertos.length; j++) {
                    if (pDiagrama._objetos[i]._tipoObjeto._puertos[j]._tipoPuerto._tiposRol[0]._id == pDiagrama._tipoDiagrama._tiposRelacion[k]._tipoRolFinal._id) {
                        contexto.moveTo(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._x - 1, pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._y - 1);
                        contexto.strokeRect(pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._x - 1, pDiagrama._objetos[i]._tipoObjeto._puertos[j]._datoGrafico._y - 1, 3, 3);
                        document.getElementById('area'+i+'-'+j).setAttribute(
                            "onmousedown",
                            "downPuertoFinal(event,"+j+")"
                        );
                        document.getElementById('area'+i+'-'+j).style.display="block";
                    }
                }
            }
        }
        contexto.strokeStyle = "#0B5345";
        contexto.fillStyle = "#EAFAF1";
    }

    /*
    Actualización de parámetros gráficos globales para rotulado de objetos
     */
    contexto.fillStyle = "#000000";
    contexto.lineWidth = 1;

    /*
    Trazado de rótulo de cada objeto del diagrama
     */
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

    /*
    Trazado de las relaciones
     */
    contexto.strokeStyle = "#F1B434";
    contexto.fillStyle = "#F1B434";

    for (i=0; i<pDiagrama._relaciones.length; i++) {
        j = 0;
        x = -1;
        while ((x == -1) && (j < pDiagrama._objetos.length)) {
            if (pDiagrama._objetos[j]._id == pDiagrama._relaciones[i]._objetoInicial._id) {
                x = j;
            }
            j = j + 1;
        }
        y = pDiagrama._relaciones[i]._numeroPuertoObjetoInicial;
        j = 0;
        p = -1;
        while ((p == -1) && (j < pDiagrama._objetos.length)) {
            if (pDiagrama._objetos[j]._id == pDiagrama._relaciones[i]._objetoFinal._id) {
                p = j;
            }
            j = j + 1;
        }
        q = pDiagrama._relaciones[i]._numeroPuertoObjetoFinal;
        contexto.beginPath();
        x1 = pDiagrama._objetos[x]._tipoObjeto._puertos[y]._datoGrafico._x;
        y1 = pDiagrama._objetos[x]._tipoObjeto._puertos[y]._datoGrafico._y;
        x2 = pDiagrama._objetos[p]._tipoObjeto._puertos[q]._datoGrafico._x;
        y2 = pDiagrama._objetos[p]._tipoObjeto._puertos[q]._datoGrafico._y;
        l = Math.sqrt(Math.pow((y2 - y1),2) + Math.pow((x2 - x1),2));
        x3 = x2 - saeta * (x2 - x1) / l;
        y3 = y2 - saeta * (y2 - y1) / l;
        m = (y2 - y1) / (x2 - x1);
        b = y2 - m * x2;
        mt = -1 / m;
        bt = y3 - mt * x3;
        ap = Math.pow(mt,2) + 1;
        bp = 2 * (mt*bt - mt*y3 - x3);
        cp = Math.pow(x3,2) + Math.pow(bt,2) - 2 * bt * y3 + Math.pow(y3,2) - Math.pow(sangria,2);
        x4 = (- bp + Math.sqrt(Math.pow(bp,2) - 4 * ap * cp)) / (2 * ap);
        y4 = mt * x4 + bt;
        x5 = (- bp - Math.sqrt(Math.pow(bp,2) - 4 * ap * cp)) / (2 * ap);
        y5 = mt * x5 + bt;
        contexto.lineWidth = 2;
        contexto.moveTo(x1, y1);
        contexto.lineTo(x2, y2);
        contexto.stroke();
        contexto.lineWidth = 1;
        contexto.beginPath();
        contexto.moveTo(x2, y2);
        contexto.lineTo(x4, y4);
        contexto.lineTo(x5, y5);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();
    }

    /*
    Trazado de la relación que está en proceso de edición
     */
    if (pTipoDibujo == 5) {
        x = document.getElementById('indiceObjetoInicial').value;
        y = document.getElementById('numeroPuertoObjetoInicial').value;
        p = document.getElementById('indiceObjetoFinal').value;
        q = document.getElementById('numeroPuertoObjetoFinal').value;
        contexto.setLineDash([2,4]);
        contexto.beginPath();
        contexto.moveTo(pDiagrama._objetos[x]._tipoObjeto._puertos[y]._datoGrafico._x, pDiagrama._objetos[x]._tipoObjeto._puertos[y]._datoGrafico._y);
        contexto.lineTo(pDiagrama._objetos[p]._tipoObjeto._puertos[q]._datoGrafico._x, pDiagrama._objetos[p]._tipoObjeto._puertos[q]._datoGrafico._y);
        contexto.stroke();
        contexto.setLineDash([]);
    }

}
