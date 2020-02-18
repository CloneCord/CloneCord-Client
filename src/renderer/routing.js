import Register from "./components/root/Register"
import Login from "./components/root/Login"
import Forgot from "./components/root/Forgot"
import Ui from "./components/root/Ui"
import Auth from "./components/root/Auth"
import GuildView from "./components/ui/GuildView"
import UserView from "./components/ui/UserView"
import ChannelMessagesView from "./components/ui/guild/ChannelMessagesView"

export default [
    {
        path: '/auth', component: Auth,
        children: [
            {path: 'register', component: Register},
            {path: 'login', component: Login},
            {path: 'forgot', component: Forgot},
        ]
    },
    {
        path: '/ui', component: Ui,
        children: [
            {
                path: 'guild/:guildId',
                component: GuildView,
                children: [
                    {
                        path: 'channel/:channelId',
                        component: ChannelMessagesView
                    }
                ]
            },
            {
                path: 'user/:userId',
                component: UserView
            }
        ]
    }
]