<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div class="my">
    <transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
    <mu-list>
      <mu-sub-header>我的常用设置</mu-sub-header>
      <mu-list-item title="常用联系人">
        <cc-icon slot="right" name="right"/>
      </mu-list-item>
      <mu-list-item title="常用乘机人">
        <cc-icon slot="right" name="right"/>
      </mu-list-item>
      <mu-list-item title="常用邮寄地址">
        <cc-icon slot="right" name="right"/>
      </mu-list-item>
    </mu-list>
    <mu-divider/>
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
  import Login from './Login'
  import MyMenu from './MyMenu'

  export default {
    components: {Login, MyMenu},
    mixins: [mixin.updateBar],
    data() {
      return {
        headerBar: {
          title: () => <div>我的</div>,
          rightBtn: 'more'
        },
        footerBar: {active: '/my'},
        push: true,
        sound: false,
        vibrate: true
      }
    },
    computed: {
      ...mapState({
        user: state => state.my.user
      }),
      view() {
        return this.user.id ? MyMenu : Login
      }
    },
    methods: {
      logout() {
        this.$store.commit('logout')
      }
    }
  }
</script>

<style lang="less" scoped>
  .my /deep/ .mu-text-field {
    width: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
