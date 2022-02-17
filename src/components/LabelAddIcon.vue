<template>
  <div class="container_child">
    <div class="tips"><span>选择一个图标</span></div>
    <div class="base_icon">
      <div v-for="item in elList" :key="item.id">
        <i :class="item.el" @click="select(item.id)" v-if="item.style" :style="{color: 'rgb(25, 137, 250)'}"></i>
        <i :class="item.el" @click="select(item.id)" v-else></i>
      </div>
    </div>
    <div class="more"><span @click="moreMessage">获取更多</span></div>
    <div class="return" @click="returnHash"><span>返回</span></div>
    <div class="next" @click="nextHash"><span>下一步</span></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      elList: [
        { id: 1, el: 'el-icon-basketball', style: false },
        { id: 2, el: 'el-icon-chicken', style: false },
        { id: 3, el: 'el-icon-box', style: false },
        { id: 4, el: 'el-icon-monitor', style: false },
        { id: 5, el: 'el-icon-platform-eleme', style: false },
        { id: 6, el: 'el-icon-headset', style: false },
        { id: 7, el: 'el-icon-mobile-phone', style: false },
        { id: 8, el: 'el-icon-coffee', style: false },
        { id: 9, el: 'el-icon-timer', style: false },
        { id: 10, el: 'el-icon-first-aid-kit', style: false },
        { id: 11, el: 'el-icon-bank-card', style: false },
        { id: 12, el: 'el-icon-smoking', style: false },
        { id: 13, el: 'el-icon-scissors', style: false },
        { id: 14, el: 'el-icon-video-camera', style: false },
        { id: 15, el: 'el-icon-goods', style: false },
        { id: 16, el: 'el-icon-s-promotion', style: false }
      ]
    }
  },
  props: ['newIcon'],
  methods: {
    moreMessage () {
      alert('暂不可用')
    },
    returnHash () {
      this.$router.go(-1)
    },
    select (id) {
      const temp = this.elList.find(val => {
        if (val.id === id) {
          val.style = true
          return val
        }
      })
      this.elList.forEach(val => {
        if (val.id !== id) {
          val.style = false
        }
      })
      this.$emit('getNewIcon', temp)
    },
    nextHash () {
      const temp = this.elList.find(val => {
        if (val.style) {
          return val
        }
      })
      if (temp) {
        this.$emit('getNewIcon', temp)
        this.$router.push('/label/labelAddMessage')
      } else {
        alert('请选择一个图标')
      }
    }
  },
  mounted () {
    if (this.newIcon) {
      this.elList.some(val => {
        if (val.id === this.newIcon.id) {
          val.style = true
        }
      })
      this.select()
    }
  }
}
</script>

<style lang="less" scoped>
.container_child {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color:rgb(242, 243, 246);
  .tips {
    margin: 20% 0 10% 0;
    font-size: 30px;
  }
  .base_icon {
    width: 100%;
    padding:0 5%;
    >div {
      display: inline-block;
      width: 25%;
      height: 50px;
      margin-bottom:8%;
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
      }
    }
  }
  .more {
    width: 100%;
    padding: 0 5%;
    color: rgb(25, 137, 250);
    text-align: right;
  }
  .return {
    position: fixed;
    top: 0;
    left: 0;
    width: 30%;
    height: 6%;
    background-color: rgb(25, 137, 250);
    text-align: center;
    span {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: white;
    }
  }
  .next {
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    height: 6%;
    background-color: rgb(25, 137, 250);
    text-align: center;
    span {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: white;
    }
  }
}
</style>
