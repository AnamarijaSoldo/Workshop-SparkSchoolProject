import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './api/http';


Vue.config.productionTip = false;

window.http = http;

Vue.use(VueAxios, axios);
// Vue.use(BootrstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
