import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../store/auth/index'
import cities from './cities/index'
import flight from './flight/index'
import users from './users/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    cities,
    flight,
    users
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
