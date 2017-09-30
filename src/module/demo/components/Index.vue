<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
    <router-view></router-view>
  </transition>
</template>

<script>
  import vuex from '../vuex'
  import {modulesMap} from '../../../global/store'

  export default {
    created() {
      // 如果modulesMap里面没有此模块名，说明是第一次加载，那么注册vuex的模块
      if (!modulesMap['demo']) {
        modulesMap['demo'] = true
        this.$store.registerModule('demo', vuex)
      }
    }
  }
</script>
