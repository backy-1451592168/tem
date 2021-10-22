<template>
  <div id="deviceNavigation">
    <h1 class="time">{{timeData}}</h1>
    <i class="iconfont icon-ins"></i>
  </div>
</template>

<script>
export default {
  name: 'deviceNavigation',
  data () {
    this.timer = null
    return {
      timeData: ''
    }
  },
  created () {
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
