function ubicarUsuario(pNombreUsuario,pPrimeraPersona,pUbicacion,pAccion) {
    if (document.getElementById("btn"+pNombreUsuario) == undefined) {
        var btnUsuario = document.createElement("button");
        btnUsuario.id = "btn"+pNombreUsuario;
        btnUsuario.innerHTML = pNombreUsuario[0].toUpperCase();
        btnUsuario.title = pNombreUsuario;
        if (pPrimeraPersona != undefined) {
            if (pNombreUsuario == pPrimeraPersona) {
                btnUsuario.className = "w3-button w3-circle btnPrimeraPersona";
            }
            else {
                btnUsuario.className = "w3-button w3-circle btnTerceraPersona";
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
            document.getElementById("btn"+pNombreUsuario).className = "w3-button w3-circle btnPrimeraPersonaReserva";
        }
        else {
            document.getElementById("btn"+pNombreUsuario).className = "w3-button w3-circle btnTerceraPersonaReserva";
        }
    }
    else {
        if (pNombreUsuario == pPrimeraPersona) {
            document.getElementById("btn"+pNombreUsuario).className = "w3-button w3-circle btnPrimeraPersona";
        }
        else {
            document.getElementById("btn"+pNombreUsuario).className = "w3-button w3-circle btnTerceraPersona";
        }
    }
}