function inicioFormularioCapturaRelacion() {
    let i = 0;
    let divisiones = [];
    let rotulos = [];
    let valores = [];
    let separadores = [];
    let saltosA = [];
    let saltosB = [];
    for (i = 0; i < 5; i++) {
        if (document.getElementById("nombrePropiedadRelacion" + i) == undefined) {
            divisiones[i] = document.createElement("div");
            rotulos[i] = document.createElement("b");
            valores[i] = document.createElement("input");
            divisiones[i].id = "divPropiedadRelacion" + i;
            rotulos[i].id = "nombrePropiedadRelacion" + i;
            rotulos[i].innerHTML = "nombreRelacion" + i + ": ";
            valores[i].id = "valorPropiedadRelacion" + i;
            saltosA[i] = document.createElement("br");
            saltosA[i].id = "salto" + i;
            saltosB[i] = document.createElement("br");
            saltosB[i].id = "salto" + i;
            document.getElementById("formGrabarRelacionDiagramaSesion").appendChild(divisiones[i]);
            document.getElementById("divPropiedadRelacion" + i).appendChild(rotulos[i]);
            document.getElementById("divPropiedadRelacion" + i).appendChild(valores[i]);
            document.getElementById("divPropiedadRelacion" + i).appendChild(saltosA[i]);
            document.getElementById("divPropiedadRelacion" + i).appendChild(saltosB[i]);
            divisiones[i].style.display = "none";
        }
    }
    if (document.getElementById("botonGrabarRelacion") == undefined) {
        let botonGrabar = document.createElement("input");
        botonGrabar.id = "botonGrabarRelacion";
        botonGrabar.type = "submit";
        botonGrabar.value = "Grabar";
        botonGrabar.setAttribute(
            "onclick",
            "inclusionElemento()"
        );
        document.getElementById("formGrabarRelacionDiagramaSesion").appendChild(botonGrabar);
        let enlaceDesistir = document.createElement("a");
        enlaceDesistir.setAttribute(
            "onclick",
            "desistimientoElemento()"
        );
        separadores[0] = document.createElement("b");
        separadores[0].innerHTML = " | ";
        document.getElementById("formGrabarRelacionDiagramaSesion").appendChild(separadores[0]);
        enlaceDesistir.innerHTML = "Desistir"
        document.getElementById("formGrabarRelacionDiagramaSesion").appendChild(enlaceDesistir);
        separadores[1] = document.createElement("b");
        separadores[1].innerHTML = " | ";
        document.getElementById("formGrabarRelacionDiagramaSesion").appendChild(separadores[1]);
    }
}
