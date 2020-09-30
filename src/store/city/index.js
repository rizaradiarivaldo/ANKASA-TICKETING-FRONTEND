import axios from 'axios'
const { URL } = require('../../helper/env')
const state = () => {
  return {
    cities: []
    // ,
    // category: [],
    // getdetail: []
  }
}
const getters = {
  allcities: state => state.product
//   ,
//   allcategory: state => state.category,
//   allupdate: state => state.update,
//   detailproduct: state => state.getdetail
}

const mutations = {
  SET_ALL_DATA_CITIES (state, payload) {
    state.product = payload
  }
//   ,
//   GET_ALL_DETAIL_PRODUCT (state, payload) {
//     state.getdetail = payload
//   },
//   SET_ALL_DATA_CATEGORY (state, payload) {
//     state.category = payload
//   }
}

const actions = {
  allcities (context, payload) {
    console.log(URL)
    return new Promise((resolve, reject) => {
      axios.get(URL + '/cities/getall')
        .then((result) => {
          console.log(result)
          context.commit('SET_ALL_DATA_CITIES', result.data.data)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
//   ,
//   sortProductNameA (context, payload) {
//     return new Promise((resolve, reject) => {
//       axios.get(URL + '/foodstall/product/getname?order=asc&sort=name')
//         .then((result) => {
//           context.commit('SET_ALL_DATA_PRODUCT', result.data.data)
//           resolve()
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   },
//   sortProductNameZ (context, payload) {
//     return new Promise((resolve, reject) => {
//       axios.get(URL + '/foodstall/product/getname?order=desc&sort=name')
//         .then((result) => {
//           context.commit('SET_ALL_DATA_PRODUCT', result.data.data)
//           resolve()
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   },
//   sortPriceA (context, payload) {
//     return new Promise((resolve, reject) => {
//       axios.get(URL + '/foodstall/product/getname?sort=price&order=asc')
//         .then((result) => {
//           context.commit('SET_ALL_DATA_PRODUCT', result.data.data)
//           resolve()
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   },
//   sortPriceZ (context, payload) {
//     return new Promise((resolve, reject) => {
//       axios.get(URL + '/foodstall/product/getname?sort=price&order=desc')
//         .then((result) => {
//           context.commit('SET_ALL_DATA_PRODUCT', result.data.data)
//           resolve()
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   },
//   insert (context, payload) {
//     return new Promise((resolve, reject) => {
//       const fd = new FormData()
//       fd.append('name', payload.name)
//       fd.append('id_category', payload.id_category)
//       fd.append('category', payload.category)
//       fd.append('price', payload.price)
//       fd.append('image', payload.image)
//       axios.post(URL + '/foodstall/product/insert', fd)
//         .then((result) => {
//           resolve(result)
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   },
//   update (context, payload) {
//     return new Promise((resolve, reject) => {
//       const fd = new FormData()
//       fd.append('name', payload.oldName)
//       fd.append('category', payload.oldCategory)
//       fd.append('price', payload.oldPrice)
//       fd.append('image', payload.image)
//       axios.put(`${URL}/foodstall/product/update/${payload.oldId}`, fd)
//         .then((result) => {
//           resolve(result)
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   },
//   getcategory (context, payload) {
//     return new Promise((resolve, reject) => {
//       axios.get(URL + '/foodstall/category/getall')
//         .then(result => {
//           context.commit('SET_ALL_DATA_CATEGORY', result.data.data)
//           resolve()
//         })
//         .catch(err => {
//           reject(err)
//         })
//     })
//   },
//   // getdetail (context, payload) {
//   //   return new Promise((resolve, reject) => {
//   //     axios.get(`${URL}/foodstall/product/getdetail/${payload}`)
//   //       .then(result => {
//   //         context.commit('GET_ALL_DETAIL_PRODUCT', result.data.data)
//   //         resolve()
//   //       })
//   //       .catch(err => {
//   //         reject(err)
//   //       })
//   //   })
//   // },
//   deleteData (contex, payload) {
//     return new Promise((resolve, reject) => {
//       if (confirm('Are you sure to delete this data?')) {
//         axios.delete(`${URL}/foodstall/product/delete/${payload}`)
//           .then(result => {
//             resolve(result.data.data)
//           })
//           .catch(err => {
//             reject(err)
//           })
//       } else {
//         // window.location = '/dashboard'
//       }
//     })
//   }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
