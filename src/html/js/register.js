

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
        console.log("déso");
        return;
    }

    Auth.register(email,password).then(function (registered) {
        console.log(registered);
    })
}

$(document).ready(function (){
    $("#registerbutton").click(onRegister);
});