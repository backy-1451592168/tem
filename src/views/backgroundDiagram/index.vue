<template>
  <div id="deviceNavigation">
    <div class="homepage">
      <div class="page-header-image" ref="pageHeaderImage"></div>
      <div class="content-center">
        <h1 class="time h1-seo">Backy</h1>
        <h2>{{timeData}}</h2>
      </div>
    </div>
    <div>
      <div class="middle-content">
        <div class="col-md">
          <h2 class="title">Completed with examples</h2>
          <div>
            <div class="description">
              <p>The kit comes with three pre-built pages to help you get started</p>
              <p>faster. You can change the text and images and you're good to go.</p>
              <p>More importantly, looking at them will give you a picture of what</p>
              <p>you can built with this powerful Bootstrap 4 ui kit.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-signup">
        <div class="container">
          <div class="row">
            <div>
              <h2>SIGN UP</h2>
              <div>
                <a>
                  <i class="iconfont icon-ins"></i>
                </a>
              </div>
            </div>
            <ul>
              <li>
                <p>邮箱:</p>
                <button></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Card } from '../../components.Card.vue';
export default {
  name: 'deviceNavigation',
  components: {
    // Card
  },
  data () {
    this.timer = null
    return {
      timeData: '',
      inde: 0
    }
  },
  created () {
    this.timer = setInterval(_ => {
      this.timeData = this.$moment().format('YYYY-MM-YY HH:mm:ss')
    }
    , 1000)
    // clearInterval(this.timer)
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true); //监听滚动事件
  },
  computed: {
  },
  methods: {
    // 获取滚动条距离顶部高度
    handleScroll(e) {
      // console.log(e);
      // 方法一
      var top = Math.floor(document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset)
      // console.log(top)
      console.log(this.inde);
      console.log(top);
      // 方法二
      // this.$nextTick(()=>{
      //   var top = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
      //   console.log(top)
      // })
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
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .time {
    text-align: center;
  }
  .homepage {
    height: 100vh;
    .page-header-image{
      position: absolute;
      background-size: cover;
      background-position: center center;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-image:url('../../assets/img/header.jpg');
      // 高斯模糊
      -webkit-filter: blur(3px);
         -moz-filter: blur(3px);
          -ms-filter: blur(3px);    
              filter: blur(3px);
    }
    .content-center{
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      -ms-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      color: #FFFFFF;
      padding: 0 15px;
      width: 100%;
      max-width: 500px;
  
      .h1-seo {
        font-size: 3.8em;
        text-transform: uppercase;
        font-weight: 300;
      }
    }
  }
  .middle-content {
    width: 100%;
    text-align: center;
    padding: 80px;
    -webkit-box-pack: center !important;
    justify-content: center !important;

    .title {
    font-weight: 700;
    font-size: 2.5em;
    padding-top: 30px;
    margin-bottom: 30px;
    }

    .description {
      color: #9A9A9A;
      font-weight: 300;
    }
  }

  .section {
    background-image: url('../../assets/img/bg11.jpg'); 
    background-size: cover; 
    background-position: top center; 
    min-height: 700px;

    .container {
      height: 100%;
      width: 100%;
      z-index: 1;
      text-align: center;
      position: relative;

      .row {
        max-width: 350px;
        background-color: #f96332;
        height: 600px;
        margin: 0 auto;

        ul {
          margin-top: 50px;
          display: inline-block;
          li {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style-type: none;
            margin: 20px auto;

            p {
              font-size: 18px;
            }

            button {
              width: 180px;
              height: 30px;
              border-radius: 10px;
              border: 1px solid;
            }
          }
        }
      }
    }
  }
}
</style>
