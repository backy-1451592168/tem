<template>
  <div>
    <input v-model="searchQuery" placeholder="输入菜单名称" />
    <button @click="querySearch(searchQuery)">222</button>
    <el-tree
      :data="options"
      :render-content="renderContent"
      :props="{
        children: 'children',
        label: 'name',
      }"
    ></el-tree>
  </div>
</template>

<script>
import list from "./index.json";
import Fuse from "./fuse.min";

export default {
  data() {
    return {
      searchQuery: "采集配置与调度",
      menuData: list,
      fuse: null,
      options: [{
        item: []
      }],
    };
  },
  mounted() {
    this.initFuse();
  },
  methods: {
    querySearch(query) {
      if (query !== "") {
        this.options = [];
        let data = this.fuse.search(query);
        data.forEach(element => {
          this.options.push(element.item)
        });
      } else {
        this.options = [];
      }
      console.log(this.options);
    },
    initFuse() {
      this.fuse = new Fuse(this.menuData.list, {
        shouldSort: true,
        threshold: 0,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          {
            name: "name",
            weight: 0.7, //设置权重
          },
          {
            name: "children.name",
            weight: 0.3, //设置权重
          },
        ],
      });
    },
    renderContent(h, { node, data, store }) {
      let type = data.type == 0 ? '目录' : data.type == 1 ? '菜单' : '按钮'
      let style = data.type == 0 ? 'border: 1px solid #dce3fe; border-radius: 10px; margin-right: 5px; padding: 0px 8px; background-color: #eef1ff; color: #5075fc; font-size: 12px;' : 
        data.type == 1 ? 'border: 1px solid #e1f3d8; border-radius: 10px; margin-right: 5px; padding: 0px 8px; background-color: #f0f9eb; color: #67c23a; font-size: 12px;' : 
        'border: 1px solid #e9e9eb; border-radius: 10px; margin-right: 5px; padding: 0px 8px; background-color: #f4f4f5; color: #909399; font-size: 12px;'
      return (
        <span>
          <span style={style}>{type}</span>
          <span>{node.label}</span>
        </span>
      )
    },
  },
};
</script>
