/**
 * Created by 熊超超 on 2017/8/15.
 */
import moment from 'moment'
import store from '$g/store'
let locale = null
let i18n = null
const toast = (message, time = 2000) => {
  store.commit('toast', {message})
  const toastTimer = setTimeout(() => {
    clearTimeout(toastTimer)
    store.commit('hideToast')
  }, time)
}
const alert = (content, title = '提示信息', confirmCb, confirmText = '确定') => {
  store.commit('dialog', {title, content, confirmCb, confirmText, hideCancel: true})
}
const dialog = (content, title = '确认操作', confirmCb, cancelCb, confirmText = '确定', cancelText = '取消') => {
  store.commit('dialog', {title, content, confirmCb, cancelCb, confirmText, cancelText})
}
const isArray = obj => Object.prototype.toString.call(obj) === '[object Array]'

export {
  moment, toast, alert, dialog, isArray, locale, i18n
}

export default {
  install (Vue, $i18n) {
    i18n = $i18n
    locale = i18n.locale
    moment.locale(locale)
    Vue.prototype.$moment = moment
    Vue.prototype.$toast = toast
    Vue.prototype.$alert = alert
    Vue.prototype.$dialog = dialog
    Vue.prototype.$isArray = isArray
    // 混入
    Vue.mixin({
      filters: {}
    })
  }
}
