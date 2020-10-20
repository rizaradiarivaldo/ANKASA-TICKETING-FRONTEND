import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import cities from './cities'
import flight from './flight'
import users from './users'
import countries from './countries'
import booking from './booking'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
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
