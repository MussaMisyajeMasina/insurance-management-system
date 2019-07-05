// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import Notifications from 'vue-notification';
import VueSweetalert2 from 'vue-sweetalert2';
import VueNoty from 'vuejs-noty';
import 'vuejs-noty/dist/vuejs-noty.css';


// todo
// cssVars()

Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.use(VueSweetalert2)
Vue.use(VueNoty)
const authData=localStorage.getItem("auth");




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{
    auth:authData ? JSON.parse:{}

  },
  template: '<App/>',

  components: {
    App
  }
})
