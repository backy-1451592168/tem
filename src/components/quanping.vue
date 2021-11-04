<template>
<!-- 封装全屏 -->
  <div id="quanping">
    <el-button size="mini" :class="isFullscreen ? 'off_common_fullscreen' : ''" @click="switchFullscreen" icon="el-icon-full-screen">
      {{ isFullscreen ? $t('tuichuquanping') : $t('quangping') }}
    </el-button>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import { switchFullscreen } from "@/store/fn"
export default {
  name: "quanping",
  props: {
  },
  data() {
    return {
      isFullscreen: false
    }
  },
  created() {
  },
  methods: {
    // 全屏
    switchFullscreen() {
      switchFullscreen(this.isFullscreen);
      this.isFullscreen = !this.isFullscreen;
    }
  },
  watch:{
  },
};
</script>
