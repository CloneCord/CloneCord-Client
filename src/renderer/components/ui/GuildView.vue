<template>
    <div id="GuildView">
        <ChannelsListView :channelList="channelList()"/>
        <router-view/>
        <UserListView :userList="userList()"/>
    </div>
</template>

<script>
    import ChannelsListView from "./guild/ChannelsListView";
    import UserListView from "./guild/UserListView";

    export default {
        name: "GuildView",
        components: {UserListView, ChannelsListView},
        methods: {
            channelList() {

            },
            userList() {

            }
        }
    }
</script>

<style scoped>

</style>