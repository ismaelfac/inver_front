import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "content",
      component: () =>
        import(/* webpackChunkName: "content" */ "./views/client/Content.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/client/About.vue")
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/auth/Login.vue")
    },
    {
      path: "/panel" /*Panel Routes*/,
      name: "panel",
      component: () =>
        import(/* webpackChunkName: "panel" */ "./views/panelAdmin/panel.vue")
    }
  ]
});
