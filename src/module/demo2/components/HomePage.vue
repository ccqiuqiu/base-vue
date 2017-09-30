<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div>
    <p>demo2</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import mixin from '$g/mixin'

  export default {
    mixins: [mixin.updateBar],
    data() {
      return {
        headerBar: {title: this.$t('菜单2'), leftBtn: 'back'},
        footerBar: {active: '/demo2'}
      }
    },
    computed: {
      ...mapState({})
    },
    methods: {
      // 查询航班
    }
  }
</script>

<style lang="less" scoped>
  div{background-color: aqua;}
</style>
