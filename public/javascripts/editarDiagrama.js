function editarDiagrama(pDiagramaJson,xInicio,yInicio,xFin,yFin,indiceObjeto) {
    let cadenaDiagrama = pDiagramaJson.replace(/&quot;/g, "'");
    cadenaDiagrama = cadenaDiagrama.replace(/'/g, '"');
    let pDiagrama = JSON.parse(cadenaDiagrama);
    pDiagrama._objetos[indiceObjeto]._datoGrafico._x = Math.round(xFin / 10 ) * 10;
    pDiagrama._objetos[indiceObjeto]._datoGrafico._y = Math.round(yFin / 10 ) * 10;
    pDiagrama._objetos[indiceObjeto]._tiempo = 0;
    document.getElementById('inpDiagramaJson').value = JSON.stringify(pDiagrama);
    return JSON.stringify(pDiagrama);
}