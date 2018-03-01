/**
 * Created by 熊超超 on 2017/8/4.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './global/router'
import store from './global/store'
import './assets/js/iconfont'
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

import Icon from './baseComponents/CcIcon.vue'
Vue.component('CcIcon', Icon)

// 样式
import 'flex.css'
import './assets/css/base.less'

// import vueg from 'vueg'
// import 'vueg/css/transition-min.css'
// Vue.use(vueg, router)

// 国际化相关
const locale = window.localStorage.getItem('lang') || 'zh-cn' // 语言标识
import VueI18n from 'vue-i18n'
import zhCN from './assets/js/i18n/zh-cn'
import enUS from './assets/js/i18n/en-us'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: locale,
  messages: {
    'zh-cn': zhCN.lang,
    'en-us': enUS.lang
  },
  numberFormats: {
    'zh-cn': zhCN.numberFormats,
    'en-us': enUS.numberFormats
  }
})

// 注册一些工具类
import utils from '$js/utils'
Vue.use(utils, i18n)

// 当使用npm run mock 启动的时候 使用mock数据
if (process.env.MOCK) {
  /* eslint-disable */
  require ('../mock')
}

import AirUI from 'airui-vue' // 引入组件库
import 'airui-vue/theme/css/index.css' // 引入样式库
Vue.use(AirUI, {mouseWheel: true})

Vue.config.productionTip = false

new Vue({
  i18n,
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
