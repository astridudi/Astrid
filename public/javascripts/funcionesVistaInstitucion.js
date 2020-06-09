function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionInstitucion").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaPrograma").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioPrograma").style.display = "none";
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionInstitucion").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaPrograma").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioPrograma").style.display = "none";
}

function clickCapturarPrograma() {
    document.getElementById("lblOpciones").innerHTML = "Registrar programa";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioPrograma").style.display = "block";
    document.getElementById("divDatosPrograma").style.display = "block";
    document.getElementById("divGrabarPrograma").style.display = "block";
    document.getElementById("inpNombrePrograma").focus();
}
