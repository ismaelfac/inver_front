import Vue from "vue";
import Vuex from "vuex";
import cart from "./store/modules/cart";
import products from "./store/modules/products";
import posts from "./store/modules/posts";
import properties from "./store/modules/properties";
import session from "./store/modules/session";
import createLogger from "./plugins/logger";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
	modules: {
		cart,
		products,
		posts,
		properties,
		session
	},
	strict: debug,
	plugins: debug ? [createLogger()] : []
});
