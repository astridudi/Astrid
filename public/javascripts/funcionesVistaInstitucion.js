function clickDesplegarOpciones() {
    // layout
    document.getElementById("thDesplegarOpciones").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("lblOpciones").style.display = "inline-block";
    document.getElementById("btnOcultarOpciones").style.display = "inline-block";
    document.getElementById("btnDesplegarOpciones").style.display = "none";
    // presentarInstitucion
    document.getElementById("divPresentacionInstitucion").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("divCapturaPrograma").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioPrograma").style.display = "none";
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
    // presentarInstitucion
    document.getElementById("divPresentacionInstitucion").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionInstitucion").offsetTop)+"px";
    document.getElementById("divPresentacionInstitucion").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaPrograma").style.height = document.getElementById("divPresentacionInstitucion").style.height;
    document.getElementById("divCapturaPrograma").style.width = 0+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioPrograma").style.display = "none";
}

function clickCapturarPrograma() {
    // layout
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Registrar programa";
    // presentarInstitucion
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioPrograma").style.display = "block";
    document.getElementById("divDatosPrograma").style.display = "block";
    document.getElementById("divGrabarPrograma").style.display = "block";
    document.getElementById("inpNombrePrograma").focus();
}


