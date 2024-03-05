<template>
  <div>
    <el-input v-model="searchQuery" placeholder="输入菜单名称"></el-input>
    <div style="width: 400px; max-height: 500px; overflow-y: scroll; padding-right: 10px;">
      <el-tree
        :data="menuData"
        :render-content="renderContent"
        :filter-node-method="filterNode"
        ref="tree"
        :props="{
          children: 'children',
          label: 'name',
        }"
      ></el-tree>
    </div>
  </div>
</template>

<script>
import list from "./index.json";

export default {
  data() {
    return {
      searchQuery: "自动",
      menuData: []
    };
  },
  watch: {
    searchQuery(val) {
      this.$refs.tree.filter(val);
    },
  },
  mounted() {
    this.menuData = this.filterMenus(list.list)
  },
  methods: {
    // 去掉 type为2的 按钮菜单
    filterMenus(menuList) {
      return menuList
        .filter((menu) => menu.type !== 2)
        .map((menu) => {
          if (menu.children && menu.children.length > 0) {
            menu.children = this.filterMenus(menu.children);
          }
          return menu;
        });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
    jumpMenu(data) {
      let path = this.searchNode(data.name)
      console.log(path, data.url);
      this.$message({
        showClose: true,
        duration: 0,
        message: path
      });
      // this.$router.push({ path: '/' + data.url });
    },
    renderContent(h, { node, data, store }) {
      let type = data.type == 0 ? "目录" : data.type == 1 ? "菜单" : "按钮";
      let style =
        data.type == 0
          ? "border: 1px solid #dce3fe; border-radius: 10px; margin-right: 5px; padding: 0px 8px; background-color: #eef1ff; color: #5075fc; font-size: 12px;"
          : data.type == 1
          ? "border: 1px solid #e1f3d8; border-radius: 10px; margin-right: 5px; padding: 0px 8px; background-color: #f0f9eb; color: #67c23a; font-size: 12px;"
          : "border: 1px solid #e9e9eb; border-radius: 10px; margin-right: 5px; padding: 0px 8px; background-color: #f4f4f5; color: #909399; font-size: 12px;";
        if (data.type == 1) {
          return (
            <div class="custom-tree-node">
            <span>
              <span style={style}>{type}</span>
              <span style="height: 40px; display: inline-block; line-height: 40px;">{node.label}</span>
            </span>
              <el-button size="mini" type="text" on-click={ () => this.jumpMenu(data) }>跳转</el-button>
            </div>
          );
        } else {
          return (
            <div class="custom-tree-node">
              <span>
                <span style={style}>{type}</span>
                <span style="height: 40px; display: inline-block; line-height: 40px;">{node.label}</span>
              </span>
            </div>
          )
        }
    },
    searchNode(searchTerm) {
      let searchResult = null;
      for (let node of list.list) {
        let result = this.findNodeAndParents(node, searchTerm);
        if (result) {
          searchResult = result;
          break;
        }
      }
      let path = ''
      searchResult.forEach(item => {
        path = path + ' / ' + item.name;
      });
      return path;
    },
    // 查找节点和父节点
    findNodeAndParents(node, targetName, parents = []) {
      let nodeMatches = node.name.includes(targetName);
      if (nodeMatches) {
        parents.push(node);
        return parents;
      }

      if (node.children) {
        for (let childNode of node.children) {
          let updatedParents = [...parents, node];
          let result = this.findNodeAndParents(childNode, targetName, updatedParents);
          if (result) {
            return result;
          }
        }
      }
      return null;
    }
  },
};
</script>
<style lang="scss" scoped>
  ::v-deep .el-tree-node__content {
    height: 40px;
    border-radius: 12px;
  }
  ::v-deep .custom-tree-node {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
  }
  ::v-deep .el-tree-node__content {
    cursor: default;
  }
</style>