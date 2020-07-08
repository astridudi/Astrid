function inicializacionVistaSesion(pSesionJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    let pSesion = cadenaJson(pSesionJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Inicialización del encabezado - Vista layout
         */
        document.getElementById("lblUbicacion").innerHTML = pSesion._nombre+" | Planteamiento";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("divSesion").style.display = "block";

        clickOcultarOpciones();
        clickPresentarPlanteamiento();

        document.getElementById("btnDesplegarOpcionesSesion").setAttribute("onclick","");
    }
}
