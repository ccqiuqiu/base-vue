/**
 * Created by 熊超超 on 2017/8/4.
 */
import api from './api'

export default {
  state: {
    todos: []
  },
  mutations: {},
  actions: {
    async testAsync ({state, commit, rootState}, params) {
      try {
        return await api.todos()
      } catch (e) {
        console.log(e)
      }
    },
    test ({state, commit, rootState}, params) {
      return api.todos()
        .then(data => {
          Promise.resolve(data)
        })
        .catch(err => {
          Promise.reject(err)
        })
    }
  },
  getters: {}
}
