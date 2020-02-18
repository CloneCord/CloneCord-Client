<template>
    <div id="UI">
        <ServerBar :guildList="guildList"/>
        <router-view/>
    </div>
</template>

<script>
    import ServerBar from "../ui/ServerBar";
    import easycall from "../../easycall";
    import easycallback from "../../easycallback";

    export default {
        name: "Ui",
        components: {ServerBar},
        data() {
            return {user: {avatar: "", id: 0, username: "..."}, guildList: []}
        },
        beforeCreate() {
            const api = new (require("clone_cord_api").UsersApi)();
            api.getSelfUsingGET(easycallback((d) => {
                this.user = d;
            }));
            api.getSelfGuildsUsingGET(easycallback((d) => {
                this.guildList = d;
            }));
        }
    }
</script>

<style scoped>

</style>