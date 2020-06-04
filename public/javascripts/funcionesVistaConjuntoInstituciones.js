function clickDesplegarOpciones() {
    // layout
    document.getElementById("thDesplegarOpciones").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("lblOpciones").style.display = "inline-block";
    document.getElementById("btnOcultarOpciones").style.display = "inline-block";
    document.getElementById("btnDesplegarOpciones").style.display = "none";
    // presentarConjuntoInstituciones
    document.getElementById("divPresentacionInstituciones").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("divCapturaInstitucion").style.width = Math.round(window.innerWidth * 0.50)+"px";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioInstitucion").style.display = "none";
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
    // presentarConjuntoInstituciones
    document.getElementById("divPresentacionInstituciones").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionInstituciones").offsetTop)+"px";
    document.getElementById("divPresentacionInstituciones").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaInstitucion").style.height = document.getElementById("divPresentacionInstituciones").style.height;
    document.getElementById("divCapturaInstitucion").style.width = 0+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioInstitucion").style.display = "none";
}

function clickCapturarInstitucion() {
    // layout
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").innerHTML = "Registrar institución";
    // presentarConjuntoInstituciones
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioInstitucion").style.display = "block";
    document.getElementById("divDatosInstitucion").style.display = "block";
    document.getElementById("divGrabarInstitucion").style.display = "block";
    document.getElementById("inpNombreInstitucion").focus();
}
