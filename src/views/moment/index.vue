<template>
  <div id="deviceNavigation">
    <h1 class="time">{{timeData}}</h1>
    <i class="iconfont icon-ins"></i>
    <el-button plain @click="showScanQrCode = true">扫码</el-button>
    {{code}}

    <!-- 复制 --> 
    <div class="fuzhi">
      <p id="share-code">当前时间：{{timeData}}</p>
      <button class="copy-btn" data-clipboard-action="copy" data-clipboard-target="#share-code" @click="copy">一键复制时间</button>
    </div>
    
    <scan-qrcode :show="showScanQrCode" @getCodeList="getCodeList" />
  </div>
</template>

<script>
// 扫码
import ScanQrcode from '@/components/ScanQrcode/ScanQrcode.vue'
// 复制 粘贴 npm i clipboard -S
import Clipboard from 'clipboard'
export default {
  name: 'deviceNavigation',
  // 注册组件
  components: { ScanQrcode },
  data () {
    this.timer = null
    return {
      timeData: '',
      showScanQrCode: false,
      code: ''
    }
  },
  created () {
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
    },

    // 复制
    copy() {
      if(!this.timeData) return
      var clipboard = new Clipboard('.copy-btn')
      clipboard.on('success', e => {
        console.log('复制成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        console.log('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
      })
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
  .fuzhi {
    margin-top: 20px;
  }
}
</style>
