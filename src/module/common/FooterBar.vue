<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div class="footer-bar b-t" v-if="footerBar.show">
    <mu-paper>
      <mu-bottom-nav :value="footerBar.active">
        <mu-bottom-nav-item value="/book" @click.native="click('/book')" :title="$t('预定')">
          <Icon name="book" size="46"/>
        </mu-bottom-nav-item>
        <mu-bottom-nav-item value="/fly" @click.native="click('/fly')" :title="$t('飞行')">
          <Icon name="fly" size="46"/>
        </mu-bottom-nav-item>
        <mu-bottom-nav-item value="/message" @click.native="click('/message')" :title="$t('消息')">
          <mu-badge content="56" circle secondary>
            <Icon name="msg" size="46"/>
          </mu-badge>
        </mu-bottom-nav-item>
        <mu-bottom-nav-item value="/my" @click.native="click('/my')" :title="$t('我的')">
          <Icon name="my" size="46"/>
        </mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {}
    },
    methods: {
      click (path) {
        this.$r.push(path)
      }
    },
    components: {},
    computed: {
      ...mapState(['footerBar'])
    }
  }
</script>

<style scoped>
  .footer-bar{
    padding-top: 1px;
  }
  .footer-bar /deep/ .mu-paper{
    box-shadow: none;
  }

</style>
