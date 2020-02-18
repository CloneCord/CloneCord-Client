<template>
    <div class="left-logo-bar">
        <img alt="logo" src="@/static/img/CloneCord.png">
        <p>CloneCord</p>
    </div>
</template>

<script>
    export default {
        name: "LeftLogoBar"
    }
</script>

<style scoped>
    .left-logo-bar {
        width: 1100px;
        background-color: #282B33;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        -ms-flex-align: center;
    }

    .left-logo-bar p {
        color: #B0C7F7;
        font-size: 50px;
        cursor: pointer;
        transition: .4s all ease;
    }

    .left-logo-bar p:hover {
        color: rgb(141, 168, 226); /* Je sais pas quelle couleur */
        transition: .4s all ease;
    }

    .left-logo-bar img {
        width: 200px;
        height: 200px;
    }
</style>