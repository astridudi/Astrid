function clickDesplegarOpciones() {
    // layout
    // Cambio de tamaño de las secciones en pantalla
    document.getElementById("thDesplegarOpcionesSesion").style.width = Math.round(window.innerWidth * 0.35)+"px";
    document.getElementById("divPresentacionChat").style.width = Math.round(window.innerWidth * 0.65)+"px";
    document.getElementById("divCapturaMensaje").style.width = Math.round(window.innerWidth * 0.35)+"px";
    // Cambio de aspecto de botones inhabilitados en menú divSesion
    document.getElementById("imgBtnPlanteamiento").style.display = "none";
    document.getElementById("imgBtnDiagrama").style.display = "none";
    document.getElementById("imgBtnArgumentacion").style.display = "none";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnDiagramaInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "inline-block";
    // Habilitación de opciones de interacción con el usuario
    document.getElementById("btnLlamar").title = "Convocar al chat";
    document.getElementById("btnLlamar").style.display = "inline-block";
    document.getElementById("btnOcultarOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "none";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpcionesSesion").innerHTML = "Redactar mensaje";
    document.getElementById("lblOpcionesSesion").style.display = "inline-block";
    // Habilitación del formulario (las divisiones permanecen inhabilitadas)
    document.getElementById("divFormularioMensaje").style.display = "block";
    document.getElementById("divRedactarMensaje").style.display = "block";
    document.getElementById("divGrabarMensaje").style.display = "block";
    document.getElementById("inpMensajeContenido").value='';
    document.getElementById("inpMensajeContenido").focus();
    // Notificación a usuarios
    alertaMensaje();
}

function clickOcultarOpciones() {
    // Restauración de tamaño inicial de las secciones en pantalla
    document.getElementById("thDesplegarOpcionesSesion").style.width = 50+"px";
    document.getElementById("divPresentacionChat").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaMensaje").style.width = 0+"px";
    document.getElementById("divPresentacionChat").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionChat").offsetTop)+"px";
    document.getElementById("divCapturaMensaje").style.height = document.getElementById("divPresentacionChat").style.height;
    // Cambio de aspecto de botones habilitados en menú divSesion
    document.getElementById("imgBtnPlanteamiento").style.display = "inline-block";
    document.getElementById("imgBtnDiagrama").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacion").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "none";
    document.getElementById("imgBtnDiagramaInhabilitado").style.display = "none";
    document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "none";
    document.getElementById("btnLlamar").style.display = "none";
    document.getElementById("btnOcultarOpcionesSesion").style.display = "none";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "inline-block";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerecha";
    document.getElementById("lblOpcionesSesion").innerHTML = "";
    document.getElementById("lblOpcionesSesion").style.display = "none";
    // Ocultamiento de secciones del formulario y reinicio de elementos
    document.getElementById("divFormularioMensaje").style.display = "none";
}
