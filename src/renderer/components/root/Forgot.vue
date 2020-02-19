<template>
    <div id="Forgot">
            <p class="title">Veuillez renseigner l'addresse de votre compte CloneCord.</p>

            <input id="email" placeholder="Votre adresse email" required type="email">

            <p class="noacc">Vous n'avez pas de compte ?
                <router-link to="/register">Inscrivez vous ici</router-link>
                .
            </p>
            <router-link class="goback" to="login">Retour à la connexion</router-link>

            <div class="clearfix">
                <button class="signinbtn" id="loginbutton" type="submit">Envoie</button>
            </div>
    </div>
</template>

<script>
    import LeftLogoBar from "../misc/LeftLogoBar";

    export default {
        name: "Forgot",
        components: {LeftLogoBar},
        beforeCreate(): void {
            document.title = "Récupération de compte"
        },
    }
</script>

<style scoped>
    .noacc {
        padding-top: 5px;
        font-size: 18px;
        color: #9EA0A4;
    }

    .goback {
        padding-top: 5px;
        font-size: 18px;
    }
</style>