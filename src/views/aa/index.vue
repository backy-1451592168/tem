<template>
  <div class="aa">
    <el-card class="box-card">
      <p class="title">阿九专属记账系统</p>
      <el-card class="box-card">
        <div class="detail">
          <div>清单：</div>
          <el-tag v-for="(tag, index) in unitPriceList" :key="tag.name" closable :type="tag.type" @close="deleteUnitPrice(index)">
            {{tag.name}}-{{tag.unitPrice}} RMB
          </el-tag>
          <div>
            <el-popover
              placement="bottom"
              title="类型"
              width="200"
              trigger="click">
              <el-button slot="reference" type="primary" size="small">添加</el-button>
              <div>
                <span>名称</span><el-input size="small" v-model="name" placeholder="名称" style="margin-bottom: 10px;"></el-input>
                  价格<el-input-number size="small" :controls="false" v-model="unitPrice" placeholder="请输入内容" style="margin-bottom: 5px;width: 100%;"></el-input-number>
                <el-button type="primary" size="small" style="float: right;" @click="addUnitPrice()">确认</el-button>
              </div>
            </el-popover>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="detail">
          <div>人员：</div>
          <el-tag v-for="(tag, index) in memberList" :key="tag.name" closable :type="tag.type" @close="deleteMember(index)">
            {{tag.name}}
          </el-tag>
          <div>
            <el-popover
              placement="bottom"
              title="类型"
              width="200"
              trigger="click">
              <el-button slot="reference" type="primary" size="small">添加</el-button>
              <div>
                <span>成员</span><el-input size="small" v-model="member" placeholder="名称" style="margin-bottom: 10px;"></el-input>
                <el-button type="primary" size="small" style="float: right;" @click="addMember()">确认</el-button>
              </div>
            </el-popover>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型"
            width="400">
            <template slot-scope="scope">
              <el-checkbox-group v-model="tableData[scope.$index].type">
                <el-checkbox v-for="item in unitPriceList" :key="item.name" :label="item.name"></el-checkbox>
              </el-checkbox-group>
            </template>
          </el-table-column>
          <el-table-column
            prop="total"
            label="支付">
          </el-table-column>
        </el-table>

        <el-button size="small" style="float: right;margin: 10px 0;" @click="setPayment()" type="primary">计算</el-button>
      </el-card>
      <el-card class="box-card">
        <el-tag>共计：{{totalPrice}} RMB</el-tag>
      </el-card>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        unitPriceList: [],
        unitPriceTypeList: [],
        unitPrice: 0,
        name: '',
        memberList: [],
        member: "",
        tableData: [],
        totalPrice: 0
      };
    },
    methods: {
      addUnitPrice() {
        this.unitPriceList.push({name: this.name, unitPrice: this.unitPrice, number: 0, value: 0})
        this.unitPriceTypeList.push(this.name)
        this.setTable(1)
        this.name = ''
        this.unitPrice = ''
      },
      deleteUnitPrice(index) {
        this.unitPriceList.splice(index, 1)
        this.unitPriceTypeList.splice(index, 1)
      },
      addMember() {
        this.memberList.push({name: this.member})
        this.setTable(0)
        this.member = ''
      },
      deleteMember(index) {
        this.memberList.splice(index, 1)
        this.tableData.splice(index, 1)
      },
      setCheck() {
        this.totalPrice = 0
        this.tableData.forEach(item => {
          this.totalPrice += Number(item.total)
        });
      },
      setTable(i) {
        if (i) {
          if (!this.tableData.length) return
          this.tableData.forEach((item) => {
            item.type = this.unitPriceTypeList
          })
        } else {
          this.tableData.push({ name: this.member, type: this.unitPriceTypeList, total: 0})
        }
      },
      setPayment() {
        // 计算人均
        this.unitPriceList.forEach((item, index)=> {
          this.unitPriceList[index].number = 0
          this.tableData.forEach((element, i) => {
            this.tableData[i].total = 0
            if (element.type.indexOf(item.name) !== -1) this.unitPriceList[index].number += 1
          });
          this.unitPriceList[index].value = Number((this.unitPriceList[index].unitPrice / this.unitPriceList[index].number).toFixed(2))
        })
        this.tableData.forEach((element, index) => {
          element.type.forEach((type) => {
            this.tableData[index].total += Number(this.unitPriceList.find(item=>item.name === type).value)
          })
        })
        this.setCheck()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .aa {
    padding: 20px;
    .title {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .detail {
      display: flex;
      align-items: center;
    }
  }
  ::v-deep .el-tag {
    margin-right: 10px;
  }
  ::v-deep .el-card  {
    border-radius: 12px;
    margin-bottom: 10px;
  }
</style>