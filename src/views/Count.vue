<template>
  <div class="container_child">
    <div class="switch_count">
      <div class="data_display select" v-if="selectState==='data'"><span>数据</span></div>
      <div class="data_display" v-else @click="triggerDisplay"><span>数据</span></div>
      <div class="view_display select" v-if="selectState==='view'"><span>图表</span></div>
      <div class="view_display" v-else @click="triggerDisplay"><span>图表</span></div>
    </div>
    <router-view :record="record"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectState: 'data'
    }
  },
  props: ['record'],
  methods: {
    triggerDisplay () {
      if (this.selectState === 'data') {
        this.selectState = 'view'
        this.$router.push('/count/viewDisplay')
      } else {
        this.selectState = 'data'
        this.$router.push('/count/dataDisplay')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container_child {
  .switch_count {
    position: fixed;
    z-index: 2;
    display: flex;
    width: 100%;
    height: 7%;
    padding: 5% 0 0 0;
    background-color: #fff;
    .data_display,.view_display {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      border-top-left-radius: 100px;
      border-top-right-radius: 100px;
      background-color: rgb(240, 240, 240);
      color: black;
      font-weight: 400;
    }
    .select {
      background-color: rgb(25, 137, 250);
      color: white;
      font-weight: 700;
    }
  }
  .clearfix::before,.clearfix::after {
    content: "";
    display: table;
  }
  .clearfix::after {
    clear: both;
  }
  .clearfix {
    *zoom: 1;
  }
}
</style>
