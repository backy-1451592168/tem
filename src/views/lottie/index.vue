<template>
  <div id="lottie">
    <!-- @mouseover 进到里面触发事件 和 @mouseleave 移出触发事件 -->
    <div ref="bodyAnimation" style="border: 1px solid;"></div>
    <span>防抖：</span>
    <input type="text" @keydown="inputHandle">
    <h1>防抖执行 {{num1}} 次</h1>

    <h1>节流执行 {{num2}} 次</h1>
    <span>节流：</span>
    <el-button @click="clickHandle">点击</el-button>
  </div>
</template>

<script>
// npm install lottie-web -S
import lottie from 'lottie-web';
// 动画地址 https://lottiefiles.com/81296-success?lang=zh_CN ， https://codepen.io/collection/nVYWZR/
// 本地导入
// import sheepJson from '@/assets/81296-success.json';

import { debounce, throttle } from '@/utils/index'
export default {
  name: 'lottie',
  components: {
    lottie
  },
  data () {
    return {
      num1: 0,
      num2: 0
    }
  },
  created () {
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作
  mounted() {
    // 动画
    lottie.loadAnimation({
      container: this.$refs.bodyAnimation, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      // animationData: sheepJson // the path to the animation json
      path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
    });
  },

  computed: {
  },

  methods: {
    // 防抖  不触发再函数 8毫秒后才会执行 this.num++
    inputHandle: debounce(function () {
      this.num1++
    }, 800),

    // 节流 无论点多少下 都是 1秒执行一次
    clickHandle: throttle(function () {
      this.num2++
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
#lottie {
  width: 200px;
}
</style>
