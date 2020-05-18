function inicializacionVistaConjuntoSesiones(pSesionesJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var botones = [];
    var rotulos = [];
    let pSesiones = cadenaJson(pSesionesJson);
    /*
    Inicialización del encabezado
     */
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        document.getElementById("lblUbicacion").innerHTML = "Sesiones";
        document.getElementById("lblUsuario").innerHTML = urlParametros.get("nombreUsuario");
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        /*
        Creación de la lista de sesiones
         */
        for (i=0; i<pSesiones._arreglo.length; i++) {
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnSesion"+i;
            botones[botones.length-1].innerHTML = (i+1);
            botones[botones.length-1].className = "w3-button w3-round";
            botones[botones.length-1].href = "/main/presentarSesion?idSesion="+pSesiones._arreglo[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            rotulos[rotulos.length] = document.createElement("b");
            rotulos[rotulos.length-1].id = "bSesion"+i;
            rotulos[rotulos.length-1].innerHTML = pSesiones._arreglo[i]._nombre;
            rotulos[rotulos.length-1].className = "bEnumeracion";
            document.getElementById("divPresentacionSesiones").appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionSesiones").appendChild(rotulos[rotulos.length-1]);
            document.getElementById("divPresentacionSesiones").appendChild(document.createElement("br"));
        }
        /*
        Inicialización de la altura máxima de dibujo
         */
        document.getElementById("divListado").style.display = "block";
        document.getElementById("divPresentacionSesiones").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionSesiones").offsetTop)+"px";
        document.getElementById("divCapturaSesion").style.height = document.getElementById("divPresentacionSesiones").style.height;
        restaurarDimensiones();
        document.getElementById("divCapturaSesion").style.display = "inline-block";

        document.getElementById("btnDesplegarCapturaListado").setAttribute(
            "onclick",
            "clickCapturaSesion()"
        );
    }
}
