<template>
  <div class="hello">
    <el-button type="success" plain><router-link to="/dragging">1.拖拽组件 全屏</router-link></el-button>
    <el-button type="success" plain><router-link to="/zhen">2.中英文切换</router-link></el-button>
    <el-button type="success" plain><router-link to="/element">element组件</router-link></el-button>
    <el-button type="success" plain><router-link to="/moment">3-4.时间组件 扫码组件 一键复制时间 声音 桌面消息通知</router-link></el-button>
    <el-button type="success" plain><router-link to="/videoPage">5.视频插件</router-link></el-button>
    <el-button type="success" plain><router-link to="/chart">6.chart图表</router-link></el-button>
    <el-button type="success" plain><router-link to="/globalFiltering">7.数字 单位处理</router-link></el-button>
    <el-button type="success" plain><router-link to="/BackgroundDiagram">背景图</router-link></el-button>
    <el-button type="success" plain><router-link to="/scrollBar">8.滚动条自动滚动 鼠标滚轮div左右滚动</router-link></el-button>
    <el-button type="success" plain><router-link to="/scrollrandl">9.文字渐出</router-link></el-button>
    <el-button type="success" plain><router-link to="/lottie" class="lottie">10.动画 防抖节流 rem</router-link></el-button>
    <el-button type="success" plain><router-link to="/crop">11.图片裁剪</router-link></el-button>
    <el-button type="success" plain><router-link to="/button">12.导航栏收合按钮</router-link></el-button>
    <el-button type="success" plain><router-link to="/gradient">13.模仿M1芯片渐变效果</router-link></el-button>
    <el-button type="success" plain><router-link to="/countDown">14.倒计时</router-link></el-button>
    <el-button type="success" plain><router-link to="/verification">15.验证码</router-link></el-button>
    <el-button type="success" plain><router-link to="/resize">16.自定义拖拽布局</router-link></el-button>
    <el-button type="success" plain><router-link to="/barcode">17.生成条形码</router-link></el-button>
    <el-button type="success" plain><router-link to="/storeView">18.Vuex</router-link></el-button>
    <el-button type="success" plain><router-link to="/map">19.地图</router-link></el-button>
    <el-button type="success" plain><router-link to="/testss">19.test</router-link></el-button>
    <el-button type="success" plain><router-link to="/line">20.line</router-link></el-button>
    <el-button type="success" plain><router-link to="/indexCopy">21.indexCopy</router-link></el-button>
    <el-button type="success" plain><router-link to="/elProgress">22.elProgress</router-link></el-button>
    <el-button type="success" plain><router-link to="/testLine">23.testLine</router-link></el-button>
    <el-button type="success" plain><router-link to="/echartsMap">24.echarts-map</router-link></el-button>
    <el-button type="success" plain><router-link to="/test">24.echarts-map</router-link></el-button>
    <el-button type="success" plain><router-link to="/filtration">24.filtration-jiao</router-link></el-button>
    <el-button type="success" plain><router-link to="/miaomiao">24.filtration-miaomiao</router-link></el-button>
    <!-- 11.全屏 -->
    <quan-ping></quan-ping>

    <h1>父子组件通信</h1>
    <div class="test">
      <el-radio-group type="primary" size="mini" v-model="sta">
        <el-radio-button :label="true">+</el-radio-button>
        <el-radio-button :label="false">-</el-radio-button>
      </el-radio-group>

      <!-- 渲染组件 -->
      <test-com ref="testCom" @childFn="parentFn" :status="sta"></test-com>
      运算后的值 : {{message}}
    </div>
  </div>
</template>

<script>
// 父子组件通信 文件位置
import testCom from '@/components/zujian/zi.vue'
export default {
  name: "HelloWorld",
  
  components: { testCom },
  data() {
      return {
        message: 0,
        sta: true
      }
  },
  created () {
  },
  methods: {
    parentFn(payload) {
      this.message = payload;
      // 父组件调子方法
      console.log(this.$refs.testCom);
    },
  }
};
</script>

<style scoped lang="scss">
  .lottie {
    font-size: .2rem;;
  }
  .test {
    border: 1px solid;
  }
</style>
