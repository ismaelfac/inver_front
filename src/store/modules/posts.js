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
  filteredPosts(state, getters){
    console.log(state.all.filter(post => post.available === state.filter.available))
    const posts = state.all.filter(post => post.available === state.filter.available);
    console.log(`este es el post ${posts}`)
    if(state.filter.query > 2){
      console.log('es > 2')
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