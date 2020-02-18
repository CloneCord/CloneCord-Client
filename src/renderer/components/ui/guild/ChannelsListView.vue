<template>
    <div id="ChannelList">
        <ul v-bind:id="channel.id" v-for="channel in channelList">
            <router-link v-bind:to="channel.id">
                #{{channel.name}}
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ChannelsListView",
        props: {
            channelList: {
                type: Object,
                default: {}
            }
        }
    }
</script>

<style scoped>

</style>