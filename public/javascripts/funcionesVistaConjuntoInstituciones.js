function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionInstituciones").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaInstitucion").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPresentacionInstituciones").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionInstituciones").offsetTop)+"px";
    document.getElementById("divCapturaInstitucion").style.maxHeight = document.getElementById("divPresentacionInstituciones").style.maxHeight;
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioInstitucion").style.display = "none";
    /*
    Inhabilitación de botones de listado de instituciones
     */
    let i = 0;
    while (document.getElementById("btnInstitucion"+i) != undefined) {
        document.getElementById("btnInstitucion"+i).href = "#";
        document.getElementById("btnInstitucion"+i).className = "w3-button w3-round aEnumeracionInactiva";
        i = i + 1;
    }
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionInstituciones").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaInstitucion").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioInstitucion").style.display = "none";
    /*
    Eliminación de valores de registros inconclusos
     */
    document.getElementById("inpNombreInstitucion").value = "";
    document.getElementById("inpSiglaInstitucion").value = "";
    document.getElementById("inpSniesInstitucion").value = "";
    /*
    Habilitación de botones de listado de instituciones
     */
    let i = 0;
    while (document.getElementById("btnInstitucion"+i) != undefined) {
        document.getElementById("btnInstitucion"+i).href = document.getElementById("btnInstitucionOculto"+i).value;
        document.getElementById("btnInstitucion"+i).className = "w3-button w3-round aEnumeracion";
        i = i + 1;
    }
}

function clickCapturarInstitucion() {
    document.getElementById("lblOpciones").innerHTML = "Registrar institución";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioInstitucion").style.display = "block";
    document.getElementById("divDatosInstitucion").style.display = "block";
    document.getElementById("divGrabarInstitucion").style.display = "block";
    document.getElementById("inpNombreInstitucion").focus();
}

function validarCapturaInstitucion() {
    let rValidacion = true;
    rValidacion = rValidacion && document.getElementById("inpNombreInstitucion").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpSniesInstitucion").value.length > 0;
    if (rValidacion) {
        document.getElementById("btnGrabarInstitucion").style.display = "inline-block";
    }
    else {
        document.getElementById("btnGrabarInstitucion").style.display = "none";
    }
}
