<template>
    <div class="msgList" id="Messages">
        <div class="list">
            <p v-for="ms in messageList">{{getName(ms.senderId)}} : {{ms.message}}</p>
        </div>
        <div class="send">
            <input type="text" id="msgBox"/>
            <button>Send</button>
        </div>
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
        watch:{
            "$route.params.channelId": function () {
                const api = new (require("clone_cord_api").MessagesApi)();

                let guildId = this.$route.params.guildId;
                let channelId = this.$route.params.channelId;
                let ops = {};
                let callback = easycallback((d) => {
                    this.messageList = d;
                });

                api.getMessages(guildId, channelId, ops, callback);
            }
        },
        methods:{
            getName(sId){
                return this.$parent.getNameFromMembers(sId);
            }
        }
    }
</script>

<style scoped>
    .list {
        margin-top: 1%;
        width: 98.5%;
        margin-left: 1%;
        height: 90%;
        overflow-y: scroll;
    }

    .msgList {
        background-color: blueviolet;
    }

    .send{
        margin-left: 1%;
        width: 100%;
    }

    input{
        width: 80%;
    }

    p {
        color: antiquewhite;
    }
</style>