<template>
  <div class="line-box">
    <div
      class="lineCard link-information"
      v-for="elment in cardData"
      :key="elment.id"
    >
      <div class="header">
        <span class="arrow-down el-icon-arrow-down"></span>
        <span class="titles">{{ elment.title }}</span>
      </div>
      <div class="main">
        <div class="son-box">
          <div
            class="son-card"
            v-for="(item, index) in elment.children"
            :key="index"
          >
            <div class="header">
              <span class="arrow-down el-icon-arrow-down"></span>
              <span class="titles">数据库-{{ item.title }}</span>
            </div>
            <div class="main">
              <div
                class="piece"
                v-for="elm in item.tableList"
                :key="elm.id"
                style="width: 205px"
                :id="elm.id"
              >
                {{ elm.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="link-information-wrapper"></div>
  </div>
</template>
<script>
import { debounce } from "@/utils/index.js";
import LeaderLine from "leader-line-vue";
export default {
  props: ["cardData"],
  data() {
    return {
      pieceWidth: 220,
    };
  },
  created() {
    this.$nextTick(() => {
      this.drawLeaderLine();
    });
    window.addEventListener(
      "resize",
      debounce(() => {
        this.clearLeaderLine();
        setTimeout(() => {
          this.drawLeaderLine();
        }, 300);
      }, 300)
    );
  },
  methods: {
    clearLeaderLine() {
      let parentNode = document.getElementsByClassName("link-information")[0];
      let targetNode = document.getElementById("link-information-wrapper");
      parentNode.removeChild(targetNode);

      const newElement = document.createElement("div");
      newElement.id = "link-information-wrapper";
      parentNode.appendChild(newElement);
    },
    drawLeaderLine() {
      let obj = {};
      let elmWrapper = document.getElementById("link-information-wrapper");
      let rectWrapper = elmWrapper.getBoundingClientRect();

      let lineIndex = 1; // 初始化连接线索引
      this.cardData.forEach((elem, i) => {
        elem.children.forEach((arr, index) => {
          arr.tableList.forEach((data, index) => {
            if (data.links && data.links.length) {
              data.links.forEach((item, ii) => {
                const start = "start" + lineIndex;
                const end = "end" + lineIndex;
                const line = "line" + lineIndex;
                const elmLin = "elmLin" + lineIndex;
                obj[start] = document.getElementById(data.id);
                obj[end] = document.getElementById(item);

                obj[line] = LeaderLine.setLine(obj[start], obj[end]);
                obj[elmLin] = document.querySelector(
                  ".leader-line:last-of-type"
                );

                obj[line].color = data.color;
                obj[line].path = "vertical"; // grid  vertical straight 线的展示方式
                obj[line].size = 3;
                obj[line].startSocket = "bottom"; // 设置连接线起点为底部
                obj[line].endSocket = "top"; // 设置连接线终点为顶部

                lineIndex++; // 递增连接线索引
              });
            }
          });
        });
      });

      elmWrapper.style.transform =
        "translate(-" +
        (rectWrapper.left + pageXOffset) +
        "px, -" +
        (rectWrapper.top + pageYOffset) +
        "px)";

      let elmLineIndex = 1;
      this.cardData.forEach((elem, i) => {
        elem.children.forEach((arr, index) => {
          arr.tableList.forEach((data, index) => {
            if (data.links && data.links.length) {
              data.links.forEach((item, index) => {
                elmWrapper.appendChild(obj["elmLin" + elmLineIndex]);
                elmLineIndex++; // 递增连接线索引
              });
            }
          });
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.line-box {
  padding-left: 20px;
  display: flex;

  .lineCard {
    // width: 250px;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    .header {
      height: 40px;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      background-color: #76a6ff;
      border-radius: 4px;
      border: 1px solid #76a6ff;
      line-height: 40px;
      padding-left: 20px;
      .arrow-down {
      }
      .titles {
        margin-left: 10px;
      }
    }
    .main {
      min-height: 50px;
      border: 1px solid #dcdcdc;
      border-radius: 2px;
      border-top: none;
      padding: 15px 15px 0 0;
    }
  }

  .son-box {
    // display: flex;
    .son-card {
      display: flex;
      flex-direction: column;
      padding-left: 15px;
      padding-bottom: 15px;
      .header {
        height: 40px;
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        background-color: #76a6ff;
        border-radius: 2px;
        border: 1px solid #76a6ff;
        line-height: 40px;
        padding-left: 20px;
        .arrow-down {
        }
        .titles {
          margin-left: 10px;
        }
      }
      .main {
        min-height: 50px;
        border: 1px solid #dcdcdc;
        border-radius: 2px;
        border-top: none;
        padding: 15px 15px 0 15px;
        .piece {
          height: 40px;
          // width: 220px;
          border-radius: 2px;
          border: 1px solid #4a89ff;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>