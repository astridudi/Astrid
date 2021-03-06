function inicializacionVistaLayout() {
    const urlParametros = new URLSearchParams(window.location.search);
    document.getElementById("urlServidor").innerHTML = "http://34.69.82.100:3000";
    //document.getElementById("urlServidor").innerHTML = "http://localhost:3000";

    if (urlParametros.get("nombreUsuario") == undefined) {
        /*
        Botón para pedir ingreso a la aplicación
         */
        let areaBtnIngresar = document.createElement("area");
        areaBtnIngresar.shape = "rect";
        areaBtnIngresar.coords = "0,0,40,40";
        areaBtnIngresar.href = "/main/ingresar";
        areaBtnIngresar.title = "Ingresar";
        document.getElementById("mapBtnIngresar").appendChild(areaBtnIngresar);
    }
    else {
        /*
        Botón para volver a la raíz de la aplicación
         */
        let areaBtnInicio = document.createElement("area");
        areaBtnInicio.shape = "rect";
        areaBtnInicio.coords = "0,0,40,40";
        areaBtnInicio.href = "#";
        areaBtnInicio.title = "Astrid 1.0";
        document.getElementById("mapBtnInicio").appendChild(areaBtnInicio);
        /*
        Botón para salir de la aplicación
         */
        let areaBtnSalir = document.createElement("area");
        areaBtnSalir.shape = "rect";
        areaBtnSalir.coords = "0,0,40,40";
        areaBtnSalir.href = "/main/ingresar";
        areaBtnSalir.title = "Salir";
        document.getElementById("mapBtnSalir").appendChild(areaBtnSalir);
        /*
        Botón para pedir acceso a la vista de instituciones
         */
        let areaBtnInstituciones = document.createElement("area");
        areaBtnInstituciones.shape = "rect";
        areaBtnInstituciones.coords = "0,0,40,40";
        areaBtnInstituciones.href = "/main/consultarConjuntoInstituciones?nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
        areaBtnInstituciones.title = "Instituciones";
        document.getElementById("mapBtnInstituciones").appendChild(areaBtnInstituciones);
        /*
        Botón para pedir acceso a la vista de casos
         */
        let areaBtnCasos = document.createElement("area");
        areaBtnCasos.shape = "rect";
        areaBtnCasos.coords = "0,0,40,40";
        areaBtnCasos.href = "/main/consultarConjuntoCasos?nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
        areaBtnCasos.title = "Casos";
        document.getElementById("mapBtnCasos").appendChild(areaBtnCasos);
        /*
        Botón para pedir acceso a la vista de sesiones
         */
        let areaBtnSesiones = document.createElement("area");
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
            let areaBtnPlanteamiento = document.createElement("area");
            areaBtnPlanteamiento.id = "areaBtnPlanteamiento";
            areaBtnPlanteamiento.shape = "rect";
            areaBtnPlanteamiento.coords = "0,0,40,40";
            areaBtnPlanteamiento.href = "/main/presentarSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            areaBtnPlanteamiento.title = "Planteamiento";
            document.getElementById("mapBtnPlanteamiento").appendChild(areaBtnPlanteamiento);
            document.getElementById("lblPlanteamiento").href = "/main/presentarSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            /*
            Botón para pedir ingreso al chat
             */
            let areaBtnChat = document.createElement("area");
            areaBtnChat.id = "areaBtnChat";
            areaBtnChat.shape = "rect";
            areaBtnChat.coords = "0,0,40,40";
            areaBtnChat.href = "/main/presentarChatSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            areaBtnChat.title = "Chat";
            document.getElementById("mapBtnChat").appendChild(areaBtnChat);
            document.getElementById("lblChat").href = "/main/presentarChatSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            /*
            Botón para pedir ingreso al diagrama
             */
            let areaBtnDiagrama = document.createElement("area");
            areaBtnDiagrama.id = "areaBtnDiagrama";
            areaBtnDiagrama.shape = "rect";
            areaBtnDiagrama.coords = "0,0,40,40";
            areaBtnDiagrama.href = "/main/presentarDiagramaSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            areaBtnDiagrama.title = "Diagrama";
            document.getElementById("mapBtnDiagrama").appendChild(areaBtnDiagrama);
            document.getElementById("lblDiagrama").href = "/main/presentarDiagramaSesion?idSesion="+urlParametros.get("idSesion")+"&nombreUsuario="+urlParametros.get("nombreUsuario")+"&perfilUsuario="+urlParametros.get("perfilUsuario");
            /*
            Botón para pedir ingreso a la argumentación
             */
            let areaBtnArgumentacion = document.createElement("area");
            areaBtnArgumentacion.id = "areaBtnArgumentacion";
            areaBtnArgumentacion.shape = "rect";
            areaBtnArgumentacion.coords = "0,0,40,40";
            areaBtnArgumentacion.href = "#";
            areaBtnArgumentacion.title = "Argumentación";
            document.getElementById("mapBtnArgumentacion").appendChild(areaBtnArgumentacion);
            document.getElementById("lblArgumentacion").href = "#";
            document.getElementById("btnLlamar").setAttribute("onclick","llamarReunion()");
        }
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
        document.getElementById("lblUsuario").innerHTML = urlParametros.get("nombreUsuario");
        document.getElementById("perfilUsuario").innerHTML = urlParametros.get("perfilUsuario");
    }
}
