import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入elemen组件
import ElementUI from 'element-ui'
import './scss/element-variables.scss';
// 引入view
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// 中英文组件
import VueI18n from 'vue-i18n'
// 引入自定义翻译
import Zh from './langs/zh.js'
import En from './langs/en.js'
// View组件中英文
import enLocale from 'view-design/dist/locale/en-US';
import zhLocale from 'view-design/dist/locale/zh-CN';
//  moment.js
import moment from 'moment'

// filters
import filters from '@/filters'


// import VueTypedJs from 'vue-typed-js'
// Vue.use(VueTypedJs)
// v-charts
// import VCharts from 'v-charts'

// import 'v-charts/lib/style.css'
// Vue.use(VCharts)

Vue.use(ElementUI)
Vue.use(ViewUI)
Vue.use(VueI18n)

// moment
Vue.prototype.$moment = moment
moment.locale('zh-cn') // 这里是进行了汉化 不写这句默认格式是外国的

Vue.locale = () => {};

// 中英文切换
const messages = {
  en: {
    ...En,
    ...enLocale
  },
  zh: {
    ...Zh,
    ...zhLocale
  }
}

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    // children[0] element-UI的输入框中嵌套在div中
    el.children[0].focus()
  }
})

// 全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 提供字符串形式的 Vue 安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略。
// var version = Number(Vue.version.split('.')[0])
// console.log(version);

const i18n = new VueI18n({
  locale: 'zh', // 定义默认语言为中文 
  messages
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
