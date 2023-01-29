<template>
  <div class="map">
    <div id="myChart" ref="charts" class="my-chart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
// require("echarts/theme/macarons"); // echarts 主题
// import china from "echarts/map/json/china.json";
import chinaJson from '@/assets/map/china.json';
import xinjiangJson from '@/assets/map/xinjiang.json';
import liaoningJson from '@/assets/map/liaoning.json';
import anhuiJson from '@/assets/map/anhui.json';
import beijingJson from '@/assets/map/beijing.json';
import chongqingJson from '@/assets/map/chongqing.json';
import fujianJson from '@/assets/map/fujian.json';
import gansuJson from '@/assets/map/gansu.json';
import guangdongJson from '@/assets/map/guangdong.json';
import hainanJson from '@/assets/map/hainan.json';
import hebeiJson from '@/assets/map/hebei.json';
import henanJson from '@/assets/map/henan.json';
import jiangsuJson from '@/assets/map/jiangsu.json';
import jilinJson from '@/assets/map/jilin.json';
import neimengguJson from '@/assets/map/neimenggu.json';
import qinghaiJson from '@/assets/map/qinghai.json';
import tianjinJson from '@/assets/map/tianjin.json';
import xizangJson from '@/assets/map/xizang.json';
import yunnanJson from '@/assets/map/yunnan.json';
import zhejiangJson from '@/assets/map/zhejiang.json';
import shanghaiJson from '@/assets/map/shanghai.json';
  export default {
    components: {
  },
    data () {
      this.provinceToMapJson = {
      'guangdong': guangdongJson,
      'hainan': hainanJson,
      'chongqing': chongqingJson,
      'yunnan': yunnanJson,
      'gansu': gansuJson,
      'qinghai': qinghaiJson,
      'xinjiang': xinjiangJson,
      'beijing': beijingJson,
      'henan': henanJson,
      'tianjin': tianjinJson,
      'hebei': hebeiJson,
      'neimenggu': neimengguJson,
      'liaoning': liaoningJson,
      'jilin': jilinJson,
      'shanghai': shanghaiJson,
      'jiangsu': jiangsuJson,
      'zhejiang': zhejiangJson,
      'anhui': anhuiJson,
      'fujian': fujianJson,
      'xizang': xizangJson,
      'china': chinaJson
      }
      this.provinceMap = {
        全国: 'china',
        湖北: 'hubei',
        黑龙江: 'heilongjiang',
        湖南: 'hunan',
        广东: 'guangdong',
        海南: 'hainan',
        广西: 'guangxi',
        重庆: 'chongqing',
        四川: 'sichuan',
        贵州: 'guizhou',
        云南: 'yunnan',
        陕西: 'shanxi1',
        甘肃: 'gansu',
        青海: 'qinghai',
        宁夏: 'ningxia',
        新疆: 'xinjiang',
        北京: 'beijing',
        河南: 'henan',
        天津: 'tianjin',
        河北: 'hebei',
        山西: 'shanxi',
        内蒙古: 'neimenggu',
        辽宁: 'liaoning',
        吉林: 'jilin',
        上海: 'shanghai',
        江苏: 'jiangsu',
        浙江: 'zhejiang',
        安徽: 'anhui',
        福建: 'fujian',
        江西: 'jiangxi',
        山东: 'shandong',
        西藏: 'xizang'
      }
      return {
        area: '全国',
        dataList: [
          {name: '广州市', value: 100},
          {name: '茂名市', value: 100}
        ]
      }
    },
    mounted() {
      this.map()
    },
    methods: {
      map() {
        echarts.registerMap (this.provinceMap[this.area], this.provinceToMapJson[this.provinceMap[this.area]])
        console.log(echarts);
        const myChart = echarts.init(this.$refs.charts)
        // var myChart = echarts.init(document.getElementById('myChart'))
        const option = {
          backgroundColor: '#000',//画布背景颜色
          geo: {
            show: true,
            map: 'china',
            label: {
                show: false
            },
            roam: false,
            center: null,
            zoom: 1,
            itemStyle: {
              borderColor: '#49e6fe',
              borderWidth: 3,
              shadowColor: '#0a4c8b',
              shadowOffsetY: 0,
              shadowBlur: 60
            }
          },
          series: [
            {
              type: 'map',
              map: 'china',
              data: this.dataList,
              label: {
                  show: false
              },
              roam: false,
              center: null,
              zoom: 1,
              itemStyle: {
                normal: {
                  areaColor: '#0d2d57',
                  borderColor: '#35a7ca',
                  borderWidth: 1
                },
                emphasis: {
                  show: false,
                  areaColor: null
                }
              },
            }
          ],
          visualMap: [
            {
              type: 'continuous',
              min: 0,
              max: 100,
              text: ['高', '低'],
              // realtime: false,
              show: false,
              calculable: false, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
              type: 'continuous',
              splitNumber: 2,
              // left: '5%',
              bottom: '12%',
              inRange: {
                // 低到高
                color: ['#153581', '#102e6c', '#0d2a5c', '#0a244d ', '#061e3f']
              }
            }
          ]
        }
        myChart.setOption(option)

        // 鼠标点击地图外 还原地图大小
        myChart.getZr().on('click', params => {
          if (!params.target && this.area !== '全国') {
            this.area = '全国'

            option.geo.map = this.provinceMap[this.area]
            option.geo.roam = false
            option.geo.center = null
            option.geo.zoom = 1

            option.series[0].map = this.provinceMap[this.area]
            option.series[0].roam = false
            option.series[0].center = null
            option.series[0].zoom = 1
            echarts.registerMap(this.provinceMap[this.area], this.provinceToMapJson[this.provinceMap[this.area]])
            // 渲染
            myChart.setOption(option, true)
          }
        })
        
        // 下钻地市
        myChart.on('click', ({ name }) => {
          console.log(name);
          if (!this.provinceMap[name]) return
          this.area = name
          option.geo.map = this.provinceMap[name]
          option.series[0].map = this.provinceMap[name]
          if (name == '海南') {
            option.geo.roam = true
            option.geo.center = [109.807644, 19]
            option.geo.zoom = 6
            
            option.series[0].roam = true
            option.series[0].center = [109.807644, 19]
            option.series[0].zoom = 6
          } else {
            option.geo.roam = false
            option.geo.center = null
            option.geo.zoom = 1

            option.series[0].roam = false
            option.series[0].center = null
            option.series[0].zoom = 1
          }
          echarts.registerMap(this.provinceMap[name], this.provinceToMapJson[this.provinceMap[name]])
          // 渲染
          myChart.setOption(option, true)
        })

        this.$nextTick(()=> {
          myChart.resize()
        })
        // setTimeout(function() {
        //   window.onresize = function() {
        //   }
        // }, 200)
      },

    }
  }
</script>
<style scoped>
.my-chart {
  height: 600px;
  width: 600px;
}
</style>