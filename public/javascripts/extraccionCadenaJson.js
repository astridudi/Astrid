function cadenaJson(pCadenaJson) {
    let rCadenaJson = pCadenaJson.replace(/&quot;/g, "'");
    rCadenaJson = rCadenaJson.replace(/\n|\r/g, ' ');
    rCadenaJson = rCadenaJson.replace(/'/g, '"');
    return(JSON.parse(rCadenaJson));
}
