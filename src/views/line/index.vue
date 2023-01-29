<template>
  <div>
    <el-button plain @click="test">清空</el-button>
    <el-button plain @click="expandHide">渲染</el-button>
    <right-tree
      ref="rightTree"
      @parentFn="test"
      v-if="list && list.length"
      :list="list"
      :showfields="showFields"
    ></right-tree>
  </div>
</template>
<script>
import RightTree from './dome'
export default {
  components:{
      RightTree,
  },
  data(){
    return{
      // children 里填对应的id就可以连起来了
      oldList: [],
      list: [
        {
          id: '1-1',
          name: '家庭侧问题',
          value: '700',
          children: [
            {
              id: '1-1-1',
              name: '用户终端问题',
              value: '18',
              children: [
                {
                  id: '1-1-1-1',
                  name: '用户设备问题',
                  value: '700',
                },
                {
                  id: '1-1-1-2',
                  name: '路由器问题',
                  value: '700',
                }
              ],
            },
            {
              id: '1-1-2',
              name: '用户户线段问题',
              value: '700',
            },
            {
              id: '1-2-7',
              name: '移动网关、机顶盒问题',
              value: '700',
              children: [
                {
                  id: '1-2-1-1',
                  name: '移动网关问题',
                  value: '700',
                },
                {
                  id: '1-2-1-2',
                  name: '机顶盒问题',
                  value: '700',
                }
              ]
            },
            {
              id: '1-1-4',
              name: '移动皮线光缆问题',
              value: '700',
            }
          ]
        },
        {
          id: '1-8',
          name: '内容侧问题',
          value: '700',
          children: [
            {
              id: '1-8-1',
              name: '互联网电视问题',
              value: '18'
            },
            {
              id: '1-8-4',
              name: '互联网业务问题',
              value: '700',
            }
          ]
        },
        {
          id: '3',
          name: '装维服务侧问题',
          value: '700',
        },
      ],

      controlDataList: [],
      showFields: [
        {
          key: 'name',
        },
        {
          key: 'value',
        },
      ],
    }
  },
  created() {
    // 给数据增加字段
    let data = this.list.map(item => {
      // 一级
      if (item.children) {
        item.children.map(tItem => {
          // 二级
          if (tItem.children) {
            tItem.children.map(sItem => {
              // 三级
              if (sItem.children) {
                return sItem
              } else {
                sItem.highlight = true
                return sItem
              }
            })
          } else {
            tItem.highlight = true
            return tItem
          }
          return tItem
        })
        item.openStatus = true
        item.closeStatus = false
      } else {
        return item
      }
      return item
    })
    this.controlDataList = data
  },
  methods:{
    test(id, os) {
      this.oldList = this.list
      this.list = []
      setTimeout(() => {
        this.expandHide(id, os)
      }, 50)
    },

    // 展开隐藏
    expandHide(obj) {
      console.log(obj);
      if (obj.os) {
        let inde = this.controlDataList.indexOf(this.controlDataList.find(item=>item.id === obj.id))
        let data = this.controlDataList.find(item=>item.id === obj.id)
        this.oldList[inde] = data
        this.list = this.oldList
      } else {
        // 收回
        let data = JSON.parse(JSON.stringify(this.oldList))
        data.forEach(item=> {
          if (item.id == obj.id) {
            delete item.children
          }
        })
        // 判断一遍按钮状态
        data.forEach(item=> {
          if (item.children) {
            item.openStatus = true
            item.closeStatus = false
          } else {
            item.openStatus = false
            item.closeStatus = true
          }
        })
        this.list = data
      }
    }
  },
    
}
</script>