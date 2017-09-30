<template>
  <div id="loading" class="f-28 o-h" flex="dir:top main:center cross:center" v-show="loading.show" @scroll.prevent="">
    <div class="loading-box">
      <div class="content p-v-24 p-h-40 a-c o-h" v-html="loading.text"></div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Loading',
    computed: {
      ...mapState(['loading'])
    },
    watch: {
      loading () {
        if (this.loading.show === false) document.body.style.overflow = 'auto'
        else document.body.style.overflow = 'hidden'
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/vars";
  #loading {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10001;
    color: @fullWhite;

    .loading-box{
      max-width: 70%;
      background: rgba(0, 0, 0, .8);
      border-radius: 10px;

      .content {
        min-width: 140px;
      }
    }
  }
</style>
