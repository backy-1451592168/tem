<template>
  <div id="deviceNavigation">
    <!-- 声音 -->
    <audio controls="controls" src="@/assets/notice.wav" hidden="true" ref="audio"></audio>

    <h1 class="time">{{timeData}}</h1>
    <i class="iconfont icon-ins"></i>
    1、<el-button plain @click="showScanQrCode = true">扫码</el-button>
    {{code}}

    <!-- 复制 --> 
    <div class="fuzhi">
      <p id="share-code">当前时间：{{timeData}}</p>
      2、<el-button class="copy-btn" data-clipboard-action="copy" data-clipboard-target="#share-code" @click="copy">一键复制时间</el-button>
    </div>
    
    3、<el-button @click="notify">弹出桌面通知</el-button>

    4、<el-button @click="music">播放提示音</el-button>

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
    // 查看用户是否授权通知权限，如没获取则获取权限
    Notification.requestPermission(function (permission) {
        console.log('用户是否允许通知： ',permission === 'granted' ? '允许' : '拒绝');
    })
    
    this.timer = setInterval(_ => {
      this.timeData = this.$moment().format('YYYY-MM-YY HH:mm:ss')
      // this.music()
    }
    , 1000)
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
    },
    notify() {
      // 消息通知参数
      //   //通知显示正文。非必须，默认为空
      //   body: '你的好友XX上线了！',
      //   //通知显示正文的图片地址。非必须，默认为空
      //   image: 'imgae url',
      //   //通知左侧图标。非必须，默认为空
      //   icon: 'imgae url',
      //   //通知的分类标记（ID）。非必须，默认为空
      //   tag: 'test',
      //   //通知相关联的数据，通常用于方法的回调，传参。非必须，默认为空
      //   data: '可以是任意数据类型',
      //   //通知显示延迟的时间。非必须，默认通知实例创建完成就显示
      //   timestamp: '',
      //   //通知主体内容的水平展示顺序，有点类似direction属性。非必须，默认值是auto, 可以是ltr或rtl
      //   dir: 'auto',
      //   //当没有足够的空间来显示通知本身时，用于表示通知的图像的URL。非必须，默认为空
      //   badge: 'xxx',
      //   //通知的语言。非必须默认为空
      //   lang: '',
      //   //通知显示时，设备的振动模式。非必须，默认为空
      //   vibrate: [200, 100, 200],
      //   //新通知出现是否覆盖旧的通知，覆盖（true）则永远只显示一条通知，不覆盖（false）则会多条通知重叠。非必须，默认为true
      //   renotify: true,
      //   //通知是否静音。非必须，默认为false，表示无声
      //   silent: false,
      //   //通知声源文件地址。非必须，默认为空
      //   sound: 'mp3',
      //   //是否不在屏幕上显示通知信息。非必须，默认为false表示要显示
      //   noscreen: false,
      //   //指定通知是否应该粘滞性，即不容易被用户清理。非必须，默认false表示不具粘滞性
      //   sticky: false,
      //   //指定通知是否保持活性，知道用户点击或关闭。非必须，默认为false
      //   requireInteraction: false
      var options = {
        body: '消息通知测试！',
        silent: true,
        requireInteraction: true,
        tag: 'TEST',
        icon: '../../test.ico'
      }
      var notification = new Notification('TEST消息通知', options)
      notification.onclick = () => {
        window.focus()
        notification.close()
      }
    },
    music() {
      // 调取声音
      this.$refs.audio.currentTime = 0
      this.$refs.audio.play()
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
