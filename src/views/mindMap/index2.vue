<template>
  <div style="width: 100%;height: 100%;">
    <!-- 流程预览图画布 -->
    <div id="containerBox"
         style="background: #F7F8FA;border-radius: 4px;">
    </div>
  </div>
</template>
<script>
import G6 from '@antv/g6'
import insertCss from 'insert-css';
// 这个样式是作用于modes里的tooltip
insertCss(`
 .g6-tooltip {
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    background-color: #3C3D42;
    text-align: left;
    width: 240px;
    padding: 6px 12px;
  }
`);
insertCss(`
  .g6-component-tooltip {
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    background-color: #3C3D42;
    text-align: left;
    width: 240px;
    padding: 6px 12px;
  }
`);
export default {
  name: "previewProcess",
  data () {
    return {
      a: {
        nodes: [
          {
            id: '1',
            dataType: 'start',
            name: 'alps_file1',
          },
          {
            id: '2',
            dataType: 'condition',
            name: 'alps_file2二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二',
          },
          {
            id: '3',
            dataType: 'examine',
            name: 'alps_file3三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三',
          },
          {
            id: '4',
            dataType: 'examine',
            name: 'sql_file4四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四',
          },
          {
            id: '5',
            dataType: 'examine',
            name: 'sql_file5',
          },
          {
            id: '6',
            dataType: 'end',
            name: 'feature_etl_1',
          }
        ],
        edges: [
          {
            source: '1',
            target: '2',
          },
          {
            source: '1',
            target: '3',
          },
          {
            source: '2',
            target: '4',
          },
          {
            source: '3',
            target: '4',
          },
          {
            source: '4',
            target: '5',
          },
          {
            source: '5',
            target: '6',
          }
        ],
      }
    }
  },
  props: {
    mapData: { // 预览数据
      type: Object,
      default: () => {
        return {}
      }
    },
    mapHeight: { // 高度H
      type: String,
      default: '600'
    },
  },
  mounted () {
    this.customNode()
    this.createNode(this.a) // 参数名为a,后期正式使用a都改成mapData
  },
  activated () {
  },
  watch: {
  },
  computed: {
  },
  methods: {
    // 文字过长显示...
    fittingString (str, maxWidth, fontSize) {
      const ellipsis = '...'
      const ellipsisLength = G6.Util.getTextSize(ellipsis, fontSize)[0]
      let currentWidth = 0
      let res = str
      const pattern = new RegExp('[\u4E00-\u9FA5]+') // distinguish the Chinese charactors and letters
      str.split('').forEach((letter, i) => {
        if (currentWidth > maxWidth - ellipsisLength) return
        if (pattern.test(letter)) {
          // Chinese charactors
          currentWidth += fontSize
        } else {
          // get the width of single letter according to the fontSize
          currentWidth += G6.Util.getLetterWidth(letter, fontSize)
        }
        if (currentWidth > maxWidth - ellipsisLength) {
          res = `${str.substr(0, i)}${ellipsis}`
        }
      })
      return res
    },
    // 自定义节点方法
    customNode () {
      const _that = this

      G6.registerNode(
        'sql',
        {
          drawShape (cfg, group) {
            let index = _that.a.nodes.length - 1
            // 判断为开始、结束节点
            if (cfg.id === _that.a.nodes[0].id || cfg.id === _that.a.nodes[index].id) {
              const startEnd = group.addShape('rect', {
                attrs: {
                  x: -10,
                  y: -25,
                  width: 100,
                  height: 36,
                  stroke: '#C3C5D9',
                  radius: 18,
                  fill: '#fff',
                },
                name: 'main-box',
                draggable: true,
              });
              group.addShape('text', {
                attrs: {
                  text: cfg.id === _that.a.nodes[0].id ? '发起节点' : '结束',
                  x: 40,
                  y: -6,
                  textAlign: 'center',
                  textBaseline: 'middle',
                  fill: '#202340',
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'PingFangSC-Regular, PingFang SC',
                  lineHeight: 20,
                },
                name: 'text-shape',
              });
              return startEnd;
            } else {
              // 判断是条件还是审核人展示不同样式
              if (cfg.dataType === 'condition') {
                // 条件：整个节点矩形
                const rect = group.addShape('rect', {
                  attrs: {
                    x: -75,
                    y: -25,
                    width: 230,
                    height: 86,
                    radius: 4,
                    stroke: '#C3C5D9',
                    fill: '#F7F8FA',
                    lineWidth: 1,
                  },
                  name: 'rect-shape',
                });
                // 条件：上面标题矩形
                const titleRect = group.addShape('rect', {
                  attrs: {
                    x: -74.5,
                    y: -24.5,
                    width: 229,
                    height: 35,
                    radius: [4, 4, 0, 0],
                    stroke: '#C3C5D9',
                    fill: '#E2E3EE',
                    lineWidth: 0,
                  },
                  name: 'rect-title',
                });
                // 条件：上面矩形标题文字
                const title = group.addShape('text', {
                  attrs: {
                    text: _that.fittingString(cfg.dataType + '标题', 198, 14),
                    x: -58,
                    y: -8,
                    textAlign: 'left',
                    textBaseline: 'middle',
                    fill: '#565B85',
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: 'PingFangSC-Regular, PingFang SC',
                    lineHeight: 20,
                  },
                  name: 'title-box',
                });
                // 条件：矩形下面的文本文字
                const text = group.addShape('text', {
                  attrs: {
                    text: _that.fittingString(cfg.name + '文本', 198, 14),
                    x: -58,
                    y: 35,
                    textAlign: 'left',
                    textBaseline: 'middle',
                    fill: '#202340',
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: 'PingFangSC-Regular, PingFang SC',
                    lineHeight: 20,
                  },
                  name: 'text-box',
                });
                return rect;
              } else { // 审核人展示的样式
                // 审核人：整个节点矩形
                const rect = group.addShape('rect', {
                  attrs: {
                    x: -75,
                    y: -25,
                    width: 230,
                    height: 86,
                    radius: 4,
                    stroke: '#FFCA80',
                    fill: '#FFF9F2',
                    lineWidth: 1,
                  },
                  name: 'rect-shape',
                });
                // 审核人：上面标题矩形
                const titleRect = group.addShape('rect', {
                  attrs: {
                    x: -74.5,
                    y: -24.5,
                    width: 229,
                    height: 35,
                    radius: [4, 4, 0, 0],
                    stroke: '#C3C5D9',
                    fill: '#FFDFB2',
                    lineWidth: 0,
                  },
                  name: 'rect-title',
                });
                // 审核人：上面矩形标题文字
                const title = group.addShape('text', {
                  attrs: {
                    text: _that.fittingString(cfg.dataType + '标题', 198, 14),
                    x: -58,
                    y: -8,
                    textAlign: 'left',
                    textBaseline: 'middle',
                    fill: '#D97F00',
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: 'PingFangSC-Regular, PingFang SC',
                    lineHeight: 20,
                  },
                  name: 'title-box',
                });
                // 审核人：矩形下面的文本文字
                const text = group.addShape('text', {
                  attrs: {
                    text: _that.fittingString(cfg.name + '文本', 198, 14),
                    x: -58,
                    y: 35,
                    textAlign: 'left',
                    textBaseline: 'middle',
                    fill: '#202340',
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: 'PingFangSC-Regular, PingFang SC',
                    lineHeight: 20,
                  },
                  name: 'text-box',
                });
                return rect;
              }

            }
          },
        },
        'single-node',
      );
    },
    // 根据数据创建树状图节点
    createNode (mapData) {
      let tooltip = new G6.Tooltip({
        offsetX: 0,
        offsetY: 30,
        // 固定tooltip位置
        // fixToNode: [0, 1],
        // 允许出现 tooltip 的 item 类型
        itemTypes: ['node'],
        // 自定义 tooltip 内容
        getContent: (e) => {
          console.log('e=======', e.item);
          const outDiv = document.createElement('div');
          outDiv.style.width = '100%';
          // outDiv.style.background = 'red';
          outDiv.innerHTML = `<div>${e.item._cfg.model.name}</div>`;
          return outDiv;
        },
        shouldBegin: (e) => {
          let str = this.fittingString(e.item._cfg.model.name, 198, 14)
          let index = str.indexOf('.')
          if (index > -1) {
            return true
          }
          return false
        },
      });
      
      const container = document.getElementById('containerBox');
      const width = container.scrollWidth;
      const height = container.scrollHeight || this.mapHeight;
      const graph = new G6.Graph({
        container: 'containerBox',
        width,
        height,
        plugins: [tooltip],
        layout: {
          type: 'dagre',
          nodesepFunc: (d) => { // 节点左右边距
            if (d.id === '3') {
              return 500;
            }
            return 50;
          },
          ranksep: 60,  // 节点上下边距
        },
        defaultNode: {
          type: 'sql',
          anchorPoints: [
            [0.5, 1],
            [0.5, 0]
          ]
        },
        defaultEdge: { // 连接线样式
          type: 'polyline',
          style: {
            radius: 0,
            offset: 45,
            // 这个字段默认是true
            // endArrow: true,
            lineWidth: 2,
            stroke: '#C3C5D9',
            endArrow: {
              path: 'M 0,0 L 8,4 L 8,-4 Z',
              fill: '#C3C5D9',
            },
          },
        },
        nodeStateStyles: {
          selected: {
            stroke: '#d9d9d9',
            fill: '#5394ef',
          },
        },
        modes: {
          default: [
            'drag-canvas',
            'zoom-canvas',
            'drag-node',
            // {
            //   type: 'tooltip',
            //   formatText (model) {
            //     const cfg = model.name;
            //     return cfg
            //   },
            //   shouldBegin: (e) => {
            //     let str = this.fittingString(e.item._cfg.model.name, 198, 14)
            //     let index = str.indexOf('.')
            //     if (index > -1) {
            //       return true
            //     }
            //     return false
            //   },
            //   offset: 30
            // },
          ],
        },
        fitView: true,
      });
      graph.data(mapData);
      graph.render();
    // 这里是用于判断连接线是否有箭头
    //  mapData.nodes.forEach((node) => {
    //    if (node.dataType === 'condition') {
    //      mapData.edges.forEach((edge) => {
    //        if (edge.target === node.id) {
    //          edge.style.endArrow = false;
    //       }
    //     })
    //   }
    // });
      if (typeof window !== 'undefined')
        window.onresize = () => {
          if (!graph || graph.get('destroyed')) return;
          if (!container || !container.scrollWidth || !container.scrollHeight) return;
          graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
    }
  }
}
</script>


