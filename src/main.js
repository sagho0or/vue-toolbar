import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import './registerServiceWorker'
import router from './router'

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
