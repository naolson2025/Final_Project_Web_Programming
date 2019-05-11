import Vue from 'vue'
import App from './App.vue'
import transactionService from './transactionService'

Vue.prototype.$transactionService = transactionService;

// import VueRouter library and this pp's routes
import VueRouter from 'vue-router'
//import router from './router'

import BootstrapVue from 'bootstrap-vue'

// use the VueRouter
Vue.use(VueRouter);

// config bootstrap
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  //router
}).$mount('#app');
