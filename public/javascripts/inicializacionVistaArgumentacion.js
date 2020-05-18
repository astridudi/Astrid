function inicializacionVistaArgumentacion(pSesionJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    let pSesion = cadenaJson(pSesionJson);
    /*
    Inicialización del encabezado
     */
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        document.getElementById("lblUbicacion").innerHTML = pSesion._nombre+" | Argumentación";
        document.getElementById("lblUsuario").innerHTML = urlParametros.get("nombreUsuario");
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        /*
        Inicialización de la altura máxima de dibujo
         */
        document.getElementById("divPresentacionArgumentacion").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionArgumentacion").offsetTop)+"px";
        document.getElementById("divPresentacionArgumentacion").style.width = window.innerWidth+"px";
        document.getElementById("divCapturaAporte").style.height = document.getElementById("divPresentacionArgumentacion").style.height;
        document.getElementById("divCapturaAporte").style.width = 0+"px";
        document.getElementById("divCapturaAporte").style.display = "inline-block";
    }

    document.getElementById("btnDesplegarCaptura").setAttribute(
        "onclick",
        "clickCapturaAporte()"
    );
    document.getElementById("btnDesistirAporte").setAttribute(
        "onclick",
        "desistimientoAporte()"
    );
    document.getElementById("btnGrabarAporte").setAttribute(
        "onclick",
        "inclusionAporte()"
    );
    document.getElementById("imgBtnProposicion").setAttribute(
        "onclick",
        "clickCapturaContenido(0)"
    );
    document.getElementById("imgBtnApoyo").setAttribute(
        "onclick",
        "clickCapturaContenido(1)"
    );
    document.getElementById("imgBtnRefutacion").setAttribute(
        "onclick",
        "clickCapturaContenido(2)"
    );

}
