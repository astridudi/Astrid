module.exports = class Conexion {
    constructor() {
        this._firebaseConfig = {
            apiKey: "AIzaSyAp1R-E6I9FbDSMziZ0BhWQDHqu5bSCh6I",
            authDomain: "pruebabd-5ac0d.firebaseapp.com",
            databaseURL: "https://pruebabd-5ac0d.firebaseio.com",
            projectId: "pruebabd-5ac0d",
            storageBucket: "",
            messagingSenderId: "900848775477",
            appId: "1:900848775477:web:f3ed3f43c78fe8b7"
        };
        this._firebase = require('firebase/app');
        require('firebase/firestore');
        this.iniciar();
    }
    iniciar() {
        try {
            this._firebase.initializeApp(this._firebaseConfig);
        } catch (e) {

        }
    }
}
