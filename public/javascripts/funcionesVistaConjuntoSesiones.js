function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionSesiones").style.width = document.getElementById("anchoPresentacion").value+"px";
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionSesiones").style.width = document.getElementById("anchoPresentacion").value+"px";
}
