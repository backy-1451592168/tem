<template>
  <div>
    <fragmentUpload @set-uploadData="setUploadData" url="https://s1.z100.vip:15139/fragment_upload"></fragmentUpload>
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
