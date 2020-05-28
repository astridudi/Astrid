function clickDesplegarOpciones() {
    // layout
    document.getElementById("thDesplegarOpciones").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("lblOpciones").style.display = "inline-block";
    document.getElementById("btnOcultarOpciones").style.display = "inline-block";
    document.getElementById("btnDesplegarOpciones").style.display = "none";
    // presentarCurso
    document.getElementById("divPresentacionCurso").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("divCapturaGrupo").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioGrupo").style.display = "none";
}

function clickOcultarOpciones() {
    // layout
    document.getElementById("divListado").style.display = "block";
    document.getElementById("thCursos").style.display = "none";
    document.getElementById("thEstudiantes").style.display = "none";
    document.getElementById("thDesplegarOpciones").style.width = 50+"px";
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerecha";
    document.getElementById("lblOpciones").innerHTML = "";
    document.getElementById("lblOpciones").style.display = "none";
    document.getElementById("btnDesplegarOpciones").style.display = "block";
    document.getElementById("btnOcultarOpciones").style.display = "none";
    // presentarCurso
    document.getElementById("divPresentacionCurso").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionCurso").offsetTop)+"px";
    document.getElementById("divPresentacionCurso").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaGrupo").style.height = document.getElementById("divPresentacionCurso").style.height;
    document.getElementById("divCapturaGrupo").style.width = 0+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioGrupo").style.display = "none";
}

function clickDesplegarDocentes() {
    document.getElementById("divPresentacionDocentes").style.display = "block";
    document.getElementById("divPresentacionGrupos").style.display = "none";
    document.getElementById("btnAgregarGrupo").style.display = "none";
    document.getElementById("btnEliminarGrupo").style.display = "none";
}

function clickDesplegarGrupos() {
    document.getElementById("divPresentacionDocentes").style.display = "none";
    document.getElementById("divPresentacionGrupos").style.display = "inline-block";
    document.getElementById("btnAgregarGrupo").style.display = "inline-block";
    document.getElementById("btnEliminarGrupo").style.display = "inline-block";
}

function clickCapturarGrupo() {
    // layout
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Registrar grupo";
    // presentarCurso
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioGrupo").style.display = "block";
    document.getElementById("inpNombreGrupo").focus();
}
