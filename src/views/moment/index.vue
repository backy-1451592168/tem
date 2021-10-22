<template>
  <div id="deviceNavigation">
    <el-input v-model="qwe"></el-input>
    <h1 class="time">{{timeData}}</h1>
  </div>
</template>

<script>
export default {
  name: 'deviceNavigation',
  data () {
    this.timer = null
    return {
      qwe: "",
      timeData: ''
    }
  },
  created () {
    // console.log("我走了");
    this.timer = setInterval(_ => {
      this.timeData = this.$moment().format('YYYY-MM-YY HH:mm:ss')
    }
    , 1000)
    // clearInterval(this.timer)
  },
  computed: {
  },
  methods: {
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
}
</style>
