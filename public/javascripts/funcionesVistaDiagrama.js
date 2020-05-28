function clickDesplegarOpciones() {
    // layout
    document.getElementById("thDesplegarOpcionesSesion").style.width = Math.round(window.innerWidth * 0.35)+"px";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpcionesSesion").innerHTML = "1. Seleccionar tipo de elemento";
    document.getElementById("lblOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnOcultarOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "none";
    document.getElementById("btnLlamar").title = "Convocar al diagrama";
    document.getElementById("btnLlamar").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamiento").style.display = "none";
    document.getElementById("imgBtnDiagrama").style.display = "none";
    document.getElementById("imgBtnArgumentacion").style.display = "none";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnDiagramaInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "inline-block";
    // presentarDiagrama
    document.getElementById("divPresentacionDiagrama").style.width = Math.round(window.innerWidth * 0.65)+"px";
    document.getElementById("divCapturaElemento").style.width = Math.round(window.innerWidth * 0.35)+"px";
    document.getElementById("divBtnCapturaElemento").style.display = "block";
    document.getElementById("btnCapturaObjeto").style.display = "inline-block";
    document.getElementById("btnCapturaRelacion").style.display = "inline-block";
    document.getElementById("divFormularioObjeto").style.display = "none";
    document.getElementById("divFormularioRelacion").style.display = "none";
    document.getElementById("divFormularioMovimiento").style.display = "none";
    // divCapturaElemento
    alertaElemento();
}

function clickOcultarOpciones() {
    let i = 0;
    // layout
    document.getElementById("divSesion").style.display = "block";
    document.getElementById("thDesplegarOpcionesSesion").style.width = 50+"px";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerecha";
    document.getElementById("lblOpcionesSesion").innerHTML = "";
    document.getElementById("lblOpcionesSesion").style.display = "none";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnOcultarOpcionesSesion").style.display = "none";
    document.getElementById("btnLlamar").style.display = "none";
    document.getElementById("imgBtnPlanteamiento").style.display = "inline-block";
    document.getElementById("imgBtnDiagrama").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacion").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "none";
    document.getElementById("imgBtnDiagramaInhabilitado").style.display = "none";
    document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "none";
    // presentarCurso
    document.getElementById("divPresentacionDiagrama").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionDiagrama").offsetTop)+"px";
    document.getElementById("divPresentacionDiagrama").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaElemento").style.height = document.getElementById("divPresentacionDiagrama").style.height;
    document.getElementById("divCapturaElemento").style.width = 0+"px";
    document.getElementById("divFormularioObjeto").style.display = "none";
    document.getElementById("divFormularioRelacion").style.display = "none";
    document.getElementById("divFormularioMovimiento").style.display = "none";

    while (document.getElementById("btnObjeto"+i) != undefined) {
        document.getElementById("btnObjeto"+i).style.display = "none";
        i++;
    }
    i = 0;
    while (document.getElementById("btnRelacion"+i) != undefined) {
        document.getElementById("btnRelacion"+i).style.display = "none";
        i++;
    }
}

function clickCapturaObjeto() {
    let i = 0;
    document.getElementById("btnCapturaObjeto").style.display = "none";
    document.getElementById("btnCapturaRelacion").style.display = "none";
    document.getElementById("lblOpciones").innerHTML = "2. Seleccionar tipo de objeto";
    while (document.getElementById("btnObjeto"+i) != undefined) {
        document.getElementById("btnObjeto"+i).style.display = "inline-block";
        i++;
    }
}

function clickCapturaRelacion() {
    let i = 0;
    document.getElementById("btnCapturaObjeto").style.display = "none";
    document.getElementById("btnCapturaRelacion").style.display = "none";
    document.getElementById("lblOpciones").innerHTML = "2. Seleccionar tipo de relación";
    while (document.getElementById("btnRelacion"+i) != undefined) {
        document.getElementById("btnRelacion"+i).style.display = "inline-block";
        i++;
    }
}

function clickEditarDiagrama() {
    document.getElementById("divPresentacionDiagrama").style.width = Math.round(window.innerWidth * 0.65)+"px";
    document.getElementById("divCapturaElemento").style.width = Math.round(window.innerWidth * 0.35)+"px";
    document.getElementById("thDesplegarOpciones").style.width = Math.round(window.innerWidth * 0.35)+"px";
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("btnDesplegarOpciones").style.display = "none";
    document.getElementById("btnCapturaObjeto").style.display = "none";
    document.getElementById("btnCapturaRelacion").style.display = "none";
    document.getElementById("lblOpciones").innerHTML = "1. Editar diagrama";
    document.getElementById("lblOpciones").style.display = "inline-block";
}

function inicioFormularioCapturaObjeto() {
    let i = 0;
    let divisiones = [];
    let b = [];
    let rotulos = [];
    let valores = [];
    let saltosA = [];
    for (i=0; i<5; i++) {
        if (document.getElementById("nombrePropiedadObjeto"+i) == undefined) {
            divisiones[i] = document.createElement("div");
            b[i] = document.createElement("b");
            rotulos[i] = document.createElement("label");
            rotulos[i].className = "lblCaptura";
            b[i].appendChild(rotulos[i]);
            valores[i] = document.createElement("input");
            divisiones[i].id = "divPropiedadObjeto"+i;
            rotulos[i].id = "nombrePropiedadObjeto"+i;
            rotulos[i].innerHTML = "nombrePropiedad"+i+": ";
            valores[i].id = "valorPropiedadObjeto"+i;
            valores[i].className = "w3-input w3-round";
            valores[i].autofocus = true;
            saltosA[i] = document.createElement("br");
            saltosA[i].id = "salto"+i;
            document.getElementById("divPropiedadesObjeto").appendChild(divisiones[i]);
            document.getElementById("divPropiedadObjeto"+i).appendChild(b[i]);
            document.getElementById("divPropiedadObjeto"+i).appendChild(valores[i]);
            document.getElementById("divPropiedadObjeto"+i).appendChild(saltosA[i]);
            divisiones[i].style.display="none";
        }
    }
    document.getElementById("xObjeto").value = document.getElementById("xNuevoObjeto").value;
    document.getElementById("yObjeto").value = document.getElementById("yNuevoObjeto").value;
}

function inicioFormularioCapturaRelacion() {
    let i = 0;
    let divisiones = [];
    let b = [];
    let rotulos = [];
    let valores = [];
    let saltosA = [];
    for (i = 0; i < 5; i++) {
        if (document.getElementById("nombrePropiedadRelacion" + i) == undefined) {
            divisiones[i] = document.createElement("div");
            b[i] = document.createElement("b");
            rotulos[i] = document.createElement("label");
            rotulos[i].className = "lblCaptura";
            b[i].appendChild(rotulos[i]);
            valores[i] = document.createElement("input");
            divisiones[i].id = "divPropiedadRelacion" + i;
            rotulos[i].id = "nombrePropiedadRelacion" + i;
            rotulos[i].innerHTML = "nombreRelacion" + i + ": ";
            valores[i].id = "valorPropiedadRelacion" + i;
            valores[i].className = "w3-input w3-round";
            valores[i].autofocus = true;
            saltosA[i] = document.createElement("br");
            saltosA[i].id = "salto" + i;
            document.getElementById("divPropiedadesRelacion").appendChild(divisiones[i]);
            document.getElementById("divPropiedadRelacion" + i).appendChild(b[i]);
            document.getElementById("divPropiedadRelacion" + i).appendChild(valores[i]);
            document.getElementById("divPropiedadRelacion" + i).appendChild(saltosA[i]);
            divisiones[i].style.display = "none";
        }
    }
}
