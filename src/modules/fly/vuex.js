import api from './api'
import {alert} from '$js/utils'

/**
 * Created by 熊超超 on 2017/8/4.
 */

export default {
  state: {},
  mutations: {},
  actions: {
    async getFly ({state, commit, rootState}, params) {
      const {err, data} = await api.getFly()
      if (err) {
        alert(err.message)
      }
      return data
    }
  },
  getters: {}
}
