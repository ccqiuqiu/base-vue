<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <transition :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass">
    <keep-alive :exclude="exclude">
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>

<script>
  import mixin from '$g/mixin'

  export default {
    mixins: [mixin.router]
  }
</script>
