<template>
  <div>
    <fragmentUpload @set-uploadData="setUploadData"></fragmentUpload>
    {{uploadData}}
  </div>
</template>
<script>
import fragmentUpload from '@/components/fragmentUpload'

export default {
  components: {
    fragmentUpload
  },
  data() {
    return {
      uploadData: {}
    }
  },
  methods: {
    setUploadData(data) {
      this.uploadData = data;
    }
  }
}
</script>
