import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import locale from 'iview/dist/locale/ja-JP'
import 'iview/dist/styles/iview.css';

Vue.use(iView, { locale });

new Vue({
  el: '#app',
  render: h => h(App)
})
