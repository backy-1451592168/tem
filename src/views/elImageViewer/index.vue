<template>
  <div class="elImageViewer">
    <el-button @click="showImgViewer">查看图片</el-button>{{imgList}}
    <el-image-viewer 
      v-if="imgViewerVisible" 
      :on-close="closeImgViewer" 
      :url-list="imgList" 
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgViewerVisible: false,
      imgList: []
    };
  },
  components:{ 
    'el-image-viewer': () => import('element-ui/packages/image/src/image-viewer')
  },
  methods: {
    showImgViewer(){
      this.imgViewerVisible = true;
      const m = (e) => { e.preventDefault() };
      document.body.style.overflow = 'hidden';
      document.addEventListener("touchmove", m, false); // 禁止页面滑动
      this.imgList = [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    },
    closeImgViewer(){
      this.imgList =[]
      this.imgViewerVisible = false;
      const m = (e) => { e.preventDefault() };
      document.body.style.overflow = 'auto';
      document.removeEventListener("touchmove", m, true);
    },
  }
};
</script>

<style lang="scss" scoped>
.elImageViewer {
}
</style>
