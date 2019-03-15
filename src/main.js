import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { initialize } from "./helpers/general";
import axios from "axios";
import "./scss/style.scss";

const ScrollReveal = require("scrollreveal");

Vue.prototype.$http = axios;

/*Filters*/

const token = localStorage.getItem("token");
if (token) {
	Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
