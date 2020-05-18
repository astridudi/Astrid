function clickCapturaSesion() {
    document.getElementById("divPresentacionSesiones").style.width = Math.round(window.innerWidth * 0.75)+"px";
    document.getElementById("divCapturaSesion").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("thSangriaDerechaListado").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("divFormularioSesion").style.display = "block";
}

function restaurarDimensiones() {
    document.getElementById("thSangriaDerechaListado").style.width = 50+"px";
    document.getElementById("divPresentacionSesiones").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaSesion").style.width = 0+"px";
    document.getElementById("btnDesplegarCapturaListado").style.display = "block";
    document.getElementById("divFormularioSesion").style.display = "none";
}

