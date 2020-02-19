<template>
    <div class="msgList" id="Messages">
        <div class="list">
            <p v-for="ms in messageList">{{getName(ms.senderId)}} : {{ms.message}}</p>
        </div>
        <div class="send">
            <input @keydown.enter="sendMessage(messageText)" id="msgBox" type="text" v-model="messageText"/>
        </div>
    </div>
</template>

<script>
    import easycallback from "../../../easycallback";
    import {MessagesApi, FormMessage} from "clone_cord_api";
    export default {
        name: "ChannelMessagesView",
        data() {
            return {
                messageList: [],
                messageText: "",
            }
        },
        watch:{
            "$route.params.channelId": function () {
                const api = new MessagesApi();

                let guildId = this.$route.params.guildId;
                let channelId = this.$route.params.channelId;
                let ops = {};
                let callback = easycallback((d) => {
                    this.messageList = d;
                });

                api.getMessages(guildId, channelId, ops, callback);
            }
        },
        methods: {
            getName(sId) {
                return this.$parent.getNameFromMembers(sId);
            },
            sendMessage(messageText) {
                const api = new MessagesApi();
                let guildId = this.$route.params.guildId;
                let channelId = this.$route.params.channelId;
                let messageData = new FormMessage(messageText);

                let callBack = easycallback(d => {
                    this.messageList.push(d);
                });

                api.sendMessage(guildId, channelId, messageData, callBack);
                this.messageText = "";
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

    input {
        width: 96%;
    }

    p {
        color: antiquewhite;
    }
</style>