<template>
  <div class="container_child">
    <div class="switch_box">
      <div class="total select" v-if="switchState===1">合计</div>
      <div class="total" v-else @click.stop="switchTrigger($event)">合计</div>
      <div class="income select" v-if="switchState===2">收入</div>
      <div class="income" v-else @click.stop="switchTrigger($event)">收入</div>
      <div class="expenditure select" v-if="switchState===3"><span >支出</span></div>
      <div class="expenditure" v-else @click.stop="switchTrigger($event)">支出</div>
    </div>
    <div class="record_box">
      <div v-for="item in newRecord" :key="item.id">
        <div class="text"><div class="text_message"><span>{{item.name}}</span><span>{{item.remarks}}</span></div><span><span v-if="item.state===false">-</span>{{'￥'+item.money}}</span></div>
        <hr style="margin: 8px -20px 20px -20px">
      </div>
    </div>
    <div class="footer"><span>总计：</span><span>{{count}}</span></div>
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
      } else if (e.target.className === 'total') {
        this.switchState = 1
      } else if (e.target.className === 'expenditure') {
        this.switchState = 3
      }
    }
  },
  watch: {
    switchState (newVal) {
      if (newVal === 1) {
        this.newRecord = this.record
      } else if (newVal === 2) {
        this.newRecord = this.record.filter(val => val.state === true)
      } else {
        this.newRecord = this.record.filter(val => val.state === false)
      }
    }
  },
  computed: {
    count () {
      let temp = this.newRecord.reduce((amt, item) => {
        if (item.state) {
          amt += item.money
          return amt
        } else {
          amt -= item.money
          return amt
        }
      }, 0)
      if (temp < 0) {
        temp = '-￥' + Math.abs(temp)
      } else {
        temp = '￥' + temp
      }
      return temp
    }
  },
  created () {
    this.switchState = 1
  }
}
</script>

<style lang="less" scoped>
.container_child {
  padding: 12.5% 0 13.5% 0;
  .switch_box {
    position:fixed;
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
    margin-top: 73px;
    border: solid rgb(25, 137, 250);
    border-width: 0 3px;
    padding: 0 20px 20px 20px;
    >div {
      .text {
        display: flex;
        justify-content: space-between;
        .text_message {
          >span:first-child {
            margin-right: 10px;
            font-size: 15px;
            font-weight: 700;
          }
          >span:nth-child(2) {
            font-size: 12px;
            color: rgb(155, 155, 155);
          }
        }
        >span {
          display: flex;
          font-size: 20px;
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 8.5%;
    padding: 0 5%;
    border: solid rgb(25, 137, 250);
    border-width: 2px 3px 0px;
    margin-bottom: 1px;
    background-color: white;
    color: rgb(25, 137, 250);
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
