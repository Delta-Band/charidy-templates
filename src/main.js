import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import App from './App.vue';
import store from './combined-store';
import router from './routes';

import vuetify from './plugins/vuetify';
Vue.use(Donut);

Vue.config.productionTip = false;

new Vue({
  VueScrollTo,
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
