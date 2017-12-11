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
    tab-field="countrynameEN"
    key-field="itatCode"
    @on-selected="selected" />
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
        headerBar: {title: this.$t('菜单1'), leftBtn: 'back'},
        data: airPort,
        searchFields: ['itatCode', 'airportnameEN'],
        hots: ['WAW', 'LAX', 'GRU', 'SCL', 'TYO', 'SHA', 'CAN'],
        tabs: [{text: '国内', value: 'CN'}, {text: '国际', value: '!CN'}]
      }
    },
    computed: {
      ...mapState([])
    },
    methods: {
      selected (airPort) {
        this.$alert(airPort.airportnameCN)
      }
    }
  }
</script>

<style scoped>
</style>
