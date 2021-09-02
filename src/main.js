import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

const baseURI = axios.create({
  baseURL: 'https://v3.tissini.app/api/v3/'
});

Vue.prototype.$ = baseURI; 
Vue.prototype.$baseUrl = 'https://v3.tissini.app'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
