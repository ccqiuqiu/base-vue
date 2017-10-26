<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div>
    <p @click="testAsync">demo</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import mixin from '$g/mixin'

  export default {
    mixins: [mixin.updateBar],
    data() {
      return {
        headerBar: {title: this.$t('菜单1'), leftBtn: 'back', rightBtn: 'more'},
        footerBar: {active: '/demo'}
      }
    },
    computed: {
      ...mapState({
        flight: state => state.demo.todos
      })
    },
    methods: {
      async testAsync () {
        const data = await this.$store.dispatch('testAsync')
        console.log(data)
      },
      test () {
        this.$store.dispatch('searchFlight').then(data => {
          this.$router.push('/passenger/list')
        })
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
