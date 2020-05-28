function clickDesplegarOpciones() {
    // layout
    document.getElementById("thDesplegarOpcionesSesion").style.width = Math.round(window.innerWidth * 0.35)+"px";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpcionesSesion").innerHTML = "Redactar mensaje";
    document.getElementById("lblOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnOcultarOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "none";
    document.getElementById("btnLlamar").title = "Convocar al chat";
    document.getElementById("btnLlamar").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamiento").style.display = "none";
    document.getElementById("imgBtnDiagrama").style.display = "none";
    document.getElementById("imgBtnArgumentacion").style.display = "none";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnDiagramaInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "inline-block";
    // presentarChat
    document.getElementById("divPresentacionChat").style.width = Math.round(window.innerWidth * 0.65)+"px";
    document.getElementById("divCapturaMensaje").style.width = Math.round(window.innerWidth * 0.35)+"px";
    document.getElementById("divFormularioMensaje").style.display = "block";
    // divCapturaMensaje
    document.getElementById("mensajeContenido").value='';
    document.getElementById("mensajeContenido").focus();
    alertaMensaje();
}

function clickOcultarOpciones() {
    // layout
    document.getElementById("divSesion").style.display = "block";
    document.getElementById("thDesplegarOpcionesSesion").style.width = 50+"px";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerecha";
    document.getElementById("lblOpcionesSesion").innerHTML = "";
    document.getElementById("lblOpcionesSesion").style.display = "none";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnOcultarOpcionesSesion").style.display = "none";
    document.getElementById("btnLlamar").style.display = "none";
    document.getElementById("imgBtnPlanteamiento").style.display = "inline-block";
    document.getElementById("imgBtnDiagrama").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacion").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "none";
    document.getElementById("imgBtnDiagramaInhabilitado").style.display = "none";
    document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "none";
    // presentarCurso
    document.getElementById("divPresentacionChat").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionChat").offsetTop)+"px";
    document.getElementById("divPresentacionChat").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaMensaje").style.height = document.getElementById("divPresentacionChat").style.height;
    document.getElementById("divCapturaMensaje").style.width = 0+"px";
    document.getElementById("divFormularioMensaje").style.display = "none";
}

