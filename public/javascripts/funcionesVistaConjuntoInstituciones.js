function clickCapturaInstitucion() {
    document.getElementById("divPresentacionInstituciones").style.width = Math.round(window.innerWidth * 0.75)+"px";
    document.getElementById("divCapturaInstitucion").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("thSangriaDerechaListado").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("divFormularioInstitucion").style.display = "block";
}

function restaurarDimensiones() {
    document.getElementById("thSangriaDerechaListado").style.width = 50+"px";
    document.getElementById("divPresentacionInstituciones").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaInstitucion").style.width = 0+"px";
    document.getElementById("btnDesplegarCapturaListado").style.display = "block";
    document.getElementById("divFormularioInstitucion").style.display = "none";
}

