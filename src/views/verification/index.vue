<template>
  <div class="container">
    <div class="modal-backdrop" v-show="isModalVisible" @click="closeBackground"  >
      <div class="modal" @click.stop>
      <div class="font1">获取验证码</div>
      <div class="font2">验证码已发送至（+86）{{telephone}}</div>
      <div class="code-input-main" >
        <input 
          pattern="\d*"
          class="code-input-main-item" 
          id="phoneCode1" 
          v-model="phoneCode0" 
          oninput="value=value.length>1?value.substr(0,1):value;"  
          maxlength="1" 
          type="number"/>
        <input 
          pattern="\d*"
          class="code-input-main-item" 
          id="phoneCode2"
          v-model="phoneCode1"  
          oninput="value=value.length>1?value.substr(0,1):value;"  
          maxlength="1" 
          type="number"/>
        <input 
          pattern="\d*"
          class="code-input-main-item" 
          id="phoneCode3" 
          v-model="phoneCode2" 
          oninput="value=value.length>1?value.substr(0,1):value;"  
          maxlength="1" 
          type="number"/>
        <input 
          pattern="\d*"
          class="code-input-main-item" 
          id="phoneCode4" 
          v-model="phoneCode3"  
          oninput="value=value.length>1?value.substr(0,1):value;"  
          maxlength="1" 
          type="number"/>
        <input 
          pattern="\d*"
          class="code-input-main-item" 
          id="phoneCode5" 
          v-model="phoneCode4" 
          oninput="value=value.length>1?value.substr(0,1):value;"  
          maxlength="1" 
          type="number"/>
        <input 
          pattern="\d*"
          class="code-input-main-item" 
          id="phoneCode6" 
          v-model="phoneCode5"  
          oninput="value=value.length>1?value.substr(0,1):value;"  
          maxlength="1" 
          type="number"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'verification',
  // 注册组件
  components: {},
  data () {
    return {
      isModalVisible:true, // 是否展示获取验证码弹窗
      phoneCode:"",  // 验证码6位
      phoneCode0:"", // 输入框1的值
      phoneCode1:"", // 输入框2的值
      phoneCode2:"", // 输入框3的值
      phoneCode3:"", // 输入框4的值
      phoneCode4:"", // 输入框5的值
      phoneCode5:"", // 输入框6的值
      telephone:"1333***8912", // 手机号
    }
  },
  created () {
  },
  computed: {
  },
  mounted() { 
   this.goNextInput('.code-input-main-item');// 实现输入框自动聚焦
  },
  methods: {
    closeBackground(){ // 关闭验证码弹窗
         this.isModalVisible=false
  },
  goNextInput(el){ // 实现输入框自动聚焦
      var that = this;
      var txts = document.querySelectorAll(el);// 获取所有input对象
      for(var i = 0; i<txts.length;i++){ // 循环input添加监听事件
        var t = txts[i];
        t.index = i; // input赋值索引值
        t.onkeydown=function(e){ // 键盘按下时
          var e = e ? e : event;
          var k = e.keyCode || e.which;
          if (k == 8) { // 如果是删除事件
            if(this.value!=""){ // 如果当前input不为空
            this.value = ""; // 清空当前input的值
            switch(this.index) { // 根据索引值判断是当前哪个input的值需要被清空
                case 0:
                    that.phoneCode0 ="";
                    break;
                case 1:
                    that.phoneCode1 ="";
                    break;
                case 2:
                    that.phoneCode2 ="";
                    break;
                case 3:
                    that.phoneCode3 ="";
                    break;
                case 4:
                    that.phoneCode4 ="";
                    break;
                case 5:
                    that.phoneCode5 ="";
                    break;
              } 
            }else{ // 当前input为空,则聚焦到上一个input
            var back = this.index-1;
            that.value = "";
            if(back <0) return; // 如果索引值小于0,则返回
            txts[back].focus();
            }
          }
        }
          t.onkeyup=function(e){ // 键盘松开时
          var e = e ? e : event;
          var k = e.keyCode || e.which;
          if (k != 8) { // 如果不是删除事件
          that.value=this.value.replace(/^(.).*$/,'$1');// 当前输入框保留一位数字
          var next = this.index + 1; // 索引值加1
          if(next > txts.length-1 ) // 如果是最后一个input时执行事件
          {   that.phoneCode = "";
              that.phoneCode = that.phoneCode0+that.phoneCode1+that.phoneCode2+that.phoneCode3+that.phoneCode4+that.phoneCode5;
              console.log('完成'); // 验证验证码是否正确
              return;
          }
          if (this.value) { txts[next].focus(); } // 如果有值则跳到下一个input
          }
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@color:rgba(255,96,5,1);
 /* 遮罩层 */
 
// 谷歌 禁止上下箭头
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
   -webkit-appearance: none !important;
   margin: 0;
}
// 火狐 禁止上下箭头
input[type="number"]{-moz-appearance:textfield;}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
/* 弹窗 */
.modal {
width:520px;
height:300px;
background:rgba(255,255,255,1);
border:2px solid rgba(230,230,230,1);
border-radius:10px;
padding: 0 45px;
  /* 行 */
}
.font1{ // 获取验证码字体
    width:210px;
    height:40px;
    font-size:40px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(40,40,40,1);
    line-height:40px;
    margin-top: 50px;
}
.font2{ // 验证码已发送至（+86）
    width:500px;
    height:29px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(40,40,40,1);
    line-height:29px;
    margin-top: 20px;
}
.code-input-main { //  输入验证码div
    width:100%;
    height: 60px;
    text-align: center;
    margin-top: 30px;
}
.code-input-main-item {  // input的样式
    width:50px;
    height:50px;
    padding: 2px;
    border:2px solid rgba(230,230,230,1);
    border-radius:6px;
    display: inline-block;
    &:not(:first-child){  margin-left:25px;}
    &:first-child{
        margin-left: -4px;
    }
    text-align: center;
    z-index: 1;
    font-size: 26px;
    vertical-align: top;
    font-weight: 600;
}
input { // 原生input样式清除
    background: none;
    outline: none !important;
    -webkit-appearance: none !important;
    -webkit-appearance: none !important;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
}
</style>
