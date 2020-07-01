function inicializacionVistaPrograma(pProgramaJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var b = [];
    var botones = [];
    var ocultos = [];
    var rotulos = [];
    var rotulosMenor = [];
    let pPrograma = cadenaJson(pProgramaJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
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
        Creación de la lista de cursos en vista presentarPrograma
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
            botones[botones.length-1].setAttribute(
                "onclick",
                "clickSeleccionarCurso('"+pPrograma._cursos[i]._id+"','"+pPrograma._cursos[i]._nombre+"','"+pPrograma._cursos[i]._identificacion+"',"+i+")"
            );
            ocultos[ocultos.length] = document.createElement("input");
            ocultos[ocultos.length-1].id = "btnCursoOculto"+i;
            ocultos[ocultos.length-1].value = "/main/presentarCurso?id="+pPrograma._cursos[i]._id+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            ocultos[ocultos.length-1].type = "hidden";
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblCurso"+i;
            rotulos[rotulos.length-1].innerHTML = pPrograma._cursos[i]._nombre;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            rotulosMenor[rotulosMenor.length] = document.createElement("label");
            rotulosMenor[rotulosMenor.length-1].id = "lblIdentificacionCurso"+i;
            rotulosMenor[rotulosMenor.length-1].innerHTML = " ("+pPrograma._cursos[i]._identificacion+")";
            rotulosMenor[rotulosMenor.length-1].className = "lblMenor";
            document.getElementById("divPresentacionCursos").appendChild(b[b.length-1]);
            document.getElementById("bCurso"+i).appendChild(botones[botones.length-1]);
            document.getElementById("bCurso"+i).appendChild(ocultos[ocultos.length-1]);
            document.getElementById("divPresentacionCursos").appendChild(rotulos[rotulos.length-1]);
            document.getElementById("divPresentacionCursos").appendChild(rotulosMenor[rotulosMenor.length-1]);
        }
        /*
        Creación de la lista de docentes en vista presentarPrograma
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
            botones[botones.length-1].href = "#";
            botones[botones.length-1].setAttribute(
                "onclick",
                "clickSeleccionarDocente('"+pPrograma._docentes[i]._id+"','"+pPrograma._docentes[i]._apellidos+"','"+pPrograma._docentes[i]._nombres+"','"+pPrograma._docentes[i]._identificacion+"','"+pPrograma._docentes[i]._correo+"',"+i+")"
            );
            ocultos[ocultos.length] = document.createElement("input");
            ocultos[ocultos.length-1].id = "btnDocenteOculto"+i;
            ocultos[ocultos.length-1].value = "#";
            ocultos[ocultos.length-1].type = "hidden";
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblDocente"+i;
            rotulos[rotulos.length-1].innerHTML = pPrograma._docentes[i]._apellidos+" "+pPrograma._docentes[i]._nombres;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            rotulosMenor[rotulosMenor.length] = document.createElement("label");
            rotulosMenor[rotulosMenor.length-1].id = "lblCorreoDocente"+i;
            rotulosMenor[rotulosMenor.length-1].innerHTML = " ("+pPrograma._docentes[i]._correo+")";
            rotulosMenor[rotulosMenor.length-1].className = "lblMenor";
            document.getElementById("divPresentacionDocentes").appendChild(b[b.length-1]);
            document.getElementById("bDocente"+i).appendChild(botones[botones.length-1]);
            document.getElementById("bDocente"+i).appendChild(ocultos[ocultos.length-1]);
            document.getElementById("divPresentacionDocentes").appendChild(rotulos[rotulos.length-1]);
            document.getElementById("divPresentacionDocentes").appendChild(rotulosMenor[rotulosMenor.length-1]);
        }
        /*
        Creación de la lista de estudiantes en vista presentarPrograma
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
            botones[botones.length-1].href = "#";
            botones[botones.length-1].setAttribute(
                "onclick",
                "clickSeleccionarEstudiante('"+pPrograma._estudiantes[i]._id+"','"+pPrograma._estudiantes[i]._apellidos+"','"+pPrograma._estudiantes[i]._nombres+"','"+pPrograma._estudiantes[i]._identificacion+"','"+pPrograma._estudiantes[i]._correo+"',"+i+")"
            );
            ocultos[ocultos.length] = document.createElement("input");
            ocultos[ocultos.length-1].id = "btnEstudianteOculto"+i;
            ocultos[ocultos.length-1].value = "#";
            ocultos[ocultos.length-1].type = "hidden";
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblEstudiante"+i;
            rotulos[rotulos.length-1].innerHTML = pPrograma._estudiantes[i]._apellidos+" "+pPrograma._estudiantes[i]._nombres;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            rotulosMenor[rotulosMenor.length] = document.createElement("label");
            rotulosMenor[rotulosMenor.length-1].id = "lblCorreoEstudiante"+i;
            rotulosMenor[rotulosMenor.length-1].innerHTML = " ("+pPrograma._estudiantes[i]._correo+")";
            rotulosMenor[rotulosMenor.length-1].className = "lblMenor";
            document.getElementById("divPresentacionEstudiantes").appendChild(b[b.length-1]);
            document.getElementById("bEstudiante"+i).appendChild(botones[botones.length-1]);
            document.getElementById("bEstudiante"+i).appendChild(ocultos[ocultos.length-1]);
            document.getElementById("divPresentacionEstudiantes").appendChild(rotulos[rotulos.length-1]);
            document.getElementById("divPresentacionEstudiantes").appendChild(rotulosMenor[rotulosMenor.length-1]);
        }
        /*
        Inicialización del encabezado - Vista layout
         */
        document.getElementById("lblUbicacion").innerHTML = "Programa: "+pPrograma._nombre;
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("divListado").style.display = "block";

        clickOcultarOpciones();
        clickDesplegarCursos();

        /*
        Inicialización métodos de acción
         */
        document.getElementById("btnDesplegarOpciones").setAttribute("onclick","clickDesplegarOpciones()");
        document.getElementById("btnOcultarOpciones").setAttribute("onclick","clickOcultarOpciones()");
        document.getElementById("btnDesplegarCursos").setAttribute("onclick","clickDesplegarCursos()");
        document.getElementById("btnDesplegarDocentes").setAttribute("onclick","clickDesplegarDocentes()");
        document.getElementById("btnDesplegarEstudiantes").setAttribute("onclick","clickDesplegarEstudiantes()");
        document.getElementById("btnAgregarCurso").setAttribute("onclick","clickCapturarCurso()");
        document.getElementById("btnEditarCurso").setAttribute("onclick","clickEditarCurso()");
        document.getElementById("btnEliminarCurso").setAttribute("onclick","clickEliminarCurso()");
        document.getElementById("btnAgregarDocente").setAttribute("onclick","clickCapturarDocente()");
        document.getElementById("btnEditarDocente").setAttribute("onclick","clickEditarDocente()");
        document.getElementById("btnEliminarDocente").setAttribute("onclick","clickEliminarDocente()");
        document.getElementById("btnAgregarEstudiante").setAttribute("onclick","clickCapturarEstudiante()");
        document.getElementById("btnEditarEstudiante").setAttribute("onclick","clickEditarEstudiante()");
        document.getElementById("btnEliminarEstudiante").setAttribute("onclick","clickEliminarEstudiante()");
        /*
        Inicialización métodos de validación
         */
        document.getElementById("inpNombreCurso").setAttribute("onfocus","validarCapturaCurso()");
        document.getElementById("inpNombreCurso").setAttribute("onblur","validarCapturaCurso()");
        document.getElementById("inpIdentificacionCurso").setAttribute("onblur","validarCapturaCurso()");
        document.getElementById("inpApellidosDocente").setAttribute("onfocus","validarCapturaDocente()");
        document.getElementById("inpApellidosDocente").setAttribute("onblur","validarCapturaDocente()");
        document.getElementById("inpNombresDocente").setAttribute("onblur","validarCapturaDocente()");
        document.getElementById("inpIdentificacionDocente").setAttribute("onblur","validarCapturaDocente()");
        document.getElementById("inpCorreoElectronicoDocente").setAttribute("onblur","validarCapturaDocente()");
        document.getElementById("inpApellidosEstudiante").setAttribute("onfocus","validarCapturaEstudiante()");
        document.getElementById("inpApellidosEstudiante").setAttribute("onblur","validarCapturaEstudiante()");
        document.getElementById("inpNombresEstudiante").setAttribute("onblur","validarCapturaEstudiante()");
        document.getElementById("inpIdentificacionEstudiante").setAttribute("onblur","validarCapturaEstudiante()");
        document.getElementById("inpCorreoElectronicoEstudiante").setAttribute("onblur","validarCapturaEstudiante()");
    }
}
