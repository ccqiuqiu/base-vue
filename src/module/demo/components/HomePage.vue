<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div>
    <p @click="login">先点击这里登录，下面的接口才有权限</p>

    <p v-for="todo in todos">{{todo.title}}</p>

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
        footerBar: {active: '/demo'},
        todos: []
      }
    },
    computed: {
      ...mapState({
        flight: state => state.demo.todos
      })
    },
    created () {
      this.test()
    },
    methods: {
      async login () {
        const {err} = await this.$store.dispatch('login', {userName: 'cc', passWord: md5('123456')})
        if (err) {
          this.$alert(err)
        } else {
          this.$alert('登录成功')
        }
      },
      async test () {
        const {data, err} = await this.$store.dispatch('test')
        if (err) {
          this.$alert(err)
        } else {
          this.todos = data.list
        }
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
