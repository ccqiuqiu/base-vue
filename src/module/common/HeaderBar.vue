<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div>
    <mu-appbar :title="headerBar.title">
      <template slot="left">
        <mu-icon-button :key="btn.icon" v-for="btn in leftBtn"  @click="btn.handle">
          <icon :name="btn.icon"/>
        </mu-icon-button>
      </template>

      <template slot="right">
        <mu-icon-button :key="btn.icon" v-for="btn in rightBtn"  @click="btn.handle">
          <icon :name="btn.icon"/>
        </mu-icon-button>
      </template>
    </mu-appbar>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {
      createBtns (obj) {
        let re = []
        if (obj) {
          if (obj === 'back') {
            re.push({
              icon: obj,
              handle: () => this.$router.back()
            })
          } else if (obj === 'home') {
            re.push({
              icon: obj,
              handle: () => this.$router.push('/')
            })
          } else if (obj === 'more') {
            re.push({
              icon: obj,
              handle: () => {}
            })
          } else if (this.$isArray(obj)) {
            re.push(...obj)
          } else {
            re.push(obj)
          }
        }
        return re
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

