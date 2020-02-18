<template>
    <div id="App">
        <router-view id="sub"></router-view>
    </div>
</template>

<script>
    import Register from "./root/Register";
    import Login from "./root/Login"

    export default {
        name: "App",
        components: {Register, Login}
    }
</script>

<style scoped>
    #App {
        height: 100%;
    }

    #App {
        padding: 0;
        margin: 0;
    }

    #sub {
        height: 100%;
        display: flex;
    }
</style>