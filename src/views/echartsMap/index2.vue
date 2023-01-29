<template>
  <div class="map">
    <ve-heatmap :data="chartData" :extend="mapExtend" :settings="chartSettings"></ve-heatmap>

    8888
  </div>
</template>

<script>
import VeHeatmap from 'v-charts/lib/heatmap.common';
  export default {
    components: {
      VeHeatmap
  },
    data () {
      this.mapExtend = {
        series: {
          type: 'map',
          map: 'china',
          label: {
              show: false
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#000',
              borderColor: '#35a7ca',
              borderWidth: 1
            },
            emphasis: {
              show: false,
              areaColor: null
            }
          }
        },
        backgroundColor: '#000'
      }
      this.chartSettings = {
        position: 'china',
        type: 'map',
        geo: {
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#49e6fe',
            borderWidth: 3,
            shadowColor: '#0a4c8b',
            shadowOffsetY: 0,
            shadowBlur: 60
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        }
      }
      return {
        chartData: {
          columns: ['位置', '税收', '人口', '面积'],
          rows: [
          ]
        }
      }
    },
    mounted() {
    },
    methods: {

    }
  }
</script>
<style scoped>
.map {
  height: 600px;
  width: 600px;
}
</style>