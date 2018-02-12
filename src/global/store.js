/**
 * Created by 熊超超 on 2017/8/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import common from '../modules/common/vuex'

Vue.use(Vuex)

const state = {
  isBack: false,
  isHome: true,
  headerBar: {},
  footerBar: {
    active: '/book'
  },
  loading: {
    count: 0,
    show: false,
    text: ''
  },
  toast: null,
  dialog: null
}

const getters = {}
const mutations = {
  changeIsBack (state, val) {
    state.isBack = val
  },
  changeIsHome (state, val) {
    state.isHome = val
  },
  updateHeaderBar (state, {title, component, leftBtn = 'back', rightBtn = null, show = true}) {
    state.headerBar = {title, component, leftBtn, rightBtn, show}
  },
  updateFooterBar (state, {active = '/book', show = false}) {
    state.footerBar = {active, show}
  },
  showLoading (state, text = '加载中...') {
    state.loading = {
      count: state.loading.count + 1,
      text
    }
  },
  hideLoading (state) {
    state.loading.count = Math.max(state.loading.count - 1, 0)
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

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  strict: debug,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {common}
})

export default store
export const modulesMap = {} // 存储异步加载的模块名，为了防止多次加载

