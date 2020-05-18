function clickCapturaMensaje() {
    document.getElementById("divPresentacionChat").style.width = Math.round(window.innerWidth * 0.75)+"px";
    document.getElementById("divCapturaMensaje").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("thSangriaDerecha").style.width = Math.round(window.innerWidth * 0.25)+"px";
    document.getElementById("thSangriaDerecha").className = "tblSangriaDerechaResaltada";
    document.getElementById("btnDesplegarCaptura").style.display = "none";
    document.getElementById("divFormularioMensaje").style.display = "block";
    document.getElementById("mensajeContenido").value='';
    document.getElementById("mensajeContenido").focus();
    document.getElementById("btnDesistirMensaje").style.display = "inline-block";
    document.getElementById("lblSangriaDerecha").innerHTML = "Redactar mensaje";
    document.getElementById("lblSangriaDerecha").style.display = "inline-block";
    alertaMensaje();
}

function restaurarDimensiones() {
    document.getElementById("thSangriaDerecha").style.width = 50+"px";
    document.getElementById("thSangriaDerecha").className = "tblSangriaDerecha";
    document.getElementById("divPresentacionChat").style.width = window.innerWidth+"px";
    document.getElementById("divCapturaMensaje").style.width = 0+"px";
    document.getElementById("btnDesplegarCaptura").style.display = "inline-block";
    document.getElementById("divFormularioMensaje").style.display = "none";
    document.getElementById("lblSangriaDerecha").innerHTML = "";
    document.getElementById("lblSangriaDerecha").style.display = "none";
}

