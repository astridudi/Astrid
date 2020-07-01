function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionPrograma").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaCurso").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPresentacionPrograma").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionPrograma").offsetTop)+"px";
    document.getElementById("divCapturaCurso").style.maxHeight = document.getElementById("divPresentacionPrograma").style.maxHeight;
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
    ocultarSeleccion();
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
    if (document.getElementById("btnAgregarCurso").style.display != "none") {
        document.getElementById("thCursos").className = "w3-round tblMenuListadoActiva";
        document.getElementById("thDocentes").className = "w3-round tblMenuListadoVisible";
        document.getElementById("thEstudiantes").className = "w3-round tblMenuListadoVisible";
    }
    if (document.getElementById("btnAgregarDocente").style.display != "none") {
        document.getElementById("thCursos").className = "w3-round tblMenuListadoVisible";
        document.getElementById("thDocentes").className = "w3-round tblMenuListadoActiva";
        document.getElementById("thEstudiantes").className = "w3-round tblMenuListadoVisible";
    }
    if (document.getElementById("btnAgregarEstudiante").style.display != "none") {
        document.getElementById("thCursos").className = "w3-round tblMenuListadoVisible";
        document.getElementById("thDocentes").className = "w3-round tblMenuListadoVisible";
        document.getElementById("thEstudiantes").className = "w3-round tblMenuListadoActiva";
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
    document.getElementById("btnEditarCurso").style.display = "inline-block";
    document.getElementById("btnEliminarCurso").style.display = "inline-block";
    document.getElementById("btnAgregarDocente").style.display = "none";
    document.getElementById("btnEditarDocente").style.display = "none";
    document.getElementById("btnEliminarDocente").style.display = "none";
    document.getElementById("btnAgregarEstudiante").style.display = "none";
    document.getElementById("btnEditarEstudiante").style.display = "none";
    document.getElementById("btnEliminarEstudiante").style.display = "none";
    document.getElementById("thCursos").className = "w3-round tblMenuListadoActiva";
    document.getElementById("thDocentes").className = "w3-round tblMenuListadoVisible";
    document.getElementById("thEstudiantes").className = "w3-round tblMenuListadoVisible";
    document.getElementById("btnDesplegarCursos").src="/images/imgCursoActiva.png";
    document.getElementById("btnDesplegarDocentes").src="/images/imgDocente.png";
    document.getElementById("btnDesplegarEstudiantes").src="/images/imgEstudiante.png";
    document.getElementById("lblOpciones").innerHTML = "Gestión de cursos";
}

function clickDesplegarDocentes() {
    document.getElementById("divPresentacionCursos").style.display = "none";
    document.getElementById("divPresentacionDocentes").style.display = "block";
    document.getElementById("divPresentacionEstudiantes").style.display = "none";
    document.getElementById("btnAgregarCurso").style.display = "none";
    document.getElementById("btnEditarCurso").style.display = "none";
    document.getElementById("btnEliminarCurso").style.display = "none";
    document.getElementById("btnAgregarDocente").style.display = "inline-block";
    document.getElementById("btnEditarDocente").style.display = "inline-block";
    document.getElementById("btnEliminarDocente").style.display = "inline-block";
    document.getElementById("btnAgregarEstudiante").style.display = "none";
    document.getElementById("btnEditarEstudiante").style.display = "none";
    document.getElementById("btnEliminarEstudiante").style.display = "none";
    document.getElementById("thCursos").className = "w3-round tblMenuListadoVisible";
    document.getElementById("thDocentes").className = "w3-round tblMenuListadoActiva";
    document.getElementById("thEstudiantes").className = "w3-round tblMenuListadoVisible";
    document.getElementById("btnDesplegarCursos").src="/images/imgCurso.png";
    document.getElementById("btnDesplegarDocentes").src="/images/imgDocenteActiva.png";
    document.getElementById("btnDesplegarEstudiantes").src="/images/imgEstudiante.png";
    document.getElementById("lblOpciones").innerHTML = "Gestión de docentes";
}

function clickDesplegarEstudiantes() {
    document.getElementById("divPresentacionCursos").style.display = "none";
    document.getElementById("divPresentacionDocentes").style.display = "none";
    document.getElementById("divPresentacionEstudiantes").style.display = "block";
    document.getElementById("btnAgregarCurso").style.display = "none";
    document.getElementById("btnEditarCurso").style.display = "none";
    document.getElementById("btnEliminarCurso").style.display = "none";
    document.getElementById("btnAgregarDocente").style.display = "none";
    document.getElementById("btnEditarDocente").style.display = "none";
    document.getElementById("btnEliminarDocente").style.display = "none";
    document.getElementById("btnAgregarEstudiante").style.display = "inline-block";
    document.getElementById("btnEditarEstudiante").style.display = "inline-block";
    document.getElementById("btnEliminarEstudiante").style.display = "inline-block";
    document.getElementById("thCursos").className = "w3-round tblMenuListadoVisible";
    document.getElementById("thDocentes").className = "w3-round tblMenuListadoVisible";
    document.getElementById("thEstudiantes").className = "w3-round tblMenuListadoActiva";
    document.getElementById("btnDesplegarCursos").src="/images/imgCurso.png";
    document.getElementById("btnDesplegarDocentes").src="/images/imgDocente.png";
    document.getElementById("btnDesplegarEstudiantes").src="/images/imgEstudianteActiva.png";
    document.getElementById("lblOpciones").innerHTML = "Gestión de estudiantes";
}

function ocultarSeleccion() {
    let i = 0;
    while (document.getElementById("lblCurso"+i) != undefined) {
        document.getElementById("lblCurso"+i).className = "lblPresentacion";
        i = i + 1;
    }
    i = 0;
    while (document.getElementById("lblDocente"+i) != undefined) {
        document.getElementById("lblDocente"+i).className = "lblPresentacion";
        i = i + 1;
    }
    i = 0;
    while (document.getElementById("lblEstudiante"+i) != undefined) {
        document.getElementById("lblEstudiante"+i).className = "lblPresentacion";
        i = i + 1;
    }
}

function clickIniciarCapturaCurso() {
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "block";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
    document.getElementById("divDatosCurso").style.display = "block";
    document.getElementById("divGrabarCurso").style.display = "block";
    document.getElementById("inpNombreCurso").focus();
}

function clickCapturarCurso() {
    document.getElementById("formCurso").action = "/main/grabarCurso";
    document.getElementById("lblOpciones").innerHTML = "Registrar curso";
    document.getElementById("btnGrabarCurso").innerHTML = "Grabar curso";
    document.getElementById("inpPaso").value = 1;
    clickIniciarCapturaCurso();
}

function clickEditarCurso() {
    document.getElementById("formCurso").action = "/main/actualizarCurso";
    document.getElementById("lblOpciones").innerHTML = "Editar curso";
    document.getElementById("btnGrabarCurso").innerHTML = "Confirmar edición";
    document.getElementById("inpPaso").value = 2;
    clickIniciarCapturaCurso();
}

function clickEliminarCurso() {
    document.getElementById("formCurso").action = "/main/eliminarCurso";
    document.getElementById("lblOpciones").innerHTML = "Inhabilitar curso";
    document.getElementById("btnGrabarCurso").innerHTML = "Confirmar inhabilitación";
    document.getElementById("inpPaso").value = 3;
    clickIniciarCapturaCurso();
}

function clickIniciarCapturaDocente() {
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "block";
    document.getElementById("divFormularioEstudiante").style.display = "none";
    document.getElementById("divDatosDocente").style.display = "block";
    document.getElementById("divGrabarDocente").style.display = "block";
    document.getElementById("inpApellidosDocente").focus();
}

function clickCapturarDocente() {
    document.getElementById("formDocente").action = "/main/grabarDocente";
    document.getElementById("lblOpciones").innerHTML = "Registrar docente";
    document.getElementById("btnGrabarDocente").innerHTML = "Grabar docente";
    document.getElementById("inpPaso").value = 1;
    clickIniciarCapturaDocente();
}

function clickEditarDocente() {
    document.getElementById("formDocente").action = "/main/actualizarDocente";
    document.getElementById("lblOpciones").innerHTML = "Editar docente";
    document.getElementById("btnGrabarDocente").innerHTML = "Confirmar edición";
    document.getElementById("inpPaso").value = 2;
    clickIniciarCapturaDocente();
}

function clickEliminarDocente() {
    document.getElementById("formDocente").action = "/main/eliminarDocente";
    document.getElementById("lblOpciones").innerHTML = "Inhabilitar docente";
    document.getElementById("btnGrabarDocente").innerHTML = "Confirmar inhabilitación";
    document.getElementById("inpPaso").value = 3;
    clickIniciarCapturaDocente();
}

function clickIniciarCapturaEstudiante() {
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "block";
    document.getElementById("divDatosEstudiante").style.display = "block";
    document.getElementById("divGrabarEstudiante").style.display = "block";
    document.getElementById("inpApellidosEstudiante").focus();
}

function clickCapturarEstudiante() {
    document.getElementById("formEstudiante").action = "/main/grabarEstudiante";
    document.getElementById("lblOpciones").innerHTML = "Registrar estudiante";
    document.getElementById("btnGrabarEstudiante").innerHTML = "Grabar estudiante";
    document.getElementById("inpPaso").value = 1;
    clickIniciarCapturaEstudiante();
}

function clickEditarEstudiante() {
    document.getElementById("formEstudiante").action = "/main/actualizarEstudiante";
    document.getElementById("lblOpciones").innerHTML = "Editar estudiante";
    document.getElementById("btnGrabarEstudiante").innerHTML = "Confirmar edición";
    document.getElementById("inpPaso").value = 2;
    clickIniciarCapturaEstudiante();
}

function clickEliminarEstudiante() {
    document.getElementById("formEstudiante").action = "/main/eliminarEstudiante";
    document.getElementById("lblOpciones").innerHTML = "Inhabilitar estudiante";
    document.getElementById("btnGrabarEstudiante").innerHTML = "Confirmar inhabilitación";
    document.getElementById("inpPaso").value = 3;
    clickIniciarCapturaEstudiante();
}

function clickSeleccionarCurso(pId,pNombre,pIdentificacion,pIndice) {
    if (document.getElementById("inpPaso").value == 2 || document.getElementById("inpPaso").value == 3) {
        ocultarSeleccion();
        document.getElementById("lblCurso"+pIndice).className = "lblPresentacionSeleccionado";
        document.getElementById("inpIdCurso").value = pId;
        document.getElementById("inpNombreCurso").value = pNombre;
        document.getElementById("inpIdentificacionCurso").value = pIdentificacion;
        document.getElementById("inpNombreCurso").focus();
    }
}

function clickSeleccionarDocente(pId,pApellidos,pNombres,pIdentificacion,pCorreoElectronico,pIndice) {
    if (document.getElementById("inpPaso").value == 2 || document.getElementById("inpPaso").value == 3) {
        ocultarSeleccion();
        document.getElementById("lblDocente"+pIndice).className = "lblPresentacionSeleccionado";
        document.getElementById("inpIdDocente").value = pId;
        document.getElementById("inpApellidosDocente").value = pApellidos;
        document.getElementById("inpNombresDocente").value = pNombres;
        document.getElementById("inpIdentificacionDocente").value = pIdentificacion;
        document.getElementById("inpCorreoElectronicoDocente").value = pCorreoElectronico;
        document.getElementById("inpApellidosDocente").focus();
    }
}

function clickSeleccionarEstudiante(pId,pApellidos,pNombres,pIdentificacion,pCorreoElectronico,pIndice) {
    if (document.getElementById("inpPaso").value == 2 || document.getElementById("inpPaso").value == 3) {
        ocultarSeleccion();
        document.getElementById("lblEstudiante"+pIndice).className = "lblPresentacionSeleccionado";
        document.getElementById("inpIdEstudiante").value = pId;
        document.getElementById("inpApellidosEstudiante").value = pApellidos;
        document.getElementById("inpNombresEstudiante").value = pNombres;
        document.getElementById("inpIdentificacionEstudiante").value = pIdentificacion;
        document.getElementById("inpCorreoElectronicoEstudiante").value = pCorreoElectronico;
        document.getElementById("inpApellidosEstudiante").focus();
    }
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
