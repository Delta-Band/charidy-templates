import Vuex from 'vuex';
import Vue from 'vue';
import wizard from './modules/wizard';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    wizard
  }
});