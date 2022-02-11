<template>
  <div id="barcode_style">
    <!-- 条形码容器，可选svg高清、canvas，或img标签 -->
    <svg id="barcode"></svg>
    <!-- or -->
    <!-- <canvas id="barcode"></canvas> -->
    <!-- or -->
    <!-- <img id="barcode"/> -->
  </div>
</template>

<script>
// npm i jsbarcode
import JsBarcode from 'jsbarcode'
export default {
  name: 'barcode',
  components: {
  },
  data () {
    return {
    }
  },
  created () {
    console.clear()
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作
  mounted() {
    JsBarcode("#barcode", "199908140498", {
      format: "CODE128",  //条形码的格式
      lineColor: "#000000",  //线条颜色
      width:2, //线宽
      height:80,  //条码高度
      displayValue: true //是否显示文字信息
    })
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
#barcode {
}
</style>
