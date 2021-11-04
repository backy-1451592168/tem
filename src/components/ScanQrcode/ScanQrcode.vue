<template>
  <div>
    <el-dialog
      customClass="dialog"
      title="扫描二维码"
      :visible.sync="dialogDisplay"
      :modal-append-to-body="false"
      :append-to-body="true"
      :before-close="closeCamera">
      <div class="container">
        <div class="scan-wrap">
          <div v-if="!showCanvas">获取不到摄像头</div>
          <canvas
            :width="canvasWidth"
            :height="canvasHeight"
            id="canvas"
            v-show="showCanvas"
            ref="canvasElement"
          ></canvas>
          <div class="output" :style="{width:styleSetting}" v-if="showCanvas">
            <p v-show="!outputData">未监测到二维码</p>
            <p v-show="outputData">结果：{{outputData}}</p>
          </div>
        </div>
        <ul class="ul-wrap" :style="{height: canvasHeight + 'px'}" v-if="multiple">
          <li class="title">二维码列表</li>
          <li v-if="codeList.length === 0">None</li>
          <li v-for="(item,i) in codeList" :key="i">{{item}}</li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer" v-if="multiple">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="closeCamera">确 定</el-button>
        <el-button type="primary" @click="openScan">继 续</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 二维码识别
// npm install jsqr --save
import jsQR from 'jsqr'

let animationFrameId = null

export default {
  // 父向子传递的值，控制弹框的显示或隐藏
  props: {
    show: {
      type: Boolean,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      styleSetting: '',
      whetherDisplay: '',
      video: null,
      showCanvas: true,
      canvas2d: undefined,
      outputData: undefined,
      canvasWidth: 400,
      canvasHeight: 200,
      codeList: []
    }
  },
  created () {
    if (!this.multiple) {
      // this.canvasWidth = 760
      this.canvasHeight = 400
      this.styleSetting = this.canvasWidth + 'px'
    }
  },
  computed:{
    dialogDisplay () {
      if (this.show) {
        this.video = document.createElement('video')
        this.openScan()
      }
      return this.show
    }
  },
  methods: {
    cancel () {
      this.codeList = []
      this.closeCamera()
    },
    openScan () {
      const videoParam = { video: { facingMode: "environment" } }
      navigator.mediaDevices.getUserMedia(videoParam).then((stream) => {
        this.video.srcObject = stream
        this.video.setAttribute('playsinline', true) // required to tell iOS safari we don't want fullscreen
        this.video.setAttribute('autoplay', true) // required to tell iOS safari we don't want fullscreen
        this.video.play()
        animationFrameId = requestAnimationFrame(this.tick)
      }).catch(err => {
        this.showCanvas = false
      })
    },
    // 关闭摄像头
    closeCamera () {
      if (this.video.srcObject) {
        this.video.srcObject.getTracks().forEach(function (track) {
          track.stop()
        })
      }
      // 关闭摄像头的同时，将输出传给父组件
      this.$emit('getCodeList', this.codeList)
      this.codeList = []

    },
    tick () {
      if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
        this.whetherDisplay = this.multiple
        if (this.whetherDisplay) {
          this.canvasHeight = this.video.videoHeight / this.video.videoWidth * this.canvasWidth
        }
        if (!this.whetherDisplay) {
          // this.canvasHeight = this.video.videoHeight / this.video.videoWidth * this.canvasWidth
          this.canvasWidth = this.video.videoWidth / this.video.videoHeight * this.canvasHeight
        }
        !this.canvas2d && (this.canvas2d = this.$refs.canvasElement.getContext('2d'))
        this.canvas2d.drawImage(this.video, 0, 0, this.canvasWidth, this.canvasHeight)
        var imageData = this.canvas2d.getImageData(0, 0, this.canvasWidth, this.canvasHeight)
        var code = null
        try {
          code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: 'dontInvert'
          })
        } catch (err) {
          code = null
          this.outputData = undefined
        }
        if (code) {
          this.drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58')
          this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58')
          this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58')
          this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58')
          this.outputData = code.data
          // this.codeList.push(code.data)
          if (!this.whetherDisplay) {
            this.codeList.push(code.data)
            this.closeCamera()
          } else if (this.whetherDisplay) {
            this.codeList.push(code.data)
          }
          return cancelAnimationFrame(animationFrameId)
        } else {
          this.outputData = undefined
        }
      }
      if (this.show) {
        requestAnimationFrame(this.tick)
      } else {
        cancelAnimationFrame(animationFrameId)
      }
    },
    drawLine (begin, end, color) {
      this.canvas2d.beginPath()
      this.canvas2d.moveTo(begin.x, begin.y)
      this.canvas2d.lineTo(end.x, end.y)
      this.canvas2d.lineWidth = 4
      this.canvas2d.strokeStyle = color
      this.canvas2d.stroke()
    }
  },
}
</script>

<style lang="scss" scoped>
/deep/ .dialog {
  width: 800px;
} 
.container {
  display: flex;
  .scan-wrap {
    margin: 0 auto;
    .output {
      text-align: center;
    }
    .active{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .ul-wrap {
    flex: 1;
    margin-left: 10px;
    border: 1px solid #bbb;
    overflow: auto;
    text-align: center;
    position: relative;
    .title {
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      font-weight: 500;
      background: #e0e0e0;
      position: sticky;
      top: 0;
    }
    li {
      border-bottom: 1px solid #bbb;
      min-height: 28px;
      line-height: 28px;
      &:nth-child(odd) {
        background-color: #f5f5f5;
      }
    }
  }
}
</style>
