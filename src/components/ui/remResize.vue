<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
// 局部使用rem
export default {
  name: 'setUpFontSize',

  created () {
    this.$nextTick(() => {
      this.setFontSize()
    })
    window.addEventListener('resize', this.setFontSize);
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.setFontSize)
    document.documentElement.style.fontSize = 100 + 'px';
  },

  methods: {
    setFontSize() {
      var docEI = document.documentElement
      var clientWidth = docEI.clientWidth
      if(!clientWidth) return
      //100是字体大小，1920是开发时浏览器窗口的宽度，等比计算
      docEI.style.fontSize = 100 * (clientWidth / 1920) + 'px';
    },
  }
};
</script>
