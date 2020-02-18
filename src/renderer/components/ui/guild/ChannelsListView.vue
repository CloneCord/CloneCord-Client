<template>
    <div id="ChannelList">
        <ul>
            <li v-bind:id="channel.channelId" v-for="channel in channels">
                <button @click="travel(channel.channelId)">
                    #{{channel.name}}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ChannelsListView",
        props: {
            channels: {
                type: Array,
                default: []
            }
        },
        methods: {
            travel(chanId) {
                this.$router.push(this.$route.fullPath + "/channel/" + chanId)
            }
        }
    }
</script>

<style scoped>

</style>