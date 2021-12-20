<template>
  <div id="resize">
    <grid-layout :layout.sync="layout"
      :col-num="16"
      :row-height="50"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :vertical-compact="true"
      :use-css-transforms="true"
    >
      <grid-item v-for="item in layout"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :style="`background: ${item.background}`"
      >
        <div>
          <el-color-picker v-if="draggable" style="z-index:999; top: 5px; left: 5px;" v-model="item.background"></el-color-picker>
          <span class="text">{{item.name}}</span>
        </div>
      </grid-item>
    </grid-layout>
    {{layout}}
  </div>
</template>

<script>
// https://jbaysolutions.github.io/vue-grid-layout/zh/
import { GridLayout, GridItem } from "vue-grid-layout"
export default {
  name: 'resize',
  components: {
    GridLayout,
    GridItem
  },
  data() {
    return {
      layout: [
        {x:0, y:0, w:2, h:2, i:1, name: '1su', background: ''},
        {x:2, y:0, w:2, h:2, i:2, name: '2su', background: ''},
        {x:4, y:0, w:2, h:2, i:3, name: '3su', background: ''},
        {x:6, y:0, w:2, h:2, i:4, name: '4su', background: ''},
        {x:8, y:0, w:8, h:2, i:5, name: '5su', background: ''},
        {x:10, y:0, w:2, h:2, i:6, name: '6su', background: ''},
        {x:12, y:0, w:2, h:3, i:7, name: '7su', background: ''},
        {x:14, y:0, w:2, h:2, i:8, name: '8su', background: ''},
        {x:0, y:0, w:2, h:2, i:9, name: '9su', background: ''},
        {x:2, y:0, w:2, h:2, i:10, name: '10su', background: ''},
        {x:4, y:0, w:2, h:2, i:11, name: '11su', background: ''},
        {x:6, y:0, w:2, h:2, i:12, name: '12su', background: ''},
        {x:0, y:0, w:2, h:2, i:13, name: '1su', background: ''},
        {x:0, y:0, w:2, h:2, i:14, name: '1su', background: ''},
      ],
      // 是否可拖拽draggable 可调整大小resizable
      draggable: true,
      // 可调整大小
      resizable: true,
    }
  },
  methods: {
    itemTitle(item) {
      let result = item.i
      if (item.static) {
          result += " - Static"
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
#resize {
  height: 300px;
  width: 1000px;
  .vue-grid-layout {
    background: #eee;
  }
  .vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border-radius: 8px;
    border: 1px solid #c4c4c4;
  }
  .vue-grid-item .resizing {
    opacity: 0.9;
  }
  .vue-grid-item .static {
    background: #cce;
  }
  .vue-grid-item .text {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
  }
  .vue-grid-item .minMax {
    font-size: 12px;
  }
  .vue-grid-item .add {
    cursor: pointer;
  }
  .el-color-picker__trigger {
    border: 1px solid #000000;
  }
}
</style>