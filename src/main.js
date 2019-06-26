import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import spectre from '../node_modules/spectre.css'
import fontawesome from '../node_modules/fontawesome'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
