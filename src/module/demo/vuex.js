/**
 * Created by 熊超超 on 2017/8/4.
 */
import api from './api'
import {i18n} from '$js/utils'

export default {
  state: {
    todos: []
  },
  mutations: {},
  actions: {
    async login ({state, commit, rootState}, params) {
      console.log(i18n.t('菜单1'))
      return await api.login(params)
    },
    async test ({state, commit, rootState}, params) {
      return await api.todos()
    }
  },
  getters: {}
}
