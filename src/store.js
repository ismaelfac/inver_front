import Vue from 'vue'
import Vuex from 'vuex'
import cart from './store/modules/cart'
import products from './store/modules/products'
import posts from './store/modules/posts'
import createLogger from './plugins/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
    cart,
    products,
    posts
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
