<template>
  <div>
    <div class="box">
      <div class="left-box">
        <div class="statistics" id="1-1">
          家庭侧问题是否完成上门整治统计
          <!-- <div class="anchor">
            <div id="1-1-1"></div>
            <div id="1-1-2"></div>
          </div> -->
        </div>
        <div class="statistics" id="1-2">
          接入网问题后台是否完成优化统计
        </div>
      </div>
      <div class="right-box">
        <div class="statisticsCar" id="2-1">
          具体整治措施（家庭侧）统计
        </div>
        <div class="statisticsCar" id="2-2">
          下一步整治措施统计
        </div>
        <div class="statisticsCar" id="2-3">
          具体整治措施（接入侧）统计
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeaderLine from 'leader-line-vue'
export default {
  data() {
    return {
      idList: ['1-1', '1-1', '2-1', '2-2', '2-3'],
      idList: [
        {
          id: '1-1', 
          children: [
            {id: '2-1'},
            {id: '2-2'}
          ]
        },
        {
          id: '1-2', 
          children: [
            {id: '2-2'},
            {id: '2-3'}
          ]
        }
      ],
      lines: []
    }
  },
  mounted() {
    this.$nextTick(()=> {
      this.drawLeaderLine()
    })
  },
  beforeDestroy(){
    // 离开页面时销毁所有line
    if(this.lines && this.lines.length){
      this.lines.forEach(line => {
        console.log(line);
        line.remove()
      })
    }
  },
  methods: {
    // 渲染线条
    drawLeaderLine() {
      this.idList.forEach(element => {
        let start = document.getElementById(element.id)
        if(element.children && element.children.length){
          element.children.forEach(child => {
            let line = LeaderLine.setLine(start,  document.getElementById(child.id))
            line.color = `${child.id == '2-2' ? 'rgba(217, 6, 27, 0.5)' : 'rgba(30, 130, 250, 0.5)'}`
            line.path = 'grid'
            line.size = 3
            line.setOptions({
              dash: {animation: true},
            })
            this.lines.push(line)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    display: flex;
    justify-content: space-around;
    .left-box {
      width: 300px;
      height: 900px;;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .statistics {
        height: 200px;
        width: 300px;
        border: 1px solid #7f7f7f;
        border-radius: 10px;
        position: relative;
        .anchor {
          position: absolute;
          right: 0;
          top: 40%;
          div:nth-child(1) {
            width: 1px;
            height: 7px;
            background: red;
            margin-bottom: 25px;
          }
          div:nth-child(2) {
            width: 1px;
            height: 7px;
            background: red;
          }
        }
      }
    }
    .right-box {
      width: 600px;
      height: 900px;;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .statisticsCar {
        height: 280px;
        width: 500px;
        border: 1px solid #7f7f7f;
        border-radius: 10px;
      }
    }
  }
</style>