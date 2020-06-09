function clickDesplegarOpciones() {
    desplegarOpcionesSesionLayout();
    document.getElementById("divPresentacionChat").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaMensaje").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("lblOpcionesSesion").innerHTML = "Redactar mensaje";
    document.getElementById("divFormularioMensaje").style.display = "block";
    document.getElementById("divRedactarMensaje").style.display = "block";
    document.getElementById("divGrabarMensaje").style.display = "block";
    document.getElementById("inpMensajeContenido").value='';
    document.getElementById("inpMensajeContenido").focus();
    // Notificación a usuarios
    alertaMensaje();
}

function clickOcultarOpciones() {
    ocultarOpcionesSesionLayout();
    document.getElementById("divPresentacionChat").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaMensaje").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPresentacionChat").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionChat").offsetTop)+"px";
    document.getElementById("divCapturaMensaje").style.height = document.getElementById("divPresentacionChat").style.height;
}

function clickPresentarChat() {
    document.getElementById("imgBtnPlanteamiento").style.display = "inline-block";
    document.getElementById("imgBtnChat").style.display = "none";
    document.getElementById("imgBtnDiagrama").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacion").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamientoActiva").style.display = "none";
    document.getElementById("imgBtnChatActiva").style.display = "inline-block";
    document.getElementById("imgBtnDiagramaActiva").style.display = "none";
    document.getElementById("imgBtnArgumentacionActiva").style.display = "none";
    document.getElementById("thPlanteamiento").className = "w3-round tblMenuSesionVisible";
    document.getElementById("thChat").className = "w3-round tblMenuSesionActiva";
    document.getElementById("thDiagrama").className = "w3-round tblMenuSesionVisible";
    document.getElementById("thArgumentacion").className = "w3-round tblMenuSesionVisible";
    document.getElementById("btnLlamar").title = "Llamar a chat";
}
