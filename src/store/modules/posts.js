import posts from '../../../api/posts'

// initial state
const state = {
  all: [],
  allFind: [],
  filter: {
    query: '',
    available: true
  }
}
 
// getters
const getters = {
  filteredPosts: (state, getters, rootState) => {
      console.log(state)
  }
}

// actions
const actions = {
  getAllPosts ({ commit }) {
    posts.getPosts(posts => {
      commit('SET_POSTS', posts)
    })
  }
}

// mutations
const mutations = {
  SET_POSTS (state, posts) {
    state.all = posts
  },
  SET_QUERY (state, query) {
    state.filter.query = query;
  },
  SET_AVAILABLE (state) {
    state.filter.available = ! state.filter.available;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}