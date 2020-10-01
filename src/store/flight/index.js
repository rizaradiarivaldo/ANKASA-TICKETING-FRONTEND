import axios from 'axios'
const { URL } = require('../../helper/index')

const state = () => {
  return {
    flight: []
  }
}

const getters = {
  getFlight (state) {
    return state.flight
  }
}

const mutations = {
  SET_DATA_FLIGHT (state, payload) {
    state.flight = payload
  }
}

const actions = {
  getFlight (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(URL + '/flight/getall')
        .then((response) => {
          console.log(response)
          // context.commit('SET_DATA_FLIGHT', response.data.data)
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
