<template>
    <ServerIcon v-for="server in serverList" :serverData="server"/>
</template>

<script>

    import ServerIcon from "./ServerIcon";
    export default {
        name: "ServerBar",
        components: {ServerIcon},
        props: {
            serverList:{
                type: Array,
                default: ["premier","deuxieme"]
            }
        }
    }
</script>

<style scoped>

</style>