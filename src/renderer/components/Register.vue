<template>
    <div id="Register">
    <div class="left-container">
        <div class="left">
            <img src="../img/CloneCord.png" alt="logo">
            <p>CloneCord</p>
        </div>
    </div>
    <div class="right-container">
        <div class="right">
            <p class="title">Veuillez vous créer un compte sur CloneCord.</p>
            <input type="text" placeholder="Votre nom d'utilisateur" id="username" required>
            <input type="email" placeholder="Votre adresse email" id="email" required>
            <input type="password" placeholder="Mot de passe" id="password" required>
            <input type="password" placeholder="Confirmation" id="psw-repeat" required>

            <p class="conditions">En créant un compte, vous acceptez les <a href="#">Conditions d'utilisation</a>.</p>
            <p class="already">Déjà un compte ? <a href="/login">Connectez vous ici</a>.</p>

            <div class="clearfix">
                <button type="submit" class="signupbtn" id="registerbutton" onclick="onRegister()">S'inscrire</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>
    @import "../css/register.css";

    #Register{
        height: 100%;
        display: flex;
    }
</style>