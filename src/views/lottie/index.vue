<template>
  <div id="lottie">
    <div ref="bodyAnimation"></div>
  </div>
</template>

<script>
// npm install lottie-web -S
import lottie from 'lottie-web';
// 动画地址 https://lottiefiles.com/81296-success?lang=zh_CN ， https://codepen.io/collection/nVYWZR/
// 本地导入
// import sheepJson from '@/assets/81296-success.json';
export default {
  name: 'lottie',
  components: {
    lottie
  },
  data () {
    return {
    }
  },
  created () {
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作
  mounted() {
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
  }
}
</script>

<style lang="scss" scoped>
#lottie {
  width: 200px;
}
</style>
