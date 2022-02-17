<template>
  <router-view :labelList="labelList" @getDelData="dataDel" @getNewIcon="iconNew"  :newIcon="newIcon" @getNewMessage="messageNew"></router-view>
</template>

<script>
export default {
  data () {
    return {
      newIcon: { id: 1 }
    }
  },
  methods: {
    dataDel (id) {
      this.$emit('getDelData', id)
    },
    iconNew (val) {
      this.newIcon = val
    },
    messageNew (val) {
      const newData = { el: this.newIcon.el, name: val }
      this.$emit('getAddData', newData)
    }
  },
  props: {
    labelList: {
      default: []
    }
  }
}
</script>

<style>

</style>
