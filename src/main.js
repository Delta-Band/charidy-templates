import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import store from './combined-store';
import router from './routes';
import './plugins/donut-chart';

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  VueScrollTo,
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
