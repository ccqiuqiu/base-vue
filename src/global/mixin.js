/**
 * Created by 熊超超 on 2017/8/4.
 */

export default {
  updateBar: {
    created: function () {
      if (this.headerBar) {
        let headerBar = this.headerBar
        if (typeof headerBar === 'string') {
          headerBar = {title: headerBar}
        }
        this.$store.commit('updateHeaderBar', headerBar)
      }
      let active = this.$route.path
      if (this.footerBar && this.footerBar.active) {
        active = this.footerBar.active
      }
      this.$store.commit('updateFooterBar', {active: active, show: this.footerBar})
    }
  }
}
