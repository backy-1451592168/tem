import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 类似存储全局变量的 数据
  state: {
    store_data: 'store数据',
    city:"城市名"
  },

  // 提供用来获取state数据的 方法  可以认为是 store 的计算属性
  getters: {
    getStoreDataFn: state => {
      return state.store_data
    }
  },

  // 提供存储设置state数据的方法
  mutations: {
    logout (state) {
      state.store_data = '修改store数据'
    },

    setCity(state, name){
      state.city = name;//将传参设置给state的city
  }
  },

  // 提供跟后台接口打交道的方法，并调用mutations提供的方法
  actions: {
    setCityName({commit,state}, name){
      // 跟后台打交道
      // 调用mutaions里面的方法
      commit("setCity", name);
    }
  },
  modules: {},
});
