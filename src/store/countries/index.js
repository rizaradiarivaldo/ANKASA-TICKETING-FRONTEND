import axios from 'axios'
const { URL } = require('../../helper/index')

const state = () => {
  return {
    dataCountry: []
  }
}

const getters = {
  getCountries (state) {
    return state.dataCountry
  }
}

const mutations = {
  SET_ALL_DATA_COUNTRY (state, payload) {
    state.dataCountry = payload
  }
}

const actions = {
  getCountries (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(URL + '/countries/getAll')
        .then((response) => {
          context.commit('SET_ALL_DATA_COUNTRY', response.data.data)
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
