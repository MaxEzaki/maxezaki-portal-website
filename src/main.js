import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Spectre from './../node_modules/spectre.css/dist/spectre.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter,faTumblr,faWordpress } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import spectreExp from '../node_modules/spectre.css/dist/spectre-exp.min.css'
// import fontawesome from '../node_modules/fontawesome'

library.add(faFacebook,faTwitter,faTumblr,faWordpress)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
// Vue.use(Spectre);
new Vue({
  router,
  store,
  // spectre,
  render: h => h(App)
}).$mount('#app')
