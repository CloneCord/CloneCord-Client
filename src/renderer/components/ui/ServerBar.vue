<template>
    <div id="ServerBar">
        <ul>
            <li v-bind:id="g.id" v-for="g in guildList">
                <router-link v-bind:to="'/ui/guild/' + g.id">name : {{g.name}}</router-link>
            </li>
        </ul>
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