import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'

import {
  uniArrowLeft,
  uniEye,
  uniSave,
} from 'vue-unicons/src/icons'

import vuetify from './plugins/vuetify';

Unicon.add([
  uniArrowLeft,
  uniEye,
  uniSave,
])
Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
