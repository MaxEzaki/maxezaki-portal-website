import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Spectre from './../node_modules/spectre.css/dist/spectre.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook,faTwitter,faTumblr,faWordpress } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook,faTwitter,faTumblr,faWordpress)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
