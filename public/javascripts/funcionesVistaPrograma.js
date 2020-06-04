function clickDesplegarOpciones() {
    // layout
    document.getElementById("thDesplegarOpciones").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("lblOpciones").style.display = "inline-block";
    document.getElementById("btnOcultarOpciones").style.display = "inline-block";
    document.getElementById("btnDesplegarOpciones").style.display = "none";
    // presentarPrograma
    document.getElementById("divPresentacionPrograma").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("divCapturaCurso").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
}

function clickOcultarOpciones() {
    // layout
    document.getElementById("divListado").style.display = "block";
    document.getElementById("thGrupos").style.display = "none";
    document.getElementById("thDesplegarOpciones").style.width = 50+"px";
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerecha";
    document.getElementById("lblOpciones").innerHTML = "";
    document.getElementById("lblOpciones").style.display = "none";
    document.getElementById("btnDesplegarOpciones").style.display = "block";
    document.getElementById("btnOcultarOpciones").style.display = "none";
    // presentarPrograma
    document.getElementById("divPresentacionPrograma").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionPrograma").offsetTop)+"px";
    document.getElementById("divPresentacionPrograma").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaCurso").style.height = document.getElementById("divPresentacionPrograma").style.height;
    document.getElementById("divCapturaCurso").style.width = 0+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
}

function clickDesplegarCursos() {
    document.getElementById("divPresentacionCursos").style.display = "inline-block";
    document.getElementById("divPresentacionDocentes").style.display = "none";
    document.getElementById("divPresentacionEstudiantes").style.display = "none";
    document.getElementById("btnAgregarCurso").style.display = "inline-block";
    document.getElementById("btnEliminarCurso").style.display = "inline-block";
    document.getElementById("btnAgregarDocente").style.display = "none";
    document.getElementById("btnEliminarDocente").style.display = "none";
    document.getElementById("btnAgregarEstudiante").style.display = "none";
    document.getElementById("btnEliminarEstudiante").style.display = "none";
    document.getElementById("thCursos").className = "tblListadoActiva w3-round"
    document.getElementById("thDocentes").className = "tblListado w3-round"
    document.getElementById("thEstudiantes").className = "tblListado w3-round"
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
    document.getElementById("thCursos").className = "tblListado w3-round"
    document.getElementById("thDocentes").className = "tblListadoActiva w3-round"
    document.getElementById("thEstudiantes").className = "tblListado w3-round"
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
    document.getElementById("thCursos").className = "tblListado w3-round"
    document.getElementById("thDocentes").className = "tblListado w3-round"
    document.getElementById("thEstudiantes").className = "tblListadoActiva w3-round"
}

function clickCapturarCurso() {
    // layout
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Registrar curso";
    // presentarPrograma
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "block";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
    document.getElementById("divDatosCurso").style.display = "block";
    document.getElementById("divGrabarCurso").style.display = "block";
    document.getElementById("inpNombreCurso").focus();
}

function clickCapturarDocente() {
    // layout
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Registrar docente";
    // presentarPrograma
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "block";
    document.getElementById("divFormularioEstudiante").style.display = "none";
    document.getElementById("divDatosDocente").style.display = "block";
    document.getElementById("divGrabarDocente").style.display = "block";
    document.getElementById("inpApellidosDocente").focus();
}

function clickCapturarEstudiante() {
    // layout
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Registrar estudiante";
    // presentarPrograma
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCurso").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "block";
    document.getElementById("divDatosEstudiante").style.display = "block";
    document.getElementById("divGrabarEstudiante").style.display = "block";
    document.getElementById("inpApellidosEstudiante").focus();
}
