import axios from 'axios'
const { URL } = require('../../helper/index')

const state = () => {
  return {
    dataUser: []
  }
}

const getters = {
  getUser (state) {
    return state.dataUser
  }
}

const mutations = {
  SET_DATA_USER (state, payload) {
    state.dataUser = payload
  }
}

const actions = {
  getUser (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(URL + `/users/getDetail/${localStorage.getItem('idusers')}}`)
        .then((response) => {
          console.log(response.data.data)
          context.commit('SET_DATA_USER', response.data.data)
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
