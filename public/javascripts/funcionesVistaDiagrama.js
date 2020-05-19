function clickCapturaElemento() {
    document.getElementById("divPresentacionDiagrama").style.width = Math.round(window.innerWidth * 0.75)+"px";
    document.getElementById("divCapturaElemento").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("thSangriaDerecha").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("thSangriaDerecha").className = "tblSangriaDerechaResaltada";
    document.getElementById("btnDesplegarCaptura").style.display = "none";
    document.getElementById("btnCapturaObjeto").style.display = "inline-block";
    document.getElementById("btnCapturaRelacion").style.display = "inline-block";
    document.getElementById("btnDesistirElemento").style.display = "inline-block";
    document.getElementById("lblSangriaDerecha").innerHTML = "1. Seleccionar tipo de elemento";
    document.getElementById("lblSangriaDerecha").style.display = "inline-block";
    document.getElementById("btnLlamar").title = "Convocar al diagrama";
    document.getElementById("btnLlamar").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamiento").style.display = "none";
    document.getElementById("imgBtnChat").style.display = "none";
    document.getElementById("imgBtnArgumentacion").style.display = "none";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnChatInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "inline-block";
    alertaElemento();
}

function clickCapturaObjeto() {
    let i = 0;
    document.getElementById("btnCapturaObjeto").style.display = "none";
    document.getElementById("btnCapturaRelacion").style.display = "none";
    document.getElementById("lblSangriaDerecha").innerHTML = "2. Seleccionar tipo de objeto";
    while (document.getElementById("btnObjeto"+i) != undefined) {
        document.getElementById("btnObjeto"+i).style.display = "inline-block";
        i++;
    }
    document.getElementById("btnDesistirElemento").style.display = "inline-block";
}

function clickCapturaRelacion() {
    let i = 0;
    document.getElementById("btnCapturaObjeto").style.display = "none";
    document.getElementById("btnCapturaRelacion").style.display = "none";
    document.getElementById("lblSangriaDerecha").innerHTML = "2. Seleccionar tipo de relación";
    while (document.getElementById("btnRelacion"+i) != undefined) {
        document.getElementById("btnRelacion"+i).style.display = "inline-block";
        i++;
    }
    document.getElementById("btnDesistirElemento").style.display = "inline-block";
}

function clickEditarDiagrama() {
    document.getElementById("divPresentacionDiagrama").style.width = Math.round(window.innerWidth * 0.75)+"px";
    document.getElementById("divCapturaElemento").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("thSangriaDerecha").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("thSangriaDerecha").className = "tblSangriaDerechaResaltada";
    document.getElementById("btnDesplegarCaptura").style.display = "none";
    document.getElementById("btnCapturaObjeto").style.display = "none";
    document.getElementById("btnCapturaRelacion").style.display = "none";
    document.getElementById("btnDesistirElemento").style.display = "none";
    document.getElementById("lblSangriaDerecha").innerHTML = "1. Editar diagrama";
    document.getElementById("lblSangriaDerecha").style.display = "inline-block";
}

function restaurarDimensiones() {
    let i = 0;
    document.getElementById("thSangriaDerecha").style.width = 50+"px";
    document.getElementById("thSangriaDerecha").className = "tblSangriaDerecha";
    document.getElementById("divPresentacionDiagrama").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaElemento").style.width = 0+"px";
    document.getElementById("btnDesplegarCaptura").style.display = "inline-block";
    document.getElementById("btnCapturaObjeto").style.display = "none";
    document.getElementById("btnCapturaRelacion").style.display = "none";
    while (document.getElementById("btnObjeto"+i) != undefined) {
        document.getElementById("btnObjeto"+i).style.display = "none";
        i++;
    }
    i = 0;
    while (document.getElementById("btnRelacion"+i) != undefined) {
        document.getElementById("btnRelacion"+i).style.display = "none";
        i++;
    }
    document.getElementById("btnDesistirElemento").style.display = "none";
    document.getElementById("lblSangriaDerecha").innerHTML = "";
    document.getElementById("lblSangriaDerecha").style.display = "none";
    document.getElementById("btnLlamar").style.display = "none";
    document.getElementById("imgBtnPlanteamiento").style.display = "inline-block";
    document.getElementById("imgBtnChat").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacion").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "none";
    document.getElementById("imgBtnChatInhabilitado").style.display = "none";
    document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "none";
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
