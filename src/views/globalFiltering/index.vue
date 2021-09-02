<template>
  <div id="globalFiltering">
    <!-- 自定义过滤器 -->
    <h1 class="time">{{8956.889 | toFixed(2)}}</h1>
    <h1 class="time">{{896656.889 | numberFormat(2)}}</h1>
    {{data_list.length}}
    <div class="table_style" >
      <div class="left-tab" :style="`width: ${ data_list.length === 1 ? 100 : 400 * data_list.length }${ data_list.length === 1 ? '%' : 'px' }`">
        <table class="tab">
          <tr>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <!-- <table class="tab">
          <tr>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <table class="tab">
          <tr>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <table class="tab">
          <tr>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <table class="tab">
          <tr>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <table class="tab">
          <tr>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
          </tr>
        </table> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'globalFiltering',
  data () {
    this.timer = null
    return {
      data_list: [
        {a: 1},
      ]
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#globalFiltering {
  .time {
    text-align: center;
  }
  .table_style {
    width: 100%;
    overflow-x: auto;
    .left-tab {
      width: 100%;
      display: flex;
    }
    .tab {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
      tr {
        td {
          height: 40px;
          border: 1px solid slategrey;
        }
      }
    }
  }
}
</style>
