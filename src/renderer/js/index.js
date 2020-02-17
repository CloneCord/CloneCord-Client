const App = httpVueLoader("../App.vue");

const app = new Vue({
    render: h => h(App)
}).$mount("#app");
