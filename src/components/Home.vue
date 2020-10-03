<template>
  <div id="home">
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-primary">
          <span class="md-title">You can choose one of these tools:</span>
        </md-app-toolbar>

        <md-app-content>
          <Toolbar/>
          
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
import "vue-material/dist/vue-material.css";
import "vue-material/dist/theme/default.css";
import "vue-material/dist/vue-material.js";
import Toolbar from "./Toolbar.vue";

export default {
  name: "app",
  components: {
    Toolbar
  },
  data: () => ({}),
  methods: {
  },
};
</script>
