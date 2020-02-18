<template>
    <div id="Register">
            <p class="title">Veuillez vous créer un compte sur CloneCord.</p>
            <input id="username" placeholder="Votre nom d'utilisateur" ref="username" required type="text">
            <input id="email" placeholder="Votre adresse email" ref="email" required type="email">
            <input id="password" placeholder="Mot de passe" ref="password" required type="password">
            <input id="psw-repeat" placeholder="Confirmation" ref="password_repeat" required type="password">

            <p class="conditions">En créant un compte, vous acceptez les <a href="#">Conditions d'utilisation</a>.</p>
            <p class="already">Déjà un compte ?
                <router-link to="login">Connectez vous ici</router-link>
                .
            </p>

            <div class="clearfix">
                <button class="signupbtn" id="registerbutton" type="submit" v-on:click="onRegister()">S'inscrire
                </button>
            </div>
    </div>
</template>

<script>
    import LeftLogoBar from "../misc/LeftLogoBar";
    import Swal from "sweetalert2";
    import easycallback from "../../easycallback";

    export default {
        name: "Register",
        components: {LeftLogoBar},
        methods: {
            onRegister() {
                //Get objects
                let email = this.$refs.email;
                let username = this.$refs.username;
                let password = this.$refs.password;
                let password_repeat = this.$refs.password_repeat;
                //clear error messages
                email.setCustomValidity("");

                password.setCustomValidity("");
                password_repeat.setCustomValidity("");
                username.setCustomValidity("");

                if (!email.checkValidity()) {
                    email.reportValidity(); //force email validation
                    return;
                }

                if (password.value !== password_repeat.value) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Aïe...',
                        text: 'Les mots de passe ne correspondent pas !',
                        heightAuto: false,
                    });
                    return;
                }
                const CloneCordApi = require("clone_cord_api");
                let api = new CloneCordApi.AuthenticationApi();
                let reg = new CloneCordApi.RegistrationUser(email.value, password.value, username.value);
                let main = this;
                let callback = function (data, response) {
                    if (response.statusCode === 400) {
                        console.log(response);
                        let errors = response.body.errors;
                        errors.forEach(function (err) {
                            let field = main.$refs[err.field];
                            field.setCustomValidity(err.defaultMessage);
                            field.reportValidity();
                        });
                    } else {
                        console.log('API called successfully.');
                        Swal.fire({
                            icon: "success",
                            title: "Nice !",
                            text: "Inscription réussie",
                            heightAuto: false,
                            onClose: main.toLogin(),
                        })
                    }
                };
                api.signUpUsingPOST(reg, easycallback(callback));
            },
            toLogin() {
                this.$router.replace("/login")
            }
        }
    }
</script>

<style scoped>
    .conditions {
        padding-top: 10px;
        font-size: 18px;
        color: #9EA0A4;
    }

    .already {
        padding-top: 5px;
        font-size: 18px;
        color: #9EA0A4;
    }

</style>