/**
 * Mocking client-server processing
 */
const _posts = [
  {"id": 1, "title": "apartament 1 ciudadela", "category": "apartament", "available": true,"inventory": 2},
  {"id": 2, "title": "apartement 2 colinas", "category": "apartament", "available": true,"inventory": 10},
  {"id": 3, "title": "apartament 3 ciudad caribe", "category": "apartament", "available": false,"inventory": 5}
]

export default {
  getPosts (cb) {
    setTimeout(() => cb(_posts), 100)
  },

  suscribePosts (posts, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 1000)
  }
}