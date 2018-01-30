<!--Created by 熊超超 on 2017/12/9.-->
<template>
    <air-index-select
      :data="data"
      :hots="hots"
      text-field="citynameCN"
      sub-text-field="airportnameCN"
      group-field="airportnameEN"
      search-hit="出发地中文/拼音/英文/机场三字码"
      :search-fields="searchFields"
      :tabs="tabs"
      key-field="itatCode"
      @on-selected="selected"/>
</template>

<script>
  import {mapState} from 'vuex'
  import mixin from '$g/mixin'
  import {airPort} from 'airui-vue/res'

  export default {
    mixins: [mixin.updateBar],
    components: {},
    data() {
      return {
        headerBar: '机场选择',
        data: [airPort.filter(item => item.countrynameEN === 'CN'), airPort.filter(item => item.countrynameEN !== 'CN')],
        searchFields: ['itatCode', 'airportnameEN'],
        hots: ['PEK', 'WAW', 'LAX', 'GRU', 'SCL', 'TYO', 'SHA', 'CAN'],
        tabs: ['国内', '国际']
      }
    },
    computed: {
      ...mapState([])
    },
    methods: {
      selected (airPort) {
        this.$store.commit('updateAirPort', {airPort, flg: this.$route.query.flg})
        this.$r.back()
      }
    }
  }
</script>

<style scoped>
</style>
