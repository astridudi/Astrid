function clickOcultarOpciones() {
    // Restauración de tamaño inicial de las secciones en pantalla
    document.getElementById("thDesplegarOpcionesSesion").style.width = 50+"px";
    document.getElementById("divPresentacionPlanteamiento").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaAccion").style.width = 0+"px";
    document.getElementById("divPresentacionPlanteamiento").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionPlanteamiento").offsetTop)+"px";
    document.getElementById("divCapturaAccion").style.height = document.getElementById("divPresentacionPlanteamiento").style.height;
    // Cambio de aspecto de botones habilitados en menú divSesion
    document.getElementById("imgBtnChat").style.display = "inline-block";
    document.getElementById("imgBtnDiagrama").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacion").style.display = "inline-block";
    document.getElementById("imgBtnChatInhabilitado").style.display = "none";
    document.getElementById("imgBtnDiagramaInhabilitado").style.display = "none";
    document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "none";
    document.getElementById("btnLlamar").style.display = "none";
    document.getElementById("btnOcultarOpcionesSesion").style.display = "none";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "inline-block";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerecha";
    document.getElementById("lblOpcionesSesion").innerHTML = "";
    document.getElementById("lblOpcionesSesion").style.display = "none";
}
