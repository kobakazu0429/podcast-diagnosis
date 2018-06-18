import Vue from 'vue';
import Vuex from 'vuex';

import { state } from './state';

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,

  mutations: {
    updateChecked: (state, obj) => {
      state['class'][obj.dir1][obj.dir2].boolean = obj.value;
    },
    nextPageURL: (state, arr) => {
      state.nextPage[0] = arr[0];
      state.nextPage[1] = arr[1];
    },
    previousPageURL: (state, arr) => {
      state.previousPage[0] = arr[0];
      state.previousPage[1] = arr[1];
    }
  }
});
