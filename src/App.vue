<template>
  <div id="app">
    <Header></Header>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./views/client/Header.vue";
import Footer from "./views/client/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>
