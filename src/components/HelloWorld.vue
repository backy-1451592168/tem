<template>
  <div class="hello">
    <el-button type="success" plain><router-link to="/dragging">拖拽组件</router-link></el-button>
    <el-button type="success" plain><router-link to="/zhen">中英文切换</router-link></el-button>
    <el-button type="success" plain><router-link to="/element">element组件</router-link></el-button>
    <el-button type="success" plain><router-link to="/moment">时间组件</router-link></el-button>
    <el-button type="success" plain><router-link to="/videoPage">视频插件</router-link></el-button>
    <el-button type="success" plain><router-link to="/chart">chart图表</router-link></el-button>
    <el-button type="success" plain><router-link to="/globalFiltering">自定义指令 全局过滤</router-link></el-button>
    <el-button type="success" plain><router-link to="/BackgroundDiagram">背景图</router-link></el-button>
    <el-button type="success" plain><router-link to="/scrollBar">滚动条自动滚动</router-link></el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
</style>
