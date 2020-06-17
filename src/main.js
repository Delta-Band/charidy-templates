import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import {
  uniArrowLeft,
  uniEye,
  uniSave,
} from 'vue-unicons/src/icons'

Unicon.add([
  uniArrowLeft,
  uniEye,
  uniSave,
])
Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
