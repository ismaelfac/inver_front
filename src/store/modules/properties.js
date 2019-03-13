import api_properties from "../../../api/properties";

// initial state
const state = {
	all: [],
	allFind: [],
	filter: {
		query: "",
		available: true
	}
};

// getters
const getters = {
	filteredPosts(state) {
		console.info(api_posts);
		let posts = state.all.find(post => post.title === state.filter.query);
		if (state.filter.query.length > 2) {
			console.info(posts);
			/*return posts.filter(post =>
        post.title.toLowerCase().includes(state.filter.query)
      );*/
		}
		return posts;
	}
};

// actions
const actions = {
	async getAllProperties({ commit }) {
		const _properties = await api_properties.getProperties();
		commit("SET_PROPERTIES", _properties);
	}
};

// mutations
const mutations = {
	SET_PROPERTIES(state, api_properties) {
		state.all = _properties;
	},
	SET_QUERY(state, query) {
		state.filter.query = query;
	},
	SET_AVAILABLE(state) {
		state.filter.available = !state.filter.available;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
