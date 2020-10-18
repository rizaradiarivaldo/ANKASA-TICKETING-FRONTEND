import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../store/auth/index'
import cities from './cities/index'
import flight from './flight/index'
import users from './users/index'
import countries from './countries/index'
import booking from './booking/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    cities,
    flight,
    users,
    countries,
    booking
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
