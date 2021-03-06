function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionGrupo").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaEstudiante").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPresentacionGrupo").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionGrupo").offsetTop)+"px";
    document.getElementById("divCapturaEstudiante").style.maxHeight = document.getElementById("divPresentacionGrupo").style.maxHeight;
    document.getElementById("lblOpciones").innerHTML = "Gestión de integrantes de grupo";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
    /*
    Inhabilitación de botones de listado de docentes
     */
    if (document.getElementById("btnDocente") != undefined) {
        document.getElementById("btnDocente").href = "#";
        document.getElementById("btnDocente").className = "w3-button w3-round aEnumeracionInactiva";
    }
    /*
    Inhabilitación de botones de listado de estudiantes
     */
    let i = 0;
    while (document.getElementById("btnEstudiante"+i) != undefined) {
        document.getElementById("btnEstudiante"+i).href = "#";
        document.getElementById("btnEstudiante"+i).className = "w3-button w3-round aEnumeracionInactiva";
        i = i + 1;
    }
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    ocultarSeleccion();
    document.getElementById("divPresentacionGrupo").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaEstudiante").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
    /*
    Eliminación de valores de registros inconclusos
     */
    document.getElementById("inpIdentificacionDocente").value = "";
    document.getElementById("inpIdentificacionEstudiante").value = "";
    /*
    Habilitación de botones de listado de docentes
     */
    if (document.getElementById("btnDocente") != undefined) {
        document.getElementById("btnDocente").href = document.getElementById("btnDocenteOculto").value;
        document.getElementById("btnDocente").className = "w3-button w3-round aEnumeracion";
    }
    /*
    Habilitación de botones de listado de estudiantes
     */
    let i = 0;
    while (document.getElementById("btnEstudiante"+i) != undefined) {
        document.getElementById("btnEstudiante"+i).href = document.getElementById("btnEstudianteOculto"+i).value;
        document.getElementById("btnEstudiante"+i).className = "w3-button w3-round aEnumeracion";
        i = i + 1;
    }
}

function ocultarSeleccion() {
    let i = 0;
    if (document.getElementById("lblDocente") != undefined) {
        document.getElementById("lblDocente").className = "lblPresentacion";
    }
    while (document.getElementById("lblEstudiante"+i) != undefined) {
        document.getElementById("lblEstudiante"+i).className = "lblPresentacion";
        i = i + 1;
    }
}

function clickIniciarCapturaDocente() {
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "block";
    document.getElementById("divFormularioEstudiante").style.display = "none";
    document.getElementById("divDatosDocente").style.display = "block";
    document.getElementById("divGrabarDocente").style.display = "block";
    document.getElementById("inpIdentificacionDocente").focus();
}

function clickCapturarDocente() {
    document.getElementById("formDocente").action = "/main/grabarVinculoDocente";
    document.getElementById("lblOpciones").innerHTML = "Vincular docente";
    document.getElementById("btnGrabarDocente").innerHTML = "Grabar vínculo docente";
    document.getElementById("inpPaso").value = 1;
    clickIniciarCapturaDocente();
}

function clickEliminarDocente() {
    document.getElementById("formDocente").action = "/main/eliminarVinculoDocente";
    document.getElementById("lblOpciones").innerHTML = "Desvincular docente";
    document.getElementById("btnGrabarDocente").innerHTML = "Confirmar desvinculación";
    document.getElementById("inpPaso").value = 3;
    clickIniciarCapturaDocente();
}

function clickIniciarCapturaEstudiante() {
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "block";
    document.getElementById("divDatosEstudiante").style.display = "block";
    document.getElementById("divGrabarEstudiante").style.display = "block";
    document.getElementById("inpIdentificacionEstudiante").focus();
}

function clickCapturarEstudiante() {
    document.getElementById("formDocente").action = "/main/grabarVinculoEstudiante";
    document.getElementById("lblOpciones").innerHTML = "Vincular estudiante";
    document.getElementById("btnGrabarEstudiante").innerHTML = "Grabar vínculo estudiante";
    document.getElementById("inpPaso").value = 1;
    clickIniciarCapturaEstudiante();
}

function clickEliminarEstudiante() {
    document.getElementById("formEstudiante").action = "/main/eliminarVinculoEstudiante";
    document.getElementById("lblOpciones").innerHTML = "Desvincular estudiante";
    document.getElementById("btnGrabarEstudiante").innerHTML = "Confirmar desvinculación";
    document.getElementById("inpPaso").value = 3;
    clickIniciarCapturaEstudiante();
}

function clickSeleccionarDocente(pId,pIdentificacion) {
    if (document.getElementById("inpPaso").value == 2 || document.getElementById("inpPaso").value == 3) {
        ocultarSeleccion();
        document.getElementById("lblDocente").className = "lblPresentacionSeleccionado";
        document.getElementById("inpIdDocente").value = pId;
        document.getElementById("inpIdentificacionDocente").value = pIdentificacion;
        document.getElementById("inpIdentificacionDocente").focus();
    }
}

function clickSeleccionarEstudiante(pId,pIdentificacion,pIndice) {
    if (document.getElementById("inpPaso").value == 2 || document.getElementById("inpPaso").value == 3) {
        ocultarSeleccion();
        document.getElementById("lblEstudiante"+pIndice).className = "lblPresentacionSeleccionado";
        document.getElementById("inpIdEstudiante").value = pId;
        document.getElementById("inpIdentificacionEstudiante").value = pIdentificacion;
        document.getElementById("inpIdentificacionEstudiante").focus();
    }
}

function validarCapturaDocente() {
    let rValidacion = true;
    document.getElementById("inpIdentificacionDocente").value = removerCaracteresNoAceptados(document.getElementById("inpIdentificacionDocente").value);
    rValidacion = rValidacion && document.getElementById("inpIdentificacionDocente").value.length > 0;
    if (rValidacion) {
        document.getElementById("btnGrabarDocente").style.display = "inline-block";
    }
    else {
        document.getElementById("btnGrabarDocente").style.display = "none";
    }
}

function validarCapturaEstudiante() {
    let rValidacion = true;
    document.getElementById("inpIdentificacionEstudiante").value = removerCaracteresNoAceptados(document.getElementById("inpIdentificacionEstudiante").value);
    rValidacion = rValidacion && document.getElementById("inpIdentificacionEstudiante").value.length > 0;
    if (rValidacion) {
        document.getElementById("btnGrabarEstudiante").style.display = "inline-block";
    }
    else {
        document.getElementById("btnGrabarEstudiante").style.display = "none";
    }
}

