/**
 * Created by 熊超超 on 2017/8/4.
 */
import {mapState} from 'vuex'
import store from './store'

// 修改headerBar和footerBar的方法
const updateBar = (th) => {
  if (th.headerBar) {
    // let headerBar = th.headerBar
    if (typeof th.headerBar === 'string') {
      th.headerBar = {title: th.headerBar}
    }
  } else {
    th.headerBar = {show: false}
  }
  th.$store.commit('updateHeaderBar', th.headerBar)

  let active = th.$route.path
  if (th.footerBar && th.footerBar.active) {
    active = th.footerBar.active
  }
  th.$store.commit('updateFooterBar', {active: active, show: !!th.footerBar})
}

export default {
  // 修改headerBar和footerBar的mixin
  // 在组件created和activated的时候都要更新
  updateBar: {
    created () {
      // 把sBack和IsHome设为默认值。
      store.commit('changeIsBack', false)
      store.commit('changeIsHome', false)
      updateBar(this)
    },
    activated () {
      // 把sBack和IsHome设为默认值
      store.commit('changeIsBack', false)
      store.commit('changeIsHome', false)
      updateBar(this)
    }
  },
  // 更新路由动画的mixin
  router: {
    data () {
      return {
        exclude: [] // 这里存不缓存的组件的name
      }
    },
    created () {
      // 组件创建后隐藏loading框
      store.commit('hideLoading')
    },
    computed: {
      ...mapState(['isBack', 'isHome']),
      enterActiveClass () {
        // 切换到模块首页的时候的进入动画
        if (this.isHome) {
          return '' // pulse
        }
        // 后退和前进的动画方向相反
        if (this.isBack) {
          return 'animated-fast fadeInLeft'
        } else {
          return 'animated-fast fadeInRight'
        }
      },
      leaveActiveClass () {
        // 切换到模块首页的时候的不要离开动画
        if (this.isHome) {
          return ''
        }
        // 后退和前进的动画方向相反
        if (this.isBack) {
          return 'animated-fast fadeOutRight'
        } else {
          return 'animated-fast fadeOutLeft'
        }
      }
    }
  },
  // 保存滚动位置，后退还原
  scroll: {
    data () {
      return {
        scrollDom: null,
        y: 0
      }
    },
    activated () {
      console.log(this.$route.meta.isBack)
      if (this.$route.meta.isBack) {
        this.scrollDom && setTimeout(() => {
          this.scrollDom.scrollTop = this.y
          this.y = 0
        }, 500)
      }
    },
    deactivated () {
      this.scrollDom = document.querySelector('.content-view').querySelector('div')
      this.y = this.scrollDom.scrollTop
    }
  }
}
