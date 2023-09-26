module.exports = {
  outputDir: 'dist', // 构建输出目录
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  productionSourceMap: false,

  chainWebpack: config => {
    // 生产模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main.js')
      /**
       通过调用 config.set 方法来设置 externals 配置项，指示 Webpack 将 vue、vuex、vue-router、axios、element-ui、v-charts 和 echarts 
       这些模块从打包文件中排除，并从全局引用中获取它们。这样可以减小打包后的文件体积。
       externals 排除
      */ 
      //  对应到你的 package.json 中的依赖名称    ：     全局变量名，即你通过 script 标签引入这些库时所使用的全局对象名称
      // config.set('externals', {
      //   vue: 'Vue',
      //   vuex: 'Vuex',
      //   'vue-router': 'VueRouter',
      //   axios: 'axios',
      //   'element-ui': 'ELEMENT',
      //   'v-charts': 'VCharts',
      //   echarts: 'echarts',
      //   // vuedraggable: 'draggable'
      //   // 'vue-video-player': 'VideoPlayer'
      // })
      // 首页自定义，添加一个变量来控制html模版，是否加载cdn资源。
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })
    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main.js')
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  },
  // 代理配置
  devServer: {
    hot: true,
    // host: "0.0.0.0",
    port: 8888, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌

    // 配置单个代理
    // proxy: 'http://localhost:9000' 

    // 配置多个代理
    proxy: {
      "/dellapi": {
        // target: "http://47.106.159.32:8080/",// 目标主机
        target: "https://s1.z100.vip:39304/",
        // target: "https://www.checkyyan.com/",
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          "^/dellapi": "/"
        }
      },
      "/dellbdApi": {
        target: "http://192.168.0.108:7018/",
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          "^/dellbdApi/api": "/"
        }
      },
      "/wljapi": {
        // target: "http://47.106.159.32:8080/",// 目标主机
        target: "https://s1.z100.vip:17296/",
        // target: "https://www.checkyyan.com/",
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          "^/wljapi": "/"
        }
      },
      "/homeApi": {
        target: "http://192.168.31.26:7018/",
        // target: "http://192.168.6.121:7018/",
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          "^/homeApi/api": "/"
        }
      },
      "/gsApi": {
        target: "http://192.168.170.120:7018/",
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          "^/gsApi/api": "/"
        }
      }
    },
  }
}