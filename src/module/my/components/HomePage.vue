<!--Created by 熊超超 on 2017/8/4.-->
<template>
<div class="my">
  <mu-card class="m-20" v-if="!user.id">
    <mu-card-title title="登录" subTitle="请登录系统以使用完成功能"/>
    <mu-card-text>
      <mu-text-field v-model="userName" hintText="请输入用户名" />
      <mu-text-field v-model="passWord" type="password" hintText="请输入密码"/>
      <div flex="cross:center main:justify">
        <span>忘记密码？</span>
        <mu-icon-button @click="login">
          <Icon name="login" size="36" color="#ff4081"/>
        </mu-icon-button>
      </div>
    </mu-card-text>
  </mu-card>
  <mu-tabs v-else>
    <mu-tab value="" title="订单管理">
      <Icon name="order" size="60" />
    </mu-tab>
    <mu-tab value=""  title="优惠券" >
      <Icon name="coupon" size="60" />
    </mu-tab>
    <mu-tab value="" title="我的收藏">
      <Icon name="favorite" size="60" />
    </mu-tab>
  </mu-tabs>
  <mu-list>
    <mu-sub-header>我的常用设置</mu-sub-header>
    <mu-list-item title="常用联系人">
      <Icon slot="right" name="right" />
    </mu-list-item>
    <mu-list-item title="常用乘机人">
      <Icon slot="right" name="right" />
    </mu-list-item>
    <mu-list-item title="常用邮寄地址">
      <Icon slot="right" name="right" />
    </mu-list-item>
  </mu-list>
  <mu-divider />
  <mu-list>
    <mu-sub-header>设置</mu-sub-header>
    <mu-list-item disableRipple title="通知推送">
      <mu-switch v-model="push" slot="right"/>
    </mu-list-item>
    <mu-list-item disableRipple title="铃声">
      <mu-switch v-model="sound" slot="right"/>
    </mu-list-item>
    <mu-list-item disableRipple title="振动">
      <mu-switch v-model="vibrate" slot="right"/>
    </mu-list-item>
  </mu-list>
  <div class="p-40" v-if="user.id">
    <mu-raised-button label="退出登录" fullWidth @click="logout"></mu-raised-button>
  </div>
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
        headerBar: {title: this.$t('我的'), rightBtn: 'more'},
        footerBar: {active: '/my'},
        push: true,
        sound: false,
        vibrate: true,
        userName: 'cc',
        passWord: '123456'
      }
    },
    computed: {
      ...mapState({
        user: state => state.my.user
      })
    },
    methods: {
      login () {
        this.$store.dispatch('login', {userName: this.userName, passWord: md5(this.passWord)})
      },
      logout () {
        this.$store.commit('logout')
      }
    }
  }
</script>

<style lang="less" scoped>
  .my /deep/ .mu-text-field{
    width: 100%;
  }
</style>
