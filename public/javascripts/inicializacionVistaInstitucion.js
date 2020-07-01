function inicializacionVistaInstitucion(pInstitucionJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var b = [];
    var botones = [];
    var ocultos = [];
    var rotulos = [];
    var rotulosMenor = [];
    let pInstitucion = cadenaJson(pInstitucionJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Creación del bloque de datos de la institución
         */
        document.getElementById("lblNombreInstitucion").innerHTML = "Institución: "+pInstitucion._nombre;
        document.getElementById("lblSniesInstitucion").innerHTML = " (Snies: "+pInstitucion._identificacion+")";
        if (pInstitucion._sigla.length > 0) {
            document.getElementById("lblNombreInstitucion").innerHTML = document.getElementById("lblNombreInstitucion").innerHTML +" - "+pInstitucion._sigla;
        }
        /*
        Creación de la lista de programas en vista presentarInstitucion
         */
        for (i=0; i<pInstitucion._programas.length; i++) {
            if (i>0) {
                document.getElementById("divPresentacionProgramas").appendChild(document.createElement("br"));
            }
            b[b.length] = document.createElement("b");
            b[b.length-1].id = "bPrograma"+i;
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnPrograma"+i;
            botones[botones.length-1].innerHTML = (i+1)+".";
            botones[botones.length-1].className = "w3-button w3-round aEnumeracion";
            botones[botones.length-1].href = "/main/presentarPrograma?id="+pInstitucion._programas[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            botones[botones.length-1].setAttribute(
                "onclick",
                "clickSeleccionarPrograma('"+pInstitucion._programas[i]._id+"','"+pInstitucion._programas[i]._nombre+"','"+pInstitucion._programas[i]._identificacion+"',"+i+")"
            );
            ocultos[ocultos.length] = document.createElement("input");
            ocultos[ocultos.length-1].id = "btnProgramaOculto"+i;
            ocultos[ocultos.length-1].value = "/main/presentarPrograma?id="+pInstitucion._programas[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            ocultos[ocultos.length-1].type = "hidden";
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblPrograma"+i;
            rotulos[rotulos.length-1].innerHTML = pInstitucion._programas[i]._nombre;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            rotulosMenor[rotulosMenor.length] = document.createElement("label");
            rotulosMenor[rotulosMenor.length-1].id = "lblSniesPrograma"+i;
            rotulosMenor[rotulosMenor.length-1].innerHTML = " (Snies: "+pInstitucion._programas[i]._identificacion+")";
            rotulosMenor[rotulosMenor.length-1].className = "lblMenor";
            document.getElementById("divPresentacionProgramas").appendChild(b[b.length-1]);
            document.getElementById("bPrograma"+i).appendChild(botones[botones.length-1]);
            document.getElementById("bPrograma"+i).appendChild(ocultos[ocultos.length-1]);
            document.getElementById("divPresentacionProgramas").appendChild(rotulos[rotulos.length-1]);
            document.getElementById("divPresentacionProgramas").appendChild(rotulosMenor[rotulosMenor.length-1]);
        }
        /*
        Inicialización del encabezado - Vista layout
         */
        document.getElementById("lblUbicacion").innerHTML = "Institución: "+pInstitucion._nombre;
        if (pInstitucion._sigla.length > 0) {
            document.getElementById("lblUbicacion").innerHTML = document.getElementById("lblUbicacion").innerHTML +" - "+pInstitucion._sigla;
        }
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("divListado").style.display = "block";

        clickOcultarOpciones();

        /*
        Inicialización métodos de acción
         */
        document.getElementById("btnDesplegarOpciones").setAttribute("onclick","clickDesplegarOpciones()");
        document.getElementById("btnOcultarOpciones").setAttribute("onclick","clickOcultarOpciones()");
        document.getElementById("btnAgregarPrograma").setAttribute("onclick","clickCapturarPrograma()");
        document.getElementById("btnEditarPrograma").setAttribute("onclick","clickEditarPrograma()");
        document.getElementById("btnEliminarPrograma").setAttribute("onclick","clickEliminarPrograma()");
        /*
        Inicialización métodos de validación
         */
        document.getElementById("inpNombrePrograma").setAttribute("onfocus","validarCapturaPrograma()");
        document.getElementById("inpNombrePrograma").setAttribute("onblur","validarCapturaPrograma()");
        document.getElementById("inpSniesPrograma").setAttribute("onblur","validarCapturaPrograma()");
    }
}
