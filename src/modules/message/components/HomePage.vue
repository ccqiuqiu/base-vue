<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div>
    <air-scroll>
      <mu-list class="list">
        <mu-sub-header>系统消息</mu-sub-header>
        <!--<transition-group name="list-complete">-->
          <mu-list-item :title="message.title" v-for="(message, index) in list" :key="message.id" class="b-b list-complete-item">
            <cc-icon :name="message.img" size="100" slot="leftAvatar"/>
            <div slot="describe" @click="$r.push('/message/detail')">
              <div>{{message.describe}}</div>
              <div>{{message.time}}</div>
            </div>
            <mu-icon-menu slot="right" icon="">
              <cc-icon slot="icon" name="more" size="36" />
              <mu-menu-item title="回复" />
              <mu-menu-item title="标记" />
              <mu-menu-item @click="del(index)" title="删除" />
            </mu-icon-menu>
          </mu-list-item>
        <!--</transition-group>-->
      </mu-list>
    </air-scroll>
    <mu-float-button class="fba" secondary mini @click="add()" >
      <cc-icon name="add" />
    </mu-float-button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import mixin from '$g/mixin'
  import CFlight from '../../common/components/C-Flight'

  export default {
    components: {CFlight},
    mixins: [mixin.updateBar],
    data() {
      return {
        headerBar: {title: this.$t('消息'), leftBtn: null},
        footerBar: {active: '/message'},
        list: []
      }
    },
    computed: {
      ...mapState({})
    },
    created () {
      this.getMessage()
    },
    // mounted() {
    //   this.$nextTick(() => {
    //     this.scroll = new BScroll(this.$refs.wrapper, {})
    //   })
    // },
    methods: {
      async getMessage () {
        const {err, data} = await this.$store.dispatch('getMessage')
        if (err) {
          this.$alert(err.message)
        } else {
          this.list = data.list
        }
      },
      del (index) {
        this.list.splice(index, 1)
      },
      add () {
        const message = this.list[0]
        const newMsg = {...message}
        newMsg.title = newMsg.title + '1'
        newMsg.id = newMsg.id + Math.random()
        this.list.unshift(newMsg)
      }
    }
  }
</script>

<style lang="less" scoped>
  .list /deep/ .mu-item-text{
    max-height: initial !important;
    display: block;
  }

  .list-complete-item {
    transition: all 0.5s;
  }
  .list-complete-leave-active {
    position: absolute;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(-100%);
  }
  .fba{
    z-index: 20;
    position: fixed;
    right: 16px;
    bottom: ~"calc(1rem + 16px)";
  }
</style>
