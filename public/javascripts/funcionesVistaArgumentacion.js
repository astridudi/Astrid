function clickDesplegarOpciones() {
    // layout
    document.getElementById("thDesplegarOpcionesSesion").style.width = Math.round(window.innerWidth * 0.35)+"px";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpcionesSesion").innerHTML = "1. Seleccionar aporte predecesor";
    document.getElementById("lblOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnOcultarOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "none";
    document.getElementById("btnLlamar").title = "Convocar a la argumentación";
    document.getElementById("btnLlamar").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamiento").style.display = "none";
    document.getElementById("imgBtnDiagrama").style.display = "none";
    document.getElementById("imgBtnArgumentacion").style.display = "none";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnDiagramaInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "inline-block";
    // presentarDiagrama
    document.getElementById("divPresentacionArgumentacion").style.width = Math.round(window.innerWidth * 0.65)+"px";
    document.getElementById("divCapturaAporte").style.width = Math.round(window.innerWidth * 0.35)+"px";
    document.getElementById("divBtnAportes").style.display = "none";
    document.getElementById("divRedactarAporte").style.display = "none";
    document.getElementById("divGrabarAporte").style.display = "none";
    // divCapturaElemento
    alertaAporte();
}

function clickOcultarOpciones() {
    let i = 0;
    // layout
    document.getElementById("divSesion").style.display = "block";
    document.getElementById("thDesplegarOpcionesSesion").style.width = 50+"px";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerecha";
    document.getElementById("lblOpcionesSesion").innerHTML = "";
    document.getElementById("lblOpcionesSesion").style.display = "none";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnOcultarOpcionesSesion").style.display = "none";
    document.getElementById("btnLlamar").style.display = "none";
    document.getElementById("imgBtnPlanteamiento").style.display = "inline-block";
    document.getElementById("imgBtnDiagrama").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacion").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "none";
    document.getElementById("imgBtnDiagramaInhabilitado").style.display = "none";
    document.getElementById("imgBtnArgumentacionInhabilitado").style.display = "none";
    // presentarCurso
    document.getElementById("divPresentacionArgumentacion").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionArgumentacion").offsetTop)+"px";
    document.getElementById("divPresentacionArgumentacion").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaAporte").style.height = document.getElementById("divPresentacionArgumentacion").style.height;
    document.getElementById("divCapturaAporte").style.width = 0+"px";
    document.getElementById("thApoyo").style.display = "none";
    document.getElementById("thRefutacion").style.display = "none";
    document.getElementById("thProposicion").style.display = "none";
    document.getElementById("thEvidencia").style.display = "none";
    document.getElementById("thPregunta").style.display = "none";
    document.getElementById("aporteContenido").innerHTML = "";

}

function inicioCapturaAporte(pAportePredecesorId,pAportePredecesorTipoId,pAportePredecesorTipo,pAportePredecesorContenido,pArgumentacionNombre) {
    document.getElementById("aportePredecesorId").value = pAportePredecesorId;
    document.getElementById("lblAportePredecesorTipo").innerHTML = pAportePredecesorTipo;
    document.getElementById("lblAportePredecesorContenido").innerHTML = pAportePredecesorContenido;
    document.getElementById("divBtnAportes").style.display = "inline-block";
    document.getElementById("thApoyo").style.display = "none";
    document.getElementById("thRefutacion").style.display = "none";
    document.getElementById("thProposicion").style.display = "none";
    document.getElementById("thEvidencia").style.display = "none";
    document.getElementById("thPregunta").style.display = "none";
    document.getElementById("imgBtnApoyo").style.display = "inline-block";
    document.getElementById("imgBtnRefutacion").style.display = "inline-block";
    document.getElementById("imgBtnProposicion").style.display = "inline-block";
    document.getElementById("imgBtnEvidencia").style.display = "inline-block";
    document.getElementById("imgBtnPregunta").style.display = "inline-block";
    document.getElementById("divFormularioAporte").style.display = "inline-block";
    switch (pAportePredecesorTipoId) {
        case "0" : {
            document.getElementById("lblOpciones").innerHTML = "2. Seleccionar tipo de aporte";
            document.getElementById("thApoyo").style.display = "inline-block";
            document.getElementById("thRefutacion").style.display = "inline-block";
            document.getElementById("thProposicion").style.display = "inline-block";
            document.getElementById("divBtnAportes").style.display = "inline-block";
            break;
        }
        case "1" : {
            document.getElementById("lblOpciones").innerHTML = "2. Seleccionar tipo de aporte";
            document.getElementById("thEvidencia").style.display = "inline-block";
            document.getElementById("thPregunta").style.display = "inline-block";
            document.getElementById("divBtnAportes").style.display = "inline-block";
            document.getElementById("imgBtnEvidencia").setAttribute(
                "onclick",
                "clickCapturaContenido(3)"
            );
            document.getElementById("imgBtnPregunta").setAttribute(
                "onclick",
                "clickCapturaContenido(5)"
            );
            break;
        }
        case "2" : {
            document.getElementById("lblOpciones").innerHTML = "2. Seleccionar tipo de aporte";
            document.getElementById("thEvidencia").style.display = "inline-block";
            document.getElementById("thPregunta").style.display = "inline-block";
            document.getElementById("divBtnAportes").style.display = "inline-block";
            document.getElementById("imgBtnEvidencia").setAttribute(
                "onclick",
                "clickCapturaContenido(9)"
            );
            document.getElementById("imgBtnPregunta").setAttribute(
                "onclick",
                "clickCapturaContenido(7)"
            );
            break;
        }
        case "3" : {
            clickCapturaContenido(4);
            break;
        }
        case "5" : {
            clickCapturaContenido(6);
            break;
        }
        case "7" : {
            clickCapturaContenido(8);
            break;
        }
        case "9" : {
            clickCapturaContenido(10);
            break;
        }
    }
}

function clickCapturaContenido(pAporteTipoId) {
    document.getElementById("divBtnAportes").style.display = "none";
    document.getElementById("divRedactarAporte").style.display = "block";
    document.getElementById("divGrabarAporte").style.display = "block";
    document.getElementById("aporteTipoId").value = pAporteTipoId;
    switch (pAporteTipoId) {
        case 0 : {
            document.getElementById("lblOpciones").innerHTML = "3. Redactar nueva proposición";
            document.getElementById("lblAporteTipo").innerHTML = "Nueva proposición:";
            break;
        }
        case 1 : {
            document.getElementById("lblOpciones").innerHTML = "3. Redactar apoyo";
            document.getElementById("lblAporteTipo").innerHTML = "Razón de apoyo a la proposición:";
            break;
        }
        case 2 : {
            document.getElementById("lblOpciones").innerHTML = "3. Redactar refutación";
            document.getElementById("lblAporteTipo").innerHTML = "Razón de refutación a la proposición:";
            break;
        }
        case 3 : {
            document.getElementById("lblOpciones").innerHTML = "3. Redactar evidencia";
            document.getElementById("lblAporteTipo").innerHTML = "Evidencia de la razón de apoyo:";
            break;
        }
        case 4 : {
            document.getElementById("lblOpciones").innerHTML = "3. Redactar contraevidencia";
            document.getElementById("lblAporteTipo").innerHTML = "Contraevidencia de la razón de apoyo:";
            break;
        }
        case 5 : {
            document.getElementById("lblOpciones").innerHTML = "3. Redactar pregunta";
            document.getElementById("lblAporteTipo").innerHTML = "Pregunta sobre la razón de apoyo:";
            break;
        }
        case 6 : {
            document.getElementById("lblOpciones").innerHTML = "3. Redactar respuesta";
            document.getElementById("lblAporteTipo").innerHTML = "Respuesta a la pregunta de la razón de apoyo:";
            break;
        }
        case 7 : {
            document.getElementById("lblOpciones").innerHTML = "3. Redactar pregunta";
            document.getElementById("lblAporteTipo").innerHTML = "Pregunta sobre la razón de refutación:";
            break;
        }
        case 8 : {
            document.getElementById("lblOpciones").innerHTML = "3. Redactar contraevidencia";
            document.getElementById("lblAporteTipo").innerHTML = "Contraevidencia de la razón de refutación:";
            break;
        }
        case 9 : {
            document.getElementById("lblOpciones").innerHTML = "3. Redactar evidencia";
            document.getElementById("lblAporteTipo").innerHTML = "Evidencia de la razón de refutación:";
            break;
        }
        case 10 : {
            document.getElementById("lblOpciones").innerHTML = "3. Redactar respuesta";
            document.getElementById("lblAporteTipo").innerHTML = "Respuesta a la pregunta de la razón de refutación:";
            break;
        }
    }
    document.getElementById("aporteContenido").focus();
}


