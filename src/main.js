import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import Mixins from '../src/mixins/titleMixin'

Vue.use(VueSweetalert2)

axios.defaults.headers = { token: localStorage.getItem('token') }
Vue.mixin(Mixins)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
