function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionCasos").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaCaso").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("lblOpciones").innerHTML = "Seleccionar opción";
    document.getElementById("divBtnOpciones").style.display = "block";
    document.getElementById("divFormularioCaso").style.display = "none";
    document.getElementById("divFormularioAsignacion").style.display = "none";
    // Inicialización valores formularios
    document.getElementById("inpNombreCurso").value = "";
    document.getElementById("inpNombreCaso").value = "";
    document.getElementById("selTipoDiagrama").value = "";
    document.getElementById("inpNombreCursoSesion").value = "";
    document.getElementById("inpNombreCasoSesion").value = "";
    document.getElementById("inpNombreDiagramaSesion").value = "";
    document.getElementById("inpNombreGrupoSesion").value = "";
}

function clickOcultarOpciones() {
    ocultarOpcionesListadoLayout();
    document.getElementById("divPresentacionCasos").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaCaso").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCaso").style.display = "none";
    document.getElementById("divFormularioAsignacion").style.display = "none";
}

function clickCapturarCaso() {
    document.getElementById("lblOpciones").innerHTML = "1. Seleccionar curso";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCaso").style.display = "block";
    document.getElementById("divDatosCaso").style.display = "block";
    document.getElementById("divGrabarCaso").style.display = "block";
    document.getElementById("inpNombreCurso").focus();
}

function clickCapturarSesion() {
    document.getElementById("lblOpciones").innerHTML = "1. Seleccionar caso";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioAsignacion").style.display = "block";
    document.getElementById("divDatosSesion").style.display = "block";
    document.getElementById("divGrabarAsignacion").style.display = "block";
    document.getElementById("inpNombreCaso").focus();
}

function clickSeleccionarCurso(pIdCurso,pNombreCurso) {
    document.getElementById("lblOpciones").innerHTML = "2. Registrar caso";
    document.getElementById("inpNombreCaso").value = "";
    document.getElementById("selTipoDiagrama").value = "";
    document.getElementById("inpIdCurso").value = pIdCurso;
    document.getElementById("inpNombreCurso").value = pNombreCurso;
    document.getElementById("inpNombreCaso").focus();
}

function clickSeleccionarCaso(pIdCaso,pNombreCaso,pIdCurso,pNombreCurso,pIdDiagrama,pNombreDiagrama) {
    document.getElementById("lblOpciones").innerHTML = "2. Seleccionar grupo";
    document.getElementById("inpIdGrupo").value = "";
    document.getElementById("inpNombreGrupoSesion").value = "";
    document.getElementById("inpNombreSesion").value = document.getElementById("inpNombreCasoSesion").value;
    document.getElementById("inpIdCaso").value = pIdCaso;
    document.getElementById("inpIdCursoSesion").value = pIdCurso;
    document.getElementById("inpNombreCursoSesion").value = pNombreCurso;
    document.getElementById("inpNombreCasoSesion").value = pNombreCaso;
    document.getElementById("inpIdTipoDiagramaSesion").value = pIdDiagrama;
    document.getElementById("inpNombreDiagramaSesion").value = pNombreDiagrama;
    document.getElementById("inpNombreGrupoSesion").focus();
}

function clickSeleccionarGrupo(pIdCurso,pIdGrupo,pNombreGrupo,pEstudiantesJson) {
    let i = 0;
    let minimoEquiposSugeridos = 0;
    let maximoEquiposSugeridos = 0;
    let entradas = [];
    let rotulos = [];
    let equipos = [];
    let filas = [];
    let columnas1 = [];
    let columnas2 = [];
    let pEstudiantes = cadenaJson(pEstudiantesJson);
    minimoEquiposSugeridos = Math.ceil(pEstudiantes.length / 3);
    maximoEquiposSugeridos = Math.floor(pEstudiantes.length / 2);
    if (pIdCurso == document.getElementById("inpIdCursoSesion").value) {
        document.getElementById("inpIdGrupo").value = pIdGrupo;
        document.getElementById("inpNombreGrupoSesion").value = pNombreGrupo;
        document.getElementById("inpNombreSesion").value = document.getElementById("inpNombreCasoSesion").value+" - "+document.getElementById("inpNombreGrupoSesion").value;
        document.getElementById("lblOpciones").innerHTML = "3. Conformar equipos (Mínimo: "+minimoEquiposSugeridos+" - Máximo: "+maximoEquiposSugeridos+")";
        for (i=0; i<pEstudiantes.length; i++) {
            if (document.getElementById("inpIdEstudiante"+i) == undefined) {
                filas[filas.length] = document.createElement("tr");
                filas[filas.length-1].id = "trEstudiante"+i;
                columnas1[columnas1.length] = document.createElement("td");
                columnas1[columnas1.length-1].id = "td1Estudiante"+i;
                columnas1[columnas1.length-1].className = "tblIntegrantes";
                columnas2[columnas2.length] = document.createElement("td");
                columnas2[columnas2.length-1].id = "td2Estudiante"+i;
                columnas2[columnas2.length-1].className = "tblEquipos";
                entradas[entradas.length] = document.createElement("input");
                entradas[entradas.length-1].id = "inpIdEstudiante"+i;
                entradas[entradas.length-1].name = "idEstudiante"+i;
                entradas[entradas.length-1].type = "hidden";
                rotulos[rotulos.length] = document.createElement("label");
                rotulos[rotulos.length-1].id = "lblEstudiante"+i;
                rotulos[rotulos.length-1].className = "lblPresentacionSub";
                equipos[equipos.length] = document.createElement("input");
                equipos[equipos.length-1].id = "inpEquipoEstudiante"+i;
                equipos[equipos.length-1].className = "w3-input w3-round";
                equipos[equipos.length-1].name = "equipoEstudiante"+i;
                equipos[equipos.length-1].type = "number";
                equipos[equipos.length-1].title = "Asignar equipo entre 1 y "+maximoEquiposSugeridos+". Para excluir de la sesión asignar cero (0)";
                document.getElementById("tblEstudiantes").appendChild(filas[filas.length-1]);
                document.getElementById("trEstudiante"+i).appendChild(columnas1[columnas1.length-1]);
                document.getElementById("trEstudiante"+i).appendChild(columnas2[columnas2.length-1]);
                document.getElementById("td1Estudiante"+i).appendChild(entradas[entradas.length-1]);
                document.getElementById("td1Estudiante"+i).appendChild(rotulos[rotulos.length-1]);
                document.getElementById("td2Estudiante"+i).appendChild(equipos[equipos.length-1]);
            }
            document.getElementById("inpIdEstudiante"+i).value = pEstudiantes[i]._id;
            document.getElementById("lblEstudiante"+i).innerHTML = (i+1)+". "+pEstudiantes[i]._apellidos+" "+pEstudiantes[i]._nombres;
            document.getElementById("inpEquipoEstudiante"+i).value = 1;
            document.getElementById("trEstudiante"+i).style.display = "block";
        }
        while (document.getElementById("inpIdEstudiante"+i) != undefined) {
            document.getElementById("inpIdEstudiante"+i).style.display = "none";
            document.getElementById("lblEstudiante"+i).style.display = "none";
            document.getElementById("inpEquipoEstudiante"+i).style.display = "none";
            document.getElementById("trEstudiante"+i).style.display = "none";
            i = i + 1;
        }
    }
    else {
        document.getElementById("inpIdGrupo").value = "";
        document.getElementById("inpNombreGrupoSesion").value = "";
        document.getElementById("inpNombreSesion").value = "";
    }
}

