/**
 * Created by 熊超超 on 2017/8/4.
 */

export default {
  state: {
    todos: {}
  },
  mutations: {},
  actions: {
    testAsync ({state, commit, rootState}, params) {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(123), 2000)
      })
    }
  },
  getters: {}
}
