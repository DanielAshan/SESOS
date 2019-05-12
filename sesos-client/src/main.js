import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:3000/'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
