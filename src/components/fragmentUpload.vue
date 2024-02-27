<template>
  <!-- 分片上传按钮-组件 -->
  <div class="page page-home">
    <div class="btn-group">
      <el-button type="primary" size="small" @click="upload">上传</el-button>
      <div v-if="uploadSuccess">上传成功</div>
    </div>
  </div>
</template>

<script>
import Bus from '/vue-simple-uploader/js/bus'

export default {
  name: 'home',

  data() {
    return {
      fileList: [],
      uploadSuccess: false
    }
  },

  mounted() {
    // 文件选择后的回调
    Bus.$on('fileAdded', () => {
      console.log('文件已选择')
    })

    // 文件上传成功的回调
    Bus.$on('fileSuccess', (res) => {
      this.uploadSuccess = true;
      this.$emit('set-uploadData', res);
      console.log(res, '文件上传成功')
    })
  },

  beforeDestroy() {
    Bus.$off('fileAdded')
    Bus.$off('fileSuccess', {})
  },

  methods: {
    upload() {
      // 打开文件选择框
      Bus.$emit('openUploader', {
        // 给服务端的额外参数
        params: {
          page: 'home'
        }
      })
    }
  },
}
</script>

<style scoped lang="scss">
.page-home {
  height: 100%;
}
</style>
