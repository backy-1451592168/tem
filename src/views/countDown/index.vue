<template>
  <div id="countDown">
    <count-downs :seconds="5" color="#F36F21" backgroundColor="#000000" innerColor="#270B58"></count-downs>
  </div>
</template>

<script>
import countDowns from '@/components/countDowns/index.vue'
export default {
  name: 'countDown',
  components: { countDowns },
  data () {
    return {
    }
  },
  created () {
  },
  
  // 计算属性 html写好对应的计算属性的函数名
  
  methods: {
  },

  // 实例销毁之前调用
  beforeDestroy () {
  }
}
</script>

<style lang="scss" scoped>
#countDown {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // min-height: 100vh;
  // background-color: #43119A;
}

</style>
