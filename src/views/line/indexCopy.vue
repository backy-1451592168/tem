<template>
<div style="width: 100vw; height: 100vh">
  <div style="width: 100%; height: 100%">
    <div ref="bar1" style="width: 100px;">
      <el-input placeholder="请输入内容"></el-input>
    </div>
    <!-- <svg ref="bar1" class="bar" :height="50"></svg> -->
    <div ref="bar2" class="bar" style="margin-left: 316px; width: 50px;height:50px;background: red;"></div>
    <div ref="bar3" class="bar" style="margin: 10px 0 0 316px; width: 50px;height:50px;background: red;"></div>
  </div>
  <el-button plain @click="test">朴素按钮</el-button>
</div>
</template>
 
<script>
import LeaderLine from 'leader-line-vue';
export default {
  data() {
    return {
      line: null
    }
  },
  mounted() {
    this.line = LeaderLine.setLine(this.$refs.bar1, this.$refs.bar3,
    {
      size: 10,
      startSocket: 'right',
      endSocket: 'left',
      path: 'grid', 
      startPlugColor: '#ff3792', 
      endPlugColor: '#fff386',
      gradient: true 
    })
  },
  methods: {
    test() {
      this.line.remove()
    }
  }
};
</script>
 
<style lang='scss' scoped>
.bar {
  background-color: #0068E6;
  border-radius: 10px;
}
</style>