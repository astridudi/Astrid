function clickDesplegarOpciones() {
    document.getElementById("divPresentacionSesiones").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("divCapturaSesion").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("thSangriaDerechaListado").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("thSangriaDerechaListado").className = "tblSangriaDerechaResaltada";
    document.getElementById("btnDesplegarCapturaListado").style.display = "none";
    document.getElementById("divFormularioInstitucion").style.display = "block";
    document.getElementById("lblSangriaDerechaListado").innerHTML = "Seleccionar opción";
    document.getElementById("lblSangriaDerechaListado").style.display = "inline-block";
    document.getElementById("divBtnOpciones").appendChild(document.getElementById("btnDesistirInstitucion"));
}

function clickCapturaSesion() {
    document.getElementById("divPresentacionSesiones").style.width = Math.round(window.innerWidth * 0.75)+"px";
    document.getElementById("divCapturaSesion").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("thSangriaDerechaListado").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("divFormularioSesion").style.display = "block";
}

function clickOcultarOpciones() {
    document.getElementById("thDesplegarOpcionesSesion").style.width = 50+"px";
    document.getElementById("divPresentacionSesiones").style.width = window.innerWidth+"px";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerecha";
    document.getElementById("lblOpcionesSesion").innerHTML = "";
    document.getElementById("lblOpcionesSesion").style.display = "none";
}
