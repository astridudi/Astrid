function inicializacionVistaConjuntoSesiones(pSesionesJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var b = [];
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
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
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
            botones[botones.length-1].href = "/main/presentarSesion?idSesion="+pSesiones._arreglo[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "bSesion"+i;
            rotulos[rotulos.length-1].innerHTML = pSesiones._arreglo[i]._nombre;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            document.getElementById("divPresentacionSesiones").appendChild(b[b.length-1]);
            document.getElementById("bSesion"+i).appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionSesiones").appendChild(rotulos[rotulos.length-1]);
        }
        /*
        Configuración vista inicial
         */
        document.getElementById("thDocentes").style.display = "none";
        document.getElementById("thCursos").style.display = "none";
        document.getElementById("thGrupos").style.display = "none";
        document.getElementById("thEstudiantes").style.display = "none";
        document.getElementById("divPresentacionSesiones").style.display = "block";
        /*
        Inicialización de la altura máxima de dibujo
         */
        document.getElementById("divListado").style.display = "block";
        document.getElementById("divPresentacionSesiones").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionSesiones").offsetTop)+"px";
        clickOcultarOpciones();

    }
}
