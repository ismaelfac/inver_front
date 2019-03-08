import posts from '../../../api/posts'

// initial state
const state = {
  all: [],
  filter: {
    query: '',
    available: true
  }
}
 
// getters
const getters = {
  filteredPosts(state){
    let posts = state.all.filter(post => post.available === state.filter.available);
    if(state.filter.query > 2){
        return posts.filter(post => post.title.toLowerCase().includes(state.filter.query));
    }
    return posts;
  }
}

// actions
const actions = {
  getAllPosts ({ commit }) {
    posts.getPosts(posts => {
      commit('setPosts', posts)
    })
  }
}

// mutations
const mutations = {
  setPosts (state, posts) {
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