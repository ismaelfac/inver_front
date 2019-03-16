import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { initialize } from "./helpers/general";
import axios from "axios";
import "./scss/style.scss";

const ScrollReveal = require("scrollreveal");

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
const accessToken = localStorage.getItem("access_token");

if (accessToken) {
	Vue.prototype.$http.defaults.headers.common["Authorization"] = accessToken;
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
