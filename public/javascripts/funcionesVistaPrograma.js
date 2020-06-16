function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionPrograma").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaCurso").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPresentacionPrograma").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionPrograma").offsetTop)+"px";
    document.getElementById("divCapturaCurso").style.maxHeight = document.getElementById("divPresentacionPrograma").style.maxHeight;
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
    /*
    Inhabilitación de pestañas
     */
    if (document.getElementById("btnAgregarCurso").style.display != "none") {
        document.getElementById("thDocentes").className = "w3-round tblMenuListado";
        document.getElementById("thEstudiantes").className = "w3-round tblMenuListado";
    }
    if (document.getElementById("btnAgregarDocente").style.display != "none") {
        document.getElementById("thCursos").className = "w3-round tblMenuListado";
        document.getElementById("thEstudiantes").className = "w3-round tblMenuListado";
    }
    if (document.getElementById("btnAgregarEstudiante").style.display != "none") {
        document.getElementById("thCursos").className = "w3-round tblMenuListado";
        document.getElementById("thDocentes").className = "w3-round tblMenuListado";
    }
    /*
    Inhabilitación de botones de listado de cursos
     */
    let i = 0;
    while (document.getElementById("btnCurso"+i) != undefined) {
        document.getElementById("btnCurso"+i).href = "#";
        document.getElementById("btnCurso"+i).className = "w3-button w3-round aEnumeracionInactiva";
        i = i + 1;
    }
    /*
    Inhabilitación de botones de listado de docentes
     */
    i = 0;
    while (document.getElementById("btnDocente"+i) != undefined) {
        document.getElementById("btnDocente"+i).href = "#";
        document.getElementById("btnDocente"+i).className = "w3-button w3-round aEnumeracionInactiva";
        i = i + 1;
    }
    /*
    Inhabilitación de botones de listado de estudiantes
     */
    i = 0;
    while (document.getElementById("btnEstudiante"+i) != undefined) {
        document.getElementById("btnEstudiante"+i).href = "#";
        document.getElementById("btnEstudiante"+i).className = "w3-button w3-round aEnumeracionInactiva";
        i = i + 1;
    }
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionPrograma").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaCurso").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
    /*
    Eliminación de valores de registros inconclusos
     */
    document.getElementById("inpNombreCurso").value = "";
    document.getElementById("inpIdentificacionCurso").value = "";
    document.getElementById("inpApellidosDocente").value = "";
    document.getElementById("inpNombresDocente").value = "";
    document.getElementById("inpIdentificacionDocente").value = "";
    document.getElementById("inpCorreoElectronicoDocente").value = "";
    document.getElementById("inpApellidosEstudiante").value = "";
    document.getElementById("inpNombresEstudiante").value = "";
    document.getElementById("inpIdentificacionEstudiante").value = "";
    document.getElementById("inpCorreoElectronicoEstudiante").value = "";
    /*
    Habilitación de pestañas
     */
    if (document.getElementById("btnAgregarCurso").style.display != "none" || document.getElementById("inpNombreCurso").style.display != "none") {
        document.getElementById("thDocentes").className = "w3-round tblMenuListadoVisible";
        document.getElementById("thEstudiantes").className = "w3-round tblMenuListadoVisible";
    }
    if (document.getElementById("btnAgregarDocente").style.display != "none" || document.getElementById("inpNombresDocente").style.display != "none") {
        document.getElementById("thCursos").className = "w3-round tblMenuListadoVisible";
        document.getElementById("thEstudiantes").className = "w3-round tblMenuListadoVisible";
    }
    if (document.getElementById("btnAgregarEstudiante").style.display != "none" || document.getElementById("inpNombresEstudiante").style.display != "none") {
        document.getElementById("thCursos").className = "w3-round tblMenuListadoVisible";
        document.getElementById("thDocentes").className = "w3-round tblMenuListadoVisible";
    }
    /*
    Habilitación de botones de listado de cursos
     */
    let i = 0;
    while (document.getElementById("btnCurso"+i) != undefined) {
        document.getElementById("btnCurso"+i).href = document.getElementById("btnCursoOculto"+i).value;
        document.getElementById("btnCurso"+i).className = "w3-button w3-round aEnumeracion";
        i = i + 1;
    }
    /*
    Habilitación de botones de listado de docentes
     */
    i = 0;
    while (document.getElementById("btnDocente"+i) != undefined) {
        document.getElementById("btnDocente"+i).href = document.getElementById("btnDocenteOculto"+i).value;
        document.getElementById("btnDocente"+i).className = "w3-button w3-round aEnumeracion";
        i = i + 1;
    }
    /*
    Habilitación de botones de listado de estudiantes
     */
    i = 0;
    while (document.getElementById("btnEstudiante"+i) != undefined) {
        document.getElementById("btnEstudiante"+i).href = document.getElementById("btnEstudianteOculto"+i).value;
        document.getElementById("btnEstudiante"+i).className = "w3-button w3-round aEnumeracion";
        i = i + 1;
    }
}

function clickDesplegarCursos() {
    document.getElementById("divPresentacionCursos").style.display = "block";
    document.getElementById("divPresentacionDocentes").style.display = "none";
    document.getElementById("divPresentacionEstudiantes").style.display = "none";
    document.getElementById("btnAgregarCurso").style.display = "inline-block";
    document.getElementById("btnEliminarCurso").style.display = "inline-block";
    document.getElementById("btnAgregarDocente").style.display = "none";
    document.getElementById("btnEliminarDocente").style.display = "none";
    document.getElementById("btnAgregarEstudiante").style.display = "none";
    document.getElementById("btnEliminarEstudiante").style.display = "none";
    document.getElementById("thCursos").className = "w3-round tblMenuListadoActiva";
    document.getElementById("thDocentes").className = "w3-round tblMenuListadoVisible";
    document.getElementById("thEstudiantes").className = "w3-round tblMenuListadoVisible";
    document.getElementById("btnDesplegarCursos").src="/images/imgCursoActiva.png";
    document.getElementById("btnDesplegarDocentes").src="/images/imgDocente.png";
    document.getElementById("btnDesplegarEstudiantes").src="/images/imgEstudiante.png";
}

function clickDesplegarDocentes() {
    document.getElementById("divPresentacionCursos").style.display = "none";
    document.getElementById("divPresentacionDocentes").style.display = "block";
    document.getElementById("divPresentacionEstudiantes").style.display = "none";
    document.getElementById("btnAgregarCurso").style.display = "none";
    document.getElementById("btnEliminarCurso").style.display = "none";
    document.getElementById("btnAgregarDocente").style.display = "inline-block";
    document.getElementById("btnEliminarDocente").style.display = "inline-block";
    document.getElementById("btnAgregarEstudiante").style.display = "none";
    document.getElementById("btnEliminarEstudiante").style.display = "none";
    document.getElementById("thCursos").className = "w3-round tblMenuListadoVisible";
    document.getElementById("thDocentes").className = "w3-round tblMenuListadoActiva";
    document.getElementById("thEstudiantes").className = "w3-round tblMenuListadoVisible";
    document.getElementById("btnDesplegarCursos").src="/images/imgCurso.png";
    document.getElementById("btnDesplegarDocentes").src="/images/imgDocenteActiva.png";
    document.getElementById("btnDesplegarEstudiantes").src="/images/imgEstudiante.png";
}

function clickDesplegarEstudiantes() {
    document.getElementById("divPresentacionCursos").style.display = "none";
    document.getElementById("divPresentacionDocentes").style.display = "none";
    document.getElementById("divPresentacionEstudiantes").style.display = "block";
    document.getElementById("btnAgregarCurso").style.display = "none";
    document.getElementById("btnEliminarCurso").style.display = "none";
    document.getElementById("btnAgregarDocente").style.display = "none";
    document.getElementById("btnEliminarDocente").style.display = "none";
    document.getElementById("btnAgregarEstudiante").style.display = "inline-block";
    document.getElementById("btnEliminarEstudiante").style.display = "inline-block";
    document.getElementById("thCursos").className = "w3-round tblMenuListadoVisible";
    document.getElementById("thDocentes").className = "w3-round tblMenuListadoVisible";
    document.getElementById("thEstudiantes").className = "w3-round tblMenuListadoActiva";
    document.getElementById("btnDesplegarCursos").src="/images/imgCurso.png";
    document.getElementById("btnDesplegarDocentes").src="/images/imgDocente.png";
    document.getElementById("btnDesplegarEstudiantes").src="/images/imgEstudianteActiva.png";
}

function clickCapturarCurso() {
    document.getElementById("lblOpciones").innerHTML = "Registrar curso";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "block";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
    document.getElementById("divDatosCurso").style.display = "block";
    document.getElementById("divGrabarCurso").style.display = "block";
    document.getElementById("inpNombreCurso").focus();
}

function clickCapturarDocente() {
    document.getElementById("lblOpciones").innerHTML = "Registrar docente";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "block";
    document.getElementById("divFormularioEstudiante").style.display = "none";
    document.getElementById("divDatosDocente").style.display = "block";
    document.getElementById("divGrabarDocente").style.display = "block";
    document.getElementById("inpApellidosDocente").focus();
}

function clickCapturarEstudiante() {
    document.getElementById("lblOpciones").innerHTML = "Registrar estudiante";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "block";
    document.getElementById("divDatosEstudiante").style.display = "block";
    document.getElementById("divGrabarEstudiante").style.display = "block";
    document.getElementById("inpApellidosEstudiante").focus();
}

function validarCapturaCurso() {
    let rValidacion = true;
    rValidacion = rValidacion && document.getElementById("inpNombreCurso").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpIdentificacionCurso").value.length > 0;
    if (rValidacion) {
        document.getElementById("btnGrabarCurso").style.display = "inline-block";
    }
    else {
        document.getElementById("btnGrabarCurso").style.display = "none";
    }
}

function validarCapturaDocente() {
    let rValidacion = true;
    rValidacion = rValidacion && document.getElementById("inpApellidosDocente").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpNombresDocente").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpIdentificacionDocente").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpCorreoElectronicoDocente").value.length > 0;
    if (rValidacion) {
        document.getElementById("btnGrabarDocente").style.display = "inline-block";
    }
    else {
        document.getElementById("btnGrabarDocente").style.display = "none";
    }
}

function validarCapturaEstudiante() {
    let rValidacion = true;
    rValidacion = rValidacion && document.getElementById("inpApellidosEstudiante").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpNombresEstudiante").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpIdentificacionEstudiante").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpCorreoElectronicoEstudiante").value.length > 0;
    if (rValidacion) {
        document.getElementById("btnGrabarEstudiante").style.display = "inline-block";
    }
    else {
        document.getElementById("btnGrabarEstudiante").style.display = "none";
    }
}
