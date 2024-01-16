<template>
  <div id="mountNode"></div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  data() {
    return {
      data: {
        nodes: [
          {
            id: "0",
            label: "0",
          },
          {
            id: "1",
            label: "1",
          },
          {
            id: "2",
            label: "2",
          },
          {
            id: "3",
            label: "3",
          },
          {
            id: "4",
            label: "4",
            comboId: "A",
          },
          {
            id: "5",
            label: "5",
            comboId: "B",
          },
          {
            id: "6",
            label: "6",
            comboId: "A",
          },
          {
            id: "7",
            label: "7",
            comboId: "C",
          },
          {
            id: "8",
            label: "8",
            comboId: "C",
          },
          {
            id: "9",
            label: "9",
            comboId: "A",
          },
          {
            id: "10",
            label: "10",
            comboId: "B",
          },
          {
            id: "11",
            label: "11",
            comboId: "B",
          },
        ],
        edges: [
          {
            source: "0",
            target: "1",
          },
          {
            source: "0",
            target: "2",
          },
          {
            source: "1",
            target: "4",
          },
          {
            source: "0",
            target: "3",
          },
          {
            source: "3",
            target: "4",
          },
          {
            source: "2",
            target: "5",
          },
          {
            source: "1",
            target: "6",
          },
          {
            source: "1",
            target: "7",
          },
          {
            source: "3",
            target: "8",
          },
          {
            source: "3",
            target: "9",
          },
          {
            source: "5",
            target: "10",
          },
          {
            source: "5",
            target: "11",
          },
        ],
        combos: [
          {
            id: "A",
            label: "combo A",
            style: {
              fill: "#C4E3B2",
              stroke: "#C4E3B2",
            },
          },
          {
            id: "B",
            label: "combo B",
            style: {
              stroke: "#99C0ED",
              fill: "#99C0ED",
            },
          }
        ],
      },
    };
  },
  mounted() {
    this.getView();
  },
  methods: {
    getView() {
      const container = document.getElementById("mountNode");

      const width = container.scrollWidth;
      const height = container.scrollHeight;
      // const width = window.
      const graph = new G6.Graph({
        container: "mountNode",
        width,
        height: height - 50,
        fitView: true,
        fitViewPadding: 30,
        animate: true,
        groupByTypes: false,
        modes: {
          // 允许拖拽画布、放缩画布、拖拽节点
          default: [
            "zoom-canvas",
            "drag-combo",
            "drag-node",
            "drag-canvas",
            {
              type: "collapse-expand-combo",
              relayout: false,
            },
          ],
        },
        layout: {
          type: "dagre",
          sortByCombo: false,
          ranksep: 10,
          nodesep: 10,
        },
        defaultNode: {
          size: [60, 30],
          type: "rect",
          anchorPoints: [
            [0.5, 0],
            [0.5, 1],
          ],
        },
        defaultEdge: {
          type: "line",
        },
        defaultCombo: {
          type: "rect",
          style: {
            fillOpacity: 0.1,
          },
        },
      });
      graph.data(this.data);
      graph.render(); // 渲染图
    },
  },
};
</script>

<style>
#mountNode {
  width: 80%;
  height: 80vh;
}
</style>

