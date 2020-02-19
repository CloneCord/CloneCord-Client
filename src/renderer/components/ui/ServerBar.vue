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
    a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
    }

    /* When you mouse over the navigation links, change their color */
    a:hover {
        color: #f1f1f1;
    }
</style>