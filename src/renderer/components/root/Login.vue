<template>
    <div id="Login">
            <p class="title">Veuillez vous connecter à votre compte CloneCord.</p>

            <input placeholder="Votre adresse email" ref="email" required type="email">
            <input placeholder="Mot de passe" ref="password" required type="password">

            <p class="noacc">Vous n'avez pas de compte ?
                <router-link to="register">Inscrivez vous ici</router-link>
                .
            </p>
        <router-link class="forgot" to="forgot">Mot de passe oublié ?</router-link>

            <div class="clearfix">
                <button class="signinbtn" id="loginbutton" type="submit" v-on:click="tryLogIn">Se connecter</button>
            </div>
    </div>
</template>

<script>
    import LeftLogoBar from "../misc/LeftLogoBar";
    import swal from "sweetalert2";
    import easycallback from "../../easycallback";

    import {ApiClient, AuthenticationApi, FormLogin, UsersApi} from "clone_cord_api";

    export default {
        name: "Login",
        components: {LeftLogoBar},
        beforeCreate(){
            document.title = "Connexion"
        },
        methods: {
            tryLogIn() {
                let email = this.$refs.email.value;
                let password = this.$refs.password.value;
                const AuthApi = new AuthenticationApi();

                const loginData = new FormLogin(email, password);

                let callback = easycallback((d, r) => {
                    if (r.statusCode === 403) {
                        swal.fire({
                            icon: "error",
                            heightAuto: false,
                            title: "Error",
                            text: "Wrong email or password"
                        });
                    } else {
                        let jwt = r.headers.authorization.replace("Bearer ", "");
                        let defClient = ApiClient.instance;
                        let token = defClient.authentications['user-auth'];
                        token.apiKey = jwt;
                        token.apiKeyPrefix = "Bearer";
                        let userApi = new UsersApi();
                        userApi.getSelf(easycallback((d) => {
                            this.$router.replace("/ui/user/" + d.id);
                        }));
                    }
                });
                AuthApi.login(loginData, callback);
            }
        }
    }
</script>

<style scoped>
    .noacc {
        padding-top: 5px;
        font-size: 18px;
        color: #9EA0A4;
    }

    .forgot {
        padding-top: 5px;
        font-size: 18px;
    }
</style>