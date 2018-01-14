import api from './api'

/**
 * Created by 熊超超 on 2017/8/4.
 */

export default {
  // 此处加namespaced只是让common模块比较特殊一点，
  // 使用者在使用这个模块的actions、mutations的时候能清楚知道正在使用的是common模块
  // 因为此模块的actions是供多处使用的，可能有些方法要由调用者自行处理返回值
  namespaced: true,
  actions: {
    test({state, commit, rootState}, params) {
      return api.test(params)
    }
  }
}
