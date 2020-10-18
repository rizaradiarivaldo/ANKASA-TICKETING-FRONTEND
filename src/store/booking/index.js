import axios from 'axios'
const { URL } = require('../../helper/index')

const state = () => {
  return {
    // all: {
    //   dataBooking: []
    // }
    dataBooking: []
  }
}

const getters = {
  getBooking (state) {
    return state.dataBooking
  }
}

const mutations = {
  SET_ALL_DATA_BOOKING (state, payload) {
    state.dataBooking = payload
  }
}

const actions = {
  getBooking (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(URL + '/booking/getAll')
        .then((response) => {
          context.commit('SET_ALL_DATA_BOOKING', response.data.data)
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  insert (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(URL + '/booking/insert')
        .then((response) => {
          context.commit('SET_ALL_DATA_BOOKING', response.data.data)
        }).catch((err) => {
          console.log(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
