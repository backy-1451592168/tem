<template>
  <div class="hello">
    <el-button type="success" plain><router-link to="/dragging">1.拖拽组件 全屏</router-link></el-button>
    <el-button type="success" plain><router-link to="/zhen">2.中英文切换</router-link></el-button>
    <el-button type="success" plain><router-link to="/element">element组件</router-link></el-button>
    <el-button type="success" plain><router-link to="/moment">3-4.时间组件 扫码组件</router-link></el-button>
    <el-button type="success" plain><router-link to="/videoPage">5.视频插件</router-link></el-button>
    <el-button type="success" plain><router-link to="/chart">6.chart图表</router-link></el-button>
    <el-button type="success" plain><router-link to="/globalFiltering">7.数字 单位处理</router-link></el-button>
    <el-button type="success" plain><router-link to="/BackgroundDiagram">背景图</router-link></el-button>
    <el-button type="success" plain><router-link to="/scrollBar">8.滚动条自动滚动</router-link></el-button>
    <el-button type="success" plain><router-link to="/scrollrandl">9.文字渐出</router-link></el-button>
    <el-button type="success" plain><router-link to="/lottie" class="lottie">10.动画 rem</router-link></el-button>
    <!-- 11.全屏 -->
    <quan-ping></quan-ping>

    <h1>父子组件通信</h1>
    <div class="test">
      <el-radio-group type="primary" size="mini" v-model="sta">
        <el-radio-button :label="true">+</el-radio-button>
        <el-radio-button :label="false">-</el-radio-button>
      </el-radio-group>
      <test-com @childFn="parentFn" :status="sta"></test-com>
      运算后的值 : {{message}}
    </div>
  </div>
</template>

<script>
import testCom from '@/components/zujian/zi.vue'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { testCom },
    data() {
        return {
          message: 0,
          sta: true
        }
    },
    methods: {
       parentFn(payload) {
        this.message = payload;
      }
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
