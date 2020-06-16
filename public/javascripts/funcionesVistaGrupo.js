function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionGrupo").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaEstudiante").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPresentacionGrupo").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionGrupo").offsetTop)+"px";
    document.getElementById("divCapturaEstudiante").style.maxHeight = document.getElementById("divPresentacionGrupo").style.maxHeight;
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
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

function clickCapturarDocente() {
    document.getElementById("lblOpciones").innerHTML = "Registrar docente";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "block";
    document.getElementById("divDatosDocente").style.display = "block";
    document.getElementById("divGrabarDocente").style.display = "block";
    document.getElementById("inpIdentificacionDocente").focus();
}

function clickCapturarEstudiante() {
    document.getElementById("lblOpciones").innerHTML = "Registrar estudiante";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "block";
    document.getElementById("divDatosEstudiante").style.display = "block";
    document.getElementById("divGrabarEstudiante").style.display = "block";
    document.getElementById("inpIdentificacionEstudiante").focus();
}

function validarCapturaDocente() {
    let rValidacion = true;
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
    rValidacion = rValidacion && document.getElementById("inpIdentificacionEstudiante").value.length > 0;
    if (rValidacion) {
        document.getElementById("btnGrabarEstudiante").style.display = "inline-block";
    }
    else {
        document.getElementById("btnGrabarEstudiante").style.display = "none";
    }
}

