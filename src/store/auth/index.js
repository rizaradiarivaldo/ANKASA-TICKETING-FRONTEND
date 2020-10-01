import axios from 'axios'
import { URL } from '../../helper/index'

const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}
const getters = {
  isLogin (state) {
    if (state.token == null) {
      return false
    } else {
      return true
    }
  }
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/users/login`, payload)
        .then((result) => {
          localStorage.setItem('token', result.data.data.token)
          // if (result.data.data.token === undefined || result.data.data.token === null) {
          //   alert('Email or password not available. Please Sign Up first')
          //   localStorage.removeItem('token')
          // } else {
          // }
          window.location = '/'
          resolve(result.data.message)
        })
        .catch(() => {
          alert('Wrong email or password!')
        })
    })
  },
  logout (context) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      resolve()
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
