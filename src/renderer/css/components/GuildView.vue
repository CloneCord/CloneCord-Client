<template>
    <span>GUILD VIEW {{guildId()}}</span>
</template>

<script>
    export default {
        name: "GuildView",
        computed:{
            guildId(){
                return this.$router.params.id
            }
        }
    }
</script>

<style scoped>

</style>