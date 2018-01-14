import api from '$g/api'
import {alert} from '$js/utils'

/**
 * Created by 熊超超 on 2017/8/4.
 */

export default {
  state: {
    user: {}
  },
  mutations: {
    updateUser (state, user) {
      state.user = user
    },
    logout (state) {
      state.user = {}
    }
  },
  actions: {
    async login ({state, commit, rootState}, params) {
      const {err, data} = await api.login(params)
      if (err) {
        alert(err.message)
      } else {
        commit('updateUser', data.user)
      }
    }
  },
  getters: {}
}
