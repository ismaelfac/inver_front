import api_properties from "../../../api/properties";

// initial state
const state = {
	all: [],
	FindProperties: [],
	filter: {
		query: "",
		available: true
	}
};

// getters
const getters = {
	filteredPosts(state) {
		console.info(api_properties);
		let properties = state.all.find(
			post => post.title === state.filter.query
		);
		if (state.filter.query.length > 2) {
			console.info(properties);
			/*return properties.filter(post =>
        post.title.toLowerCase().includes(state.filter.query)
      );*/
		}
		return properties;
	}
};

// actions
const actions = {
	async getAllProperties({ commit }) {
		const _properties = await api_properties.getPropertiesGeneral(
			properties => commit("SET_PROPERTIES", properties)
		);
	},
	addFavorites({ state, commit }, property) {
		console.info("entro a addFavorites");
	}
};

// mutations
const mutations = {
	SET_PROPERTIES(state, _properties) {
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
