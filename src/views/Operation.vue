<template>
  <div class="container_child">
    <div class="action_box">
      <van-button type="info" v-if="infoStateSwitch" @click="submitData"><span>收入</span>&nbsp;&nbsp;<van-icon name="arrow-down"  @click.stop="infoStateSwitch=false"/></van-button>
      <van-button type="info" v-else @click="submitData"><span>支出</span>&nbsp;&nbsp;<van-icon name="arrow-down"  @click.stop="infoStateSwitch=true"/></van-button>
      <input type="text" v-model="num" placeholder="0" @click="phoneInputState=true">
    </div>
    <div class="remarks">
      <span>备注：</span>
      <input type="text" v-model="remarks">
    </div>
    <div class="label_state">
      <router-link to="/label"><span>编辑标签</span></router-link>
      <div class="label">
        <div v-for="item in labelList" :key="item.id" @click="labelSelect(item)" >
          <div class="select" v-if="item.state"><i :class="item.el"></i><span>{{item.name}}</span></div>
          <div v-else><i :class="item.el"></i><span>{{item.name}}</span></div>
        </div>
      </div>
    </div>
    <div class="phoneInput" v-show="phoneInputState">
      <div class="closeInput" @click="phoneInputState=false"><van-icon name="arrow-down" /></div>
      <div class="inputSubject" @click="getInputVal($event)">
        <div><button>1</button><button>2</button><button>3</button><button>←</button></div>
        <div><button>4</button><button>5</button><button>6</button><button>清空</button></div>
        <div><button>7</button><button>8</button><button>9</button><button>·</button></div>
        <div><button>0</button><button>OK</button></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: null,
      phoneInputState: false,
      infoStateSwitch: false,
      remarks: null
    }
  },
  props: {
    labelList: {
      default: []
    }
  },
  methods: {
    getInputVal (e) {
      const testNum = /^[0-9]$/
      if (testNum.test(e.target.innerHTML)) {
        if (this.num) {
          this.num += e.target.innerHTML
        } else {
          this.num = e.target.innerHTML
        }
      } else if (e.target.innerHTML === '·') {
        if (this.num && this.num.indexOf('.') === -1) {
          this.num += '.'
        }
      } else if (e.target.innerHTML === '←') {
        if (this.num) {
          this.num = this.num.slice(0, -1)
        }
      } else if (e.target.innerHTML === '清空') {
        this.num = null
      } else if (e.target.innerHTML === 'OK') {
        this.phoneInputState = false
      }
    },
    labelSelect (item) {
      this.labelList.forEach(val => {
        val.state = false
      })
      item.state = true
    },
    submitData () {
      const name = this.labelList.find(item => item.state)
      if (name && this.num !== null) {
        const newEvent = {
          name: name.name,
          state: this.infoStateSwitch,
          remarks: this.remarks,
          money: Number(this.num)
        }
        this.$emit('getRecordData', newEvent)
        this.num = null
        this.remarks = null
        alert('记账成功')
      } else {
        alert('标签或金额不能为空')
      }
    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.container_child {
  padding: 20px 20px;
  .action_box {
    display: flex;
    height: 50px;
    >button {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      height: 100%;
      font-size: 15px;
      font-weight: 700;
    }
    input {
      flex:1;
      margin-left: 10px;
      border-radius: 10px;
      background-color: rgb(240,240,240);
      border: 2px solid rgb(25, 137, 250);
      padding: 0px 10px;
      font-size: 18px;
      color: rgb(25, 137, 250);
      text-align: right;
    }
  }
  .remarks {
    margin-top: 20px;
    display: flex;
    span {
      color: rgb(116, 116, 116);
    }
    input {
      flex: 1;
      border: solid rgb(220, 219, 220);
      border-width: 0 0 1px 0;
    }
  }
  .label_state {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
    a {
      width: 18%;
      border: 1px solid rgb(25, 137, 250);
      border-radius: 43px;
      padding: 5px 5px;
      background-color: #fff;
      font-size: 10px;
      text-align: center;
    }
    .label {
      flex: 1;
      >div {
        display: flex;
        align-items: center;
        display: inline-block;
        border: 1px solid rgb(25, 137, 250);
        border-radius: 10px;
        padding: 5px;
        margin-left: 5%;
        margin-bottom: 5%;
        div {
          display: flex;
        }
        .select {
          color:rgb(25, 137, 250);
        }
        i {
          margin-right: 1px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
  .phoneInput {
    position: fixed;
    bottom: 10%;
    left: 0;
    width: 100%;
    height: 40vh;
    .closeInput {
      width: 100%;
      height: 20px;
      margin-bottom: 3px;
      background-color: rgb(240, 240, 240);
      text-align: center;
    }
    .inputSubject {
      height: calc(100% - 25px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: rgb(240, 240, 240);
      padding: 10px 20px;
      font-size: 30px;
      font-weight: 700;
      >div {
        display: flex;
        justify-content: space-between;
        button {
          width: 20%;
          height: 6vh;
          background-color: #fff;
          border: 0;
          border-radius: 10px;
        }
      }
      >div:nth-child(2) {
        button:last-child {
          font-size: 25px;
        }
      }
      >div:last-child {
        button:last-child {
          width: 73%;
          background-color: rgb(25, 137, 250);
          color: white;
        }
      }
    }
  }
}
</style>
