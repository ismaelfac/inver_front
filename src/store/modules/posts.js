import api_posts from "../../../api/posts";

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
  async getAllPosts({ commit }) {
    const _posts = await api_posts.getPosts();
    commit("SET_POSTS", _posts);
  }
};

// mutations
const mutations = {
  SET_POSTS(state, api_posts) {
    state.all = api_posts;
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
