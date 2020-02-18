<template>
    <div id="Login">
        <LeftLogoBar/>
        <div class="right">
            <p class="title">Veuillez vous connecter à votre compte CloneCord.</p>

            <input id="username" placeholder="Votre nom d'utilisateur" required type="text">
            <input id="email" placeholder="Votre adresse email" required type="email">
            <input id="psw" placeholder="Mot de passe" required type="password">

            <p class="noacc">Vous n'avez pas de compte ?
                <router-link to="/register">Inscrivez vous ici</router-link>
                .
            </p>
            <router-link class="forgot" to="/forgot">Mot de passe oublié ?</router-link>

            <div class="clearfix">
                <button class="signinbtn" id="loginbutton" type="submit">Se connecter</button>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftLogoBar from "../misc/LeftLogoBar";

    export default {
        name: "Login",
        components: {LeftLogoBar}
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