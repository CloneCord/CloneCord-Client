const Swal = require('sweetalert2');

function registerCallback(data, status, xhr) {
    console.log(status);
    console.log(data);
    console.log(xhr);
}

function onRegister() {
    iziToast.show({
        title:"oui"
    });

    let username = $("#username").val();

    let email = $("#email").val();

    let password = $("#psw").val();

    let password_repeat = $("#psw-repeat").val();

    if (password !== password_repeat){
        Swal.fire({
          icon: 'error',
          title: 'Aïe...',
          text: 'Les mots de passe ne correspondent pas !',
        });
        return;
    }
    let CloneCordApi = require("clone_cord_api");
    let api = new CloneCordApi.AuthenticationApi();
    let reg = new CloneCordApi.RegistrationUser(email,password,username);

    let callback = function(error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully.');

        }
        console.log(data);
        console.log(response)
    };
    api.signUpUsingPOST(reg,callback);
}

$(document).ready(function (){
    $("#registerbutton").click(onRegister);
});