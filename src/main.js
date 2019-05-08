import Vue from 'vue'
import './plugins/fontawesome'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'

Vue.use(VueLazyload)

new Vue({
  el: '#app',
  render: h => h(App)
})
