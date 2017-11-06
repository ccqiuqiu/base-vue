/**
 * Created by 熊超超 on 2017/8/4.
 */
import api from './api'
import {alert} from '$js/utils'

export default {
  state: {
    todos: []
  },
  mutations: {},
  actions: {
    async login ({state, commit, rootState}, params) {
      try {
        return await api.login(params)
      } catch (e) {
        alert(e)
      }
    },
    async testAsync ({state, commit, rootState}, params) {
      try {
        return await api.todos()
      } catch (e) {
        alert(e)
      }
    },
    test ({state, commit, rootState}, params) {
      return api.todos()
        .then(data => {
          return Promise.resolve(data)
        })
        .catch(err => {
          return Promise.reject(err)
        })
    }
  },
  getters: {}
}
