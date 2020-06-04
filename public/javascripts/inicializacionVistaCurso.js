function inicializacionVistaCurso(pCursoJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var b = [];
    var botones = [];
    var rotulos = [];
    let pCurso = cadenaJson(pCursoJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Inicialización del encabezado
         */
        document.getElementById("lblUbicacion").innerHTML = "Curso: "+pCurso._nombre;
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        /*
        Creación del bloque de datos del curso
         */
        document.getElementById("lblNombreInstitucion").innerHTML = "Institución: "+pCurso._programa._institucion._nombre;
        document.getElementById("lblSniesInstitucion").innerHTML = " (Snies: "+pCurso._programa._institucion._identificacion+")";
        document.getElementById("lblNombrePrograma").innerHTML = "Programa: "+pCurso._programa._nombre;
        document.getElementById("lblSniesPrograma").innerHTML = " (Snies: "+pCurso._programa._identificacion+")";
        document.getElementById("lblNombreCurso").innerHTML = "Curso: "+pCurso._nombre;
        document.getElementById("lblIdentificacionCurso").innerHTML = " ("+pCurso._identificacion+")";
        if (pCurso._programa._institucion._sigla.length > 0) {
            document.getElementById("lblNombreInstitucion").innerHTML = document.getElementById("lblNombreInstitucion").innerHTML +" - "+pCurso._programa._institucion._sigla;
        }
        /*
        Creación de la lista de docentes
         */
        for (i=0; i<pCurso._docentes.length; i++) {
            if (i>0) {
                document.getElementById("divPresentacionDocentes").appendChild(document.createElement("br"));
            }
            b[b.length] = document.createElement("b");
            b[b.length-1].id = "bDocente"+i;
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnDocente"+i;
            botones[botones.length-1].innerHTML = (i+1)+".";
            botones[botones.length-1].className = "w3-button w3-round aEnumeracion";
            botones[botones.length-1].href = "/main/presentarDocente?id="+pCurso._docentes[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblDocente"+i;
            rotulos[rotulos.length-1].innerHTML = pCurso._docentes[i]._apellidos+" "+pCurso._docentes[i]._nombres;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            document.getElementById("divPresentacionDocentes").appendChild(b[b.length-1]);
            document.getElementById("bDocente"+i).appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionDocentes").appendChild(rotulos[rotulos.length-1]);
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblCorreoDocente"+i;
            rotulos[rotulos.length-1].innerHTML = " ("+pCurso._docentes[i]._correo+")";
            rotulos[rotulos.length-1].className = "lblMenor";
            document.getElementById("divPresentacionDocentes").appendChild(rotulos[rotulos.length-1]);
        }
        /*
        Creación de la lista de grupos
         */
        for (i=0; i<pCurso._grupos.length; i++) {
            if (i>0) {
                document.getElementById("divPresentacionGrupos").appendChild(document.createElement("br"));
            }
            b[b.length] = document.createElement("b");
            b[b.length-1].id = "bGrupo"+i;
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnGrupo"+i;
            botones[botones.length-1].innerHTML = (i+1)+".";
            botones[botones.length-1].className = "w3-button w3-round aEnumeracion";
            botones[botones.length-1].href = "/main/presentarGrupo?id="+pCurso._grupos[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblGrupo"+i;
            rotulos[rotulos.length-1].innerHTML = pCurso._grupos[i]._nombre;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            document.getElementById("divPresentacionGrupos").appendChild(b[b.length-1]);
            document.getElementById("bGrupo"+i).appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionGrupos").appendChild(rotulos[rotulos.length-1]);
        }
        clickOcultarOpciones();
        document.getElementById("divPresentacionDocentes").style.display = "none";
        document.getElementById("thGrupos").className = "tblListadoActiva w3-round"

        document.getElementById("btnDesplegarOpciones").setAttribute(
            "onclick",
            "clickDesplegarOpciones()"
        );
        document.getElementById("btnOcultarOpciones").setAttribute(
            "onclick",
            "clickOcultarOpciones()"
        );
        document.getElementById("btnDesplegarDocentes").setAttribute(
            "onclick",
            "clickDesplegarDocentes()"
        );
        document.getElementById("btnDesplegarGrupos").setAttribute(
            "onclick",
            "clickDesplegarGrupos()"
        );
        document.getElementById("btnAgregarGrupo").setAttribute(
            "onclick",
            "clickCapturarGrupo()"
        );
    }
}
