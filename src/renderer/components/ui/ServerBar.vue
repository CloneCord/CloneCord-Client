<template>
    <div id="ServerBar">
        <ul v-bind:id="g.id" v-for="g in guildList">name : {{g.name}}</ul>
    </div>
</template>

<script>
    export default {
        name: "ServerBar",
        props: {
            guildList: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>

</style>