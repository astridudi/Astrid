function inicializacionVistaLayout() {
    const urlParametros = new URLSearchParams(window.location.search);
    document.getElementById("urlServidor").innerHTML = "http://34.69.82.100:3000";
    //document.getElementById("urlServidor").innerHTML = "http://localhost:3000";
    /*
    Botón para volver a la raíz de la aplicación
     */
    var areaBtnInicio = document.createElement("area");
    areaBtnInicio.shape = "rect";
    areaBtnInicio.coords = "0,0,40,40";
    areaBtnInicio.href = "#";
    areaBtnInicio.title = "Astrid 1.0";
    document.getElementById("mapBtnInicio").appendChild(areaBtnInicio);
    /*
    Botón para salir de la aplicación
     */
    var areaBtnSalir = document.createElement("area");
    areaBtnSalir.shape = "rect";
    areaBtnSalir.coords = "0,0,40,40";
    areaBtnSalir.href = "/";
    areaBtnSalir.title = "Salir";
    document.getElementById("mapBtnSalir").appendChild(areaBtnSalir);

    if (urlParametros.get("nombreUsuario") == undefined) {
        /*
        Botón para pedir ingreso a la aplicación
         */
        var areaBtnIngresar = document.createElement("area");
        areaBtnIngresar.shape = "rect";
        areaBtnIngresar.coords = "0,0,40,40";
        areaBtnIngresar.href = "/main/ingresar";
        areaBtnIngresar.title = "Ingresar";
        document.getElementById("mapBtnIngresar").appendChild(areaBtnIngresar);
    }
    else {
        document.getElementById("lblUsuario").innerHTML = urlParametros.get("nombreUsuario");
        /*
        Botón para pedir acceso a la vista de instituciones
         */
        var areaBtnInstituciones = document.createElement("area");
        areaBtnInstituciones.shape = "rect";
        areaBtnInstituciones.coords = "0,0,40,40";
        areaBtnInstituciones.href = "/main/consultarConjuntoInstituciones?nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
        areaBtnInstituciones.title = "Instituciones";
        document.getElementById("mapBtnInstituciones").appendChild(areaBtnInstituciones);

        /*
        Botón para pedir acceso a la vista de casos
         */
        var areaBtnCasos = document.createElement("area");
        areaBtnCasos.shape = "rect";
        areaBtnCasos.coords = "0,0,40,40";
        areaBtnCasos.href = "/main/consultarConjuntoCasos?nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
        areaBtnCasos.title = "Casos";
        document.getElementById("mapBtnCasos").appendChild(areaBtnCasos);

        /*
        Botón para pedir acceso a la vista de sesiones
         */
        var areaBtnSesiones = document.createElement("area");
        areaBtnSesiones.shape = "rect";
        areaBtnSesiones.coords = "0,0,40,40";
        areaBtnSesiones.href = "/main/consultarConjuntoSesiones?nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
        areaBtnSesiones.title = "Sesiones";
        document.getElementById("mapBtnSesiones").appendChild(areaBtnSesiones);

        if (urlParametros.get("idSesion") != undefined) {
            /*
            Inicialización del encabezado de sesión
             */
            document.getElementById("divSesion").style.display = "block";
            /*
            Botón para pedir ingreso al planteamiento
             */
            var areaBtnPlanteamiento = document.createElement("area");
            areaBtnPlanteamiento.id = "areaBtnPlanteamiento";
            areaBtnPlanteamiento.shape = "rect";
            areaBtnPlanteamiento.coords = "0,0,40,40";
            areaBtnPlanteamiento.href = "/main/presentarSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            areaBtnPlanteamiento.title = "Planteamiento";
            document.getElementById("mapBtnPlanteamiento").appendChild(areaBtnPlanteamiento);
            document.getElementById("lblPlanteamiento").href = "/main/presentarSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            /*
            Botón para pedir ingreso al chat
             */
            var areaBtnChat = document.createElement("area");
            areaBtnChat.id = "areaBtnChat";
            areaBtnChat.shape = "rect";
            areaBtnChat.coords = "0,0,40,40";
            areaBtnChat.href = "/main/presentarChatSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            areaBtnChat.title = "Chat";
            document.getElementById("mapBtnChat").appendChild(areaBtnChat);
            document.getElementById("lblChat").href = "/main/presentarChatSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            /*
            Botón para pedir ingreso al diagrama
             */
            var areaBtnDiagrama = document.createElement("area");
            areaBtnDiagrama.id = "areaBtnDiagrama";
            areaBtnDiagrama.shape = "rect";
            areaBtnDiagrama.coords = "0,0,40,40";
            areaBtnDiagrama.href = "/main/presentarDiagramaSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            areaBtnDiagrama.title = "Diagrama";
            document.getElementById("mapBtnDiagrama").appendChild(areaBtnDiagrama);
            document.getElementById("lblDiagrama").href = "/main/presentarDiagramaSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario");
            /*
            Botón para pedir ingreso a la argumentación
             */
            var areaBtnArgumentacion = document.createElement("area");
            areaBtnArgumentacion.id = "areaBtnArgumentacion";
            areaBtnArgumentacion.shape = "rect";
            areaBtnArgumentacion.coords = "0,0,40,40";
            areaBtnArgumentacion.href = "#";
            areaBtnArgumentacion.title = "Argumentación";
            document.getElementById("mapBtnArgumentacion").appendChild(areaBtnArgumentacion);
            document.getElementById("lblArgumentacion").href = "#";

            document.getElementById("btnLlamar").setAttribute(
                "onclick",
                "llamarReunion()"
            );
        }
    }
}
