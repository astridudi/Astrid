function inicializacionVistaChat(pSesionJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    let pSesion = cadenaJson(pSesionJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Inicialización del encabezado
         */
        document.getElementById("lblUbicacion").innerHTML = pSesion._nombre+" | Chat";
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        document.getElementById("btnLlamar").src = "/images/imgChatLlamar.png";
        document.getElementById("imgBtnChat").style.display = "none";
        document.getElementById("imgBtnChatInhabilitado").style.display = "inline-block";

        clickOcultarOpciones();

        document.getElementById("btnDesplegarOpcionesSesion").setAttribute(
            "onclick",
            "clickDesplegarOpciones()"
        );
        document.getElementById("btnOcultarOpcionesSesion").setAttribute(
            "onclick",
            "desistimientoMensaje()"
        );
    }
}
