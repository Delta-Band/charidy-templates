import Vuex from 'vuex';
import Vue from 'vue';
import wizard from './components/wizard/store';
import myCampaigns from './components/my-campaigns/store';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    wizard,
    myCampaigns,
  }
});