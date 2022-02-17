<template>
  <div class="container_child">
    <div class="switch_box">
      <div class="income select" v-if="switchState===2">收入</div>
      <div class="income" v-else @click.stop="switchTrigger($event)">收入</div>
      <div class="expenditure select" v-if="switchState===3"><span >支出</span></div>
      <div class="expenditure" v-else @click.stop="switchTrigger($event)">支出</div>
    </div>
    <div class="record_box">
      <div class="main1"></div>
      <div class="main2">{{newRecord}}</div>
      <div class="main3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      switchState: null,
      newRecord: []
    }
  },
  props: ['record'],
  methods: {
    switchTrigger (e) {
      if (e.target.className === 'income') {
        this.switchState = 2
      } else {
        this.switchState = 3
      }
    },
    echartsFun () {
      const myChart1 = this.$echarts.init(document.querySelector('.main1'))
      const myChart2 = this.$echarts.init(document.querySelector('.main2'))
      const myChart3 = this.$echarts.init(document.querySelector('.main3'))
      const option1 = {
        series: [
          {
            type: 'pie',
            data: [
            ]
          }
        ]
      }
      const option2 = {
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [],
            barWidth: '20%'
          }
        ]
      }
      const option3 = {
        series: [
          {
            type: 'pie',
            data: [],
            roseType: 'area'
          }
        ]
      }
      this.$nextTick(() => {
        this.newRecord.forEach(val => {
          const temp = { value: val.money, name: val.name }
          option1.series[0].data.push(temp)
          option3.series[0].data.push(temp)
          option2.xAxis.data.push(val.name)
          option2.series[0].data.push(val.money)
        })
        myChart1.setOption(option1)
        myChart2.setOption(option2)
        myChart3.setOption(option3)
      })
    }
  },
  watch: {
    switchState (newVal) {
      if (newVal === 2) {
        this.newRecord = this.record.filter(val => val.state === true)
        this.echartsFun()
      } else {
        this.newRecord = this.record.filter(val => val.state === false)
        this.echartsFun()
      }
    }
  },
  created () {
    this.switchState = 3
  },
  mounted () {
    this.echartsFun()
  }
}
</script>

<style lang="less" scoped>
.container_child {
  width: 100%;
  padding: 12.5% 0 13.5% 0;
  .switch_box {
    position:fixed;
    z-index: 2;
    width: 100%;
    display: flex;
    border: solid rgb(25, 137, 250);
    border-width: 3px 3px 0;
    padding: 20px;
    background-color: #fff;
    >div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 30px;
      border-radius: 20px;
      margin: 0 10px;
      background-color: rgb(240, 240, 240);
      color: black;
    }
    .select {
      background-color: rgb(25, 137, 250);
      color: white;
    }
  }
  .record_box {
    width: 100%;
    margin-top: 73px;
    height: 90vh;
    border: solid rgb(25, 137, 250);
    border-width:  0 3px;
    >div {
      width: 100%;
      height: 30%;
      margin-bottom: 20px;
    }
    >div:last-child {
      margin: 0;
    }
  }
}
</style>
