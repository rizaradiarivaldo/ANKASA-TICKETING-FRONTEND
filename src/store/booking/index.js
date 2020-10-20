import axios from 'axios'
const { URL } = require('../../helper/index')

const state = () => {
  return {
    dataBooking: [],
    detailBooking: []
  }
}

const getters = {
  getBooking (state) {
    return state.dataBooking
  },
  getDetailBooking (state) {
    return state.detailBooking
  }
}

const mutations = {
  SET_ALL_DATA_BOOKING (state, payload) {
    state.dataBooking = payload
  },
  SET_ALL_DETAIL_BOOKING (state, payload) {
    state.detailBooking = payload
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

  getDetailBooking (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(URL + `/booking/getBookingUser/${payload.idusers}`)
        .then((response) => {
          console.log(response.data.data)
          // context.commit('SET_ALL_DETAIL_BOOKING', response.data.data)
          resolve(response.data.data)
        }).catch((err) => {
          console.log(err)
        })
    })
  },

  insert (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(URL + '/booking/insert/', payload)
        .then((response) => {
          resolve()
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
