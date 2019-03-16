import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
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
        import(/* webpackChunkName: "about" */ "./views/client/About.vue"),
      meta: {
        requiresAuth: true
      }
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
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/auth/Register.vue")
    },
    {
      path: "/panel" /*Panel Routes*/,
      name: "panel",
      component: () =>
        import(/* webpackChunkName: "panel" */ "./views/panelAdmin/Dashboard.vue")
    }
  ]
});

export default router;
