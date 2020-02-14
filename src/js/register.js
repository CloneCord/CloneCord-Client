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

    Auth.register(email,password).then(function (registered) {
        console.log(registered);
    })
}

$(document).ready(function (){
    $("#registerbutton").click(onRegister);
});