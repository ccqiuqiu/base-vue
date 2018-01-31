<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <air-scroll pullDownRefresh @pullingDown="onPullingDown" ref="scroll" :data="list" mouseWheel>
    <div class="list">
      <mu-card class="m-b-20" v-for="flight in list" :key="flight.id">
        <mu-card-text>
          <c-flight :flight="flight"></c-flight>
        </mu-card-text>
        <mu-card-actions flex="main:right">
          <mu-flat-button label="值机" class="m-l-16">
            <cc-icon name="check-in" size="36" />
          </mu-flat-button>
          <mu-flat-button label="改期" secondary class="m-l-16">
            <cc-icon name="change-date" size="36" />
          </mu-flat-button>
        </mu-card-actions>
      </mu-card>
    </div>
  </air-scroll>
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
        headerBar: {
          title: () => <div><cc-icon name="fly" size="36" />{this.$t('飞行')}</div>,
          leftBtn: null,
          rightBtn: [{text: '删除'}]
        },
        footerBar: {active: '/fly'},
        list: []
      }
    },
    computed: {
      ...mapState({})
    },
    created () {
      this.getFly()
    },
    methods: {
      async getFly () {
        const data = await this.$store.dispatch('getFly')
        if (data) {
          this.list = data.list
        } else {
          this.$refs.scroll.forceUpdate()
        }
      },
      onPullingDown () {
        setTimeout(() => this.getFly(), 2000)
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
