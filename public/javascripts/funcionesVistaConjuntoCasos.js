function clickDesplegarOpciones() {
    desplegarOpcionesListadoLayout();
    document.getElementById("divPresentacionCasos").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaCaso").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPrincipal").style.maxHeight = (window.innerHeight - document.getElementById("divPrincipal").offsetTop)+"px";
    document.getElementById("divPresentacionCasos").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionCasos").offsetTop)+"px";
    document.getElementById("divCapturaCaso").style.maxHeight = document.getElementById("divPresentacionCasos").style.maxHeight;
    document.getElementById("lblOpciones").innerHTML = "Gestión de casos";
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
    ocultarSeleccion();
    document.getElementById("divPresentacionCasos").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaCaso").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCaso").style.display = "none";
    document.getElementById("divDatosCaso").style.display = "none";
    document.getElementById("divFormularioAsignacion").style.display = "none";
    document.getElementById("divDatosSesion").style.display = "none";
    /*
    Eliminación de valores de registros inconclusos
     */
    document.getElementById("inpNombreCurso").value = "";
    document.getElementById("inpNombreCaso").value = "";
    document.getElementById("selTipoDiagrama").value = "";
    ocultarOpcionesDistribucion();
}

function ocultarSeleccion() {
    let i = 0;
    while (document.getElementById("lblCurso"+i) != undefined) {
        document.getElementById("lblCurso"+i).className = "lblPresentacion";
        i = i + 1;
    }
    i = 0;
    while (document.getElementById("lblCasosCurso"+i) != undefined) {
        document.getElementById("lblCasosCurso"+i).className = "lblPresentacionSub";
        i = i + 1;
    }
}

function clickIniciarCapturaCaso() {
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioCaso").style.display = "block";
    document.getElementById("divDatosCurso").style.display = "block";
    document.getElementById("divGrabarCaso").style.display = "block";
    document.getElementById("inpNombreCaso").focus();
}

function clickCapturarCaso() {
    document.getElementById("formCaso").action = "/main/grabarCaso";
    document.getElementById("lblOpciones").innerHTML = "Registrar caso - 1. Seleccionar curso";
    document.getElementById("btnGrabarCaso").innerHTML = "Grabar caso";
    document.getElementById("inpPaso").value = 1;
    clickIniciarCapturaCaso();
    /*
    Eliminación de valores de registros inconclusos
     */
    document.getElementById("inpNombreCurso").value = "";
    document.getElementById("inpNombreCaso").value = "";
    document.getElementById("selTipoDiagrama").value = "";
    validarCapturaCaso();
}

function clickEditarCaso() {
    document.getElementById("formCaso").action = "/main/actualizarCaso";
    document.getElementById("lblOpciones").innerHTML = "Editar caso";
    document.getElementById("btnGrabarCaso").innerHTML = "Confirmar edición";
    document.getElementById("inpPaso").value = 2;
    clickIniciarCapturaCaso();
}

function clickEliminarCaso() {
    document.getElementById("formCaso").action = "/main/eliminarCaso";
    document.getElementById("lblOpciones").innerHTML = "Inhabilitar caso";
    document.getElementById("btnGrabarCaso").innerHTML = "Confirmar inhabilitación";
    document.getElementById("inpPaso").value = 3;
    clickIniciarCapturaCaso();
}

function clickIniciarCapturaSesion() {
    document.getElementById("divBtnOpciones").style.display = "none";
    document.getElementById("divFormularioAsignacion").style.display = "block";
    document.getElementById("divDatosCasoSesion").style.display = "block";
    document.getElementById("divGrabarAsignacion").style.display = "block";
}

function clickCapturarSesion() {
    document.getElementById("formAsignacion").action = "/main/grabarAsignacion";
    document.getElementById("lblOpciones").innerHTML = "Registrar asignación - 1. Seleccionar caso";
    document.getElementById("btnGrabarAsignacion").innerHTML = "Grabar asignación";
    document.getElementById("inpPaso").value = 1;
    clickIniciarCapturaSesion();
    /*
    Eliminación de valores de registros inconclusos
     */
    document.getElementById("inpNombreCursoSesion").value = "";
    document.getElementById("inpNombreCasoSesion").value = "";
    document.getElementById("inpNombreDiagramaSesion").value = "";
    document.getElementById("inpNombreGrupoSesion").value = "";
    validarCapturaSesion();
}

function clickSeleccionarCurso(pIdCurso,pNombreCurso,pIndice) {
    if (document.getElementById("divFormularioCaso").style.display != "none") {
        ocultarSeleccion();
        document.getElementById("lblCurso"+pIndice).className = "lblPresentacionSeleccionado";
        document.getElementById("lblOpciones").innerHTML = "Registrar caso - 2. Propiedades del caso";
        document.getElementById("inpNombreCaso").value = "";
        document.getElementById("selTipoDiagrama").value = "";
        document.getElementById("inpIdCurso").value = pIdCurso;
        document.getElementById("inpNombreCurso").value = pNombreCurso;
        document.getElementById("divDatosCaso").style.display = "block";
        document.getElementById("inpNombreCaso").focus();
    }
}

function clickSeleccionarCaso(pIdCaso,pNombreCaso,pIdCurso,pNombreCurso,pIdDiagrama,pNombreDiagrama,pIndice,pSubIndice) {
    if (document.getElementById("divFormularioAsignacion").style.display != "none") {
        ocultarSeleccion();
        document.getElementById("lblCurso"+pIndice).className = "lblPresentacionSeleccionado";
        document.getElementById("lblCaso"+pIndice+"."+pSubIndice).className = "lblPresentacionSubSeleccionado";
        document.getElementById("lblOpciones").innerHTML = "Registrar asignación - 2. Seleccionar grupo";
        document.getElementById("divGruposCurso"+pIndice).style.display = "block";
        document.getElementById("inpIdGrupo").value = "";
        document.getElementById("inpNombreGrupoSesion").value = "";
        document.getElementById("inpNombreSesion").value = document.getElementById("inpNombreCasoSesion").value;
        document.getElementById("inpIdCaso").value = pIdCaso;
        document.getElementById("inpIdCursoSesion").value = pIdCurso;
        document.getElementById("inpNombreCursoSesion").value = pNombreCurso;
        document.getElementById("inpNombreCasoSesion").value = pNombreCaso;
        document.getElementById("inpIdTipoDiagramaSesion").value = pIdDiagrama;
        document.getElementById("inpNombreDiagramaSesion").value = pNombreDiagrama;
        document.getElementById("divDatosSesion").style.display = "block";
        document.getElementById("inpNombreGrupoSesion").focus();
        validarCapturaSesion();
    }
}

function clickSeleccionarGrupo(pIdCurso,pIdGrupo,pNombreGrupo,pEstudiantesJson,pIndice) {
    if (document.getElementById("divFormularioAsignacion").style.display != "none") {
        document.getElementById("divGruposCurso"+pIndice).style.display = "none";
        let i = 0;
        let maximoEquiposSugeridos = 0;
        let b = [];
        let entradas = [];
        let rotulos = [];
        var casillas = [];
        let equipos = [];
        let filas = [];
        let columnas1 = [];
        let columnas2 = [];
        let columnas3 = [];
        let img = [];
        let pEstudiantes = cadenaJson(pEstudiantesJson);
        maximoEquiposSugeridos = Math.floor(pEstudiantes.length / 2);
        if (pIdCurso == document.getElementById("inpIdCursoSesion").value) {
            document.getElementById("inpIdGrupo").value = pIdGrupo;
            document.getElementById("inpNombreGrupoSesion").value = pNombreGrupo;
            document.getElementById("inpNombreSesion").value = document.getElementById("inpNombreCasoSesion").value+" - "+document.getElementById("inpNombreGrupoSesion").value;
            document.getElementById("lblOpciones").innerHTML = "Registrar asignación - 2. Conformar equipos";
            if (pEstudiantes.length > 0) {
                if (document.getElementById("trEncabezado") == undefined) {
                    filas[filas.length] = document.createElement("tr");
                    filas[filas.length-1].id = "trEncabezado";
                    columnas1[columnas1.length] = document.createElement("td");
                    columnas1[columnas1.length-1].id = "td1Encabezado";
                    columnas1[columnas1.length-1].className = "tblIntegrantes";
                    columnas2[columnas2.length] = document.createElement("td");
                    columnas2[columnas2.length-1].id = "td2Encabezado";
                    columnas2[columnas2.length-1].className = "tblEquipos";
                    b[b.length] = document.createElement("b");
                    b[b.length-1].id = "bEncabezado";
                    rotulos[rotulos.length] = document.createElement("label");
                    rotulos[rotulos.length-1].id = "lblEquipos";
                    rotulos[rotulos.length-1].className = "lblCaptura";
                    rotulos[rotulos.length-1].innerHTML = "Equipos: ";
                    img[img.length] = document.createElement("img");
                    img[img.length-1].id = "imgBtnAleatorio";
                    img[img.length-1].className = "w3-input w3-round imgBtnEncabezado";
                    img[img.length-1].src = "/images/imgAleatorioActiva.png";
                    img[img.length-1].title = "Conformación aleatoria";
                    img[img.length] = document.createElement("img");
                    img[img.length-1].id = "imgBtnSecuencial";
                    img[img.length-1].className = "w3-input w3-round imgBtnEncabezado";
                    img[img.length-1].src = "/images/imgSecuencial.png";
                    img[img.length-1].title = "Conformación secuencial";
                    img[img.length] = document.createElement("img");
                    img[img.length-1].id = "imgBtnLideres";
                    img[img.length-1].className = "w3-input w3-round imgBtnEncabezado";
                    img[img.length-1].src = "/images/imgLideres.png";
                    img[img.length-1].title = "Conformación aleatoria con selección";
                    img[img.length] = document.createElement("img");
                    img[img.length-1].id = "imgBtnManual";
                    img[img.length-1].className = "w3-input w3-round imgBtnEncabezado";
                    img[img.length-1].src = "/images/imgManual.png";
                    img[img.length-1].title = "Conformación manual";
                    img[img.length] = document.createElement("img");
                    img[img.length-1].id = "imgBtnIndividual";
                    img[img.length-1].className = "w3-input w3-round imgBtnEncabezado";
                    img[img.length-1].src = "/images/imgIndividual.png";
                    img[img.length-1].title = "Trabajo individual";
                    rotulos[rotulos.length] = document.createElement("label");
                    rotulos[rotulos.length-1].id = "lblEquiposConformacion";
                    rotulos[rotulos.length-1].className = "lblMenor";
                    rotulos[rotulos.length-1].innerHTML = " (Conformación aleatoria)";
                    document.getElementById("tblEstudiantes").appendChild(filas[filas.length-1]);
                    document.getElementById("trEncabezado").appendChild(columnas1[columnas1.length-1]);
                    document.getElementById("trEncabezado").appendChild(columnas2[columnas2.length-1]);
                    document.getElementById("td1Encabezado").appendChild(b[b.length-1]);
                    document.getElementById("bEncabezado").appendChild(rotulos[rotulos.length-2]);
                    document.getElementById("td1Encabezado").appendChild(document.createElement("br"));
                    document.getElementById("td1Encabezado").appendChild(img[img.length-5]);
                    document.getElementById("td1Encabezado").appendChild(img[img.length-4]);
                    document.getElementById("td1Encabezado").appendChild(img[img.length-3]);
                    document.getElementById("td1Encabezado").appendChild(img[img.length-2]);
                    document.getElementById("td1Encabezado").appendChild(img[img.length-1]);
                    document.getElementById("td1Encabezado").appendChild(rotulos[rotulos.length-1]);
                }
            }
            for (i=0; i<pEstudiantes.length; i++) {
                if (document.getElementById("inpIdEstudiante"+i) == undefined) {
                    filas[filas.length] = document.createElement("tr");
                    filas[filas.length-1].id = "trEstudiante"+i;
                    columnas1[columnas1.length] = document.createElement("td");
                    columnas1[columnas1.length-1].id = "td1Estudiante"+i;
                    columnas1[columnas1.length-1].className = "tblIntegrantes";
                    columnas2[columnas2.length] = document.createElement("td");
                    columnas2[columnas2.length-1].id = "td2Estudiante"+i;
                    columnas2[columnas2.length-1].className = "tblLideres";
                    columnas3[columnas3.length] = document.createElement("td");
                    columnas3[columnas3.length-1].id = "td3Estudiante"+i;
                    columnas3[columnas3.length-1].className = "tblEquipos";
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
                    casillas[casillas.length] = document.createElement("input");
                    casillas[casillas.length-1].id = "inpLiderEstudiante"+i;
                    casillas[casillas.length-1].className = "w3-input w3-round w3-button";
                    casillas[casillas.length-1].type = "checkbox";
                    casillas[casillas.length-1].title = "Seleccionar para encabezar equipo";
                    document.getElementById("tblEstudiantes").appendChild(filas[filas.length-1]);
                    document.getElementById("trEstudiante"+i).appendChild(columnas1[columnas1.length-1]);
                    document.getElementById("trEstudiante"+i).appendChild(columnas2[columnas2.length-1]);
                    document.getElementById("trEstudiante"+i).appendChild(columnas3[columnas3.length-1]);
                    document.getElementById("td1Estudiante"+i).appendChild(entradas[entradas.length-1]);
                    document.getElementById("td1Estudiante"+i).appendChild(rotulos[rotulos.length-1]);
                    document.getElementById("td2Estudiante"+i).appendChild(casillas[casillas.length-1]);
                    document.getElementById("td3Estudiante"+i).appendChild(equipos[equipos.length-1]);
                }
                document.getElementById("trEstudiante" + i).style.display = "inline-block";
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
        document.getElementById("imgBtnAleatorio").setAttribute("onclick","clickDistribucionAleatoria("+pEstudiantes.length+", "+3+")");
        document.getElementById("imgBtnSecuencial").setAttribute("onclick","clickDistribucionSecuencial("+pEstudiantes.length+", "+3+")");
        document.getElementById("imgBtnLideres").setAttribute("onclick","clickDistribucionLideres("+pEstudiantes.length+", "+3+")");
        document.getElementById("imgBtnManual").setAttribute("onclick","clickDistribucionManual("+pEstudiantes.length+")");
        document.getElementById("imgBtnIndividual").setAttribute("onclick","clickDistribucionIndividual("+pEstudiantes.length+")");
        validarCapturaSesion();
        clickDistribucionAleatoria(pEstudiantes.length, 3);
    }
}

function desplegarOpcionesDistribucion() {
    document.getElementById("imgBtnAleatorio").src = "/images/imgAleatorio.png";
    document.getElementById("imgBtnSecuencial").src = "/images/imgSecuencial.png";
    document.getElementById("imgBtnLideres").src = "/images/imgLideres.png";
    document.getElementById("imgBtnManual").src = "/images/imgManual.png";
    document.getElementById("imgBtnIndividual").src = "/images/imgIndividual.png";
    document.getElementById("lblEquiposConformacion").innerHTML = "";
    document.getElementById("imgBtnAleatorio").style.display = "inline-block";
    document.getElementById("imgBtnSecuencial").style.display = "inline-block";
    document.getElementById("imgBtnLideres").style.display = "inline-block";
    document.getElementById("imgBtnManual").style.display = "inline-block";
    document.getElementById("imgBtnIndividual").style.display = "inline-block";
    document.getElementById("btnGrabarAsignacion").style.display = "inline-block";
}

function ocultarOpcionesDistribucion() {
    let i = 0;
    if (document.getElementById("imgBtnAleatorio") != undefined) {
        document.getElementById("imgBtnAleatorio").style.display = "none";
        document.getElementById("imgBtnSecuencial").style.display = "none";
        document.getElementById("imgBtnLideres").style.display = "none";
        document.getElementById("imgBtnIndividual").style.display = "none";
        document.getElementById("imgBtnManual").style.display = "none";
        document.getElementById("lblEquiposConformacion").innerHTML = "";
        while (document.getElementById("inpIdEstudiante" + i) != undefined) {
            document.getElementById("trEstudiante" + i).style.display = "none";
            document.getElementById("lblEstudiante" + i).innerHTML = "";
            document.getElementById("inpEquipoEstudiante" + i).value = 0;
            document.getElementById("inpLiderEstudiante" + i).checked = false;
            i = i + 1;
        }
    }
    document.getElementById("btnGrabarAsignacion").style.display = "none";
}

function clickDistribucionAleatoria(pCantidadEstudiantes, pCantidadMaximaIntegrantes) {
    let i = 0;
    let j = 0;
    let cantidadEquipos = Math.ceil(pCantidadEstudiantes / pCantidadMaximaIntegrantes);
    let pendientes = pCantidadEstudiantes - 1;
    let siguiente = 0;
    for (i=0; i<pCantidadEstudiantes; i++) {
        document.getElementById("inpLiderEstudiante"+i).checked = false;
        document.getElementById("inpEquipoEstudiante"+i).value = 0;
    }
    i = 1;
    while (pendientes >= 0) {
        siguiente = Math.floor(Math.random()*pendientes);
        j = 0;
        while (siguiente >= 0) {
            if (document.getElementById("inpEquipoEstudiante"+j).value == 0) {
                if (siguiente == 0) {
                    document.getElementById("inpEquipoEstudiante"+j).value = i;
                    pendientes = pendientes - 1;
                }
                siguiente = siguiente - 1;
            }
            j = j + 1;
        }
        i = i + 1;
        if (i > cantidadEquipos) {
            i = 1;
        }
    }
    desplegarOpcionesDistribucion();
    document.getElementById("imgBtnAleatorio").src = "/images/imgAleatorioActiva.png";
    document.getElementById("lblEquiposConformacion").innerHTML = " (Conformación aleatoria)";
}

function clickDistribucionSecuencial(pCantidadEstudiantes, pCantidadMaximaIntegrantes) {
    let i = 0;
    let j = 0;
    let cantidadEquipos = Math.ceil(pCantidadEstudiantes / pCantidadMaximaIntegrantes);
    j = 1;
    for (i=0; i<pCantidadEstudiantes; i++) {
        document.getElementById("inpLiderEstudiante"+i).checked = false;
        document.getElementById("inpEquipoEstudiante"+i).value = j;
        j = j + 1;
        if (j > cantidadEquipos) {
            j = 1;
        }
    }
    desplegarOpcionesDistribucion();
    document.getElementById("imgBtnSecuencial").src = "/images/imgSecuencialActiva.png";
    document.getElementById("lblEquiposConformacion").innerHTML = " (Conformación secuencial)";
}

function clickDistribucionLideres(pCantidadEstudiantes, pCantidadMaximaIntegrantes) {
    let i = 0;
    let j = 1;
    let cantidadEquipos = Math.ceil(pCantidadEstudiantes / pCantidadMaximaIntegrantes);
    for (i=0; i<pCantidadEstudiantes; i++) {
        if (document.getElementById("inpLiderEstudiante"+i).checked && j<=cantidadEquipos) {
            document.getElementById("inpEquipoEstudiante"+i).value = j;
            j = j + 1;
        }
        else {
            document.getElementById("inpEquipoEstudiante"+i).value = 0;
        }
    }
    let pendientes = pCantidadEstudiantes - j;
    let siguiente = 0;
    if (j <= cantidadEquipos) {
        i = j;
    }
    else {
        i = 1;
    }
    while (pendientes >= 0) {
        siguiente = Math.floor(Math.random()*pendientes);
        j = 0;
        while (siguiente >= 0) {
            if (document.getElementById("inpEquipoEstudiante"+j).value == 0) {
                if (siguiente == 0) {
                    document.getElementById("inpEquipoEstudiante"+j).value = i;
                    pendientes = pendientes - 1;
                }
                siguiente = siguiente - 1;
            }
            j = j + 1;
        }
        i = i + 1;
        if (i > cantidadEquipos) {
            i = 1;
        }
    }
    desplegarOpcionesDistribucion();
    document.getElementById("imgBtnLideres").src = "/images/imgLideresActiva.png";
    document.getElementById("lblEquiposConformacion").innerHTML = " (Conformación aleatoria con selección)";
}

function clickDistribucionManual(pCantidadEstudiantes) {
    let i = 0;
    for (i=0; i<pCantidadEstudiantes; i++) {
        document.getElementById("inpLiderEstudiante"+i).checked = false;
        document.getElementById("inpEquipoEstudiante"+i).value = 0;
    }
    desplegarOpcionesDistribucion();
    document.getElementById("imgBtnManual").src = "/images/imgManualActiva.png";
    document.getElementById("lblEquiposConformacion").innerHTML = " (Conformación manual)";
}

function clickDistribucionIndividual(pCantidadEstudiantes) {
    let i = 0;
    for (i=0; i<pCantidadEstudiantes; i++) {
        document.getElementById("inpLiderEstudiante"+i).checked = false;
        document.getElementById("inpEquipoEstudiante"+i).value = i+1;
    }
    desplegarOpcionesDistribucion();
    document.getElementById("imgBtnIndividual").src = "/images/imgIndividualActiva.png";
    document.getElementById("lblEquiposConformacion").innerHTML = " (Trabajo individual)";
}

function validarCapturaCaso() {
    let rValidacion = true;
    rValidacion = rValidacion && document.getElementById("inpNombreCurso").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpNombreCaso").value.length > 0;
    rValidacion = rValidacion && document.getElementById("selTipoDiagrama").value.length > 0;
    if (rValidacion) {
        document.getElementById("btnGrabarCaso").style.display = "inline-block";
    }
    else {
        document.getElementById("btnGrabarCaso").style.display = "none";
    }
}

function validarCapturaSesion() {
    let rValidacion = true;
    rValidacion = rValidacion && document.getElementById("inpNombreCursoSesion").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpNombreCasoSesion").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpNombreDiagramaSesion").value.length > 0;
    rValidacion = rValidacion && document.getElementById("inpNombreGrupoSesion").value.length > 0;
    if (rValidacion) {
        desplegarOpcionesDistribucion();
    }
    else {
        ocultarOpcionesDistribucion();
    }
}

