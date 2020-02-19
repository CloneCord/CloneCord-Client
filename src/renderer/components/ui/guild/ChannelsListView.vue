<template>
    <div class="back" id="ChannelList">
        <ul>
            <li v-bind:id="channel.channelId" v-for="channel in channels">
                <button @click="travel(channel.channelId)">
                    #{{channel.name}}
                </button>
            </li>
            <li>
                <input @keydown.enter="createChannel(newchannelname)" id="channelCreate" type="text" v-model="newchannelname"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import {ChannelsApi,FormChannel} from "clone_cord_api";
    import easycallback from "../../../easycallback";

    export default {
        name: "ChannelsListView",
        props: {
            channels: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {newchannelname: ""}
        }
        ,
        methods: {
            travel(chanId) {
                if(this.$route.fullPath.includes("channel")){
                    this.$router.push("../channel/" + chanId)
                }
                else {
                    this.$router.push(this.$route.fullPath + "/channel/" + chanId)
                }
            },
            createChannel(chanName) {
                const api = new ChannelsApi();
                let guildId = this.$route.params.guildId;
                let channelData = new FormChannel(chanName);
                let calb = easycallback(d => {
                    this.channels.push(d);
                });
                api.createChannel(guildId,channelData,calb)
            }
        }
    }
</script>

<style scoped>
    .back {
        background-color: chartreuse;

    }

    ul {
        margin-top: 10%;
        margin-left: 10%;
    }

    li {
        list-style-position: inside;
        padding-top: 5%;
        padding-bottom: 5%;
    }
    input{
        width: 60%;
    }
</style>