<template>
  <div id="chart">
    <ve-line :extend="chartExtend" :data="chartData"></ve-line>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  name: 'chart',
  components: {
    VeLine
  },
  data () {
    this.chartExtend = {
      series: {
        // 柱状图宽度
        barMaxWidth: 35,
        show: true,
      },
      grid: {right: 40},
      tooltip: {
        // position: 'top',
        // show: true,
        // trigger: 'axis',
        formatter (params) {
          console.log(params);
          // let res  = params[0].name
          // res += `<br />${params[0].marker}单位能耗：${params[0].value}`
          // return res
        }
      }
    }
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { '日期': "1/1", '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': "1/2", '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 }
        ]
      }
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#chart {
}
</style>
