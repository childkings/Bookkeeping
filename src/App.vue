<template>
  <div class="container">
    <router-view :labelList='labelList' @getRecordData="dataRecord" @getDelData="dataDel" @getAddData="addData" :record="record"></router-view>
    <div class="switch">
      <router-link to="/operation"><van-icon name="records" size="25"/><span>记账</span></router-link>
      <router-link to="/label"><van-icon name="description" size="25"/><span>标签</span></router-link>
      <router-link to="/count"><van-icon name="balance-list-o" size="25"/><span>统计</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelList: [
        { id: 1, name: '衣服', el: 'el-icon-s-custom', state: false },
        { id: 2, name: '吃饭', el: 'el-icon-potato-strips', state: false },
        { id: 3, name: '零食', el: 'el-icon-lollipop', state: false },
        { id: 4, name: '水果', el: 'el-icon-grape', state: false }
      ],
      record: [
        { id: 1, name: '零食', state: false, remarks: '超市买零食', money: 234 },
        { id: 2, name: '衣服', state: false, remarks: '买了两件新年装', money: 586 }
      ]
    }
  },
  methods: {
    dataRecord (val) {
      val.id = this.record.length + 1
      this.record.push(val)
      this.labelList.forEach(val => { val.state = false })
    },
    dataDel (val) {
      this.labelList = this.labelList.filter(item => item.id !== val)
    },
    addData (val) {
      val.id = this.labelList.length + 1
      val.state = false
      this.labelList.push(val)
    }
  },
  created () {
  },
  updated () {
    document.querySelectorAll('a').forEach(val => {
      if (val.classList.contains('router-link-exact-active')) {
        val.style.color = 'rgb(25, 137, 250)'
      } else {
        val.style.color = 'rgb(77,77,77)'
      }
    })
  }
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}
.switch {
  display: flex;
  justify-content: space-between;
  position: fixed ;
  bottom: 0;
  width: 100vw;
  height: 9%;
  border-top: 1px solid rgb(25, 137, 250);
  >a {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    flex: 1;
    background-color: #fff;
    font-size: 10px;
    color: rgb(77, 77, 77);
    i {
      margin-bottom: 5px;
    }
  }
  .router-link-exact-active,.router-link-active {
    border:solid rgb(25, 137, 250);
    border-width: 4px 0;
    padding-bottom: 5px;
  }
}
</style>
