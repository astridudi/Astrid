function clickDesplegarOpciones() {
    desplegarOpcionesSesionLayout();
    document.getElementById("divPresentacionDiagrama").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaElemento").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("lblOpcionesSesion").innerHTML = "1. Seleccionar tipo de elemento";
    document.getElementById("divBtnCapturaElemento").style.display = "block";
    document.getElementById("btnCapturaObjeto").style.display = "inline-block";
    document.getElementById("btnCapturaRelacion").style.display = "inline-block";
    document.getElementById("divFormularioObjeto").style.display = "none";
    document.getElementById("divFormularioRelacion").style.display = "none";
    document.getElementById("divFormularioMovimiento").style.display = "none";
    // Notificación a usuarios
    alertaElemento();
}

function clickOcultarOpciones() {
    ocultarOpcionesSesionLayout();
    document.getElementById("divPresentacionDiagrama").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaElemento").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPresentacionDiagrama").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionDiagrama").offsetTop)+"px";
    document.getElementById("divCapturaElemento").style.height = document.getElementById("divPresentacionDiagrama").style.height;
}

function clickPresentarDiagrama() {
    document.getElementById("imgBtnPlanteamiento").style.display = "inline-block";
    document.getElementById("imgBtnChat").style.display = "inline-block";
    document.getElementById("imgBtnDiagrama").style.display = "none";
    document.getElementById("imgBtnArgumentacion").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamientoActiva").style.display = "none";
    document.getElementById("imgBtnChatActiva").style.display = "none";
    document.getElementById("imgBtnDiagramaActiva").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacionActiva").style.display = "none";
    document.getElementById("thPlanteamiento").className = "w3-round tblMenuSesionVisible";
    document.getElementById("thChat").className = "w3-round tblMenuSesionVisible";
    document.getElementById("thDiagrama").className = "w3-round tblMenuSesionActiva";
    document.getElementById("thArgumentacion").className = "w3-round tblMenuSesionVisible";
    document.getElementById("btnLlamar").title = "Llamar a diagrama";
}

function clickCapturaObjeto() {
    document.getElementById("divBtnCapturaElemento").style.display = "none";
    document.getElementById("divBtnCapturaObjeto").style.display = "block";
    document.getElementById("lblOpcionesSesion").innerHTML = "2. Seleccionar tipo de objeto";
}

function clickCapturaRelacion() {
    document.getElementById("divBtnCapturaElemento").style.display = "none";
    document.getElementById("divBtnCapturaRelacion").style.display = "block";
    document.getElementById("lblOpcionesSesion").innerHTML = "2. Seleccionar tipo de vínculo";
}

function clickEditarDiagrama() {
    clickDesplegarOpciones()
    document.getElementById("divBtnCapturaElemento").style.display = "none";
    document.getElementById("divFormularioMovimiento").style.display = "block"
    document.getElementById("divCoordenadasEdicion").style.display = "block"
    document.getElementById("divGrabacionMovimiento").style.display = "block"
    document.getElementById("lblOpcionesSesion").innerHTML = "1. Editar diagrama";
}

function inicioCapturaObjeto(pObjetoTipoId, pObjetoTipo, pTiposPropiedadJson) {
    let i = 0;
    let cadenaTiposPropiedad = pTiposPropiedadJson.replace(/&quot;/g, "'");
    cadenaTiposPropiedad = cadenaTiposPropiedad.replace(/'/g, '"');
    let pTiposPropiedad = JSON.parse(cadenaTiposPropiedad);

    document.getElementById('inpIdTipoObjeto').value=pObjetoTipoId;
    document.getElementById('lblObjetoTipo').innerHTML="Objeto: "+pObjetoTipo;
    document.getElementById("lblOpcionesSesion").innerHTML = "3. Registrar propiedades del objeto";
    document.getElementById("divBtnCapturaObjeto").style.display = "none";
    document.getElementById("divFormularioObjeto").style.display = "block";
    document.getElementById("divPropiedadesObjeto").style.display = "block";
    document.getElementById("divCoordenadasObjeto").style.display = "block";
    document.getElementById("divGrabacionObjeto").style.display = "block";

    if (cadenaTiposPropiedad.length > 0) {
        for (i=0; i<pTiposPropiedad.length; i++) {
            document.getElementById('divPropiedadObjeto'+i).style.display = "block";
            document.getElementById('nombrePropiedadObjeto'+i).innerHTML = pTiposPropiedad[i]._nombre+": ";
            document.getElementById('nombrePropiedadObjeto'+i).autofocus = true;
            document.getElementById('valorPropiedadObjeto'+i).name = 'valorPropiedadObjeto'+i;
            if (i == 0) {
                document.getElementById('valorPropiedadObjeto'+i).focus();
            }
        }
    }
    while (i<5) {
        document.getElementById('divPropiedadObjeto'+i).style.display = "none";
        i = i+1;
    }
    i = 0;
    while (document.getElementById('area'+i) != undefined) {
        document.getElementById('area'+i).href="#";
        i = i + 1;
    }
    alertaElemento(pObjetoTipo);
}

function capturaRelacion(pPaso,pRelacionTipoId,pRelacionTipo,pTiposPropiedadJson) {
    let i = 0;
    if (pPaso==1) {
        let cadenaTiposPropiedad = pTiposPropiedadJson.replace(/&quot;/g, "'");
        cadenaTiposPropiedad = cadenaTiposPropiedad.replace(/'/g, '"');
        document.getElementById("pasoCaptura").value=pPaso;
        document.getElementById("inpIdTipoRelacion").value=pRelacionTipoId;
        document.getElementById("lblRelacionTipo").innerHTML="Vínculo: "+pRelacionTipo;
        document.getElementById("inpIndiceObjetoInicial").value='';
        document.getElementById("inpIdObjetoInicial").value='';
        document.getElementById("inpNombreObjetoInicial").value='';
        document.getElementById("inpIndiceObjetoFinal").value='';
        document.getElementById("inpIdObjetoFinal").value='';
        document.getElementById("inpNombreObjetoFinal").value='';
        document.getElementById("lblOpcionesSesion").innerHTML = "3. Pulsar objeto inicial del vínculo";
        document.getElementById("divBtnCapturaRelacion").style.display = "none";
        document.getElementById("divFormularioRelacion").style.display = "block";
        document.getElementById("divCapturarObjetoInicial").style.display = "block";

        i = 0;
        if (cadenaTiposPropiedad.length > 0) {
            let pTiposPropiedad = JSON.parse(cadenaTiposPropiedad);
            for (i=0; i<pTiposPropiedad.length; i++) {
                document.getElementById('divPropiedadRelacion'+i).style.display = "block";
                document.getElementById('nombrePropiedadRelacion'+i).innerHTML = pTiposPropiedad[i]._nombre+": ";
                document.getElementById('nombrePropiedadRelacion'+i).autofocus = true;
                document.getElementById('valorPropiedadRelacion'+i).name = 'valorPropiedadRelacion'+i;
            }
        }
        while (i<5) {
            document.getElementById('divPropiedadRelacion'+i).style.display = "none";
            document.getElementById('valorPropiedadRelacion'+i).name = 'none';
            i = i+1;
        }
        i = 0;
        while (document.getElementById('area'+i) != undefined) {
            document.getElementById('area'+i).href="#";
            i = i + 1;
        }
        document.getElementById('inpNombreObjetoInicial').focus();
        dibujarDiagrama(document.getElementById("diagramaJson").value, "/main/presentarArgumentacionSesion?idSesion={{sesion.id}}&nombreUsuario={{nombreUsuario}}&idObjeto=",pPaso);
        alertaElemento(pRelacionTipo);
    }
    if (pPaso==2) {
        document.getElementById("lblOpcionesSesion").innerHTML = "4. Seleccionar punto de inicio";
    }
    if (pPaso==3) {
        document.getElementById("lblOpcionesSesion").innerHTML = "5. Pulsar objeto final del vínculo";
        document.getElementById('divCapturarObjetoFinal').style.display='block';
        document.getElementById('inpNombreObjetoFinal').focus();
        dibujarDiagrama(document.getElementById("diagramaJson").value, "/main/presentarArgumentacionSesion?idSesion={{sesion.id}}&nombreUsuario={{nombreUsuario}}&idObjeto=",pPaso);
    }
    if (pPaso==4) {
        document.getElementById("lblOpcionesSesion").innerHTML = "6. Seleccionar punto final";
    }
    if (pPaso==5) {
        document.getElementById("lblOpcionesSesion").innerHTML = "7. Registrar propiedades del vínculo";
        document.getElementById("divPropiedadesRelacion").style.display = "block";
        document.getElementById("divGrabacionRelacion").style.display = "block";


        i = 0;
        while (i<5) {
            if (document.getElementById('valorPropiedadRelacion'+i).name != 'none') {
                document.getElementById('divPropiedadRelacion'+i).style.display = "block";
            }
            i = i+1;
        }
    }
}

function inicioFormularioCapturaObjeto() {
    let i = 0;
    let divisiones = [];
    let b = [];
    let rotulos = [];
    let valores = [];
    let saltosA = [];
    for (i=0; i<5; i++) {
        if (document.getElementById("nombrePropiedadObjeto"+i) == undefined) {
            divisiones[i] = document.createElement("div");
            b[i] = document.createElement("b");
            rotulos[i] = document.createElement("label");
            rotulos[i].className = "lblCaptura";
            b[i].appendChild(rotulos[i]);
            valores[i] = document.createElement("input");
            divisiones[i].id = "divPropiedadObjeto"+i;
            rotulos[i].id = "nombrePropiedadObjeto"+i;
            rotulos[i].innerHTML = "nombrePropiedad"+i+": ";
            valores[i].id = "valorPropiedadObjeto"+i;
            valores[i].className = "w3-input w3-round";
            valores[i].autofocus = true;
            saltosA[i] = document.createElement("br");
            saltosA[i].id = "salto"+i;
            document.getElementById("divPropiedadesObjeto").appendChild(divisiones[i]);
            document.getElementById("divPropiedadObjeto"+i).appendChild(b[i]);
            document.getElementById("divPropiedadObjeto"+i).appendChild(valores[i]);
            document.getElementById("divPropiedadObjeto"+i).appendChild(saltosA[i]);
            divisiones[i].style.display="none";
        }
    }
    document.getElementById("inpXObjeto").value = document.getElementById("inpXNuevoObjeto").value;
    document.getElementById("inpYObjeto").value = document.getElementById("inpYNuevoObjeto").value;
}

function inicioFormularioCapturaRelacion() {
    let i = 0;
    let divisiones = [];
    let b = [];
    let rotulos = [];
    let valores = [];
    let saltosA = [];
    for (i = 0; i < 5; i++) {
        if (document.getElementById("nombrePropiedadRelacion" + i) == undefined) {
            divisiones[i] = document.createElement("div");
            b[i] = document.createElement("b");
            rotulos[i] = document.createElement("label");
            rotulos[i].className = "lblCaptura";
            b[i].appendChild(rotulos[i]);
            valores[i] = document.createElement("input");
            divisiones[i].id = "divPropiedadRelacion" + i;
            rotulos[i].id = "nombrePropiedadRelacion" + i;
            rotulos[i].innerHTML = "nombreRelacion" + i + ": ";
            valores[i].id = "valorPropiedadRelacion" + i;
            valores[i].className = "w3-input w3-round";
            valores[i].autofocus = true;
            saltosA[i] = document.createElement("br");
            saltosA[i].id = "salto" + i;
            document.getElementById("divPropiedadesRelacion").appendChild(divisiones[i]);
            document.getElementById("divPropiedadRelacion" + i).appendChild(b[i]);
            document.getElementById("divPropiedadRelacion" + i).appendChild(valores[i]);
            document.getElementById("divPropiedadRelacion" + i).appendChild(saltosA[i]);
            divisiones[i].style.display = "none";
        }
    }
}
