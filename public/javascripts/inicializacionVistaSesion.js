function inicializacionVistaSesion(pSesionJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    let pSesion = cadenaJson(pSesionJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Inicialización del encabezado
         */
        document.getElementById("lblUbicacion").innerHTML = pSesion._nombre+" | Planteamiento";
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        document.getElementById("btnLlamar").src = "/images/imgPlanteamientoLlamar.png";
        document.getElementById("imgBtnPlanteamiento").style.display = "none";
        document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "inline-block";
        document.getElementById("thPlanteamiento").className = "tblSesionActiva w3-round";

        clickOcultarOpciones();

        document.getElementById("btnDesplegarCaptura").setAttribute(
            "onclick",
            ""
        );
    }
}
