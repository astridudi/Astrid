function inicializacionVistaConjuntoInstituciones(pInstitucionesJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var botones = [];
    var rotulos = [];
    let pInstituciones = cadenaJson(pInstitucionesJson);
    /*
    Inicialización del encabezado
     */
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        document.getElementById("lblUbicacion").innerHTML = "Instituciones";
        document.getElementById("lblUsuario").innerHTML = urlParametros.get("nombreUsuario");
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        /*
        Creación de la lista de instituciones
         */
        for (i=0; i<pInstituciones._arreglo.length; i++) {
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnInstitucion"+i;
            botones[botones.length-1].innerHTML = (i+1);
            botones[botones.length-1].className = "w3-button w3-round";
            botones[botones.length-1].href = "/main/presentarInstitucion?id="+pInstituciones._arreglo[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            rotulos[rotulos.length] = document.createElement("b");
            rotulos[rotulos.length-1].id = "bInstitucion"+i;
            rotulos[rotulos.length-1].innerHTML = pInstituciones._arreglo[i]._nombre;
            rotulos[rotulos.length-1].className = "bEnumeracion";
            document.getElementById("divPresentacionInstituciones").appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionInstituciones").appendChild(rotulos[rotulos.length-1]);
            document.getElementById("divPresentacionInstituciones").appendChild(document.createElement("br"));
        }
        /*
        Inicialización de la altura máxima de dibujo
         */
        document.getElementById("divListado").style.display = "block";
        document.getElementById("divPresentacionInstituciones").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionInstituciones").offsetTop)+"px";
        document.getElementById("divCapturaInstitucion").style.height = document.getElementById("divPresentacionInstituciones").style.height;
        restaurarDimensiones();
        document.getElementById("divCapturaInstitucion").style.display = "inline-block";

        document.getElementById("btnDesplegarCapturaListado").setAttribute(
            "onclick",
            "clickCapturaInstitucion()"
        );
    }
}
