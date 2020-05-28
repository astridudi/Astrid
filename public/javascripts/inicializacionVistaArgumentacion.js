function inicializacionVistaArgumentacion(pSesionJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    let pSesion = cadenaJson(pSesionJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Inicialización del encabezado
         */
        document.getElementById("lblUbicacion").innerHTML = pSesion._nombre+" | Argumentación";
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        document.getElementById("btnLlamar").src = "/images/imgArgumentacionLlamar.png";
        document.getElementById("imgBtnArgumentacion").style.display = "none";
        document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "inline-block";
    }

    clickOcultarOpciones();

    document.getElementById("btnDesplegarOpcionesSesion").setAttribute(
        "onclick",
        "clickDesplegarOpciones()"
    );
    document.getElementById("btnOcultarOpcionesSesion").setAttribute(
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
