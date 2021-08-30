<template>
  <div id="chart">
    <ve-line :data="chartData"></ve-line>
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
