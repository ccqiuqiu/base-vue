<!--Created by 熊超超(https://github.com/ccqiuqiu) on 2018/1/10.-->
<template>
  <div @click="$router.push('/message/test')">
    航班列表
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
        headerBar: this.$t('选择航班')
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
