function clickDesplegarOpciones() {
    desplegarOpcionesSesionLayout();
    document.getElementById("divPresentacionArgumentacion").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaAporte").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("lblOpcionesSesion").innerHTML = "1. Seleccionar aporte predecesor";
    document.getElementById("divFormularioAporte").style.display = "inline-block";
    // Notificación a usuarios
    alertaAporte();
}

function clickOcultarOpciones() {
    ocultarOpcionesSesionLayout();
    document.getElementById("divPresentacionArgumentacion").style.width = document.getElementById("anchoPresentacion").value+"px";
    document.getElementById("divCapturaAporte").style.width = document.getElementById("anchoEmergente").value+"px";
    document.getElementById("divPresentacionArgumentacion").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionArgumentacion").offsetTop)+"px";
    document.getElementById("divCapturaAporte").style.height = document.getElementById("divPresentacionArgumentacion").style.height;
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

function clickPresentarArgumentacion() {
    document.getElementById("imgBtnPlanteamiento").style.display = "inline-block";
    document.getElementById("imgBtnChat").style.display = "inline-block";
    document.getElementById("imgBtnDiagrama").style.display = "inline-block";
    document.getElementById("imgBtnArgumentacion").style.display = "none";
    document.getElementById("imgBtnPlanteamientoActiva").style.display = "none";
    document.getElementById("imgBtnChatActiva").style.display = "none";
    document.getElementById("imgBtnDiagramaActiva").style.display = "none";
    document.getElementById("imgBtnArgumentacionActiva").style.display = "inline-block";
    //document.getElementById("thPlanteamiento").className = "w3-round tblMenuSesionVisible";
    document.getElementById("thPlanteamiento").className = "w3-round tblMenuSesionOculta";
    document.getElementById("thChat").className = "w3-round tblMenuSesionVisible";
    document.getElementById("thDiagrama").className = "w3-round tblMenuSesionVisible";
    document.getElementById("thArgumentacion").className = "w3-round tblMenuSesionActiva";
    document.getElementById("btnLlamar").title = "Llamar a argumentación";
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
                document.getElementById("divRedactarAporte").style.display = "none";
                document.getElementById("txtAporteContenido").value = "";
                document.getElementById("divGrabarAporte").style.display = "none";
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
                document.getElementById("divRedactarAporte").style.display = "none";
                document.getElementById("txtAporteContenido").value = "";
                document.getElementById("divGrabarAporte").style.display = "none";
                break;
            }
            case "2" : {
                document.getElementById("lblOpcionesSesion").innerHTML = "2. Seleccionar tipo de aporte sucesor";
                document.getElementById("thEvidencia").style.display = "inline-block";
                document.getElementById("thPregunta").style.display = "inline-block";
                document.getElementById("divBtnAportes").style.display = "inline-block";
                document.getElementById("imgBtnEvidencia").setAttribute(
                    "onclick",
                    "clickCapturaContenido(7)"
                );
                document.getElementById("imgBtnPregunta").setAttribute(
                    "onclick",
                    "clickCapturaContenido(9)"
                );
                document.getElementById("divRedactarAporte").style.display = "none";
                document.getElementById("txtAporteContenido").value = "";
                document.getElementById("divGrabarAporte").style.display = "none";
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
            document.getElementById("lblAporteTipo").innerHTML = "Evidencia:";
            break;
        }
        case 8 : {
            document.getElementById("lblAporteTipo").innerHTML = "Contraevidencia:";
            break;
        }
        case 9 : {
            document.getElementById("lblAporteTipo").innerHTML = "Pregunta:";
            break;
        }
        case 10 : {
            document.getElementById("lblAporteTipo").innerHTML = "Respuesta:";
            break;
        }
    }
    document.getElementById("txtAporteContenido").focus();
}
