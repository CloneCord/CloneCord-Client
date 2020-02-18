<template>
    <div id="GuildView">
        <ChannelsListView v-bind:channels="channelList"/>
        <router-view/>
        <UserListView v-bind:userList="userList"/>
    </div>
</template>

<script>
    import ChannelsListView from "./guild/ChannelsListView";
    import UserListView from "./guild/UserListView";
    import easycallback from "../../easycallback";

    export default {
        name: "GuildView",
        components: {UserListView, ChannelsListView},
        data() {
            return {
                channelList: [],
                userList: []
            }
        },
        watch: {
            '$route.params.guildId': function (guildId) {
                const api = new (require("clone_cord_api").GuildsApi)();

                let callBack = easycallback((d) => {
                    this.channelList = d.channels;
                    this.userList = d.members;
                });

                api.getGuildInfoUsingGET(guildId, callBack);
            }
        }
    }
</script>

<style scoped>

</style>