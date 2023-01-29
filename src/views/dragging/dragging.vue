<template>
  <div style="width:100%" ref="aseref">
    <Button type="primary">{{$t('test')}}</Button>

    <el-radio-group type="primary" size="mini" v-model="plan">
      <el-radio-button :label="1">拖拽方案一</el-radio-button>
      <el-radio-button :label="2">拖拽方案二</el-radio-button>
    </el-radio-group>

    <quan-ping></quan-ping>

    <template v-if="plan === 1">
      <el-table
        :data="tableData"
        :header-cell-style="tableHeaderStyle"
        stripe
        border
        row-key="id"
        height="280"
        align="left">
        <!-- <el-table-column
          type="index"
          width="50">
        </el-table-column> -->
        <el-table-column
          v-for="(item, index) in col"
          :key="`col_${index}`"
          :prop="dropCol[index].prop"
          :label="item.label">
        </el-table-column>
      </el-table>
      <pre style="text-align: left">
        {{dropCol}}
      </pre>
      <hr>
      <pre style="text-align: left">
        {{tableData}}
      </pre>
    </template>
    <template v-else>
      <!-- 拖拽组件 -->
      <draggable animation="300" v-model="dataList" :disabled="false">
        <div v-for="item in dataList" class="testss" :key="item">
          {{item}}
        </div>
      </draggable>
      {{dataList}}
    </template>
  </div>
</template>
<script>

// 拖拽 建议使用这个  文档 https://www.itxst.com/vue-draggable/tutorial.html
// npm i -S vuedraggable
import draggable from 'vuedraggable'

// npm install sortablejs --save
import Sortable from 'sortablejs'

export default {
  components: {
    draggable
  },
  data() {
    this.tableHeaderStyle = {
      backgroundColor: '#eef1f6',
      color: '#000000',
    }
    return {
      plan: 1,
      dataList: ['我', '是', '你', '爸'],
      col: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      dropCol: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      tableData: [
        {
          id: '1',
          date: '2016-05-02',
          name: '王小虎一',
          address: '上海市普陀区金沙江路 100 弄'
        },
        {
          id: '2',
          date: '2016-05-04',
          name: '王小虎二',
          address: '上海市普陀区金沙江路 200 弄'
        },
        {
          id: '3',
          date: '2016-05-01',
          name: '王小虎三',
          address: '上海市普陀区金沙江路 300 弄'
        },
        {
          id: '4',
          date: '2016-05-03',
          name: '王小虎四',
          address: '上海市普陀区金沙江路 400 弄'
        },
        {
          id: '5',
          date: '2016-05-03',
          name: '王小虎四',
          address: '上海市普陀区金沙江路 400 弄'
        },
        {
          id: '6',
          date: '2016-05-03',
          name: '王小虎四',
          address: '上海市普陀区金沙江路 400 弄'
        },
        {
          id: '7',
          date: '2016-05-03',
          name: '王小虎四',
          address: '上海市普陀区金沙江路 400 弄'
        },
        {
          id: '8',
          date: '2016-05-03',
          name: '王小虎四',
          address: '上海市普陀区金沙江路 400 弄'
        },
        {
          id: '9',
          date: '2016-05-03',
          name: '王小虎四',
          address: '上海市普陀区金沙江路 400 弄'
        }
      ]
    }
  },
  mounted() {
    this.rowDrop()
    this.columnDrop()
  },
  methods: {

    //行拖拽
    rowDrop() {
      const tbody = this.$refs.aseref.querySelector('.el-table__body-wrapper tbody')
      // const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        animation: 180, // 拖动时的过渡效果
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
          // console.log(oldIndex, newIndex, currRow)
        }
      })
    },
    //列拖拽
    columnDrop() {
      const wrapperTr = this.$refs.aseref.querySelector('.el-table__header-wrapper tr')
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          const oldItem = this.dropCol[evt.oldIndex]
          this.dropCol.splice(evt.oldIndex, 1)
          this.dropCol.splice(evt.newIndex, 0, oldItem)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .testss {
    width: 50px;
    height: 50px;
    background: wheat;
    text-align: center;
    line-height: 50px;
    border: 1px solid;
  }
</style>