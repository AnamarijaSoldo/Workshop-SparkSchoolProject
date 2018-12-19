import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import workshop from './api/workshop';
// import instructor from './api/instructor';
// import student from './api/student';
// import subject from './api/subject';


Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    items: [],
  },
  actions: {
    getWorkshop({ commit }) {
      
    },
  },
  mutations: {

  },
  modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...

    ['bootstrap-vue/nuxt', { css: false }],
  ],
});
