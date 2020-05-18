function inicializacionVistaChat(pSesionJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    let pSesion = cadenaJson(pSesionJson);
    /*
    Inicialización del encabezado
     */
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        document.getElementById("lblUbicacion").innerHTML = pSesion._nombre+" | Chat";
        document.getElementById("lblUsuario").innerHTML = urlParametros.get("nombreUsuario");
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        ubicarUsuario(urlParametros.get("nombreUsuario"),"Chat");
        /*
        Inicialización de la altura máxima de dibujo
         */
        document.getElementById("divPresentacionChat").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionChat").offsetTop)+"px";
        document.getElementById("divCapturaMensaje").style.height = document.getElementById("divPresentacionChat").style.height;
        restaurarDimensiones();
        document.getElementById("divCapturaMensaje").style.display = "inline-block";

        document.getElementById("btnDesplegarCaptura").setAttribute(
            "onclick",
            "clickCapturaMensaje()"
        );
    }
}
