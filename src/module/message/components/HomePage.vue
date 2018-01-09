<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <mu-list class="list">
    <mu-sub-header>系统消息</mu-sub-header>
    <mu-list-item :title="message.title" v-for="message in list" :key="message.id" class="b-b">
      <Icon :name="message.img" size="60" slot="leftAvatar"/>
      <div slot="describe">
        <div>{{message.describe}}</div>
        <div>{{message.time}}</div>
      </div>
      <mu-icon-menu slot="right" tooltip="操作" icon="">
        <Icon slot="icon" name="more" size="36" />
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
  </mu-list>
</template>

<script>
  import {mapState} from 'vuex'
  import mixin from '$g/mixin'
  import CFlight from '../../common/C-Flight'

  export default {
    components: {CFlight},
    mixins: [mixin.updateBar],
    data() {
      return {
        headerBar: this.$t('消息'),
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
    methods: {
      async getMessage () {
        const {err, data} = await this.$store.dispatch('getMessage')
        if (err) {
          this.$alert(err)
        } else {
          this.list = data.list
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .list /deep/ .mu-item-text{
    max-height: initial !important;
    display: block;
  }
</style>
