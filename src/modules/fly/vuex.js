import api from './api'

/**
 * Created by 熊超超 on 2017/8/4.
 */

export default {
  state: {},
  mutations: {},
  actions: {
    async getFly ({state, commit, rootState}, params) {
      const config = {
        _loading: '自定义loading'
        // _hideGlobalError: true
      }
      params = {...config, ...params}
      const {data} = await api.getFly(params)
      return data
    }
  },
  getters: {}
}
