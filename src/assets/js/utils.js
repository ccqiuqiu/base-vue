/**
 * Created by 熊超超 on 2017/8/15.
 */
import store from '$g/store'
import routerUtils from '$g/routerUtils'
import dateUtils from './dateUtils'
import c from './constant'

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
const dialogPromise = (content, title = '确认操作', confirmText = '确定', cancelText = '取消') => {
  return new Promise((resolve) => {
    store.commit('dialog', {
      title,
      content,
      confirmCb: () => resolve(true),
      cancelCb: () => resolve(false),
      confirmText,
      cancelText
    })
  })
}

const isArray = obj => Object.prototype.toString.call(obj) === '[object Array]'
const isEmptyObject = (obj = {}) => Object.keys(obj).length <= 0

export default {
  install (Vue, $i18n) {
    i18n = $i18n
    locale = i18n.locale
    dateUtils.config(locale)
    Vue.prototype.$toast = toast
    Vue.prototype.$alert = alert
    Vue.prototype.$dialog = dialog
    Vue.prototype.$dialogPromise = dialogPromise
    Vue.prototype.$isArray = isArray
    Vue.prototype.$isEmptyObject = isEmptyObject
    Vue.prototype.$r = routerUtils
    Vue.prototype.$date = dateUtils
    Vue.prototype.$c = c
    // 混入
    Vue.mixin({
      filters: {}
    })
  }
}
// 此处导出是给js文件使用
export { toast, alert, dialog, isArray, isEmptyObject, locale, i18n, dateUtils as date, c }
