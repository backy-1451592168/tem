<template>
  <div class="propertyLine">
    <div class="backtrack">
      <p class="name" @click="goHome()">返回</p>
    </div>
    <div class="link-information">
      <div class="link-information-container">
        <div class="row" v-for="(item, i) in nodes" :key="i">
          <div class="card" v-for="elem in item" :key="elem.id" :id="elem.id">
            <div class="head" v-if="i == 0">
              <div class="titles">
                <p class="name">家宽业务数据填报</p>
              </div>
              <img src="@/assets/img/Group 1321314908.png" alt="">
            </div>
            <div class="submodule" v-else-if="i == 1">
              <span class="name">{{elem.title}}</span>
            </div>
            <div class="conter" v-else>
              <span class="name">{{elem.title}}</span>
            </div>
          </div>
        </div>
      </div>
      <div id="link-information-wrapper"></div>
    </div>
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
        [
          { id: 'A', title: 'A', links: ['B', 'B1','B2']}
        ],
        [
          { id: 'B', title: 'B', links: ['C', 'C1']},
          { id: 'B1', title: 'B1', links: ['C2']},
          { id: 'B2', title: 'B2', links: ['C']},
        ],
        [
          { id: 'C', title: 'C', links: ['D', 'D1']},
          { id: 'C1', title: 'C1', links: ['D2', 'D1']},
          { id: 'C2', title: 'C2', links: ['D3', 'D4']}
        ],
        [
          { id: 'D', title: 'D', links: ['E', 'E1']},
          { id: 'D1', title: 'D1', links: ['E1']},
          { id: 'D2', title: 'D2', links: ['E2']},
          { id: 'D3', title: 'D3', links: ['E3']},
          { id: 'D4', title: 'D4', links: ['E4']}
        ],
        [
          { id: 'E', title: 'E', links: []},
          { id: 'E1', title: 'E1', links: []},
          { id: 'E2', title: 'E2', links: []},
          { id: 'E3', title: 'E3', links: []},
          { id: 'E4', title: 'E4', links: []}
        ]
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
        elem.forEach((arr, index) => {
          if (arr.links && arr.links.length) {
            arr.links.forEach((item, ii) => {
              const start = 'start' + lineIndex;
              const end = 'end' + lineIndex;
              const line = 'line' + lineIndex;
              const elmLin = 'elmLin' + lineIndex;
              console.log(arr.id);
              obj[start] = document.getElementById(arr.id);
              obj[end] = document.getElementById(item);
      
              obj[line] = LeaderLine.setLine(obj[start], obj[end]);
              obj[elmLin] = document.querySelector('.leader-line:last-of-type');
      
              obj[line].color = 'rgb(249, 237, 172)';
              obj[line].path = 'straight'; // grid  vertical straight 线的展示方式
              obj[line].size = 2;
              obj[line].startSocket = 'bottom';  // 设置连接线起点为底部
              obj[line].endSocket = 'top';  // 设置连接线终点为顶部
  
              lineIndex++; // 递增连接线索引
            })
          }
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
        elem.forEach((arr, index) => {
          if (arr.links && arr.links.length) {
            arr.links.forEach((item, ii) => {
              elmWrapper.appendChild(obj['elmLin' + elmLineIndex]);
              elmLineIndex++; // 递增连接线索引
            })
          }
        })
      })

    }
  }
}
</script>
<style lang="scss" scoped>
.propertyLine {
  position: relative;
  height: calc(100vh - 32px);
  background-image: url('../../assets/img/bg-img.png');
  background-size: cover; /* 图片等比例缩放，保持覆盖整个容器 */
  background-position: top center; /* 将图片居中显示 */

  .backtrack {
    position: absolute;
    left: 60px;
    top: 45px;
    color: #fff;
    width: 120px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    background-image: url('../../assets/img/fanhui-btn.png');
    background-size: cover; /* 图片等比例缩放，保持覆盖整个容器 */
    background-position: center; /* 将图片居中显示 */
    cursor: pointer;
    .name {
      margin-left: 14px;
    }
  }

  .link-information-container {
    padding-top: 7%;
    .row {
      margin-bottom: 4%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .card {
        width: 200px;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        .conter {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90%;
          height: 46px;
          color: #000;
          background: linear-gradient(to top, #08b10461, #fff0);
          // border-radius: 8px;
          // 边框渐变
          border: 2px solid transparent;
          border-top: none;
          border-image: linear-gradient(to top, #A0FF9E, #fff0);
          border-image-slice: 11;

          box-shadow: 2px 3px 5px #06ff002e;

          .name {
            font-size: 24px;
            font-weight: 600;
            color: #fff;
          }
        }

        .submodule {
          width: 90%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('../../assets/img/8.png');
          background-size: cover; /* 图片等比例缩放，保持覆盖整个容器 */
          background-position: center; /* 将图片居中显示 */
          .name {
            font-size: 24px;
            font-weight: 600;
            color: #fff;
          }
        }

        .head {
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          .titles {
            background-image: url('../../assets/img/t.png');
            background-size: 45%;
            background-position: center; /* 将图片居中显示 */
            background-repeat: no-repeat;
            width: 100%;
            position: absolute;
            text-align: center;
            font-size: 18px;
            font-weight: 500;
            color: #E2EBFA;
            .name {
              margin-bottom: 8px;
            }
          }
          img {
            width: 90px;
            height: 90px;
            text-align: center;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>