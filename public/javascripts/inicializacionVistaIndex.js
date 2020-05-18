function inicializacionVistaIndex() {
    const urlParametros = new URLSearchParams(window.location.search);
    if (urlParametros.get("nombreUsuario") == undefined) {
        document.getElementById("lblAplicacion").style.display = "none";
        document.getElementById("imgBtnIngresar").style.display = "inline-block";
    } else {
        document.getElementById("lblUbicacion").innerHTML = "Astrid 1.0";
        document.getElementById("lblUsuario").innerHTML = urlParametros.get("nombreUsuario");
        document.getElementById("imgBtnInicio").style.display = "inline-block";
        document.getElementById("imgBtnInstituciones").style.display = "inline-block";
        document.getElementById("imgBtnSesiones").style.display = "inline-block";
        document.getElementById("imgBtnSalir").style.display = "inline-block";
    }
}