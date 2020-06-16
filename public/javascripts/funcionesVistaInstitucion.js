function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionInstitucion").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaPrograma").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPresentacionInstitucion").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionInstitucion").offsetTop)+"px";
    document.getElementById("divCapturaPrograma").style.maxHeight = document.getElementById("divPresentacionInstitucion").style.maxHeight;
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioPrograma").style.display = "none";
    /*
    Inhabilitación de botones de listado de programas
     */
    let i = 0;
    while (document.getElementById("btnPrograma"+i) != undefined) {
        document.getElementById("btnPrograma"+i).href = "#";
        document.getElementById("btnPrograma"+i).className = "w3-button w3-round aEnumeracionInactiva";
        i = i + 1;
    }
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionInstitucion").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaPrograma").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioPrograma").style.display = "none";
    /*
    Eliminación de valores de registros inconclusos
     */
    document.getElementById("inpNombrePrograma").value = "";
    document.getElementById("inpSniesPrograma").value = "";
    /*
    Habilitación de botones de listado de programas
     */
    let i = 0;
    while (document.getElementById("btnPrograma"+i) != undefined) {
        document.getElementById("btnPrograma"+i).href = document.getElementById("btnProgramaOculto"+i).value;
        document.getElementById("btnPrograma"+i).className = "w3-button w3-round aEnumeracion";
        i = i + 1;
    }
}

function clickCapturarPrograma() {
    document.getElementById("lblOpciones").innerHTML = "Registrar programa";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioPrograma").style.display = "block";
    document.getElementById("divDatosPrograma").style.display = "block";
    document.getElementById("divGrabarPrograma").style.display = "block";
    document.getElementById("inpNombrePrograma").focus();
}

function validarCapturaPrograma() {
    let rValidacion = true;
    rValidacion = rValidacion && document.getElementById("inpNombrePrograma").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpSniesPrograma").value.length > 0;
    if (rValidacion) {
        document.getElementById("btnGrabarPrograma").style.display = "inline-block";
    }
    else {
        document.getElementById("btnGrabarPrograma").style.display = "none";
    }
}
