<template>
  <div id="app">
    <div v-if="message">
      <ul class="list-group">
        <li
          class="text-center list-group-item list-group-item-info"
          :class=""
          v-for="item in items"
        >
          <b>{{ item.message_user }}</b>
        </li>
      </ul>
    </div>
    <!-- Header -->
    <template v-if="role">
      <header-admin></header-admin>
    </template>
    <template v-else>
      <header-client></header-client>
    </template>
    <!-- Content -->

    <router-view></router-view>

    <!-- Footer -->
    <template v-if="role">
      <footer-admin></footer-admin>
    </template>
    <template v-else>
      <footer-client></footer-client>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
import HeaderClient from "./views/client/Header.vue";
import HeaderAdmin from "./views/panelAdmin/Header.vue";
import FooterClient from "./views/client/Footer.vue";
import FooterAdmin from "./views/panelAdmin/Footer.vue";
export default {
  name: "app",
  components: {
    HeaderClient,
    FooterClient,
    HeaderAdmin,
    FooterAdmin
  },
  computed: mapState({
    role: state => state.session.role,
    message: state => state.session.message,
    items: state => state.session.items_message
  }),
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });
  }
};
</script>
