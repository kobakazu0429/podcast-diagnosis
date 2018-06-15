import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import router from './router';

Vue.use(Vuex);

Vue.config.productionTip = false;

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    class_a_1: true,
    class_a_2: true,
    class_a_3: true,
    class_a_4: true,
    class_a_5: true,
    class_b_1: true,
    class_b_2: true,
    class_b_3: true,
    class_b_4: true,
    class_b_5: true,
    class_c_1: true,
    class_c_2: true,
    class_c_3: true,
    class_c_4: true,
    class_c_5: true,
    class_e_1: true,
    class_e_2: true,
    class_e_3: true,
    class_e_4: true,
    class_e_5: true,
    class_f_1: true,
    class_f_2: true,
    class_f_3: true,
    class_f_4: true,
    class_f_5: true
  },

  getters: {
    getClassA1(state) {
      return state.class_a_1;
    }
  },

  mutations: {
    updateChecked(state, obj) {
      console.log(obj);
      state[obj.key] = obj.value;
    }
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
