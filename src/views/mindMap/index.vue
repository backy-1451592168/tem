<template>
  <div>
    G6-思维导图
    <div id="mind"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  data() {
    return {
      colorArr: [
        "#ff7e9a",
        "#5AD8A6",
        "#5D7092",
        "#F6BD16",
        "#6F5EF9",
        "#6DC8EC",
        "#D3EEF9",
        "#DECFEA",
        "#FFE0C7",
        "#1E9493",
        "#BBDEDE",
        "#FF99C3",
        "#FFE0ED",
        "#CDDDFD",
        "#CDF3E4",
        "#CED4DE",
        "#FCEBB9",
        "#D3CEFD",
        "#945FB9",
        "#FF9845",
      ],
      data: {
        id: "id9",
        label: "user",
        archive: 'redis',
        archive: 'redis',
        children: [
          {
            id: "id91",
            label: "user-TEST",
            archive: 'redis',
            children: [
              {
                id: "id9-1-1",
                label: "JJGHB",
                archive: 'redis',
              },
              {
                id: "id9-1-2",
                label: "NJIN",
                archive: 'redis',
              },
            ],
          },
          {
            id: "id1-2",
            label: "XXXXX-ss",
            archive: 'redis',
            children: [
              {
                id: "id1-2-1",
                label: "GWA",
                archive: 'redis',
              },
              {
                id: "id1-2-2",
                label: "GWEA",
                archive: 'redis',
              },
              {
                id: "id1-2-3",
                label: "GAWW",
                archive: 'redis',
              },
            ],
          },
          {
            id: "id1-3",
            label: "XXSD",
            archive: 'redis',
            children: [
              {
                id: "id1-3-1",
                label: "SFGAW",
                archive: 'redis',
              },
              {
                id: "id1-3-2",
                label: "GWEA",
                archive: 'redis',
              },
              {
                id: "id1-3-3",
                label: "SGAW",
                archive: 'redis',
              },
            ],
          },
          {
            id: "id1-4",
            label: "WWSS",
            archive: 'redis',
            children: [
              {
                id: "id1-4-1",
                label: "GWGASG",
                archive: 'redis',
              },
              {
                id: "id1-4-2",
                label: "SFASDF",
                archive: 'redis',
              },
              {
                id: "id1-4-3",
                label: "WEQW",
                archive: 'redis',
              },
            ],
          },
          {
            id: "id1-5",
            label: "QQSD",
            archive: 'redis',
            children: [
              {
                id: "id1-5-1",
                label: "QQQQQQ",
                archive: 'redis',
              },
              {
                id: "id1-5-2",
                label: "RRRRR",
                archive: 'redis',
              },
              {
                id: "id1-5-3",
                label: "TTTTT",
                archive: 'redis',
              },
            ],
          },
        ],
      },
      height: 800,
    };
  },
  mounted() {
    const vm = this;
    const fontSize = 12;
    // 自定义节点
    G6.registerNode("rect-xml", {
      jsx: (cfg) => {
        return `
          <group>
          <rect>
            <rect style={{
              width: 151,
              height: 20,
              fill: fill,
              radius: [6, 6, 0, 0],
              cursor: 'move'，
              stroke: #000000
            }} draggable="true">
              <text style={{
                marginTop: 2,
                marginLeft: 75,
                textAlign: 'center',
                fontWeight: 'bold',
                fill: '#fff' }}>{{archive}}</text>
            </rect>
            <rect style={{
              width: 150,
              height: 55,
              stroke: #000000,
              fill: #ffffff,
              radius: [0, 0, 6, 6],
            }}>
              <text style={{ marginTop: 5, marginLeft: 3, fill: '#333', marginLeft: 4 }}>表名: {{label}}</text>
              <text style={{ marginTop: 10, marginLeft: 3, fill: '#333', marginLeft: 4 }}>创建时间: 2024-03-14</text>
            </rect>
          </rect>
          <circle style={{
            stroke: #000000,
            r: 10,
            fill: '#fff',
            marginLeft: 75,
            cursor: 'pointer'
          }} name="circle">
            <image style={{ img: 'https://preview.cloud.189.cn/image/imageAction?param=AC5A659B54C55177BF5538507BB0B63B7C68FF902EAD9B62E6C1C11D842ECDE3690788C747E8E273DF4475C1B670AC2D0B20E3F4EFFF2C6805F211A29B190CF48534E97D80BD2AB53C0870932886F219CB17BF905803BA9157294B47A5F34D363BDB5960FB5D57E71163B0ED3794C682', width: 12, height: 12,  marginLeft: 70,  marginTop: -5 }} />
          </circle>
        </group>`;
      },
    });
    //获取宽度
    const width = document.getElementById("mind").scrollWidth;
    const graph = new G6.TreeGraph({
      container: "mind",
      width,
      height: vm.height,
      pixelRatio: 2,
      modes: {
        default: ["drag-canvas", "zoom-canvas", "drag-node", "activate-relations"],
      },
      // 节点类型及样式
      defaultNode: {
        type: "rect-xml",
        // style: {
        //   // stroke: "#0092ff",
        // },
      },
      // 连线类型及样式
      defaultEdge: {
        type: "cubic-horizontal",
        // polyline
        style: {
          stroke: "#0092ff",
          lineWidth: 2
        },
      },
      //布局
      layout: {
        type: "mindmap",
        // 节点排列方向，"H" 表示水平方向（从左到右），"V" 表示垂直方向（从上到下）
        direction: "H",
        // 节点高度
        getHeight: function getHeight() {
          return 70;
        },
        // 节点宽度
        getWidth: function getWidth() {
          return 16;
        },
        // 垂直间隔
        getVGap: function getVGap() {
          return 20;
        },
        // 水平间隔
        getHGap: function getHGap() {
          return 130;
        },
      },
    });

    graph.node(function (node) {
      // depth 类似节点标识
      return {
        style: {
          // fill: vm.colorArr[node.depth], //背景色
          stroke: "#005ff2", //边框
        },
        stateStyles: {
          hover: {
            fill: '#0099e3', // 设置鼠标悬停时的填充颜色
          }
        },
        label: node.label,
        archive: 'redis',
      };
    });
    graph.on('node:click', evt => {
      console.log(evt.item._cfg.id);
    })

    graph.on('node:mouseenter', evt => {
      const item = evt.item;
      graph.setItemState(item, 'hover', true); // 添加 hover 状态
    });

    graph.on('node:mouseleave', evt => {
      const item = evt.item;
      graph.setItemState(item, 'hover', false); // 移除 hover 状态
    });
    graph.data(this.data);
    graph.render();
    graph.fitView();
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#mind {
  width: 100%;
  height: 100%;
}
</style>