function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionInstituciones").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaInstitucion").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioInstitucion").style.display = "none";
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionInstituciones").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaInstitucion").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioInstitucion").style.display = "none";
}

function clickCapturarInstitucion() {
    document.getElementById("lblOpciones").innerHTML = "Registrar institución";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioInstitucion").style.display = "block";
    document.getElementById("divDatosInstitucion").style.display = "block";
    document.getElementById("divGrabarInstitucion").style.display = "block";
    document.getElementById("inpNombreInstitucion").focus();
}
