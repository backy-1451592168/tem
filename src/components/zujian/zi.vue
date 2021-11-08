<!-- 子组件 -->
<template> 
  <div class="testCom">
    <el-input type="text" v-model.number="defaults" style="width: 150px;" placeholder="请输入值" />
    <h1>{{status ? '+' : '-'}}</h1>
    <el-input type="text" v-model.number="message" style="width: 150px;" placeholder="请输入值" />
    <button @click="click">Send</button>
  </div>
</template>
<script>
export default {
  // 父传子
  props: {
    status: {
      // 默认类型
      type: Boolean,
      // 是否必须
      required: true,
      // 是否默认
      // default: true
    }
  },
  data() {
    return {
      defaults: null,
      message: null
    }
  },
  methods: {
    click() {
      // 在子组件中需要向父组件传值处使用this.$emit("function",param); 
        //其中function为父组件定义函数，param为需要传递参数
        var a = this.defaults
        var b = this.message
        let num 
        if (this.status) {
          num = a + b
        } else {
          num = a - b
        }
        // 父组件该执行 @childFn=“”里面的函数了
      this.$emit('childFn', num);
    }
  }    
}
</script>
<style scoped lang="scss">
  .testCom {
    display: flex
  }
</style>