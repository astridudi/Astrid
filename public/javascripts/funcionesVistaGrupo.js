function clickDesplegarOpciones() {
    // layout
    document.getElementById("thDesplegarOpciones").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("lblOpciones").style.display = "inline-block";
    document.getElementById("btnOcultarOpciones").style.display = "inline-block";
    document.getElementById("btnDesplegarOpciones").style.display = "none";
    // presentarGrupo
    document.getElementById("divPresentacionGrupo").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("divCapturaEstudiante").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
}

function clickOcultarOpciones() {
    // layout
    document.getElementById("divListado").style.display = "block";
    document.getElementById("thDocentes").style.display = "none";
    document.getElementById("thCursos").style.display = "none";
    document.getElementById("thGrupos").style.display = "none";
    document.getElementById("thEstudiantes").style.display = "none";
    document.getElementById("thDesplegarOpciones").style.width = 50+"px";
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerecha";
    document.getElementById("lblOpciones").innerHTML = "";
    document.getElementById("lblOpciones").style.display = "none";
    document.getElementById("btnDesplegarOpciones").style.display = "block";
    document.getElementById("btnOcultarOpciones").style.display = "none";
    // presentarGrupo
    document.getElementById("divPresentacionGrupo").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionGrupo").offsetTop)+"px";
    document.getElementById("divPresentacionGrupo").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaEstudiante").style.height = document.getElementById("divPresentacionGrupo").style.height;
    document.getElementById("divCapturaEstudiante").style.width = 0+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "none";
}

function clickCapturarDocente() {
    // layout
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Registrar docente";
    // presentarGrupo
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioDocente").style.display = "block";
}

function clickCapturarEstudiante() {
    // layout
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Registrar estudiante";
    // presentarGrupo
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioEstudiante").style.display = "block";
}
