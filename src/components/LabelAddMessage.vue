<template>
  <div class="container_child">
    <div class="tips"><span>输入一个类别</span></div>
    <van-cell-group inset>
      <van-field v-model="message" label="类别" placeholder="请输入该记账类别"/>
    </van-cell-group>
    <div class="return" @click="returnHash"><span>返回</span></div>
    <div class="next" @click="nextHash"><span>下一步</span></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: null
    }
  },
  methods: {
    returnHash () {
      this.$router.go(-1)
    },
    nextHash () {
      if (this.message) {
        this.$emit('getNewMessage', this.message)
        this.$router.push('/label')
      }
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
