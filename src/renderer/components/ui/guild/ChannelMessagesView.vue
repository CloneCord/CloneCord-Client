<template>
    <div id="Messages">
        <span v-for="ms in messageList">{{ms.senderId}} : {{ms.message}}</span>
    </div>
</template>

<script>
    import easycallback from "../../../easycallback";

    export default {
        name: "ChannelMessagesView",
        data() {
            return {
                messageList: []
            }
        },
        beforeCreate() {
            const api = new (require("clone_cord_api").MessagesApi)();

            let guildId = this.$route.params.guildId;
            let channelId = this.$route.params.channelId;
            let ops = {};

            let callback = easycallback((d) => {
                this.messageList = d;
            });

            api.getMessagesUsingGET(channelId, guildId, ops, callback);
        }
    }
</script>

<style scoped>

</style>