import "./static/style.css"

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from "./routing"
import App from './components/App.vue'
import showReportDialog, * as Sentry from "@sentry/electron"


const isDevelopment = process.env.NODE_ENV !== 'production';

if (!isDevelopment) {
    Sentry.init({
        dsn: 'https://10404f40381f41b88d7990684b4c748f@sentry.io/3702718',
        release: 'clonecord-client@' + process.env.npm_package_version,
        beforeSend(event) {
            if (event.exception) {
                showReportDialog();
            }
            return event;
        }
    });
}

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({routes});

router.replace("/auth/register");


new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
