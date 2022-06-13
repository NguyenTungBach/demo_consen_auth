import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// let token = localStorage.getItem('token');
// if( token ){
//
//   window.axios = require('axios')
//   window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
// }