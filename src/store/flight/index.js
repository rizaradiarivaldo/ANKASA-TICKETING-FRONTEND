import axios from 'axios'
const { URL } = require('../../helper/index')

const state = () => {
  return {
    flight: [],
    detailFlight: []
  }
}

const getters = {
  getFlight (state) {
    return state.flight
  },
  getDetailFlight (state) {
    return state.detailFlight
  }
}

const mutations = {
  SET_DATA_FLIGHT (state, payload) {
    state.flight = payload
  },
  SET_DETAIL_FLIGHT (state, payload) {
    state.detailFlight = payload
  }
}

const actions = {
  getFlight (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(URL + `/flight/getall?fromcity=${payload.fromcity}&tocity=${payload.tocity}&typeflight=${payload.typeflight}&child=${payload.child}&adult=${payload.adult}&classflight=${payload.classflight}&datedeparture=${payload.datedeparture}`)
        .then((response) => {
          context.commit('SET_DATA_FLIGHT', response.data.data)
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  getDetailFlight (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(URL + `/flight/getDetail/${payload}`)
        .then((response) => {
          console.log(response.data.data[0])
          context.commit('SET_DETAIL_FLIGHT', response.data.data[0])
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
