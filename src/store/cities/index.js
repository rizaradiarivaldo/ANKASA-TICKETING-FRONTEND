import axios from 'axios'
const { URL } = require('../../helper/index')

const state = () => {
  return {
    all: {
      data: []
    }
  }
}

const getters = {
  getCities (state) {
    // console.log(state.all)
    return state.all
  }
}

const mutations = {
  SET_ALL_DATA_CITIES (state, payload) {
    state.all.data = payload
  }
}

const actions = {
  getCities (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(URL + '/cities/getAll')
        .then((response) => {
          console.log(response)
          context.commit('SET_ALL_DATA_CITIES', response.data.data)
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
