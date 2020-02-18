<template>
    <div id="Auth">
        <LeftLogoBar/>
        <transition mode="out-in" name="fade">
            <router-view class="right" v-bind:key="$route.path"/>
        </transition>
    </div>
</template>

<script>
    import LeftLogoBar from "../misc/LeftLogoBar";

    export default {
        name: "Auth",
        components: {LeftLogoBar}
    }
</script>


<style scoped>
    /*noinspection CssUnusedSymbol*/
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }

    /*noinspection CssUnusedSymbol*/
    .fade-enter /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
        transform: translateX(-10px);
    }

    /*noinspection CssUnusedSymbol*/
    .fade-leave-to {
        opacity: 0;
        transform: translateX(10px);
    }

    .right {
        padding-right: 100px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        -ms-flex-align: center;
    }

    /*noinspection CssUnusedSymbol*/
    .right >>> .title {
        padding-bottom: 30px;
        font-size: 28px;
        color: white;
    }

    .right >>> a {
        text-decoration: none;
        color: dodgerblue;
    }

    .right >>> a:hover {
        color: #B0C7F7; /* Je sais pas non plus */
    }

    .right >>> input {
        width: 300px;
        height: 40px;
        background-color: #282B33;
        border: 0;
        text-align: center;
        font-size: 18px;
        margin-bottom: 20px;
        border-radius: 10px;
    }

    .right >>> input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #B0C7F7;
        opacity: 1; /* Firefox */
    }

    .right >>> input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #B0C7F7;
    }

    .right >>> input::-ms-input-placeholder { /* Microsoft Edge */
        color: #B0C7F7;
    }

    .right >>> input:focus {
        outline: none;
    }

    .right >>> input, select, textarea {
        color: #B0C7F7;
    }

    @media screen and (max-width: 1600px) {
        .right {
            padding: 0;
        }
    }
</style>