<template>
  <div class="picServiceQuality">
    <div :id="id" style="width: 100%; height: 100%"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
export default {
  // color 【选中、边圈线、未选中】
  props: ['id', 'targetValue', 'number', 'color', 'markColor', 'gradient'],
  data() {
    return {
      myChart: ''
    };
  },
  mounted() {
    this.init();
    this.$nextTick(() => {
      this.handleResizeMyChart();
      window.addEventListener('resize', this.handleResizeMyChart);
    });
  },
  beforeDestroy() {
    // 在组件生命周期结束的时候销毁。
    window.removeEventListener('resize', this.handleResizeMyChart);
  },
  methods: {
    init() {
      let chartDom = document.getElementById(this.id);
      this.myChart = echarts.init(chartDom);
      let option;

      // let dataArr = this.calculateData()

      option = {
        title: {
          text: this.number + '%',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 'bold'
          },
          left: 'center',
          bottom: 'center',

          itemGap: 60
        },
        tooltip: {
          show: false
        },
        legend: {},
        series: [
          // 内圆
          {
            name: '内圈',
            type: 'pie',
            hoverAnimation: false,
            tooltip: {},
            radius: ['0%', '50%'],
            color: ['#55a2f2', '#0065ba', '#35a2ff', '#12cbf6'],
            label: {
              normal: {
                show: false,
                position: 'center',
                color: '#fff',
                formatter: function (params) {
                  return params.value;
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 0,
                itemStyle: {
                  normal: {
                    color: {
                      colorStops: [
                        {
                          offset: 0,
                          color: this.gradient[1] // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: this.gradient[0] // 100% 处的颜色
                        }
                      ],
                      // 旋转渐变方向
                      type: 'linear',  // 指定为线性渐变
                      x: 0,            // 渐变起点 x 坐标
                      y: 1,            // 渐变起点 y 坐标
                      x2: 0,           // 渐变终点 x 坐标
                      y2: 0            // 渐变终点 y 坐标
                    }
                  }
                }
              }
            ]
          },
          // 值
          {
            name: '数据',
            type: 'pie',
            startAngle: 90,
            clockwise: false, // 表示旋转方向
            radius: ['62%', '75%'],
            legendHoverLink: false,
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 100 - this.number,
                itemStyle: {
                  normal: {
                    color: this.color[2]
                  }
                }
              },
              {
                value: this.number,
                itemStyle: {
                  normal: {
                    color: this.color[0]
                  }
                }
              }
            ]
          },
          // 基准值线
          {
            name: '基准值线',
            type: 'pie',
            startAngle: 90,
            clockwise: false, // 表示旋转方向
            hoverAnimation: false,
            radius: ['53%', '95%'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 100 - this.targetValue,
                itemStyle: {
                  normal: {
                    color: 'rgba(0,0,0,0)'
                  }
                }
              },
              {
                value: 0.7,
                itemStyle: {
                  normal: {
                    color: this.markColor
                  }
                }
              },
              {
                value: this.targetValue - 1.3,
                itemStyle: {
                  normal: {
                    color: 'rgba(0,0,0,0)'
                  }
                }
              }
            ]
          },
          // 最外层 细线
          {
            name: '外圈',
            type: 'pie',
            startAngle: 50,
            hoverAnimation: false,
            radius: ['85%', '86%'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 0,
                itemStyle: {
                  normal: {
                    color: 'rgba(0,0,0,0)'
                  }
                }
              },
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: this.color[1]
                  }
                }
              }
            ]
          }
        ]
      };

      option && this.myChart.setOption(option);
      // this.myChart.resize();
    },
    handleResizeMyChart() {
      let myChart = echarts.init(document.getElementById(this.id));
      myChart.resize();
    },

    // 计算 目标线
    calculateData() {
      // 小
      if (this.number < this.targetValue) {
        return [
          {
            value: 100 - this.targetValue - 1,
            itemStyle: {
              normal: {
                color: this.color[2]
              }
            }
          },
          {
            value: 1,
            itemStyle: {
              normal: {
                color: this.markColor
              }
            }
          },
          {
            value: this.targetValue - this.number,
            itemStyle: {
              normal: {
                color: this.color[2]
              }
            }
          },
          {
            value: this.number,
            itemStyle: {
              normal: {
                color: this.color[0]
              }
            }
          }
        ]
      } else if (this.number > this.targetValue) {
        // 大
        return [
          {
            value: 100 - this.number - 1,
            itemStyle: {
              normal: {
                color: this.color[2]
              }
            }
          },
          {
            value: this.number - this.targetValue,
            itemStyle: {
              normal: {
                color: this.color[0]
              }
            }
          },
          {
            value: 1,
            itemStyle: {
              normal: {
                color: this.markColor
              }
            }
          },
          {
            value: this.targetValue,
            itemStyle: {
              normal: {
                color: this.color[0]
              }
            }
          }
        ]
      } else {
        // 平
        return [
          {
            value: 100 - this.targetValue,
            itemStyle: {
              normal: {
                color: this.color[2]
              }
            }
          },
          {
            value: 1,
            itemStyle: {
              normal: {
                color: this.markColor
              }
            }
          },
          {
            value: this.targetValue - 1,
            itemStyle: {
              normal: {
                color: this.color[0]
              }
            }
          }
        ]
      }
    }
  },
  // 监听数据是否发生变化
  watch: {
    number: {
      handler:function () {
        // 重新渲染
        this.init()
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
  .picServiceQuality {
    width: 80%;
    height: 80%;
    position: relative;
    .baseValue {
      color: #fff;
      position: absolute;
      top: -2px;
      left: 5px;
      font-size: .7rem;
    }
  }
  ::v-deep canvas {
    cursor: pointer;
  }
</style>