function inicializacionVistaCapturarIngreso() {
    document.getElementById("inpUsuario").setAttribute(
        "onchange",
        "onchangeInputUsuario()"
    );
    document.getElementById("imgBtnInicio").style.display="inline-block"
    document.getElementById("lblUbicacion").innerHTML=("Astrid 1.0 | Ingresar");
    document.getElementById("lblIngresoUsuario").style.display="none";
    document.getElementById("btnIngresoUsuario").style.display="none";
}
