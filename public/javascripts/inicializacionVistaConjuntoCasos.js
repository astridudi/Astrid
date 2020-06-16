function inicializacionVistaConjuntoCasos(pUsuarioJson,pConjuntoTiposDiagramaJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    var div = [];
    var b = [];
    var botones = [];
    var rotulos = [];
    var rotulosMenor = [];
    var opciones = [];
    let pUsuario = cadenaJson(pUsuarioJson);
    let pConjuntoTiposDiagrama = cadenaJson(pConjuntoTiposDiagramaJson);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Creación de la lista de cursos y casos en vista presentarConjuntoCasos
         */
        for (i=0; i<pUsuario._cursos.length; i++) {
            b[b.length] = document.createElement("b");
            b[b.length-1].id = "bCurso"+i;
            botones[botones.length] = document.createElement("a");
            botones[botones.length-1].id = "btnCurso"+i;
            botones[botones.length-1].innerHTML = (i+1)+".";
            botones[botones.length-1].className = "w3-button w3-round aEnumeracion";
            botones[botones.length-1].setAttribute("onclick","clickSeleccionarCurso('"+pUsuario._cursos[i]._id+"','"+pUsuario._cursos[i]._nombre+"')");
            rotulos[rotulos.length] = document.createElement("label");
            rotulos[rotulos.length-1].id = "lblCurso"+i;
            rotulos[rotulos.length-1].innerHTML = "Curso: "+pUsuario._cursos[i]._nombre;
            rotulos[rotulos.length-1].className = "lblPresentacion";
            rotulosMenor[rotulosMenor.length] = document.createElement("label");
            rotulosMenor[rotulosMenor.length-1].id = "lblIdentificacionCurso"+i;
            rotulosMenor[rotulosMenor.length-1].innerHTML = " ("+pUsuario._cursos[i]._identificacion+")";
            rotulosMenor[rotulosMenor.length-1].className = "lblMenor";
            document.getElementById("divPresentacionCasos").appendChild(b[b.length-1]);
            document.getElementById("bCurso"+i).appendChild(botones[botones.length-1]);
            document.getElementById("divPresentacionCasos").appendChild(rotulos[rotulos.length-1]);
            document.getElementById("divPresentacionCasos").appendChild(rotulosMenor[rotulosMenor.length-1]);
            if (pUsuario._cursos[i]._grupos.length > 0) {
                div[div.length] = document.createElement("div");
                div[div.length-1].id = "divGruposCurso"+i;
                div[div.length-1].className = "divEnumeracionGrupos";
                rotulos[rotulos.length] = document.createElement("label");
                rotulos[rotulos.length-1].id = "lblGruposCurso"+i;
                rotulos[rotulos.length-1].innerHTML = "Grupos: ";
                rotulos[rotulos.length-1].className = "lblPresentacionEnumeracionSub";
                document.getElementById("divPresentacionCasos").appendChild(document.createElement("br"));
                document.getElementById("divPresentacionCasos").appendChild(div[div.length-1]);
                document.getElementById("divGruposCurso"+i).appendChild(rotulos[rotulos.length-1]);
            }
            for (j=0; j<pUsuario._cursos[i]._grupos.length; j++) {
                botones[botones.length] = document.createElement("a");
                botones[botones.length-1].id = "btnGrupo"+i;
                botones[botones.length-1].innerHTML = pUsuario._cursos[i]._grupos[j]._nombre;
                botones[botones.length-1].className = "w3-button w3-round aEnumeracionSub";
                botones[botones.length-1].setAttribute("onclick","clickSeleccionarGrupo('"+pUsuario._cursos[i]._id+"','"+pUsuario._cursos[i]._grupos[j]._id+"','"+pUsuario._cursos[i]._grupos[j]._nombre+"','"+JSON.stringify(pUsuario._cursos[i]._grupos[j]._estudiantes)+"','"+i+"')");
                document.getElementById("divGruposCurso"+i).appendChild(botones[botones.length-1]);
            }
            if (pUsuario._cursos[i]._casos.length > 0) {
                div[div.length] = document.createElement("div");
                div[div.length-1].id = "divCasosCurso"+i;
                div[div.length-1].className = "divEnumeracionCasos";
                rotulos[rotulos.length] = document.createElement("label");
                rotulos[rotulos.length-1].id = "lblCasosCurso"+i;
                rotulos[rotulos.length-1].innerHTML = "Casos: ";
                rotulos[rotulos.length-1].className = "lblPresentacionEnumeracionSub";
                document.getElementById("divPresentacionCasos").appendChild(div[div.length-1]);
                document.getElementById("divCasosCurso"+i).appendChild(rotulos[rotulos.length-1]);
                document.getElementById("divCasosCurso"+i).appendChild(document.createElement("br"));
            }
            for (j=0; j<pUsuario._cursos[i]._casos.length; j++) {
                b[b.length] = document.createElement("b");
                b[b.length-1].id = "bCaso"+i+"."+j;
                botones[botones.length] = document.createElement("a");
                botones[botones.length-1].id = "btnCaso"+i+"."+j;
                botones[botones.length-1].innerHTML = (i+1)+"."+(j+1)+".";
                botones[botones.length-1].className = "w3-button w3-round aEnumeracionSub";
                botones[botones.length-1].setAttribute("onclick","clickSeleccionarCaso('"+pUsuario._cursos[i]._casos[j]._id+"','"+pUsuario._cursos[i]._casos[j]._nombre+"','"+pUsuario._cursos[i]._id+"','"+pUsuario._cursos[i]._nombre+"','"+pUsuario._cursos[i]._casos[j]._idTipoDiagrama+"','"+pUsuario._cursos[i]._casos[j]._nombreTipoDiagrama+"','"+i+"')");
                rotulos[rotulos.length] = document.createElement("label");
                rotulos[rotulos.length-1].id = "lblCaso"+i+"."+j;
                rotulos[rotulos.length-1].innerHTML = "Caso: "+pUsuario._cursos[i]._casos[j]._nombre;
                rotulos[rotulos.length-1].className = "lblPresentacionSub";
                document.getElementById("divCasosCurso"+i).appendChild(b[b.length-1]);
                document.getElementById("bCaso"+i+"."+j).appendChild(botones[botones.length-1]);
                document.getElementById("divCasosCurso"+i).appendChild(rotulos[rotulos.length-1]);
                document.getElementById("divCasosCurso"+i).appendChild(document.createElement("br"));
            }
        }
        for (i=0; i<pConjuntoTiposDiagrama._tiposDiagrama.length; i++) {
            opciones[opciones.length] = document.createElement("option");
            opciones[opciones.length-1].id = "optTipoDiagrama"+i;
            opciones[opciones.length-1].value = pConjuntoTiposDiagrama._tiposDiagrama[i]._id;
            opciones[opciones.length-1].innerHTML = pConjuntoTiposDiagrama._tiposDiagrama[i]._nombre;
            document.getElementById("selTipoDiagrama").appendChild(opciones[opciones.length-1]);
        }
        document.getElementById("idUsuarioCaso").value = pUsuario._id;
        document.getElementById("idUsuarioAsignacion").value = pUsuario._id;
        /*
        Inicialización del encabezado - Vista layout
         */
        document.getElementById("lblUbicacion").innerHTML = document.getElementById("lblAplicacion").innerHTML+" | Casos";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("divListado").style.display = "block";

        clickOcultarOpciones();

        /*
        Inicialización métodos de acción
         */
        document.getElementById("btnDesplegarOpciones").setAttribute(
            "onclick",
            "clickDesplegarOpciones()"
        );
        document.getElementById("btnOcultarOpciones").setAttribute(
            "onclick",
            "clickOcultarOpciones()"
        );
        document.getElementById("btnAgregarCaso").setAttribute(
            "onclick",
            "clickCapturarCaso()"
        );
        document.getElementById("btnAsignarCaso").setAttribute(
            "onclick",
            "clickCapturarSesion()"
        );
        /*
        Inicialización métodos de validación
         */
        document.getElementById("inpNombreCaso").setAttribute(
            "onfocus",
            "validarCapturaCaso()"
        )
        document.getElementById("inpNombreCaso").setAttribute(
            "onblur",
            "validarCapturaCaso()"
        )
        document.getElementById("selTipoDiagrama").setAttribute(
            "onblur",
            "validarCapturaCaso()"
        )
    }
}
