function clickCapturaAporte() {
    document.getElementById("divPresentacionArgumentacion").style.width = Math.round(window.innerWidth * 0.75)+"px";
    document.getElementById("divCapturaAporte").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("thSangriaDerecha").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("thSangriaDerecha").className = "tblSangriaDerechaResaltada";
    document.getElementById("divBtnCapturaAporte").style.display = "inline-block";
    document.getElementById("divBtnAportes").style.display = "none";
    document.getElementById("divFormularioAporte").style.display = "none";
    document.getElementById("btnDesplegarCaptura").style.display = "none";
    document.getElementById("lblSangriaDerecha").innerHTML = "1. Pulsar aporte predecesor";
    document.getElementById("lblSangriaDerecha").style.display = "inline-block";
    document.getElementById("divBtnCapturaAporte").appendChild(document.getElementById("btnDesistirAporte"));
    alertaAporte();
}

function inicioCapturaAporte(pAportePredecesorId,pAportePredecesorTipoId,pAportePredecesorTipo,pAportePredecesorContenido,pArgumentacionNombre) {
    document.getElementById("aportePredecesorId").value = pAportePredecesorId;
    document.getElementById("lblAportePredecesorTipo").innerHTML = pAportePredecesorTipo;
    document.getElementById("lblAportePredecesorContenido").innerHTML = pAportePredecesorContenido;
    document.getElementById("divBtnCapturaAporte").style.display = "none";
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
    document.getElementById("divBtnAportes").style.display = "inline-block";
    document.getElementById("divGrabarAporte").style.display = "inline-block";
    document.getElementById("divGrabarAporte").appendChild(document.getElementById("btnDesistirAporte"));
    switch (pAportePredecesorTipoId) {
        case "0" : {
            document.getElementById("lblSangriaDerecha").innerHTML = "2. Seleccionar tipo de aporte";
            document.getElementById("thApoyo").style.display = "inline-block";
            document.getElementById("thRefutacion").style.display = "inline-block";
            document.getElementById("thProposicion").style.display = "inline-block";
            break;
        }
        case "1" : {
            document.getElementById("lblSangriaDerecha").innerHTML = "2. Seleccionar tipo de aporte";
            document.getElementById("thEvidencia").style.display = "inline-block";
            document.getElementById("thPregunta").style.display = "inline-block";
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
            document.getElementById("lblSangriaDerecha").innerHTML = "2. Seleccionar tipo de aporte";
            document.getElementById("thEvidencia").style.display = "inline-block";
            document.getElementById("thPregunta").style.display = "inline-block";
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
            document.getElementById("lblSangriaDerecha").innerHTML = "3. Redactar nueva proposición";
            document.getElementById("lblAporteTipo").innerHTML = "Nueva proposición:";
            break;
        }
        case 1 : {
            document.getElementById("lblSangriaDerecha").innerHTML = "3. Redactar apoyo";
            document.getElementById("lblAporteTipo").innerHTML = "Razón de apoyo a la proposición:";
            break;
        }
        case 2 : {
            document.getElementById("lblSangriaDerecha").innerHTML = "3. Redactar refutación";
            document.getElementById("lblAporteTipo").innerHTML = "Razón de refutación a la proposición:";
            break;
        }
        case 3 : {
            document.getElementById("lblSangriaDerecha").innerHTML = "3. Redactar evidencia";
            document.getElementById("lblAporteTipo").innerHTML = "Evidencia de la razón de apoyo:";
            break;
        }
        case 4 : {
            document.getElementById("lblSangriaDerecha").innerHTML = "3. Redactar contraevidencia";
            document.getElementById("lblAporteTipo").innerHTML = "Contraevidencia de la razón de apoyo:";
            break;
        }
        case 5 : {
            document.getElementById("lblSangriaDerecha").innerHTML = "3. Redactar pregunta";
            document.getElementById("lblAporteTipo").innerHTML = "Pregunta sobre la razón de apoyo:";
            break;
        }
        case 6 : {
            document.getElementById("lblSangriaDerecha").innerHTML = "3. Redactar respuesta";
            document.getElementById("lblAporteTipo").innerHTML = "Respuesta a la pregunta de la razón de apoyo:";
            break;
        }
        case 7 : {
            document.getElementById("lblSangriaDerecha").innerHTML = "3. Redactar pregunta";
            document.getElementById("lblAporteTipo").innerHTML = "Pregunta sobre la razón de refutación:";
            break;
        }
        case 8 : {
            document.getElementById("lblSangriaDerecha").innerHTML = "3. Redactar contraevidencia";
            document.getElementById("lblAporteTipo").innerHTML = "Contraevidencia de la razón de refutación:";
            break;
        }
        case 9 : {
            document.getElementById("lblSangriaDerecha").innerHTML = "3. Redactar evidencia";
            document.getElementById("lblAporteTipo").innerHTML = "Evidencia de la razón de refutación:";
            break;
        }
        case 10 : {
            document.getElementById("lblSangriaDerecha").innerHTML = "3. Redactar respuesta";
            document.getElementById("lblAporteTipo").innerHTML = "Respuesta a la pregunta de la razón de refutación:";
            break;
        }
    }
    document.getElementById("aporteContenido").focus();
}

function restaurarDimensiones() {
    document.getElementById("thSangriaDerecha").style.width = 50+"px";
    document.getElementById("thSangriaDerecha").className = "tblSangriaDerecha";
    document.getElementById("divPresentacionArgumentacion").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaAporte").style.width = 0+"px";
    document.getElementById("btnDesplegarCaptura").style.display = "inline-block";
    document.getElementById("lblSangriaDerecha").innerHTML = "";
    document.getElementById("lblSangriaDerecha").style.display = "none";
    document.getElementById("divBtnCapturaAporte").appendChild(document.getElementById("btnDesistirAporte"));
    document.getElementById("thApoyo").style.display = "none";
    document.getElementById("thRefutacion").style.display = "none";
    document.getElementById("thProposicion").style.display = "none";
    document.getElementById("thEvidencia").style.display = "none";
    document.getElementById("thPregunta").style.display = "none";
    document.getElementById("lblAportePredecesorTipo").innerHTML = "";
    document.getElementById("lblAportePredecesorContenido").innerHTML = "";
    document.getElementById("divRedactarAporte").style.display = "none";
    document.getElementById("lblAporteTipo").innerHTML = "";
    document.getElementById("aporteContenido").innerHTML = "";
}

