function determinarObjeto(pDiagramaJson,xInicio,yInicio) {
    let cadenaDiagrama = pDiagramaJson.replace(/&quot;/g, "'");
    cadenaDiagrama = cadenaDiagrama.replace(/'/g, '"');
    let pDiagrama = JSON.parse(cadenaDiagrama);
    let i = 0;
    let j = 0;
    let distanciaMinima = 999999;
    let distancia = 0;

    for (i=0; i<pDiagrama._objetos.length; i++) {
        if ((pDiagrama._objetos[i]._datoGrafico._x <= xInicio) && (pDiagrama._objetos[i]._datoGrafico._y <= yInicio)) {
            distancia = 0;
            distancia = distancia + Math.pow(xInicio - pDiagrama._objetos[i]._datoGrafico._x, 2);
            distancia = distancia + Math.pow(yInicio - pDiagrama._objetos[i]._datoGrafico._y, 2);
            distancia = Math.sqrt(distancia);
            if (distancia < distanciaMinima) {
                j = i;
                distanciaMinima = distancia;
            }
        }
    }
    return j;
}