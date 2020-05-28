function inicializacionVistaInstitucion(pInstitucionJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var b = [];
    var botones = [];
    var rotulos = [];
    let pInstitucion = cadenaJson(pInstitucionJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Inicialización del encabezado en layout
         */
        document.getElementById("lblUbicacion").innerHTML = "Institución: "+pInstitucion._nombre;
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        /*
        Creación del bloque de datos de la institución
         */
        document.getElementById("lblNombreInstitucion").innerHTML = "Institución: "+pInstitucion._nombre;
        document.getElementById("lblSniesInstitucion").innerHTML = " (Snies: "+pInstitucion._identificacion+")";
        if (pInstitucion._sigla.length > 0) {
            document.getElementById("lblUbicacion").innerHTML = document.getElementById("lblUbicacion").innerHTML +" - "+pInstitucion._sigla;
            document.getElementById("lblNombreInstitucion").innerHTML = document.getElementById("lblNombreInstitucion").innerHTML +" - "+pInstitucion._sigla;
        }
        /*
        Creación de la lista de programas en presentarInstitucion
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
            botones[botones.length-1].href = "/main/presentarPrograma?id="+pInstitucion._programas[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblPrograma"+i;
            rotulos[rotulos.length-1].innerHTML = pInstitucion._programas[i]._nombre;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            document.getElementById("divPresentacionProgramas").appendChild(b[b.length-1]);
            document.getElementById("bPrograma"+i).appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionProgramas").appendChild(rotulos[rotulos.length-1]);
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
        document.getElementById("btnAgregarPrograma").setAttribute(
            "onclick",
            "clickCapturarPrograma()"
        );
    }
}
