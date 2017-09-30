/**
 * Created by 熊超超 on 2017/8/4.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './global/router'
import store from './global/store'
// MuseUI库
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './assets/css/theme.less'
// 下面设置可关闭水波纹动画
// MuseUI.config({
//   disableTouchRipple: true,
//   disableFocusRipple: true
// })
Vue.use(MuseUI)

import 'flex.css'
import './assets/css/base.less'
import Icon from './baseComponents/Icon.vue'
Vue.component('icon', Icon)

const locale = window.localStorage.getItem('lang') || 'zh-cn' // 语言标识
// 国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: locale,
  messages: {
    'zh-cn': require('./assets/js/i18n/zh-cn').default,
    'en-us': require('./assets/js/i18n/en-us').default
  }
})
import utils from '$js/utils'
Vue.use(utils, i18n)

Vue.config.productionTip = false

new Vue({
  i18n,
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
