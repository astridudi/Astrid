function ubicarUsuario(pNombreUsuario,pPrimeraPersona,pModerador,pUbicacion,pAccion) {
    if (document.getElementById("btn"+pNombreUsuario) == undefined) {
        let btnUsuario = document.createElement("button");
        btnUsuario.id = "btn"+pNombreUsuario;
        btnUsuario.innerHTML = pNombreUsuario[0].toUpperCase();
        btnUsuario.title = pNombreUsuario;
        if (pNombreUsuario != pPrimeraPersona) {
            if (pNombreUsuario == pModerador) {
                btnUsuario.title = btnUsuario.title + " - Moderador"
            }
            else {
                btnUsuario.title = btnUsuario.title + " - Integrante del equipo"
            }
        }
        btnUsuario.style.display = "inline-block";
        document.getElementById("thSangriaIzquierda").appendChild(btnUsuario);
    }
    if (pUbicacion != undefined) {
        document.getElementById("lbl"+pUbicacion).innerHTML = "";
        document.getElementById("th"+pUbicacion).appendChild(document.getElementById("btn"+pNombreUsuario));
    }
    if (pAccion != undefined) {
        if (pNombreUsuario == pPrimeraPersona) {
            document.getElementById("btn"+pNombreUsuario).className = "w3-circle btnPrimeraPersonaReserva";
        }
        else {
            document.getElementById("btn"+pNombreUsuario).className = "w3-circle btnTerceraPersonaReserva";
        }
    }
    else {
        if (pNombreUsuario == pPrimeraPersona) {
            document.getElementById("btn"+pNombreUsuario).className = "w3-circle btnPrimeraPersona";
        }
        else {
            if (pNombreUsuario == pModerador) {
                document.getElementById("btn"+pNombreUsuario).className = "w3-circle btnModerador";
            }
            else {
                document.getElementById("btn"+pNombreUsuario).className = "w3-circle btnTerceraPersona";
            }
        }
    }
}

function desplegarOpcionesListadoLayout() {
    document.getElementById("anchoPresentacion").value = Math.round(window.innerWidth * 0.50);
    document.getElementById("anchoEmergente").value = Math.round(window.innerWidth * 0.50);
    document.getElementById("thOcultarOpciones").className = "tblSangriaDerecha";
    document.getElementById("thDesplegarOpciones").style.width = (document.getElementById("anchoEmergente").value - document.getElementById("thOcultarOpciones").offsetWidth - 4)+"px";
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpciones").style.display = "inline-block";
    document.getElementById("btnDesplegarOpciones").style.display = "none";
}

function ocultarOpcionesListadoLayout() {
    document.getElementById("anchoPresentacion").value = window.innerWidth;
    document.getElementById("anchoEmergente").value = 0;
    document.getElementById("thOcultarOpciones").className = "tblSangriaDerechaOculta";
    document.getElementById("thDesplegarOpciones").className = "tblSangriaDerecha";
    document.getElementById("thDesplegarOpciones").style.width = 40+"px";
    document.getElementById("lblOpciones").style.display = "none";
    document.getElementById("btnDesplegarOpciones").style.display = "inline-block";
}

function desplegarOpcionesSesionLayout() {
    document.getElementById("anchoPresentacion").value = Math.round(window.innerWidth * 0.65);
    document.getElementById("anchoEmergente").value = Math.round(window.innerWidth * 0.35);
    document.getElementById("thLlamada").className = "tblSangriaDerecha";
    document.getElementById("thOcultarOpcionesSesion").className = "tblSangriaDerecha";
    document.getElementById("thDesplegarOpcionesSesion").style.width = (document.getElementById("anchoEmergente").value - document.getElementById("thOcultarOpcionesSesion").offsetWidth - document.getElementById("thLlamada").offsetWidth - 4)+"px";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerechaResaltada";
    document.getElementById("lblOpcionesSesion").style.display = "inline-block";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "none";
}

function ocultarOpcionesSesionLayout() {
    document.getElementById("anchoPresentacion").value = window.innerWidth;
    document.getElementById("anchoEmergente").value = 0;
    document.getElementById("thLlamada").className = "tblSangriaDerechaOculta";
    document.getElementById("thOcultarOpcionesSesion").className = "tblSangriaDerechaOculta";
    document.getElementById("thDesplegarOpcionesSesion").className = "tblSangriaDerecha";
    document.getElementById("thDesplegarOpcionesSesion").style.width = 40+"px";
    document.getElementById("lblOpcionesSesion").style.display = "none";
    document.getElementById("btnDesplegarOpcionesSesion").style.display = "inline-block";
}

function removerCaracteresNoAceptados(pCadena) {
    let caracteresNoAceptados = [];
    let caracteresSiAceptados = [];
    let i;
    let j;
    caracteresNoAceptados[caracteresNoAceptados.length] = '"';
    caracteresNoAceptados[caracteresNoAceptados.length] = "'";
    caracteresSiAceptados[caracteresSiAceptados.length] = "_";
    caracteresSiAceptados[caracteresSiAceptados.length] = "_";
    for (i=0; i<caracteresNoAceptados.length; i++) {
        j = pCadena.indexOf(caracteresNoAceptados[i]);
        while (j>-1) {
            pCadena = pCadena.substr(0,j) + caracteresSiAceptados[i] + pCadena.substr(j+1,pCadena.length-j);
            j = pCadena.indexOf(caracteresNoAceptados[i]);
        }
    }
    pCadena = pCadena.replace(/\n|\r/g, ' ');
    return pCadena;
}

function restaurarCaracteresNoAceptados(pCadena) {
    pCadena = pCadena.replace(/&#x27;/g, "'");
    pCadena = pCadena.replace(/&#x3D;/g, "=");
    pCadena = pCadena.replace(/&#x60;/g, "`");
    pCadena = pCadena.replace(/&amp;/g, "&");
    pCadena = pCadena.replace(/&lt;/g, "<");
    pCadena = pCadena.replace(/&gt;/g, ">");
    return pCadena;
}

function signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}
