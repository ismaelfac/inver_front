<template>
  <div id="app">
    <div
      class="text-center alert"
      :class="item.state_message"
      role="alert"
      v-if="message"
      v-for="item in items"
    >
      {{ item.message_user }}
    </div>
    <Header></Header>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Header from "./views/client/Header.vue";
import Footer from "./views/client/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  computed: mapState({
    message: state => state.session.message,
    items: state => state.session.items_message
  })
};
</script>
