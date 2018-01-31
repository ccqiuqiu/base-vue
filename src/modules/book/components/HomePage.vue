<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <air-scroll class="p-16">
    <mu-card class="m-t-20">
      <mu-card-text>
        <div flex="cross:center box:last">
          <div>
            <div flex="cross:center box:first" class="m-b-30">
              <span class="m-l-30 m-r-70">从</span>
              <span class="f-42 b-b p-h-16" @click="selectAirPort('org')">{{orgAirPort.citynameCN}}</span>
            </div>
            <div flex="cross:center box:first">
              <span class="m-l-30 m-r-70">到</span>
              <span class="f-42 b-b p-h-16" @click="selectAirPort('dst')">{{dstAirPort.citynameCN}}</span>
            </div>
          </div>
          <span>
            <cc-icon @click.native="changeAirPort" name="change" size="50" class="m-l-10" />
          </span>
        </div>
      </mu-card-text>
    </mu-card>

    <mu-raised-button class="m-t-40" label="查询机票" secondary fullWidth @click="search">
      <cc-icon name="search" size="36" />
    </mu-raised-button>

    <span>{{aa}}</span>
  </air-scroll>
</template>

<script>
  import {mapState} from 'vuex'
  import mixin from '$g/mixin'

  export default {
    mixins: [mixin.updateBar],
    data() {
      return {
        headerBar: {title: this.$t('预定'), leftBtn: null},
        footerBar: {active: '/book'},
        aa: this.$date.format(new Date(2014, 1, 11), 'dddd')
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
        this.$r.push({path: '/common/citySelect', query: {flg: flg}})
      },
      changeAirPort () {
        this.$store.commit('changeAirPort')
      },
      search () {
        this.$r.push('/book/flightList')
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
