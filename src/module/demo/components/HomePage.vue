<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div>
    <p @click="login">先点击登录，下面的接口才有权限</p>

    <p @click="testAsync">异步写法</p>
    <p @click="test">Promise写法</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import mixin from '$g/mixin'
  import md5 from '$js/md5'

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
      async login () {
        const data = await this.$store.dispatch('login', {userName: 'cc', passWord: md5('123456')})
        if (data) {
          this.$alert('登录成功')
        }
      },
      async testAsync () {
        const data = await this.$store.dispatch('testAsync')
        this.$alert(data)
      },
      test () {
        this.$store.dispatch('test').then(data => {
          this.$alert(data)
        }).catch(err => this.$alert(err))
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
