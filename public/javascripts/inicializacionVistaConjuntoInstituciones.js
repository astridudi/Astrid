function inicializacionVistaConjuntoInstituciones(pInstitucionesJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var b = [];
    var botones = [];
    var ocultos = [];
    var rotulos = [];
    var rotulosMenor = [];
    let pInstituciones = cadenaJson(pInstitucionesJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Creación de la lista de instituciones en vista presentarConjuntoInstituciones
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
            botones[botones.length-1].href = "/main/presentarInstitucion?id="+pInstituciones._arreglo[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            botones[botones.length-1].setAttribute("onclick",
                "clickSeleccionarInstitucion('"+pInstituciones._arreglo[i]._id+"','"+pInstituciones._arreglo[i]._nombre+"','"+pInstituciones._arreglo[i]._sigla+"','"+pInstituciones._arreglo[i]._identificacion+"',"+i+")"
            );
            ocultos[ocultos.length] = document.createElement("input");
            ocultos[ocultos.length-1].id = "btnInstitucionOculto"+i;
            ocultos[ocultos.length-1].value = "/main/presentarInstitucion?id="+pInstituciones._arreglo[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            ocultos[ocultos.length-1].type = "hidden";
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblInstitucion"+i;
            rotulos[rotulos.length-1].innerHTML = pInstituciones._arreglo[i]._nombre;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            rotulosMenor[rotulosMenor.length] = document.createElement("label");
            rotulosMenor[rotulosMenor.length-1].id = "lblSniesInstitucion"+i;
            rotulosMenor[rotulosMenor.length-1].innerHTML = " (Snies: "+pInstituciones._arreglo[i]._identificacion+")";
            rotulosMenor[rotulosMenor.length-1].className = "lblMenor";
            if (pInstituciones._arreglo[i]._sigla.length > 0) {
                rotulos[rotulos.length-1].innerHTML = rotulos[rotulos.length-1].innerHTML +" - "+pInstituciones._arreglo[i]._sigla;
            }
            document.getElementById("divPresentacionInstituciones").appendChild(b[b.length-1]);
            document.getElementById("bInstitucion"+i).appendChild(botones[botones.length-1]);
            document.getElementById("bInstitucion"+i).appendChild(ocultos[ocultos.length-1]);
            document.getElementById("divPresentacionInstituciones").appendChild(rotulos[rotulos.length-1]);
            document.getElementById("divPresentacionInstituciones").appendChild(rotulosMenor[rotulosMenor.length-1]);
        }
        /*
        Inicialización del encabezado - Vista layout
         */
        document.getElementById("lblUbicacion").innerHTML = document.getElementById("lblAplicacion").innerHTML+" | Instituciones";
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("divListado").style.display = "block";

        clickOcultarOpciones();

        /*
        Inicialización métodos de acción
         */
        document.getElementById("btnDesplegarOpciones").setAttribute("onclick","clickDesplegarOpciones()");
        document.getElementById("btnOcultarOpciones").setAttribute("onclick","clickOcultarOpciones()");
        document.getElementById("btnAgregarInstitucion").setAttribute("onclick","clickCapturarInstitucion()");
        document.getElementById("btnEditarInstitucion").setAttribute("onclick","clickEditarInstitucion()");
        document.getElementById("btnEliminarInstitucion").setAttribute("onclick","clickEliminarInstitucion()");
        /*
        Inicialización métodos de validación
         */
        document.getElementById("inpNombreInstitucion").setAttribute("onfocus","validarCapturaInstitucion()");
        document.getElementById("inpNombreInstitucion").setAttribute("onblur","validarCapturaInstitucion()");
        document.getElementById("inpSiglaInstitucion").setAttribute("onblur","validarCapturaInstitucion()");
        document.getElementById("inpSniesInstitucion").setAttribute("onblur","validarCapturaInstitucion()");
    }
}
