<template>
  <div id="app">
    <template v-if="app_view">
      <client></client>
    </template>
    <template v-else>
      <panel></panel>
    </template>
  </div>
</template>
<script>
import Client from "./views/client/Home.vue";
import Panel from "./views/panelAdmin/panel.vue";
export default {
  name: "app",
  components: {
    Client,
    Panel
  },
  data() {
    return {
      app_view: true
    };
  }
};
</script>
