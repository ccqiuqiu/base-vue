<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <transition :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass">
    <keep-alive :exclude="exclude">
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>

<script>
  import vuex from '../vuex'
  import mixin from '$g/mixin'
  import {modulesMap} from '../../../global/store'

  export default {
    mixins: [mixin.router],
    created () {
      const moduleName = 'demo2'
      // 如果modulesMap里面没有此模块名，说明是第一次加载，那么注册vuex的模块
      if (!modulesMap[moduleName]) {
        modulesMap[moduleName] = true
        this.$store.registerModule(moduleName, vuex)
      }
      // 热重载
      if (module.hot) {
        module.hot.accept(['../vuex'], () => {
          this.$store.hotUpdate({
            modules: {[this.moduleName]: vuex.default}
          })
        })
      }
    }
  }
</script>
