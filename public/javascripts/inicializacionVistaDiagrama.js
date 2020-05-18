function inicializacionVistaDiagrama(pSesionJson,pDiagramaJson) {
    const urlParametros = new URLSearchParams(window.location.search);
    let pSesion = cadenaJson(pSesionJson);
    let pDiagrama = cadenaJson(pDiagramaJson);
    let botones = [];
    /*
    Inicialización del encabezado
     */
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
    } else {
        document.getElementById("lblUbicacion").innerHTML = pSesion._nombre+" | "+pSesion._diagrama._tipoDiagrama._nombre;
        document.getElementById("lblUsuario").innerHTML = urlParametros.get("nombreUsuario");
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        /*
        Inicialización de la altura máxima de dibujo
         */
        document.getElementById("divPresentacionDiagrama").style.maxHeight = (window.innerHeight - document.getElementById("divPresentacionDiagrama").offsetTop)+"px";
        document.getElementById("divPresentacionDiagrama").style.width = window.innerWidth+"px";
        document.getElementById("divCapturaElemento").style.height = document.getElementById("divPresentacionDiagrama").style.height;
        document.getElementById("divCapturaElemento").style.width = 0+"px";
        document.getElementById("divCapturaElemento").style.display = "inline-block";

        document.getElementById("btnCapturaObjeto").style.display = "none";
        document.getElementById("btnCapturaRelacion").style.display = "none";

        for (i=0;i<pDiagrama._tipoDiagrama._tiposObjeto.length;i++) {
            botones[botones.length] = document.createElement("button");
            botones[botones.length-1].id = "btnObjeto"+i;
            botones[botones.length-1].innerHTML = pDiagrama._tipoDiagrama._tiposObjeto[i]._nombre;
            botones[botones.length-1].className = "w3-button w3-round btnControl";
            botones[botones.length-1].setAttribute(
                "onclick",
                "inicioCapturaObjeto('"+pDiagrama._tipoDiagrama._tiposObjeto[i]._id+"','"+pDiagrama._tipoDiagrama._tiposObjeto[i]._nombre+"','"+JSON.stringify(pDiagrama._tipoDiagrama._tiposObjeto[i]._tiposPropiedad)+"')"
            );
            document.getElementById("divBtnCapturaElemento").appendChild(botones[botones.length-1]);
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
            document.getElementById("divBtnCapturaElemento").appendChild(botones[botones.length-1]);
        }

        document.getElementById("divFormularioObjeto").appendChild(document.getElementById("btnDesistirElemento"));
        document.getElementById("divBtnCapturaElemento").appendChild(document.getElementById("btnDesistirElemento"));

        document.getElementById("btnDesplegarCaptura").setAttribute(
            "onclick",
            "clickCapturaElemento()"
        );
        document.getElementById("btnCapturaObjeto").setAttribute(
            "onclick",
            "clickCapturaObjeto()"
        );
        document.getElementById("btnCapturaRelacion").setAttribute(
            "onclick",
            "clickCapturaRelacion()"
        );
        document.getElementById("btnDesistirElemento").setAttribute(
            "onclick",
            "desistimientoElemento()"
        );
    }
}
