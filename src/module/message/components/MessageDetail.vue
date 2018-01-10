<!--Created by 熊超超(https://github.com/ccqiuqiu) on 2018/1/10.-->
<template>
  <div @click="$router.push('test')">
    <p>detaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetaildetail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
    <p>detail</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import mixin from '$g/mixin'

  export default {
    components: {},
    mixins: [mixin.updateBar],
    data() {
      return {
        headerBar: this.$t('消息')
      }
    },
    computed: {
      ...mapState([])
    },
    methods: {}
  }
</script>

<style scoped>
</style>
