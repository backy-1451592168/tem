<template>
    <div class="amap-page-container">
      <el-amap  :zoom="zoom" :pitch="pitch" :center="center" view-mode="3D" class="amap-demo">
        <el-amap-layer-buildings :visible="visible"></el-amap-layer-buildings>
      </el-amap>
      <div class="toolbar">
        <button type="button" name="button" @click="toggleVisible">{{visible ? '隐藏图层' : '显示图层'}}</button>
      </div>
    </div>
  </template>

  <style>
    .amap-demo {
      height: 90vh;
    }
  </style>

  <script>
    module.exports = {
      name: 'amap-page',
      data() {
        return {
          zoom: 19,
          pitch: 55,
          center: [116.40399, 39.91518],
          visible: true
        };
      },
      methods: {
        toggleVisible(){
          this.visible = !this.visible;
        }
      }
    };
</script>