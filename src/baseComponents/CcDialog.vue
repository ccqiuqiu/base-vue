<!--Created by 熊超超 on 2017/8/17.-->
<template>
  <mu-dialog v-if="dialog" :open="dialog!==null" :title="dialog.title" @close="close">
    {{dialog.content}}
    <mu-flat-button slot="actions" @click="onCancel" primary :label="dialog.cancelText" v-if="!dialog.hideCancel"/>
    <mu-flat-button slot="actions" primary @click="onConfirm" :label="dialog.confirmText"/>
  </mu-dialog>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['dialog'])
    },
    methods: {
      onCancel() {
        this.dialog.cancelCb && this.dialog.cancelCb()
        this.close()
      },
      onConfirm() {
        this.dialog.confirmCb && this.dialog.confirmCb()
        this.close()
      },
      close() {
        this.$store.commit('closeDialog')
      }
    }
  }
</script>

<style scoped>
</style>
