<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div v-if="headerBar.show" class="header-bar">
    <mu-appbar>
      <template slot="left">
        <mu-icon-button :key="btn.icon" v-for="btn in leftBtn"  @click="handler(btn)">
          <cc-icon :name="btn.icon"/>
        </mu-icon-button>
      </template>
      <component v-bind:is="title" />
      <template slot="right">
        <mu-icon-button :key="btn.icon" v-for="btn in rightBtn"  @click="handler(btn)" v-if="btn.icon">
          <cc-icon :name="btn.icon"/>
        </mu-icon-button>
        <span class="f-26" @click="handler(btn)" v-else>
          {{btn.text}}
        </span>
      </template>
    </mu-appbar>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    components: {},
    data() {
      return {
        title: {
          render: h => {
            if (typeof this.headerBar.title === 'string') {
              return h('span', this.headerBar.title)
            } else {
              return this.headerBar.title()
            }
          }
        }
      }
    },
    methods: {
      createBtns (obj) {
        let re = []
        if (obj) {
          if (obj === 'back') {
            re.push({
              icon: obj,
              handler: () => this.$r.back()
            })
          } else if (obj === 'home') {
            re.push({
              icon: obj,
              handler: () => this.$r.push('/')
            })
          } else if (obj === 'more') {
            re.push({
              icon: obj,
              handler: () => {}
            })
          } else if (this.$isArray(obj)) {
            re.push(...obj)
          } else {
            re.push(obj)
          }
        }
        return re
      },
      handler (btn) {
        btn.handler && btn.handler()
      }
    },
    computed: {
      ...mapState(['headerBar']),
      leftBtn() {
        return this.createBtns(this.headerBar.leftBtn)
      },
      rightBtn() {
        return this.createBtns(this.headerBar.rightBtn)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../assets/css/vars";
  .header-bar /deep/ .right > span:last-child {
    margin-right: 32/@rem;
  }
</style>
