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
      arrId: ['id97', 'id124'],
      treeData: {
        schema: "jiake-asset-management",
        relationship: "下游",
        archive: "asd",
        id: "id105",
        label: "105",
        libraryType: "Mysql",
        children: [
          {
            schema: "jiake-asset-management",
            relationship: "下游",
            archive: "dsa",
            id: "id120",
            label: "120",
            libraryType: "Mysql",
            children: [
              {
                schema: "jiake-asset-management",
                relationship: "下游",
                archive: "test1",
                id: "id121",
                label: "121",
                libraryType: "Mysql",
              },
            ],
          },
          {
            schema: "jiake-asset-management",
            relationship: "上游",
            archive: "test5",
            id: "id124",
            label: "124",
            libraryType: "Mysql",
          },
          {
            schema: "jiake_workorder_stats",
            relationship: "上游",
            archive: "dz_zw_order_mate_rate1",
            id: "id97",
            label: "97",
            libraryType: "Doris",
            children: [
              {
                schema: "jiake-asset-management",
                relationship: "上游",
                archive: "test2",
                id: "id122",
                label: "122",
                libraryType: "Mysql",
              },
              {
                schema: "jiake-asset-management",
                relationship: "上游",
                archive: "test3",
                id: "id123",
                label: "123",
                libraryType: "Mysql",
              },
            ],
          },
        ],
      },
      height: 800,
    };
  },
  mounted() {
    const _this = this;
    // 自定义节点
    G6.registerNode("rect-xml", {
      jsx: (cfg) => {
        return `
          <group>
          <rect>
            <rect style={{
              width: 200,
              height: 20,
              fill: fill,
              radius: [6, 6, 0, 0],
              cursor: 'move'，
              stroke: #000000
            }} draggable="true">
              <text style={{
                marginLeft: 100,
                textAlign: 'center',
                fontWeight: 'bold',
                fill: '#fff' }}>{{libraryType}}</text>
            </rect>
            <rect style={{
              width: 200,
              height: ${cfg.id !== _this.treeData.id ? 75 : 55},
              stroke: #000000,
              fill: #ffffff,
              radius: [0, 0, 6, 6],
              cursor: 'pointer'
            }}>
              <text style={{ marginTop: 5, marginLeft: 3, fill: '#333', marginLeft: 4, cursor: 'pointer' }}>所属库: {{schema}}</text>
              <text style={{ marginTop: 10, marginLeft: 3, fill: '#333', marginLeft: 4, cursor: 'pointer' }}>表名: {{archive}}</text>
              ${cfg.id !== _this.treeData.id ? `<text style={{ marginTop: 15, marginLeft: 3, fill: '#333', marginLeft: 4, cursor: 'pointer' }}>关系位置: {{relationship}}</text>` : ''}
            </rect>
          </rect>
        </group>`;
      },
    });

    // <circle style={{
    //   stroke: #000000,
    //   r: 10,
    //   fill: '#fff',
    //   marginLeft: 75
    // }} name="circle">
    //   <image style={{ img: 'https://preview.cloud.189.cn/image/imageAction?param=AC5A659B54C55177BF5538507BB0B63B7C68FF902EAD9B62E6C1C11D842ECDE3690788C747E8E273DF4475C1B670AC2D0B20E3F4EFFF2C6805F211A29B190CF48534E97D80BD2AB53C0870932886F219CB17BF905803BA9157294B47A5F34D363BDB5960FB5D57E71163B0ED3794C682', width: 12, height: 12,  marginLeft: 70,  marginTop: -5 }} />
    // </circle>

    //获取宽度
    const width = document.getElementById("mind").scrollWidth;
    const graph = new G6.TreeGraph({
      container: "mind",
      width,
      height: _this.height,
      pixelRatio: 2,
      modes: {
        default: [
          "drag-canvas",
          "zoom-canvas",
          "drag-node",
          "activate-relations",
        ],
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
          lineWidth: 2,
        },
      },
      //布局
      layout: {
        type: "mindmap", // 脑图树
        // 节点排列方向，"H" 表示水平方向（从左到右），"V" 表示垂直方向（从上到下）
        direction: "H",
        // 节点高度
        getHeight: function getHeight() {
          return 90;
        },
        // 节点宽度
        getWidth: function getWidth() {
          return 16;
        },
        // 垂直间隔
        // getVGap: function getVGap() {
        //   return 20;
        // },
        // 水平间隔
        getHGap: function getHGap() {
          return 130;
        },
        // 节点排布在根节点的左侧/右侧
        getSide: (d) => {
          console.log(d);
          if (_this.arrId.indexOf(d.id) !== -1) {
            return 'left'
          } else {
            return 'right'
          }
        }
      },
    });

    graph.node(function (node) {
      // depth 类似节点标识
      return {
        style: {
          // fill: _this.colorArr[node.depth], //背景色
          stroke: "#005ff2", //边框
        },
        stateStyles: {
          hover: {
            fill: "#0099e3", // 设置鼠标悬停时的填充颜色
          },
        },
        label: node.label,
        // archive: "redis",
      };
    });
    graph.on("node:click", (evt) => {
      // console.log(evt.item._cfg.id);
    });

    graph.on("node:mouseenter", (evt) => {
      const item = evt.item;
      graph.setItemState(item, "hover", true); // 添加 hover 状态
    });

    graph.on("node:mouseleave", (evt) => {
      const item = evt.item;
      graph.setItemState(item, "hover", false); // 移除 hover 状态
    });


    graph.data(this.treeData);
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