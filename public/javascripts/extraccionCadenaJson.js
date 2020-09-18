function cadenaJson(pCadenaJson) {
    let rCadenaJson = pCadenaJson.replace(/&quot;/g, '"');
    return(JSON.parse(rCadenaJson));
}
