function inicializacionVistaDiagrama(pSesionJson,pDiagramaJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    let pSesion = cadenaJson(pSesionJson);
    let pDiagrama = cadenaJson(pDiagramaJson);
    let botones = [];
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        /*
        Inicialización del encabezado
         */
        document.getElementById("lblUbicacion").innerHTML = pSesion._nombre+" | "+pSesion._diagrama._tipoDiagrama._nombre;
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("divSesion").style.display = "block";

        for (i=0;i<pDiagrama._tipoDiagrama._tiposObjeto.length;i++) {
            botones[botones.length] = document.createElement("button");
            botones[botones.length-1].id = "btnObjeto"+i;
            botones[botones.length-1].innerHTML = pDiagrama._tipoDiagrama._tiposObjeto[i]._nombre;
            botones[botones.length-1].className = "w3-button w3-round btnControl";
            botones[botones.length-1].setAttribute(
                "onclick",
                "inicioCapturaObjeto('"+pDiagrama._tipoDiagrama._tiposObjeto[i]._id+"','"+pDiagrama._tipoDiagrama._tiposObjeto[i]._nombre+"','"+JSON.stringify(pDiagrama._tipoDiagrama._tiposObjeto[i]._tiposPropiedad)+"')"
            );
            document.getElementById("divBtnCapturaObjeto").appendChild(botones[botones.length-1]);
        }

        for (i=0;i<pDiagrama._tipoDiagrama._tiposRelacion.length;i++) {
            botones[botones.length] = document.createElement("button");
            botones[botones.length-1].id = "btnRelacion"+i;
            botones[botones.length-1].innerHTML = pDiagrama._tipoDiagrama._tiposRelacion[i]._nombre;
            botones[botones.length-1].className = "w3-button w3-round btnControl";
            botones[botones.length-1].setAttribute(
                "onclick",
                "capturaRelacion('1','"+pDiagrama._tipoDiagrama._tiposRelacion[i]._id+"','"+pDiagrama._tipoDiagrama._tiposRelacion[i]._nombre+"','"+JSON.stringify(pDiagrama._tipoDiagrama._tiposRelacion[i]._tiposPropiedad)+"')"
            );
            document.getElementById("divBtnCapturaRelacion").appendChild(botones[botones.length-1]);
        }

        clickOcultarOpciones();
        clickPresentarDiagrama();

        document.getElementById("btnDesplegarOpcionesSesion").setAttribute("onclick","clickDesplegarOpciones()");
        document.getElementById("btnAgregarElemento").setAttribute("onclick","clickAgregarElemento()");
        document.getElementById("btnEditarElemento").setAttribute("onclick","clickEditarElemento()");
        document.getElementById("btnEliminarElemento").setAttribute("onclick","clickEliminarElemento()");
        document.getElementById("btnCapturaObjeto").setAttribute("onclick","clickCapturaObjeto()");
        document.getElementById("btnCapturaRelacion").setAttribute("onclick","clickCapturaRelacion()");
        document.getElementById("btnEditarObjeto").setAttribute("onclick","clickEditarObjeto()");
        document.getElementById("btnEditarRelacion").setAttribute("onclick","clickEditarRelacion()");
        document.getElementById("btnEliminarObjeto").setAttribute("onclick","clickEliminarObjeto()");
        document.getElementById("btnEliminarRelacion").setAttribute("onclick","clickEliminarRelacion()");
        document.getElementById("btnOcultarOpcionesSesion").setAttribute("onclick","desistimientoElemento()");
    }
}
