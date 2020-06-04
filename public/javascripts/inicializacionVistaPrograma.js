function inicializacionVistaPrograma(pProgramaJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var b = [];
    var botones = [];
    var rotulos = [];
    let pPrograma = cadenaJson(pProgramaJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Inicialización del encabezado
         */
        document.getElementById("lblUbicacion").innerHTML = "Programa: "+pPrograma._nombre;
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        /*
        Creación del bloque de datos del programa
         */
        document.getElementById("lblNombreInstitucion").innerHTML = "Institución: "+pPrograma._institucion._nombre;
        document.getElementById("lblSniesInstitucion").innerHTML = " (Snies: "+pPrograma._institucion._identificacion+")";
        document.getElementById("lblNombrePrograma").innerHTML = "Programa: "+pPrograma._nombre;
        document.getElementById("lblSniesPrograma").innerHTML = " (Snies: "+pPrograma._identificacion+")";
        if (pPrograma._institucion._sigla.length > 0) {
            document.getElementById("lblNombreInstitucion").innerHTML = document.getElementById("lblNombreInstitucion").innerHTML +" - "+pPrograma._institucion._sigla;
        }
        /*
        Creación de la lista de cursos
         */
        for (i=0; i<pPrograma._cursos.length; i++) {
            if (i>0) {
                document.getElementById("divPresentacionCursos").appendChild(document.createElement("br"));
            }
            b[b.length] = document.createElement("b");
            b[b.length-1].id = "bCurso"+i;
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnCurso"+i;
            botones[botones.length-1].innerHTML = (i+1)+".";
            botones[botones.length-1].className = "w3-button w3-round aEnumeracion";
            botones[botones.length-1].href = "/main/presentarCurso?id="+pPrograma._cursos[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblCurso"+i;
            rotulos[rotulos.length-1].innerHTML = pPrograma._cursos[i]._nombre;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            document.getElementById("divPresentacionCursos").appendChild(b[b.length-1]);
            document.getElementById("bCurso"+i).appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionCursos").appendChild(rotulos[rotulos.length-1]);
        }
        /*
        Creación de la lista de docentes
         */
        for (i=0; i<pPrograma._docentes.length; i++) {
            if (i>0) {
                document.getElementById("divPresentacionDocentes").appendChild(document.createElement("br"));
            }
            b[b.length] = document.createElement("b");
            b[b.length-1].id = "bDocente"+i;
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnDocente"+i;
            botones[botones.length-1].innerHTML = (i+1)+".";
            botones[botones.length-1].className = "w3-button w3-round aEnumeracion";
            botones[botones.length-1].href = "/main/presentarDocente?id="+pPrograma._docentes[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblDocente"+i;
            rotulos[rotulos.length-1].innerHTML = pPrograma._docentes[i]._apellidos+" "+pPrograma._docentes[i]._nombres;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            document.getElementById("divPresentacionDocentes").appendChild(b[b.length-1]);
            document.getElementById("bDocente"+i).appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionDocentes").appendChild(rotulos[rotulos.length-1]);
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblCorreoDocente"+i;
            rotulos[rotulos.length-1].innerHTML = " ("+pPrograma._docentes[i]._correo+")";
            rotulos[rotulos.length-1].className = "lblMenor";
            document.getElementById("divPresentacionDocentes").appendChild(rotulos[rotulos.length-1]);
        }
        /*
        Creación de la lista de estudiantes
         */
        for (i=0; i<pPrograma._estudiantes.length; i++) {
            if (i>0) {
                document.getElementById("divPresentacionEstudiantes").appendChild(document.createElement("br"));
            }
            b[b.length] = document.createElement("b");
            b[b.length-1].id = "bEstudiante"+i;
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnEstudiante"+i;
            botones[botones.length-1].innerHTML = (i+1)+".";
            botones[botones.length-1].className = "w3-button w3-round aEnumeracion";
            botones[botones.length-1].href = "/main/presentarEstudiante?id="+pPrograma._estudiantes[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblEstudiante"+i;
            rotulos[rotulos.length-1].innerHTML = pPrograma._estudiantes[i]._apellidos+" "+pPrograma._estudiantes[i]._nombres;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            document.getElementById("divPresentacionEstudiantes").appendChild(b[b.length-1]);
            document.getElementById("bEstudiante"+i).appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionEstudiantes").appendChild(rotulos[rotulos.length-1]);
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblCorreoEstudiante"+i;
            rotulos[rotulos.length-1].innerHTML = " ("+pPrograma._estudiantes[i]._correo+")";
            rotulos[rotulos.length-1].className = "lblMenor";
            document.getElementById("divPresentacionEstudiantes").appendChild(rotulos[rotulos.length-1]);
        }
        clickOcultarOpciones();
        document.getElementById("divPresentacionDocentes").style.display = "none";
        document.getElementById("divPresentacionEstudiantes").style.display = "none";
        document.getElementById("btnAgregarDocente").style.display = "none";
        document.getElementById("btnEliminarDocente").style.display = "none";
        document.getElementById("btnAgregarEstudiante").style.display = "none";
        document.getElementById("btnEliminarEstudiante").style.display = "none";
        document.getElementById("thCursos").className = "tblListadoActiva w3-round"

        document.getElementById("btnDesplegarOpciones").setAttribute(
            "onclick",
            "clickDesplegarOpciones()"
        );
        document.getElementById("btnOcultarOpciones").setAttribute(
            "onclick",
            "clickOcultarOpciones()"
        );
        document.getElementById("btnDesplegarCursos").setAttribute(
            "onclick",
            "clickDesplegarCursos()"
        );
        document.getElementById("btnDesplegarDocentes").setAttribute(
            "onclick",
            "clickDesplegarDocentes()"
        );
        document.getElementById("btnDesplegarEstudiantes").setAttribute(
            "onclick",
            "clickDesplegarEstudiantes()"
        );
        document.getElementById("btnAgregarCurso").setAttribute(
            "onclick",
            "clickCapturarCurso()"
        );
        document.getElementById("btnAgregarDocente").setAttribute(
            "onclick",
            "clickCapturarDocente()"
        );
        document.getElementById("btnAgregarEstudiante").setAttribute(
            "onclick",
            "clickCapturarEstudiante()"
        );
    }
}
