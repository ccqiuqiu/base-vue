/**
 * Created by 熊超超 on 2017/8/4.
 */
import api from './api'
// import {alert} from '$js/utils'

export default {
  state: {
    todos: []
  },
  mutations: {},
  actions: {
    async login ({state, commit, rootState}, params) {
      return await api.login(params)
    },
    async test ({state, commit, rootState}, params) {
      return await api.todos()
    }
  },
  getters: {}
}
