<!--Created by 熊超超 on 2017/8/8.-->
<template>
  <div class="my-input" :class="{paddingRight: icon}">
    <mu-text-field v-if="inputType === 'text'" v-bind="$attrs" v-model="mValue" :class='{fullWidth: fullWidth}'></mu-text-field>
    <mu-date-picker v-if="inputType === 'date'" v-bind="$attrs" v-model="mValue" :class='{fullWidth: fullWidth}'/>
    <div class="right">
      <icon :name="icon"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    props: {
      fullWidth: {
        type: Boolean,
        default: false
      },
      inputType: {
        type: String,
        default: 'text'
      },
      icon: {},
      value: {}
    },
    data() {
      return {
        mValue: this.value
      }
    },
    watch: {
      mValue(newVal) {
        this.$emit('input', newVal)
      }
    },
    methods: {},
    components: {},
    computed: {
      ...mapState([])
    }
  }
</script>

<style lang="less">
  .my-input{
    position: relative;
    .fullWidth, .fullWidth .mu-text-field{
      overflow: hidden;
      width: 100%;
    }
    &.paddingRight .mu-text-field-input {
      padding-right: 0.48rem;
    }
    .right{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, calc(~"-50% - 0.2rem"));
    }
  }
</style>
