function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionCurso").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaGrupo").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioGrupo").style.display = "none";
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionCurso").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaGrupo").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioGrupo").style.display = "none";
}

function clickDesplegarGrupos() {
    document.getElementById("divPresentacionDocentes").style.display = "none";
    document.getElementById("divPresentacionGrupos").style.display = "block";
    document.getElementById("btnAgregarGrupo").style.display = "inline-block";
    document.getElementById("btnEliminarGrupo").style.display = "inline-block";
    document.getElementById("thGrupos").className = "w3-round tblMenuListadoActiva";
    document.getElementById("thDocentes").className = "w3-round tblMenuListadoVisible";
    document.getElementById("btnDesplegarGrupos").src="/images/imgGrupoActiva.png";
    document.getElementById("btnDesplegarDocentes").src="/images/imgDocente.png";
}

function clickDesplegarDocentes() {
    document.getElementById("divPresentacionDocentes").style.display = "block";
    document.getElementById("divPresentacionGrupos").style.display = "none";
    document.getElementById("btnAgregarGrupo").style.display = "none";
    document.getElementById("btnEliminarGrupo").style.display = "none";
    document.getElementById("thGrupos").className = "w3-round tblMenuListadoVisible";
    document.getElementById("thDocentes").className = "w3-round tblMenuListadoActiva";
    document.getElementById("btnDesplegarGrupos").src="/images/imgGrupo.png";
    document.getElementById("btnDesplegarDocentes").src="/images/imgDocenteActiva.png";
}

function clickCapturarGrupo() {
    document.getElementById("lblOpciones").innerHTML = "Registrar grupo";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioGrupo").style.display = "block";
    document.getElementById("divDatosGrupo").style.display = "block";
    document.getElementById("divGrabarGrupo").style.display = "block";
    document.getElementById("inpNombreGrupo").focus();
}
