<template>
  <div style="width: 500px">
    <el-progress
      class="circle0"
      :width="200"
      :percentage="50"
      type="circle"
      :stroke-width="25">
    </el-progress>
    <svg width="100%" height="0">
      <defs>
        <linearGradient id="write" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #00cefc" stop-opacity="0.8"></stop>
          <stop offset="100%" style="stop-color: #367bec" stop-opacity="1"></stop>
          <!-- <stop offset="0%" style="stop-color: #367bec" stop-opacity="0.8"></stop>
          <stop offset="100%" style="stop-color: #00cefc" stop-opacity="1"></stop> -->
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
<style lang="scss" scoped>
  .circle0 ::v-deep {
    .el-progress__text {
      background-image: -webkit-linear-gradient(bottom, #00cefc, #367bec);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 900;
    }
    svg > path:nth-child(2) {
      stroke: url(#write);
    }
    .el-progress-circle__track {
      stroke: rgba(172, 221, 251, 0.6);
    }
  }
</style>