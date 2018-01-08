/**
 * Created by 熊超超 on 2017/8/4.
 */

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
  updateBar: {
    created () {
      updateBar(this)
    },
    activated () {
      updateBar(this)
    }
  },
  router: {
    data () {
      return {
        exclude: [],
        changeModule: false
      }
    },
    computed: {
      enterActiveClass () {
        if (this.$route.meta.changeModule || this.changeModule) {
          return ''
        }
        if (this.$route.meta.isBack) {
          return 'animated-fast fadeInLeft'
        } else {
          return 'animated-fast fadeInRight'
        }
      },
      leaveActiveClass () {
        if (this.$route.meta.changeModule || this.changeModule) {
          return ''
        }
        if (this.$route.meta.isBack) {
          return 'animated-fast fadeOutRight'
        } else {
          return 'animated-fast fadeOutLeft'
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      to.meta.changeModule = true
      from.meta.changeModule = true
      next()
    },
    beforeRouteUpdate (to, from, next) {
      to.meta.changeModule = false
      from.meta.changeModule = false
      if (to.meta.isHome) {
        const t = setTimeout(() => {
          this.changeModule = true
          clearTimeout(t)
        }, 500)
      } else {
        this.changeModule = false
      }
      next()
    }
  }
}
