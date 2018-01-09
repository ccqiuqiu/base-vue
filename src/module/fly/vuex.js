import api from './api'

/**
 * Created by 熊超超 on 2017/8/4.
 */

export default {
  state: {},
  mutations: {},
  actions: {
    async getFly ({state, commit, rootState}, params) {
      return await api.getFly()
    }
  },
  getters: {}
}
