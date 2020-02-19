<template>
    <div class="background" id="UserList">
        <ul v-for="u in userList">
            <router-link v-bind:to="'/ui/user/' + u.id">{{u.username}}</router-link>
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
    .background {
        background-color: cadetblue;
    }

    ul {
        margin-top: 10%;
        margin-left: 10%;
    }
</style>