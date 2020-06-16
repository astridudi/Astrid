function inicializacionVistaGrupo(pGrupoJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var b = [];
    var botones = [];
    var ocultos = [];
    var rotulos = [];
    let pGrupo = cadenaJson(pGrupoJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Creación del bloque de datos del curso
         */
        document.getElementById("lblNombreInstitucion").innerHTML = "Institución: "+pGrupo._curso._programa._institucion._nombre;
        document.getElementById("lblSniesInstitucion").innerHTML = " (Snies: "+pGrupo._curso._programa._institucion._identificacion+")";
        document.getElementById("lblNombrePrograma").innerHTML = "Programa: "+pGrupo._curso._programa._nombre;
        document.getElementById("lblSniesPrograma").innerHTML = " (Snies: "+pGrupo._curso._programa._identificacion+")";
        document.getElementById("lblNombreCurso").innerHTML = "Curso: "+pGrupo._curso._nombre;
        document.getElementById("lblIdentificacionCurso").innerHTML = " ("+pGrupo._curso._identificacion+")";
        document.getElementById("lblNombreGrupo").innerHTML = "Grupo: "+pGrupo._nombre;
        document.getElementById("lblIdentificacionGrupo").innerHTML = " ("+pGrupo._identificacion+")";
        if (pGrupo._curso._programa._institucion._sigla.length > 0) {
            document.getElementById("lblNombreInstitucion").innerHTML = document.getElementById("lblNombreInstitucion").innerHTML +" - "+pGrupo._curso._programa._institucion._sigla;
        }
        /*
        Creación de la lista de docentes en vista presentarGrupo
         */
        if (pGrupo._docente._id.length != 0) {
            b[b.length] = document.createElement("b");
            b[b.length-1].id = "bDocente";
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnDocente";
            botones[botones.length-1].innerHTML = "1.";
            botones[botones.length-1].className = "w3-button w3-round aEnumeracion";
            botones[botones.length-1].href = "/main/presentarDocente?id="+pGrupo._docente._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            ocultos[ocultos.length] = document.createElement("input");
            ocultos[ocultos.length-1].id = "btnDocenteOculto";
            ocultos[ocultos.length-1].value = "/main/presentarDocente?id="+pGrupo._docente._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            ocultos[ocultos.length-1].type = "hidden";
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblDocente";
            rotulos[rotulos.length-1].innerHTML = pGrupo._docente._apellidos+" "+pGrupo._docente._nombres;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            document.getElementById("divPresentacionDocentes").appendChild(b[b.length-1]);
            document.getElementById("bDocente").appendChild(botones[botones.length-1]);
            document.getElementById("bDocente").appendChild(ocultos[ocultos.length-1]);
            document.getElementById("divPresentacionDocentes").appendChild(rotulos[rotulos.length-1]);
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblCorreoDocente";
            rotulos[rotulos.length-1].innerHTML = " ("+pGrupo._docente._correo+")";
            rotulos[rotulos.length-1].className = "lblMenor";
            document.getElementById("divPresentacionDocentes").appendChild(rotulos[rotulos.length-1]);
        }
        /*
        Creación de la lista de estudiantes en vista presentarGrupo
         */
        for (i=0; i<pGrupo._estudiantes.length; i++) {
            if (i>0) {
                document.getElementById("divPresentacionEstudiantes").appendChild(document.createElement("br"));
            }
            b[b.length] = document.createElement("b");
            b[b.length-1].id = "bEstudiante"+i;
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnEstudiante"+i;
            botones[botones.length-1].innerHTML = (i+1)+".";
            botones[botones.length-1].className = "w3-button w3-round aEnumeracion";
            botones[botones.length-1].href = "/main/presentarEstudiante?id="+pGrupo._estudiantes[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            ocultos[ocultos.length] = document.createElement("input");
            ocultos[ocultos.length-1].id = "btnEstudianteOculto"+i;
            ocultos[ocultos.length-1].value = "/main/presentarEstudiante?id="+pGrupo._estudiantes[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            ocultos[ocultos.length-1].type = "hidden";
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblEstudiante"+i;
            rotulos[rotulos.length-1].innerHTML = pGrupo._estudiantes[i]._apellidos+" "+pGrupo._estudiantes[i]._nombres;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            document.getElementById("divPresentacionEstudiantes").appendChild(b[b.length-1]);
            document.getElementById("bEstudiante"+i).appendChild(botones[botones.length-1]);
            document.getElementById("bEstudiante"+i).appendChild(ocultos[ocultos.length-1]);
            document.getElementById("divPresentacionEstudiantes").appendChild(rotulos[rotulos.length-1]);
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblCorreoEstudiante"+i;
            rotulos[rotulos.length-1].innerHTML = " ("+pGrupo._estudiantes[i]._correo+")";
            rotulos[rotulos.length-1].className = "lblMenor";
            document.getElementById("divPresentacionEstudiantes").appendChild(rotulos[rotulos.length-1]);
        }
        /*
        Inicialización del encabezado - Vista layout
         */
        document.getElementById("lblUbicacion").innerHTML = "Grupo: "+pGrupo._nombre;
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("divListado").style.display = "block";

        clickOcultarOpciones();

        /*
        Inicialización métodos de validación
         */
        document.getElementById("btnDesplegarOpciones").setAttribute(
            "onclick",
            "clickDesplegarOpciones()"
        );
        document.getElementById("btnOcultarOpciones").setAttribute(
            "onclick",
            "clickOcultarOpciones()"
        );
        document.getElementById("btnAgregarDocente").setAttribute(
            "onclick",
            "clickCapturarDocente()"
        );
        document.getElementById("btnAgregarEstudiante").setAttribute(
            "onclick",
            "clickCapturarEstudiante()"
        );
        /*
        Inicialización métodos de validación
         */
        document.getElementById("inpIdentificacionDocente").setAttribute(
            "onfocus",
            "validarCapturaDocente()"
        )
        document.getElementById("inpIdentificacionDocente").setAttribute(
            "onblur",
            "validarCapturaDocente()"
        )
        document.getElementById("inpIdentificacionEstudiante").setAttribute(
            "onfocus",
            "validarCapturaEstudiante()"
        )
        document.getElementById("inpIdentificacionEstudiante").setAttribute(
            "onblur",
            "validarCapturaEstudiante()"
        )
    }
}
