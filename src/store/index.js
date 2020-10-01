import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../store/auth/index'
import cities from './cities/index'
import flight from './flight/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    cities,
    flight
  }

  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  //   Auth
  // }
})
