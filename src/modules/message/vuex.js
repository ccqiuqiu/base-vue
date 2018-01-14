import api from '$g/api'

/**
 * Created by 熊超超 on 2017/8/4.
 */

export default {
  state: {},
  mutations: {},
  actions: {
    getMessage ({state, commit, rootState}, params) {
      return api.getMessage()
    }
  },
  getters: {}
}
