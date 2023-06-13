<template>
  <div class="jsplumb" ref="jsplumb">
    <div class="wrapper" ref="wrapper">
      <div class="line-wrap">
        <div id="item-1" class="state-item"> 1</div>
        <div id="item-2" class="state-item">State 2</div>
      </div>
      <div class="line-wrap">
        <div id="item-4" class="state-item">State 4</div>
        <div id="item-5" class="state-item">State 5</div>
        <div id="item-6" class="state-item">State 6</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {jsPlumb} from 'jsplumb'
  import "jsplumb/css/jsplumbtoolkit-defaults.css";

  export default {
    name: 'landing-page',
    mounted () {
      let plumbIns = jsPlumb.getInstance();
      plumbIns.setContainer(this.$refs.wrapper);
      let defaultConfig = {
        anchor: ['Left', 'Right', 'Top', 'Bottom', [0.3, 0, 0, -1], [0.7, 0, 0, -1], [0.3, 1, 0, 1], [0.7, 1, 0, 1]],
        connector: 'Flowchart',
        paintStyle: {
          strokeLinejoin: 'round',
          dashstyle: '5 4', // 虚线配置
          stroke: '#c80602', // 颜色
          strokeWidth: 2, // 线宽
          // animation: {
          //   speed: 100 // 动画速度
          // }
        },
        endpoint: 'Blank',
        // 添加 overlay，如箭头
        // overlays: [ ['Arrow', { width: 8, length: 8, location: 1 }] ] // overlay
      }

      let relations = [
        ['item-1', 'item-4', '#c80602'],
        ['item-1', 'item-5', '#c80602'],
        ['item-1', 'item-6', '#c80602'],
        ['item-2', 'item-4', '#c80602'],
        ['item-2', 'item-5', '#c80602'],
        ['item-2', 'item-6', '#95c5fc']
      ]

      plumbIns.ready(function () {
        for (let item of relations) {
          console.log(item[2]);
          defaultConfig.paintStyle.stroke = item[2]
          plumbIns.connect({
            source: item[0],
            target: item[1]
          }, defaultConfig)
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
.jsplumb {
  height: 80vh;
  .wrapper {
    position: relative;
    flex: 1;
    height: 800px;
    overflow-y: scroll;
    display: flex;
    justify-content: space-around;
    // align-items: center;

    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    // padding: 60px 80px;
  }
  .state-item {
    width: 200px;
    height: 300px;
    color: #606266;
    background: #f6f6f6;
    border: 2px solid rgba(0, 0, 0, 0.05);
    text-align: center;
    line-height: 40px;
    font-family: sans-serif;
    border-radius: 4px;
    margin-right: 60px;
    margin: 10px 0;
  }

  .line-wrap {
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
