import axios from 'axios'
import { URL } from '../../helper/index'

const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}
const getters = {
  isLogin (state) {
    if (state.token !== null && state.token !== 'undefined') {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/users/login`, payload)
        .then((result) => {
          localStorage.setItem('token', result.data.data.token)
          localStorage.setItem('idusers', result.data.data.idusers)
          resolve(result.data.data)
        })
        .catch((err) => {
          alert(err)
          reject(err.data.message)
        })
    })
  },
  logout (context) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      resolve('Logout Success')
    })
  },
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/users/register`, payload)
        .then((result) => {
          alert(result.data.message)
          resolve(result.data)
          window.location = '/login'
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
