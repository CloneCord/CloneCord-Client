const Swal = require('sweetalert2');

function registerCallback(data, status, xhr) {
    console.log(status);
    console.log(data);
    console.log(xhr);
}

function onRegister() {
    let email = $("#email").val();

    let password = $("#psw").val();

    let password_repeat = $("#psw-repeat").val();

    if (password !== password_repeat){
        Swal.fire({
          icon: 'error',
          title: 'Aïe...',
          text: 'Les mots de passe ne correspondent pas !',
        })
        return;
    }
    var CloneCordApi = require("clone_cord_api");
    CloneCordApi.basePath = "http://localhost:8080"; //todo set ca au lancement de l'app
    var api = new CloneCordApi.AuthenticationApi();
    var opts = {
        'user': new CloneCordApi.FormLogin() // {FormLogin} Login data
    };

    var callback = function(error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully.');
        }
    };
    api.loginUsingPOST(opts, callback);
}

$(document).ready(function (){
    $("#registerbutton").click(onRegister);
});