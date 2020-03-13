<template>
    <div id="ServerBar">
        <ul>
            <li v-bind:id="g.id" v-for="g in guildList">
                <router-link v-bind:to="getUrl(g)">{{g.name}}</router-link>
            </li>
        </ul>
        <img class="logo" src="../../static/img/CloneCord.png">
        <div class="trait"></div>
        <div class="serv">

        </div>
        <div class="serv">
            
        </div>
        <div class="othercontainer">
            <div class="autre">
                
            </div>
            <div class="autre">
                <div class="plush"></div>
                <div class="plusv"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServerBar",
        props: {
            guildList: {
                type: Array,
                default: []
            }
        }, methods:{
            getUrl(g){
                if(g.channels.length > 0){
                    return "/ui/guild/" + g.id + "/channel/" + g.channels[0].channelId;
                }
                else{
                    return "/ui/guild/" + g.id
                }
            }
        }
    }
</script>

<style scoped>
    .logo {
        height: 90px;
        width: 90px;
    }
    .trait {
        background-color: #282B33;
        width: 70%;
        height: 6px;
        margin-left: 15%;
    }
    .othercontainer {
        margin-top: 0px;
    }
    .autre {
        height: 70px;
        width: 70px;
        background-color: #282B33; /* IMAGE SERVEUR */
        border-radius: 50px;
        margin-top: 15px;
        margin-left: 12px;
    }
    .serv {
        height: 70px;
        width: 70px;
        background-color: red; /* IMAGE SERVEUR */
        border-radius: 50px;
        margin-top: 15px;
        margin-left: 12px;
    }
    .plush {
        width: 30px;
        height: 4px;
        background-color: #22BAEA;
    }
    .plusv {
        width: 4px;
        height: 30px;
        background-color: #22BAEA;
    }
    a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
    }

    /* When you mouse over the navigation links, change their color */
    a:hover {
        color: #f1f1f1;
    }
</style>