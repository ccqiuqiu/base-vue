<!--Created by 熊超超(https://github.com/ccqiuqiu) on 2018/1/11.-->
<template>
  <mu-card class="m-20">
    <mu-card-title title="登录" subTitle="请登录系统以使用完成功能"/>
    <mu-card-text>
      <mu-text-field v-model="userName" hintText="请输入用户名" />
      <mu-text-field v-model="passWord" type="password" hintText="请输入密码"/>
      <div flex="cross:center main:justify">
        <span>忘记密码？</span>
        <mu-icon-button @click="login">
          <cc-icon name="login" size="36" color="#ff4081"/>
        </mu-icon-button>
      </div>
    </mu-card-text>
  </mu-card>
</template>

<script>
  import {mapState} from 'vuex'
  import md5 from '$js/md5'

  export default {
    data() {
      return {
        userName: 'cc',
        passWord: '123456'
      }
    },
    computed: {
      ...mapState([])
    },
    methods: {
      login () {
        this.$store.dispatch('login', {userName: this.userName, passWord: md5(this.passWord)})
      }
    }
  }
</script>

