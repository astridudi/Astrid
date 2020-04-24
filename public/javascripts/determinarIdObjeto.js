function determinarIdObjeto(pDiagramaJson,pIndice) {
    let cadenaDiagrama = pDiagramaJson.replace(/&quot;/g, "'");
    cadenaDiagrama = cadenaDiagrama.replace(/'/g, '"');
    let pDiagrama = JSON.parse(cadenaDiagrama);
    return pDiagrama._objetos[pIndice]._id;
}