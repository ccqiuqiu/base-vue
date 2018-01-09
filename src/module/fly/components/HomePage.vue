<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div>
    <mu-card class="m-t-20" v-for="flight in list" :key="flight.id">
      <mu-card-text>
        <c-flight :flight="flight"></c-flight>
      </mu-card-text>
      <mu-card-actions flex="main:right">
        <mu-flat-button label="值机" class="m-l-16">
          <Icon name="check-in" size="36" />
        </mu-flat-button>
        <mu-flat-button label="改期" secondary class="m-l-16">
          <Icon name="change-date" size="36" />
        </mu-flat-button>
      </mu-card-actions>
    </mu-card>
  </div>
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
        headerBar: this.$t('飞行'),
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
        const {err, data} = await this.$store.dispatch('getFly')
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
</style>
