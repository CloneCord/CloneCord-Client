<template>
    <div id="App">
    <Register></Register>
    </div>
</template>

<script>
    import Register from "./components/Register";
    export default {
        name: "App",
        components: {Register}
    }
</script>

<style scoped>
    @import "css/style.css";
    html, body, #App { height: 100%; }
    body, #App {
        display: flex;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        padding: 0;
        margin: 0;
    }
</style>