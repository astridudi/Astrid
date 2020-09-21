function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionInstitucion").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaPrograma").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPresentacionInstitucion").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionInstitucion").offsetTop)+"px";
    document.getElementById("divCapturaPrograma").style.maxHeight = document.getElementById("divPresentacionInstitucion").style.maxHeight;
    document.getElementById("lblOpciones").innerHTML = "Gestión de programas";
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
    ocultarSeleccion();
    document.getElementById("divPresentacionInstitucion").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaPrograma").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioPrograma").style.display = "none";
    document.getElementById("inpPaso").value = 0;
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

function ocultarSeleccion() {
    let i = 0;
    while (document.getElementById("lblPrograma"+i) != undefined) {
        document.getElementById("lblPrograma"+i).className = "lblPresentacion";
        i = i + 1;
    }
}

function clickIniciarCaptura() {
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioPrograma").style.display = "block";
    document.getElementById("divDatosPrograma").style.display = "block";
    document.getElementById("divGrabarPrograma").style.display = "block";
    document.getElementById("inpNombrePrograma").focus();
}

function clickCapturarPrograma() {
    document.getElementById("formPrograma").action = "/main/grabarPrograma";
    document.getElementById("lblOpciones").innerHTML = "Registrar programa";
    document.getElementById("btnGrabarPrograma").innerHTML = "Grabar programa";
    document.getElementById("inpPaso").value = 1;
    clickIniciarCaptura();
}

function clickEditarPrograma() {
    document.getElementById("formPrograma").action = "/main/actualizarPrograma";
    document.getElementById("lblOpciones").innerHTML = "Editar programa";
    document.getElementById("btnGrabarPrograma").innerHTML = "Confirmar edición";
    document.getElementById("inpPaso").value = 2;
    clickIniciarCaptura();
}

function clickEliminarPrograma() {
    document.getElementById("formPrograma").action = "/main/eliminarPrograma";
    document.getElementById("lblOpciones").innerHTML = "Inhabilitar programa";
    document.getElementById("btnGrabarPrograma").innerHTML = "Confirmar inhabilitación";
    document.getElementById("inpPaso").value = 3;
    clickIniciarCaptura();
}

function clickSeleccionarPrograma(pId,pNombre,pSnies,pIndice) {
    if (document.getElementById("inpPaso").value == 2 || document.getElementById("inpPaso").value == 3) {
        ocultarSeleccion();
        document.getElementById("lblPrograma"+pIndice).className = "lblPresentacionSeleccionado";
        document.getElementById("inpIdPrograma").value = pId;
        document.getElementById("inpNombrePrograma").value = pNombre;
        document.getElementById("inpSniesPrograma").value = pSnies;
        document.getElementById("inpNombrePrograma").focus();
    }
}

function validarCapturaPrograma() {
    let rValidacion = true;
    document.getElementById("inpNombrePrograma").value = removerCaracteresNoAceptados(document.getElementById("inpNombrePrograma").value);
    document.getElementById("inpSniesPrograma").value = removerCaracteresNoAceptados(document.getElementById("inpSniesPrograma").value);
    rValidacion = rValidacion && document.getElementById("inpNombrePrograma").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpSniesPrograma").value.length > 0;
    if (rValidacion) {
        document.getElementById("btnGrabarPrograma").style.display = "inline-block";
    }
    else {
        document.getElementById("btnGrabarPrograma").style.display = "none";
    }
}
