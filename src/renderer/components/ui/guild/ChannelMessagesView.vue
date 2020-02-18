<template>
    <div id="Messages">
        <span v-for="ms in messageList">{{ms.author}} : {{ms.content}}</span>
    </div>
</template>

<script>
    export default {
        name: "ChannelMessagesView",
        data() {
            return {
                messageList: []
            }
        }
    }
</script>

<style scoped>

</style>