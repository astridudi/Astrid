function inicializacionVistaSesion(pSesionJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    let pSesion = cadenaJson(pSesionJson);
    /*
    Inicialización del encabezado
     */
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        document.getElementById("lblUbicacion").innerHTML = pSesion._nombre+" | Planteamiento";
        document.getElementById("lblUsuario").innerHTML = urlParametros.get("nombreUsuario");
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        ubicarUsuario(urlParametros.get("nombreUsuario"),"Planteamiento");
        /*
        Inicialización de la altura máxima de dibujo
         */
        document.getElementById("divPresentacionPlanteamiento").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionPlanteamiento").offsetTop)+"px";
        document.getElementById("divPresentacionPlanteamiento").style.height = (window.innerHeight - document.getElementById("divPresentacionPlanteamiento").offsetTop)+"px";
        document.getElementById("divPresentacionPlanteamiento").style.width = window.innerWidth+"px";
        document.getElementById("divCapturaAccion").style.height = document.getElementById("divPresentacionPlanteamiento").style.height;
        document.getElementById("divCapturaAccion").style.width = 0+"px";
        document.getElementById("divCapturaAccion").style.display = "inline-block";

        document.getElementById("btnDesplegarCaptura").setAttribute(
            "onclick",
            ""
        );
    }
}
