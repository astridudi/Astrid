function inicializacionVistaConjuntoInstituciones(pInstitucionesJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var b = [];
    var botones = [];
    var rotulos = [];
    let pInstituciones = cadenaJson(pInstitucionesJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Inicialización del encabezado en layout
         */
        document.getElementById("lblUbicacion").innerHTML = document.getElementById("lblAplicacion").innerHTML+" | Instituciones";
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        /*
        Creación de la lista de instituciones en presentarConjuntoInstituciones
         */
        for (i=0; i<pInstituciones._arreglo.length; i++) {
            if (i>0) {
                document.getElementById("divPresentacionInstituciones").appendChild(document.createElement("br"));
            }
            b[b.length] = document.createElement("b");
            b[b.length-1].id = "bInstitucion"+i;
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnInstitucion"+i;
            botones[botones.length-1].innerHTML = (i+1)+".";
            botones[botones.length-1].className = "w3-button w3-round aEnumeracion";
            botones[botones.length-1].href = "/main/presentarInstitucion?id="+pInstituciones._arreglo[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblInstitucion"+i;
            rotulos[rotulos.length-1].innerHTML = pInstituciones._arreglo[i]._nombre;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            if (pInstituciones._arreglo[i]._sigla.length > 0) {
                rotulos[rotulos.length-1].innerHTML = rotulos[rotulos.length-1].innerHTML +" - "+pInstituciones._arreglo[i]._sigla;
            }
            document.getElementById("divPresentacionInstituciones").appendChild(b[b.length-1]);
            document.getElementById("bInstitucion"+i).appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionInstituciones").appendChild(rotulos[rotulos.length-1]);
        }
        clickOcultarOpciones();

        document.getElementById("btnDesplegarOpciones").setAttribute(
            "onclick",
            "clickDesplegarOpciones()"
        );
        document.getElementById("btnOcultarOpciones").setAttribute(
            "onclick",
            "clickOcultarOpciones()"
        );
        document.getElementById("btnAgregarInstitucion").setAttribute(
            "onclick",
            "clickCapturarInstitucion()"
        );
    }
}
