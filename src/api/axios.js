import axios from 'axios'
import Router from '@/router/index'
import { Message } from 'element-ui'

// 开发环境
let BASE_URL
if (process.env.NODE_ENV === "development") {
  // BASE_URL = '/wljapi'
  // BASE_URL = '/dellbdApi'
  // BASE_URL = '/dellapi'
  // BASE_URL = '/homeApi'
  BASE_URL = '/gsApi'
} else {
  // BASE_URL = ''
  BASE_URL = 'https://s1.z100.vip:39304/'
}


// 请求拦截
axios.interceptors.request.use(
  (config) => {
    // 转成 URL编码格式
    const encodedString = encodeURIComponent(window.sessionStorage.locationData);
    // IP地址信息
    config.headers['locationData'] = encodedString
    // 请求头 带权限值 token
    if (config.url !== '/gpsManage' && window.sessionStorage.token !== undefined) {
      // 后端校验
      config.headers.Authorization = window.sessionStorage.token
    }
    return config
  },
  (err) => {
    // 方法返回一个带有拒绝原因res参数的Promise对象  在console里展示报错信息
    return Promise.reject(err)
  }
)

// 2. http response 返回拦截器
axios.interceptors.response.use(
  //2.0 响应拦截
  (response) => {
    // console.log(response);
    //2.1 直接将返回的状态码 重命名为 code 在判断中进行判断
    const code = response.status
    //2.2 将返回数据重新命名为 res 、res 就是数据
    const res = response.data
    // console.log(code)
    //2.2.1 默认为 true 直接进入判断直接根据状态码的范围 将返回的数据 res 
    switch (true) {
      case code >= 200 && code < 300:
        if (code == 201) {
          Message.success('登录成功')
        } else {
          // Message.success('请求成功')
        }
        return Promise.resolve(res)
      //2.2.2 根据后端返回的错误信息 通过匹配，然后通过 message 进行提示
      case res.msg:
        Message.error(res.msg)
        // console.log(res,'返回的值');
        //2.2.3 直接返回一个空
        return null
      case code === 418:
        //2.2.4 后端判断用户的请求头中是否有 Authentication 是否有 请求凭证，然后返回 401 状态码，然后前端将用户 push 到登录页
        Router.push({ path: '/gpsManage' })
        Message.error('密钥过期，请重新登录！')
        return null
      default:
        // 2.2.5 将所有的错误 和 所有对状态码 都进行判断，最后都不匹配，走 default ，将 res 数据进行返回
        return Promise.resolve(res)
    }
  },

  // 响应错误时触发
  (error) => {
    // console.log('响应拦截')
    // console.dir(error)
    if (error.message.includes('timeout')) {
      // Message.error('请求超时，请重试')
      // console.log('请求超时，请重试')
      return {
        data: {
          erron: 1001,
          errmsg: '请求超时，请重试',
        },
      }
    }
    if (error.response) {
      const code = error.response.status
      // console.log(code);
      const res = error.response.data
      switch (true) {
        case code === 418:
          Router.push({ path: '/gpsManage' })
          Message.error('请先登录')
          return null
        default:
          if (res.ch_msg) {
            Message.error(`${res.ch_msg}【${res.en_msg}】`)
          } else {
            Message.error(`${res.msg}`)
          }
          // 方法返回一个带有拒绝原因res参数的Promise对象  在console里展示报错信息
          return Promise.reject(res)
      }
    } else {
      // Message.error('请求无响应')
      // console.log('请求无响应');
      return null
    }
  }
)

function _asiox(method, url, data, config) {
  return new Promise((resolve, reject) => {
    if (method === 'get') {
      axios.get(url, {
        params: data,
        ...config
      }).then((response) => {
        resolve(response)
      }).catch((response) => {
        reject(response)
      })
    } else if (method === 'options') {
      axios.options(url, {
        params: data,
        ...config
      }).then((response) => {
        resolve(response)
      }).catch((response) => {
        reject(response)
      })
    } else {
      axios({
        method,
        url,
        data,
        ...config
      }).then((response) => {
        resolve(response)
      }).catch((response) => {
        reject(response)
      })
    }
  })
}
// axios 配置
axios.defaults.timeout = 60 * 5000
axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = true
axios.defaults.credentials = true
axios.defaults.headers.put['Content-Type'] = 'multipart/form-data'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const http = {
  get: (url, data, config) => _asiox('get', url, data, config),
  post: (url, data, config) => _asiox('post', url, data, config),
  options: (url, data, config) => _asiox('options', url, data, config),
  put: (url, data) => _asiox('put', url, data),
  patch: (url, data) => _asiox('patch', url, data),
  delete: (url, data) => _asiox('delete', url, data),
  all: (requestArr) => axios.all(requestArr)
}
export { http }