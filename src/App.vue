<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div id="app" flex="dir:top">
    <div flex-box="0">
      <header-bar></header-bar>
    </div>
    <div :class="['content-view']" flex-box="1" flex="dir:top">
        <router-view></router-view>
    </div>
    <div flex-box="0">
      <footer-bar></footer-bar>
    </div>
    <cc-loading></cc-loading>
    <mu-toast v-if="toast" :message="toast.message"/>
    <cc-dialog></cc-dialog>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HeaderBar from './modules/common/components/HeaderBar.vue'
  import FooterBar from './modules/common/components/FooterBar.vue'
  import CcLoading from '$bc/CcLoading'
  import CcDialog from '$bc/CcDialog'

  export default {
    data() {
      return {}
    },
    components: { HeaderBar, FooterBar, CcLoading, CcDialog },
    computed: {
      ...mapState(['toast'])
    },
    methods: {}
  }
</script>
<style lang="less">
  @import "./assets/css/animate.css";
</style>
