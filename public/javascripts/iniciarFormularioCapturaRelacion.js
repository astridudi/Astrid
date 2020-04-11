function inicioFormularioCapturaRelacion() {
    let i = 0;
    let rotulos = [];
    let valores = [];
    let separadores = [];
    let saltosA = [];
    let saltosB = [];
    for (i=0; i<5; i++) {
        rotulos[i] = document.createElement("b");
        valores[i] = document.createElement("input");
        rotulos[i].id = "nombrePropiedadRelacoin"+i;
        rotulos[i].innerHTML = "nombrePropiedad"+i+": ";
        valores[i].id = "valorPropiedadRelacion"+i;
        saltosA[i] = document.createElement("br");
        saltosA[i].id = "salto"+i;
        saltosB[i] = document.createElement("br");
        saltosB[i].id = "salto"+i;
        document.getElementById("capturarRelacion").appendChild(rotulos[i]);
        document.getElementById("capturarRelacion").appendChild(valores[i]);
        document.getElementById("capturarRelacion").appendChild(saltosA[i]);
        document.getElementById("capturarRelacion").appendChild(saltosB[i]);
    }
    let botonGrabar = document.createElement("input");
    botonGrabar.type = "submit";
    botonGrabar.value = "Grabar";
    botonGrabar.setAttribute(
        "onclick",
        "inclusionElemento()"
    );
    document.getElementById("capturarRelacion").appendChild(botonGrabar);
    let enlaceDesistir = document.createElement("a");
    enlaceDesistir.setAttribute(
        "onclick",
        "desistimientoElemento()"
    );
    separadores[0] = document.createElement("b");
    separadores[0].innerHTML = " | ";
    document.getElementById("capturarRelacion").appendChild(separadores[0]);
    enlaceDesistir.innerHTML = "Desistir"
    document.getElementById("capturarRelacion").appendChild(enlaceDesistir);
    separadores[1] = document.createElement("b");
    separadores[1].innerHTML = " | ";
    document.getElementById("capturarRelacion").appendChild(separadores[1]);
}
