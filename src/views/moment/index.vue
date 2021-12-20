<template>
  <div id="deviceNavigation">
    <el-input v-model="qwe"></el-input>
    <h1 class="time">{{timeData}}</h1>
    <i class="iconfont icon-ins"></i>
    <el-button plain @click="showScanQrCode = true">扫码</el-button>
    {{code}}
    <scan-qrcode :show="showScanQrCode" multiple @getCodeList="getCodeList" />
  </div>
</template>

<script>
import ScanQrcode from '@/components/ScanQrcode/ScanQrcode.vue'
export default {
  name: 'deviceNavigation',
  // 注册组件
  components: { ScanQrcode },
  data () {
    this.timer = null
    return {
      qwe: "",
      timeData: '',
      showScanQrCode: false,
      code: ''
    }
  },
  created () {
    // console.log("我走了");
    this.timer = setInterval(_ => {
      this.timeData = this.$moment().format('YYYY-MM-YY HH:mm:ss')
    }
    , 1000)
    // clearInterval(this.timer)
  },
  computed: {
  },
  methods: {
    // 扫二维码
    getCodeList(list) {
      this.showScanQrCode = false
      if (!list.length) return
      this.code = list[0]
    }
  },
  // 实例销毁之前调用
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
#deviceNavigation {
  .time {
    text-align: center;
  }
}
</style>
