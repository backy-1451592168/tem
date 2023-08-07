 
<template>
  <div class="eltree">
    <span>el-tree选择子级默认选中父级，选中父级不选中子级</span>
    <el-tree
      ref="tree"
      :data="treeData"
      show-checkbox
      node-key="id"
      :props="defaultProps"
      :check-strictly="true"
      :default-checked-keys="selectTreeArr"
      @check="checkChange"
    >
    </el-tree>

    {{selectTreeArr}}
    <el-button @click="svae()">获取</el-button>
  </div>
</template>
 
<script>
export default {
  name: "eltree",
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
       defaultProps: {
        children: 'children',
        label: 'label'
      },
      selectTreeArr: [ 1, 4, 2 ], //选中的
    };
  },
  methods: {
    svae() {
      this.selectTreeArr = this.$refs.tree.getCheckedKeys();
    },
    checkChange(data) {
      const node = this.$refs.tree.getNode(data.id);
      this.setNode(node);
    },
    setNode(node) {
      if (node.checked) {
        //如果当前是选中checkbox,则递归设置父节点和父父节点++选中
        this.setParentNode(node);
      } else {
        //当前是取消选中,将所有子节点都取消选中
        this.setChildenNode(node);
      }
    },
    setParentNode(node) {
      if (node.parent) {
        for (const key in node) {
          if (key === "parent") {
            node[key].checked = true;
            this.setParentNode(node[key]);
          }
        }
      }
    },
    setChildenNode(node) {
      let len = node.childNodes.length;
      for (let i = 0; i < len; i++) {
        node.childNodes[i].checked = false;
        this.setChildenNode(node.childNodes[i]);
      }
    },
  },
};
</script>