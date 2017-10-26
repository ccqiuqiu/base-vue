<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div id="app" flex="dir:top">
    <div flex-box="0">
      <header-bar></header-bar>
    </div>
    <div :class="['content-view', footerBar.show ? '' : 'no-footer']" flex-box="1" flex="dir:top">
        <router-view></router-view>
      <loading></loading>
      <mu-toast v-if="toast" :message="toast.message"/>
      <my-dialog></my-dialog>
    </div>
    <div flex-box="0">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HeaderBar from './module/common/HeaderBar.vue'
  import FooterBar from './module/common/FooterBar.vue'
  import Loading from '$bc/Loading'
  import MyDialog from '$bc/MyDialog'

  export default {
    data() {
      return {}
    },
    components: { HeaderBar, FooterBar, Loading, MyDialog },
    computed: {
      ...mapState(['toast', 'footerBar'])
    },
    methods: {}
  }
</script>
<style lang="less">
  @import "./assets/css/animate.css";
</style>
