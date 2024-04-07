<template>
  <div class="hello">
    <el-button type="success" plain v-for="item in list" :key="item.url"><router-link :to="item.url">{{item.name}}</router-link></el-button>
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
import globalUploader from '@/views/lihua/index.vue'
export default {
  name: "HelloWorld",
  
  components: { testCom, globalUploader },
  data() {
      return {
        message: 0,
        sta: true,
        list: [
          {name: '拖拽组件 全屏', url: '/dragging'},
          {name: '中英文切换', url: '/zhen'},
          {name: 'element组件', url: '/element'},
          {name: '时间组件 扫码组件 一键复制时间 声音 桌面消息通知', url: '/moment'},
          {name: '视频插件', url: '/videoPage'},
          {name: 'chart图表', url: '/chart'},
          {name: '数字 单位处理', url: '/globalFiltering'},
          {name: '背景图', url: '/BackgroundDiagram'},
          {name: '滚动条自动滚动 鼠标滚轮div左右滚动', url: '/scrollBar'},
          {name: '文字渐出', url: '/scrollrandl'},
          {name: '动画 防抖节流 rem', url: '/lottie'},
          {name: '图片裁剪', url: '/crop'},
          {name: '导航栏收合按钮', url: '/button'},
          {name: '模仿M1芯片渐变效果', url: '/gradient'},
          {name: '倒计时', url: '/countDown'},
          {name: '验证码', url: '/verification'},
          {name: '自定义拖拽布局', url: '/resize'},
          {name: '生成条形码', url: '/barcode'},
          {name: 'Vuex', url: '/storeView'},
          {name: '地图', url: '/map'},
          {name: 'test', url: '/testss'},
          {name: 'line', url: '/line'},
          {name: 'indexCopy', url: '/indexCopy'},
          {name: 'elProgress', url: '/elProgress'},
          {name: 'testLine', url: '/testLine'},
          {name: 'echarts-map', url: '/echartsMap'},
          {name: 'test', url: '/test'},
          {name: 'filtration-jiao', url: '/filtration'},
          {name: 'miaomiao', url: '/filtration-miaomiao'},
          {name: '@vuemap/vue-amap', url: '/vuemap_vue_amap'},
          {name: 'watermarking', url: '/watermarking'},
          {name: 'Line', url: '/lineDemo'},
          {name: '1.动态连线', url: '/dong'},
          {name: '2.动态连线', url: '/propertyLine'},
          {name: '3.动态连线', url: '/lineThree'},
          {name: 'time', url: '/time'},
          {name: 'jsplumb', url: '/jsplumb'},
          {name: 'ts', url: '/ts'},
          {name: 'element预览图片', url: '/elImageViewer'},
          {name: 'tree', url: '/tree'},
          {name: '分片上传(局部使用)', url: '/lihua'},
          {name: '分片上传(全局组件)', url: '/upload'},
          {name: 'loading', url: '/loading'},
          {name: 'AA', url: '/aa'},
          {name: '阿里数据可视化-流程图', url: '/antv'},
          {name: '阿里数据可视化-排名树', url: '/com'},
          {name: '元素拖拽移动+滚轮缩放功能', url: '/drag'},
          {name: '模糊搜索', url: '/search'},
          {name: 'G6-流程图', url: '/mindMap'},
          {name: 'G6-流程作业图', url: '/mindMap2'},
          {name: '旋转大屏', url: '/rotatingLargeScreen'}
        ]
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
