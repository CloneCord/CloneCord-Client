import "./static/style.css"

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routing"
import App from './components/App.vue'

Vue.use(VueRouter);

const router = new VueRouter({routes});

router.replace("/register");


new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
