<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div class="p-16">
    <mu-card class="m-t-20">
      <mu-card-text>
        <div flex="cross:center box:last">
          <div>
            <div flex="cross:center box:first" class="m-b-30">
              <span class="f-24 m-l-30 m-r-70">从</span>
              <span class="f-30 b-b p-h-16" @click="selectAirPort('org')">{{orgAirPort.citynameCN}}</span>
            </div>
            <div flex="cross:center box:first">
              <span class="f-24 m-l-30 m-r-70">到</span>
              <span class="f-30 b-b p-h-16" @click="selectAirPort('dst')">{{dstAirPort.citynameCN}}</span>
            </div>
          </div>
          <Icon @click.native="changeAirPort" name="change" size="50" class="m-l-10" />
        </div>
      </mu-card-text>
    </mu-card>

    <mu-raised-button class="m-t-40" label="查询机票" secondary fullWidth @click="search">
      <Icon name="search" size="36" />
    </mu-raised-button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import mixin from '$g/mixin'

  export default {
    mixins: [mixin.updateBar],
    data() {
      return {
        headerBar: {title: this.$t('预定'), leftBtn: null},
        footerBar: {active: '/book'}
      }
    },
    computed: {
      ...mapState({
        orgAirPort: state => state.book.orgAirPort,
        dstAirPort: state => state.book.dstAirPort
      })
    },
    methods: {
      selectAirPort (flg) {
        this.$router.push({path: 'citySelect', query: {flg}})
      },
      changeAirPort () {
        this.$store.commit('changeAirPort')
      },
      search () {
        this.$router.push('search')
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
