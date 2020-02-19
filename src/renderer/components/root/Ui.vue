<template>
    <div id="UI">
        <ServerBar :guildList="guildList" id="serverList"/>
        <router-view id="other"/>
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
            api.getSelf(easycallback((d) => {
                this.user = d;
            }));
            api.getSelfGuilds(easycallback((d) => {
                this.guildList = d;
            }));
        }
    }
</script>

<style scoped>
    #serverList {
        height: 100%; /* Full-height: remove this if you want "auto" height */
        width: 160px; /* Set the width of the sidebar */
        top: 0; /* Stay at the top */
        left: 0;
        background-color: #111; /* Black */
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 20px;
    }

    /* The navigation menu links */
    #other {
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
    }
</style>