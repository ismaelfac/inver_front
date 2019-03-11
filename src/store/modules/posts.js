import posts from "../../../api/posts";

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
  filteredPosts: (state, getters, rootState) => {
    console.log(state.all.find(post => post.id === 1));
  }
};

// actions
const actions = {
  async getAllPosts({ commit }) {
    const _posts = await posts.getPosts();
    commit("SET_POSTS", _posts);
  }
};

// mutations
const mutations = {
  SET_POSTS(state, posts) {
    state.all = posts;
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
