import Vuex from 'vuex';
import Vue from 'vue';
import myCampaigns from './pages/my-campaigns/store';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    myCampaigns,
  }
});