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
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("divSesion").style.display = "block";

        clickOcultarOpciones();
        clickPresentarChat();

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
