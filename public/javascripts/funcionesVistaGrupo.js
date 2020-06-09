function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionGrupo").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaEstudiante").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionGrupo").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaEstudiante").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
}

function clickCapturarDocente() {
    document.getElementById("lblOpciones").innerHTML = "Registrar docente";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "block";
    document.getElementById("divDatosDocente").style.display = "block";
    document.getElementById("divGrabarDocente").style.display = "block";
}

function clickCapturarEstudiante() {
    document.getElementById("lblOpciones").innerHTML = "Registrar estudiante";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "block";
    document.getElementById("divDatosEstudiante").style.display = "block";
    document.getElementById("divGrabarEstudiante").style.display = "block";
}
