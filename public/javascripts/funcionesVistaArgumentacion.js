function clickDesplegarOpciones() {
    // layout
    // Cambio de tamaño de las secciones en pantalla
    document.getElementById("thDesplegarOpcionesSesion").style.width = Math.round(window.innerWidth * 0.35)+"px";
    document.getElementById("divPresentacionArgumentacion").style.width = Math.round(window.innerWidth * 0.65)+"px";
    document.getElementById("divCapturaAporte").style.width = Math.round(window.innerWidth * 0.35)+"px";
    // Cambio de aspecto de botones inhabilitados en menú divSesion
    document.getElementById("imgBtnPlanteamiento").style.display = "none";
    document.getElementById("imgBtnChat").style.display = "none";
    document.getElementById("imgBtnDiagrama").style.display = "none";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnChatInhabilitado").style.display = "inline-block";
    document.getElementById("imgBtnDiagramaInhabilitado").style.display = "inline-block";
    // Habilitación de opciones de interacción con el usuario
    document.getElementById("btnLlamar").title = "Convocar a la argumentación";
    document.getElementById("btnLlamar").style.display = "inline-block";
    document.getElementById("btnOcultarOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "none";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpcionesSesion").innerHTML = "1. Seleccionar aporte predecesor";
    document.getElementById("lblOpcionesSesion").style.display = "inline-block";
    // Habilitación del formulario (las divisiones permanecen inhabilitadas)
    document.getElementById("divFormularioAporte").style.display = "inline-block";
    // Notificación a usuarios
    alertaAporte();
}

function clickOcultarOpciones() {
    // Restauración de tamaño inicial de las secciones en pantalla
    document.getElementById("thDesplegarOpcionesSesion").style.width = 50+"px";
    document.getElementById("divPresentacionArgumentacion").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaAporte").style.width = 0+"px";
    document.getElementById("divPresentacionArgumentacion").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionArgumentacion").offsetTop)+"px";
    document.getElementById("divCapturaAporte").style.height = document.getElementById("divPresentacionArgumentacion").style.height;
    // Cambio de aspecto de botones habilitados en menú divSesion
    document.getElementById("imgBtnPlanteamiento").style.display = "inline-block";
    document.getElementById("imgBtnChat").style.display = "inline-block";
    document.getElementById("imgBtnDiagrama").style.display = "inline-block";
    document.getElementById("imgBtnPlanteamientoInhabilitado").style.display = "none";
    document.getElementById("imgBtnChatInhabilitado").style.display = "none";
    document.getElementById("imgBtnDiagramaInhabilitado").style.display = "none";
    document.getElementById("btnLlamar").style.display = "none";
    document.getElementById("btnOcultarOpcionesSesion").style.display = "none";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "inline-block";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerecha";
    document.getElementById("lblOpcionesSesion").innerHTML = "";
    document.getElementById("lblOpcionesSesion").style.display = "none";
    // Ocultamiento de secciones del formulario y reinicio de elementos
    document.getElementById("divFormularioAporte").style.display = "none";
    document.getElementById("divAportePredecesor").style.display = "none";
    document.getElementById("lblAportePredecesorTipo").innerHTML = "";
    document.getElementById("lblAportePredecesorContenido").innerHTML = "";
    document.getElementById("divBtnAportes").style.display = "none";
    document.getElementById("thApoyo").style.display = "none";
    document.getElementById("thRefutacion").style.display = "none";
    document.getElementById("thProposicion").style.display = "none";
    document.getElementById("thEvidencia").style.display = "none";
    document.getElementById("thPregunta").style.display = "none";
    document.getElementById("divRedactarAporte").style.display = "none";
    document.getElementById("txtAporteContenido").innerHTML = "";
    document.getElementById("divGrabarAporte").style.display = "none";
}

function inicioCapturaAporte(pIdAportePredecesor,pAportePredecesorTipoId,pAportePredecesorTipo,pAportePredecesorContenido,pArgumentacionNombre) {
    if (document.getElementById("divFormularioAporte").style.display != "none") {
        document.getElementById("divFormularioAporte").style.display = "block";
        document.getElementById("divAportePredecesor").style.display = "block";
        document.getElementById("inpIdAportePredecesor").value = pIdAportePredecesor;
        document.getElementById("lblAportePredecesorTipo").innerHTML = pAportePredecesorTipo;
        document.getElementById("lblAportePredecesorContenido").innerHTML = pAportePredecesorContenido;
        document.getElementById("divBtnAportes").style.display = "block";
        document.getElementById("thApoyo").style.display = "none";
        document.getElementById("thRefutacion").style.display = "none";
        document.getElementById("thProposicion").style.display = "none";
        document.getElementById("thEvidencia").style.display = "none";
        document.getElementById("thPregunta").style.display = "none";
        switch (pAportePredecesorTipoId) {
            case "0" : {
                document.getElementById("lblOpcionesSesion").innerHTML = "2. Seleccionar tipo de aporte sucesor";
                document.getElementById("thApoyo").style.display = "inline-block";
                document.getElementById("thRefutacion").style.display = "inline-block";
                document.getElementById("thProposicion").style.display = "inline-block";
                document.getElementById("divBtnAportes").style.display = "inline-block";
                break;
            }
            case "1" : {
                document.getElementById("lblOpcionesSesion").innerHTML = "2. Seleccionar tipo de aporte sucesor";
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
                document.getElementById("lblOpcionesSesion").innerHTML = "2. Seleccionar tipo de aporte sucesor";
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
        document.getElementById("divRedactarAporte").style.display = "none";
        document.getElementById("txtAporteContenido").value = "";
        document.getElementById("divGrabarAporte").style.display = "none";
    }
}

function clickCapturaContenido(pIdTipoAporte) {
    document.getElementById("divBtnAportes").style.display = "none";
    document.getElementById("divRedactarAporte").style.display = "block";
    document.getElementById("divGrabarAporte").style.display = "block";
    document.getElementById("inpIdTipoAporte").value = pIdTipoAporte;
    document.getElementById("lblOpcionesSesion").innerHTML = "3. Redactar aporte sucesor";
    switch (pIdTipoAporte) {
        case 0 : {
            document.getElementById("lblAporteTipo").innerHTML = "Nueva proposición:";
            break;
        }
        case 1 : {
            document.getElementById("lblAporteTipo").innerHTML = "Razón de apoyo:";
            break;
        }
        case 2 : {
            document.getElementById("lblAporteTipo").innerHTML = "Razón de refutación:";
            break;
        }
        case 3 : {
            document.getElementById("lblAporteTipo").innerHTML = "Evidencia:";
            break;
        }
        case 4 : {
            document.getElementById("lblAporteTipo").innerHTML = "Contraevidencia:";
            break;
        }
        case 5 : {
            document.getElementById("lblAporteTipo").innerHTML = "Pregunta:";
            break;
        }
        case 6 : {
            document.getElementById("lblAporteTipo").innerHTML = "Respuesta:";
            break;
        }
        case 7 : {
            document.getElementById("lblAporteTipo").innerHTML = "Pregunta:";
            break;
        }
        case 8 : {
            document.getElementById("lblAporteTipo").innerHTML = "Contraevidencia:";
            break;
        }
        case 9 : {
            document.getElementById("lblAporteTipo").innerHTML = "Evidencia:";
            break;
        }
        case 10 : {
            document.getElementById("lblAporteTipo").innerHTML = "Respuesta:";
            break;
        }
    }
    document.getElementById("txtAporteContenido").focus();
}
