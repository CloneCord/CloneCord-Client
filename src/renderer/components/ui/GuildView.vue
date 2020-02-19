<template>
    <div id="GuildView">
        <ChannelsListView id="channelList" v-bind:channels="guild.channels"/>
        <router-view id="currentChannel"/>
        <UserListView id="userList" v-bind:userList="guild.members"/>
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
                guild: {}
            }
        },
        watch: {
            '$route.params.guildId': function (guildId) {
                const api = new (require("clone_cord_api").GuildsApi)();

                let callBack = easycallback((d) => {
                    this.guild = d;
                    document.title = d.name;
                });

                api.getGuildInfoUsingGET(guildId, callBack);
            },
            "$route.params.channelId": function (chId) {
                if (chId !== undefined) {
                    document.title = this.guild.name + " - " + this.guild.channels.filter(c => {
                        return c.channelId === chId;
                    })[0].name;
                }
            }
        }
    }
</script>

<style scoped>
    #userList {
        width: 10%;
        right: 0;
        float: right;
        height: 100%;
    }

    #currentChannel {
        float: left;
        height: 100%;
        width: 80%;
    }

    #channelList {
        width: 10%;
        left: 0;
        float: left;
        height: 100%;
    }
</style>