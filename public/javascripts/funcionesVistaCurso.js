function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionCurso").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaGrupo").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPresentacionCurso").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionCurso").offsetTop)+"px";
    document.getElementById("divCapturaGrupo").style.maxHeight = document.getElementById("divPresentacionCurso").style.maxHeight;
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioGrupo").style.display = "none";
    /*
    Inhabilitación de pestañas
     */
    if (document.getElementById("btnAgregarGrupo").style.display != "none") {
        document.getElementById("thDocentes").className = "w3-round tblMenuListado";
    }
    else {
        document.getElementById("thGrupos").className = "w3-round tblMenuListado";
    }
    /*
    Inhabilitación de botones de listado de grupos
     */
    let i = 0;
    while (document.getElementById("btnGrupo"+i) != undefined) {
        document.getElementById("btnGrupo"+i).href = "#";
        document.getElementById("btnGrupo"+i).className = "w3-button w3-round aEnumeracionInactiva";
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
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionCurso").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaGrupo").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioGrupo").style.display = "none";
    /*
    Eliminación de valores de registros inconclusos
     */
    document.getElementById("inpNombreGrupo").value = "";
    document.getElementById("inpIdentificacionGrupo").value = "";
    /*
    Habilitación de pestañas
     */
    if (document.getElementById("btnAgregarGrupo").style.display != "none" || document.getElementById("divFormularioGrupo").style.display != "none") {
        document.getElementById("thDocentes").className = "w3-round tblMenuListadoVisible";
    }
    else {
        document.getElementById("thGrupos").className = "w3-round tblMenuListadoVisible";
    }
    /*
    Habilitación de botones de listado de cursos
     */
    let i = 0;
    while (document.getElementById("btnGrupo"+i) != undefined) {
        document.getElementById("btnGrupo"+i).href = document.getElementById("btnGrupoOculto"+i).value;
        document.getElementById("btnGrupo"+i).className = "w3-button w3-round aEnumeracion";
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

function validarCapturaGrupo() {
    let rValidacion = true;
    rValidacion = rValidacion && document.getElementById("inpNombreGrupo").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpIdentificacionGrupo").value.length > 0;
    if (rValidacion) {
        document.getElementById("btnGrabarGrupo").style.display = "inline-block";
    }
    else {
        document.getElementById("btnGrabarGrupo").style.display = "none";
    }
}

