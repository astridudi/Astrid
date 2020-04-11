function inicioFormularioCapturaObjeto() {
    let i = 0;
    let divisiones = [];
    let rotulos = [];
    let valores = [];
    let separadores = [];
    let saltosA = [];
    let saltosB = [];
    for (i=0; i<5; i++) {
        divisiones[i] = document.createElement("div");
        rotulos[i] = document.createElement("b");
        valores[i] = document.createElement("input");
        divisiones[i].id = "divPropiedadObjeto"+i;
        rotulos[i].id = "nombrePropiedadObjeto"+i;
        rotulos[i].innerHTML = "nombrePropiedad"+i+": ";
        valores[i].id = "valorPropiedadObjeto"+i;
        saltosA[i] = document.createElement("br");
        saltosA[i].id = "salto"+i;
        saltosB[i] = document.createElement("br");
        saltosB[i].id = "salto"+i;
        document.getElementById("formGrabarObjetoDiagramaSesion").appendChild(divisiones[i]);
        document.getElementById("divPropiedadObjeto"+i).appendChild(rotulos[i]);
        document.getElementById("divPropiedadObjeto"+i).appendChild(valores[i]);
        document.getElementById("divPropiedadObjeto"+i).appendChild(saltosA[i]);
        document.getElementById("divPropiedadObjeto"+i).appendChild(saltosB[i]);
        divisiones[i].style.display="none";
    }
    let botonGrabar = document.createElement("input");
    botonGrabar.type = "submit";
    botonGrabar.value = "Grabar";
    botonGrabar.setAttribute(
        "onclick",
        "inclusionElemento()"
    );
    document.getElementById("formGrabarObjetoDiagramaSesion").appendChild(botonGrabar);
    let enlaceDesistir = document.createElement("a");
    enlaceDesistir.setAttribute(
        "onclick",
        "desistimientoElemento()"
    );
    separadores[0] = document.createElement("b");
    separadores[0].innerHTML = " | ";
    document.getElementById("formGrabarObjetoDiagramaSesion").appendChild(separadores[0]);
    enlaceDesistir.innerHTML = "Desistir"
    document.getElementById("formGrabarObjetoDiagramaSesion").appendChild(enlaceDesistir);
    separadores[1] = document.createElement("b");
    separadores[1].innerHTML = " | ";
    document.getElementById("formGrabarObjetoDiagramaSesion").appendChild(separadores[1]);
}
