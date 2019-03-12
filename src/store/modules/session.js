import { getLocalUser } from "../../../api/auth";

const user = getLocalUser();
// initial state
const state = {
	currentUser: user,
	isLoggedIn: !!user,
	loading: false,
	auth_error: null
};

// getters
const getters = {
	isLoading(state) {
		return state.loading;
	},
	isLoggedIn(state) {
		return state.isLoggedIn;
	},
	auth_error(state) {
		return state.auth_error;
	},
	currentUser(state) {
		return state.currentUser;
	}
};

// actions
const actions = {
	login(context) {
		context.commit("login");
	}
};

// mutations
const mutations = {
	login(state) {
		state.loading = true;
		state.auth_error = null;
	},
	loginSuccess(state, payload) {
		state.auth_error = null;
		state.isLoggedIn = true;
		state.loading = false;
		state.currentUser = Object.assign({}, payload.user, {
			token: payload.access_token
		});
		localStorage.setItem("user", JSON.stringify(state.currentUser));
	},
	loginFailed(state, payload) {
		state.loading = false;
		state.auth_error = payload.error;
	},
	logout(state) {
		localStorage.removeItem("user");
		state.isLoggedIn = false;
		state.currentUser = null;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
