<template>
  <div id="storeView">
    1212
  </div>
</template>

<script>
export default {
  name: 'storeView',
  components: {
  },
  data () {
    return {
      cityArr:['北京','上海','广州','深圳','茂名','张家界','清远','汕头','佛山']
    }
  },
  created () {
    this.first()
  },
  computed: {
  },
  methods:{
    first () {
      // 获取vuex数据
      console.log(this.$store.state);
      // 使用vuex的getters方法
      console.log(this.$store.getters.getStoreDataFn);

      // 调vuex mutations方法
      this.$store.commit('logout')
      this.test()

      // 调用vuex的ations设置城市的值
      this.$store.dispatch("setCityName", this.cityArr[1]);
      console.log(this.$store.state.city);
    },
    test () {
      // 被this.$store.commit('logout') 处理完后的数据
      console.log(this.$store.state.store_data);
    }
  }
}
</script>

<style lang="scss" scoped>
#storeView {
}
</style>
