/**
 * Created by 熊超超 on 2017/8/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  headerBar: {},
  footerBar: {
    active: '/demo'
  },
  loading: {
    show: false,
    text: ''
  },
  toast: null,
  dialog: null
}

const getters = {}
const mutations = {
  updateHeaderBar (state, {title, leftBtn = 'back', rightBtn = null}) {
    state.headerBar = {title, leftBtn, rightBtn}
  },
  updateFooterBar (state, {active = '/', show = false}) {
    state.footerBar = {active, show}
  },
  showLoading (state, text = '加载中...') {
    state.loading.show = true
    state.loading.text = text
  },
  hideLoading (state) {
    state.loading.show = false
    state.loading.text = ''
  },
  toast(state, {message}) {
    state.toast = {message}
  },
  hideToast(state) {
    state.toast = null
  },
  dialog(state, dialog) {
    state.dialog = dialog
  },
  closeDialog(state) {
    state.dialog = null
  }
}
const actions = {}

const store = new Vuex.Store({
  strict: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {}
})
export default store
export const modulesMap = {} // 存储异步加载的模块名，为了防止多次加载

// 热重载
// if (module.hot) {
//   module.hot.accept(['./modules/a'], () => {
//     // 获取更新后的模块
//     const newModuleA = require('./modules/a').default
//     // 加载新模块
//     store.hotUpdate({
//       modules: {
//         a: newModuleA
//       }
//     })
//   })
// }
