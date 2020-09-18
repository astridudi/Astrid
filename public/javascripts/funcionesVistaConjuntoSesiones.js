function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionSesiones").style.width = document.getElementById("anchoPresentacion").value+"px";
    //document.getElementById("divCapturaSesion").style.width = document.getElementById("anchoEmergente").value+"px";
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionSesiones").style.width = document.getElementById("anchoPresentacion").value+"px";
    //document.getElementById("divCapturaSesion").style.width = document.getElementById("anchoEmergente").value+"px";
}
