<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div class="footer-bar" v-if="footerBar.show">
    <mu-paper>
      <mu-bottom-nav :value="footerBar.active">
        <mu-bottom-nav-item value="/demo" @click.native="click('/demo')" :title="$t('菜单1')">
          <mu-badge content="56" circle secondary>
            <icon name="home"/>
          </mu-badge>
        </mu-bottom-nav-item>
        <mu-bottom-nav-item value="/demo2" @click.native="click('/demo2')" :title="$t('菜单2')">
          <icon name="home"/>
        </mu-bottom-nav-item>
        <mu-bottom-nav-item value="/demo3" to="/demo3" :title="$t('菜单3')">
            <icon name="home"/>
        </mu-bottom-nav-item>
        <mu-bottom-nav-item value="/demo4" to="/demo4" :title="$t('菜单4')">
          <icon name="home"/>
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
        this.$router.push(path)
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
</style>
