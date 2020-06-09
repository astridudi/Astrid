function clickOcultarOpciones() {
    ocultarOpcionesSesionLayout();
    document.getElementById("divPresentacionPlanteamiento").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaAccion").style.width = document.getElementById("anchoEmergente").value+"px";
}

function clickPresentarPlanteamiento() {
    document.getElementById("imgBtnPlanteamiento").style.display = "none";
    document.getElementById("imgBtnChat").style.display = "inline-block";
    document.getElementById("imgBtnDiagrama").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacion").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamientoActiva").style.display = "inline-block";
    document.getElementById("imgBtnChatActiva").style.display = "none";
    document.getElementById("imgBtnDiagramaActiva").style.display = "none";
    document.getElementById("imgBtnArgumentacionActiva").style.display = "none";
    document.getElementById("thPlanteamiento").className = "w3-round tblMenuSesionActiva";
    document.getElementById("thChat").className = "w3-round tblMenuSesionVisible";
    document.getElementById("thDiagrama").className = "w3-round tblMenuSesionVisible";
    document.getElementById("thArgumentacion").className = "w3-round tblMenuSesionVisible";
    document.getElementById("btnLlamar").title = "Llamar a planteamiento";
}
