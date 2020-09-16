function onchangeInputUsuario() {
    document.getElementById("btnIngresoUsuario").style.display="inline-block";
}

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    document.getElementById("lblIngresoUsuario").innerHTML=profile.getEmail();
    document.getElementById("inpUsuario").value=profile.getEmail();
    document.getElementById("lblIngresoUsuario").style.display="inline-block";
    document.getElementById("btnIngresoUsuario").style.display="inline-block";
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    document.getElementById("lblIngresoUsuario").innerHTML="Usuario: ";
    document.getElementById("inpUsuario").value="";
    document.getElementById("lblIngresoUsuario").style.display="none";
    document.getElementById("btnIngresoUsuario").style.display="none";
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}
