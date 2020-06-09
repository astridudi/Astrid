function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionPrograma").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaCurso").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionPrograma").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaCurso").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
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
