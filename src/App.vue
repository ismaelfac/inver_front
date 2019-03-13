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
