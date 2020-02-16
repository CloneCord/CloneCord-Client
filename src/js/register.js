const Swal = require('sweetalert2');

function registerCallback(data, status, xhr) {
    console.log(status);
    console.log(data);
    console.log(xhr);
}

function toLogin(p) {
    document.location.href = "./login.html";
}

function onRegister() {

    let username = $("#username");

    let email = $("#email");
    email.get(0).setCustomValidity("");
    if(!email.get(0).checkValidity()){
        email.get(0).reportValidity();
        return;
    }


    let password = $("#password");
    let password_repeat = $("#psw-repeat").val();

    if (password.val() !== password_repeat){
        Swal.fire({
          icon: 'error',
          title: 'Aïe...',
          text: 'Les mots de passe ne correspondent pas !',
          heightAuto: false,
        });
        return;
    }

    let CloneCordApi = require("clone_cord_api");
    let api = new CloneCordApi.AuthenticationApi();
    let reg = new CloneCordApi.RegistrationUser(email.val(),password.val(),username.val());

    let callback = function(error, data, response) {
        if (error) {
            if(response.statusCode === 400){
                console.log(response);
                email.get(0).setCustomValidity("");
                password.get(0).setCustomValidity("");
                username.get(0).setCustomValidity("");
                let errors = response.body.errors;
                errors.forEach(function (err) {
                    let field = $("#" + err.field).get(0);
                    field.setCustomValidity(err.defaultMessage);
                    field.reportValidity();
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Whoops",
                    text: "An error has occured : " + error.toString(),
                    heightAuto: false,
                })
            }
        } else {
            console.log('API called successfully.');
            Swal.fire({
                icon:"success",
                title: "Nice !",
                text: "Inscription réussie",
                heightAuto: false,
                onClose: toLogin,
            })
        }

    };
    api.signUpUsingPOST(reg,callback);
}
