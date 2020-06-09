function inicializacionVistaConjuntoSesiones(pSesionesJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var b = [];
    var botones = [];
    var rotulos = [];
    let pSesiones = cadenaJson(pSesionesJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Creación de la lista de sesiones
         */
        for (i=0; i<pSesiones._arreglo.length; i++) {
            if (i>0) {
                document.getElementById("divPresentacionSesiones").appendChild(document.createElement("br"));
            }
            b[b.length] = document.createElement("b");
            b[b.length-1].id = "bSesion"+i;
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnSesion"+i;
            botones[botones.length-1].innerHTML = (i+1)+".";
            botones[botones.length-1].className = "w3-button w3-round aEnumeracion";
            botones[botones.length-1].href = "/main/presentarSesion?idSesion="+pSesiones._arreglo[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "bSesion"+i;
            rotulos[rotulos.length-1].innerHTML = pSesiones._arreglo[i]._nombre;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            document.getElementById("divPresentacionSesiones").appendChild(b[b.length-1]);
            document.getElementById("bSesion"+i).appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionSesiones").appendChild(rotulos[rotulos.length-1]);
        }
        /*
        Inicialización del encabezado - Vista layout
         */
        document.getElementById("lblUbicacion").innerHTML = document.getElementById("lblAplicacion").innerHTML+" | Sesiones";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("divListado").style.display = "block";

        clickOcultarOpciones();

    }
}
