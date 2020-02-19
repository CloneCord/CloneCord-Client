<template>
    <div id="UserData">
        {{user.id}}<br/>
        {{user.username}}
    </div>
</template>

<script>
    import easycall from "../../easycall";
    import easycallback from "../../easycallback";

    export default {
        name: "UserView",
        data() {
            return {
                user: {
                    id: "",
                    avatar: "avatar...",
                    username: "name..."
                }
            }
        },
        beforeCreate() {
            const api = new (require("clone_cord_api").UsersApi)();
            let userId = this.$route.params.userId;
            api.getUserUsingGET(userId, easycallback((d) => {
                this.user = d;
                document.title = this.user.username;
            }));
        }
    }
</script>

<style scoped>

</style>