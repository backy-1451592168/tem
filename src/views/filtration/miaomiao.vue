<template>
  <div>
    <div style="display: flex; justify-content: right; align-items: center; margin-top: 20px;">
      <el-input type="textarea" v-model="test" placeholder="匹配数据" style="min-width: 200px;"></el-input>
      <el-button type="primary" plain @click="emojiToStr(test)" style="margin-left: 10px;">校验</el-button>
    </div>

    <template v-if="esultDataList.length || dataList.length">
      <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 20px;">
        <el-radio-group size="small" v-model="query.sellingPriceType" @change="switchType()">
          <el-radio-button :label="0">金额</el-radio-button>
          <el-radio-button :label="1">百分比</el-radio-button>
        </el-radio-group>
        <el-input-number clearable :precision="0" :controls="false" v-model="query.sellingPrice" @keyup.enter.native="editData()" placeholder="金额或者比例" style="width: 170px;"></el-input-number>
        <el-button type="primary" plain @click="editData()" style="margin-left: 10px;">搜索</el-button>
      </div>
      <div style="display: flex; justify-content: right; align-items: center; margin-top: 20px;">
        <el-input clearable v-model="query.name" @keyup.enter.native="search()" placeholder="搜索内容" style="min-width: 200px;"></el-input>
        <el-button type="primary" plain @click="search()" style="margin-left: 10px;">搜索</el-button>
      </div>
    </template>

    <div class="tableList" style="margin-top: 10px;">
      <table>
        <tbody>
          <tr class="header">
            <td>产品名称</td>
            <td>进货价格</td>
            <td>售价</td>
          </tr>
          <tr v-for="(item, i) in esultDataList.length ? esultDataList : dataList" :key="i" class="tr-color">
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
            <td>{{ item.sellingPrice ? item.sellingPrice : '_' }}</td>
          </tr>
        </tbody> 
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: '',
      dataList: [],
      query: {
        name: '',
        sellingPriceType: 0,
        sellingPrice: 50
      },
      esultDataList: []
    }
  },
  methods:{
    emojiToStr(str) {
      //将表情转换为字符
      var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
      str = str.replace(patt, function(char) {
          var H, L, code;
          if (char.length === 2) {
              H = char.charCodeAt(0); // 取出高位
              L = char.charCodeAt(1); // 取出低位
              code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法
              return "-";
          } else {
              return char;
          }
      });
      // replace(/\ +/g,"") replace(/[ ]/g,"") 去掉空格   replace(/[\r\n]/g,",") 将回车替换成 逗号  replace(/[\t-\t]/g,"") 去掉特殊空格
      let array = str.replace(/\ +/g,"").replace(/[ ]/g,"").replace(/[\r\n]/g,",").replace(/[￥]/g,"_").replace(/[¥]/g,"_").split(',')
      array.forEach(item => {
        let arr = item.split('_')
        if (arr[0]) {
          this.dataList.push(
            {
              name: arr[0] ? arr[0] : '_',
              value: arr[1] ? arr[1] : '_',
              sellingPrice: 0
            }
          )
        }
      });
      this.editData()
    },

    search() {
      let data = []
      let name = this.query.name
      if (name) {
        this.dataList.forEach(item => {
          // 模糊查询
          var patt = new RegExp(name, 'i') ;
          var result = patt.test(item.name);
          if (result) {
            data.push(item)
          }
        })
        this.esultDataList = data
      } else {
        this.esultDataList = []
      }
      this.$message.success('查询成功');
    },

    editData() {
      this.query.name = ''
      this.esultDataList = []
      let data = JSON.parse(JSON.stringify(this.dataList))
      data.forEach(item => {
        if (!this.query.sellingPriceType) {
          item.sellingPrice = item.value ? Number(item.value) + this.query.sellingPrice : '_'
        } else {
          item.sellingPrice = item.value ? Number(item.value) + (Number(item.value) * (this.query.sellingPrice / 100)) : '_'
        }
      })
      this.dataList = data
      this.$message.success('查询成功');
    },
    switchType() {
      this.query.sellingPrice = 0
      this.editData()
    }
  }
}
</script>
<style lang="scss" scoped>
  .tableList {
    table {
      border-collapse: collapse;
      background: #fff;
      width: 100%;
      table-layout: fixed;
      .tr-color {
        &:nth-child(odd) {
          background-color: #fafafa;
        }
      }
      th,
      td {
        border: 1px solid #909399;
        text-align: center;
        padding: 10px;
      }
      td:nth-child(2) {
        width: 80px;
      }
      td:nth-child(3) {
        width: 80px;
      }
      .header {
        background-color: #b5c7e7;
      }
      .td-header {
        background-color: #e8f2fe;
      }
      .orderTr td {
        color: #000;
        font-weight: 600;
      }
      .row-color {
        background-color: #fafafa;
      }
    }

    .reds {
      background-color: #ec808c;
    }
    .oranges {
      background-color: #facd91;
    }
    .pinks {
      background-color: #fadbd6;
    }
    .greys {
      background-color: #ebebec;
    }
  }
</style>