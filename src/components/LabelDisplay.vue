<template>
  <div class="container_child">
    <div v-for="item in labelList" :key="item.id"><div class="label_left"><i :class="item.el" />{{item.name}}</div><div class="del" @click="delLabel(item.id)"><van-icon name="cross" /></div></div>
    <button @click="addLabel">添加标签</button>
  </div>
</template>

<script>
export default {
  methods: {
    delLabel (id) {
      this.$emit('getDelData', id)
    },
    addLabel () {
      this.$router.push('/label/labelAddIcon')
    }
  },
  props: {
    labelList: {
      default: []
    }
  },
  created () {

  }
}
</script>

<style lang="less" scoped>

.container_child {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px 10px;
  background-color: rgb(242, 243, 246);
  >div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5%;
    background-color: #fff;
    margin-bottom: 5%;
    padding: 0 5%;
    border-radius: 10px;
    font-size: 17px;
    font-weight: 700;
    .label_left {
      i {
        font-size: 20px;
      }
    }
    .del {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      background-color: rgb(246, 80, 89);
      border-radius: 50%;
      color: white;
      font-size: 18px;
    }
  }
  >button {
    height: 4%;
    border: none;
    border-radius: 5px;
    background-color: rgb(25, 137, 250);
    color: white;
  }
}
</style>
