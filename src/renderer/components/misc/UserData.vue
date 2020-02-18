<template>
    <div v-bind:id="'user' + user.id">
        userdata {{user.name}}
    </div>
</template>

<script>
    export default {
        name: "UserData",
        props: {
            user: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>