<template>
  <div class="lineChart link-information">
    <div class="piece" v-for="(item, i) in nodes" :key="i">
      <div class="br one-level" :id="item.id">{{item.id}}</div>
      <div class="gross">
        <div class="child" v-for="elem in item.child" :key="elem.id">
          <div class="br two-level" v-for="data in elem" :key="data.id" :id="data.id">{{data.id}}</div>
        </div>
      </div>
    </div>
    <div id="link-information-wrapper"></div>
  </div>
</template>
<script>
import { debounce } from '@/utils/index.js';
import LeaderLine from 'leader-line-vue';
// html 生成 canvas 海报
import html2canvas from 'html2canvas';
export default {
  data() {
    return {
      nodes: [
        {
          id: 'A',
          title: 'A',
          child: [
            [
              {id: 'A1', title: 'A1', links: {start: 'A', end: 'A1'}},
              {id: 'A2', title: 'A2', links: {start: 'A1', end: 'A2'}},
              {id: 'A3', title: 'A3', links: {start: 'A2', end: 'A3'}}
            ],
            [
              {id: 'B1', title: 'B1', links: {start: 'A', end: 'B1'}},
              {id: 'B2', title: 'B2', links: {start: 'B1', end: 'B2'}},
              {id: 'B3', title: 'B3', links: {start: 'B2', end: 'B3'}}
            ],
            [
              {id: 'C1', title: 'C1', links: {start: 'A', end: 'C1'}},
              {id: 'C2', title: 'C2', links: {start: 'C1', end: 'C2'}},
              {id: 'C3', title: 'C3', links: {start: 'C2', end: 'C3'}}
            ]
          ]
        },
        {
          id: 'AA',
          title: 'AA',
          child: [
            [
              {id: 'AA1', title: 'AA1', links: {start: 'AA', end: 'AA1'}},
              {id: 'AA2', title: 'AA2', links: {start: 'AA1', end: 'AA2'}},
              {id: 'AA3', title: 'AA3', links: {start: 'AA2', end: 'AA3'}}
            ],
            [
              {id: 'BB1', title: 'BB1', links: {start: 'AA', end: 'BB1'}},
              {id: 'BB2', title: 'BB2', links: {start: 'BB1', end: 'BB2'}},
              {id: 'BB3', title: 'BB3', links: {start: 'BB2', end: 'BB3'}}
            ],
            [
              {id: 'CC1', title: 'CC1', links: {start: 'AA', end: 'CC1'}},
              {id: 'CC2', title: 'CC2', links: {start: 'CC1', end: 'CC2'}},
              {id: 'CC3', title: 'CC3', links: {start: 'CC2', end: 'CC3'}}
            ]
          ]
        }
      ]
    }
  },
  created() {
    this.$nextTick(() => {
      this.drawLeaderLine();
    });
    window.addEventListener('resize',
      debounce(() => {
        this.clearLeaderLine();
        setTimeout(() => {
          this.drawLeaderLine();
        }, 300);
      }, 300)
    );
  },
  methods: {
    goHome() {
      html2canvas(document.documentElement).then(function(canvas) {
          document.body.appendChild(canvas);
      });
    },
    clearLeaderLine() {
      let parentNode = document.getElementsByClassName('link-information')[0];
      let targetNode = document.getElementById('link-information-wrapper');
      parentNode.removeChild(targetNode);

      const newElement = document.createElement('div');
      newElement.id = 'link-information-wrapper';
      parentNode.appendChild(newElement);
    },
    drawLeaderLine() {
      let obj = {};
      let elmWrapper = document.getElementById('link-information-wrapper');
      let rectWrapper = elmWrapper.getBoundingClientRect();

      let lineIndex = 1; // 初始化连接线索引
      this.nodes.forEach((elem, i) => {
        elem.child.forEach((arr, ii) => {
          arr.forEach((data, iii) => {
            const start = 'start' + lineIndex;
            const end = 'end' + lineIndex;
            const line = 'line' + lineIndex;
            const elmLin = 'elmLin' + lineIndex;
            obj[start] = document.getElementById(data.links.start);
            obj[end] = document.getElementById(data.links.end);
    
            obj[line] = LeaderLine.setLine(obj[start], obj[end]);
            obj[elmLin] = document.querySelector('.leader-line:last-of-type');
    
            obj[line].color = '#CFD4D8';
            obj[line].path = 'vertical'; // grid  vertical straight 线的展示方式
            obj[line].size = 2;
            obj[line].startSocket = 'right';  // 设置连接线起点为底部
            obj[line].endSocket = 'left';  // 设置连接线终点为顶部
            lineIndex++; // 递增连接线索引
          })
        })
      });

      elmWrapper.style.transform =
        'translate(-' +
        (rectWrapper.left + pageXOffset) +
        'px, -' +
        (rectWrapper.top + pageYOffset) +
        'px)';

      let elmLineIndex = 1;
      this.nodes.forEach((elem, i) => {
        elem.child.forEach((arr, ii) => {
          arr.forEach((data, iii) => {
            elmWrapper.appendChild(obj['elmLin' + elmLineIndex]);
            elmLineIndex++; // 递增连接线索引
          })
        })
      })

    }
  }
}
</script>
<style scoped lang="scss">
  .lineChart {
    padding: 40px;
    .piece {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .child {
        display: flex;
        justify-content: space-between;
      }
      .gross {
        width: 70%;
      }
      .br {
        border-radius: 5px;
        border: 1px solid #CFD4D8;
        width: 200px;
        height: 100px;
        margin-bottom: 30px;
      }
      .one-level {
        width: 200px;
        height: 100px;
      }
    }
  }
</style>