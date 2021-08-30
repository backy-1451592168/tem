module.exports = {
  outputDir: 'templates', // 构建输出目录
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  productionSourceMap: false,

  chainWebpack: config => {
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
    // host: "0.0.0.0",
    port: 8888, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌

    // 配置单个代理
    // proxy: 'http://localhost:9000' 

    // 配置多个代理
    // proxy: {
    //   "/api": {
    //     // target: "https://127.0.0.0:8080", // 目标主机
    //     target: "https://mock.yonyoucloud.com/mock/5708",
    //     ws: true, //代理的WebSockets
    //     changeOrigin: true, // 允许websockets跨域
    //     pathRewrite: {
    //         "^/api": ""
    //     }
    //   }
    // }
  }
}