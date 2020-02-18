<template>
    <div id="UserList">
        <ul v-for="u in userList">
            <router-link v-bind:to="'../user/' + u.id">{{u.username}}</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UserListView",
        props: {
            userList: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>

</style>