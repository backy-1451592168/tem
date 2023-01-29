<template>
  <div class="TreeRight" v-if="showTree">
    <div class="childs">
      <div class="child" v-for="(item,index) in list" :key="item.id +'-child-'+index">
        <div class="child-item" :style="{marginRight: item.children && item.children.length > 1 ? '20px' :''}">
          <div class="childname" :class="item.children && item.children.length > 1 ? 'childname-mg' :''" :id="item">
            <!-- 内容 -->
            <div class="content-box" :class="item.highlight? 'highlight' : ''" :ref="item.id" :id="item.id">
              <!-- <el-progress type="circle" :percentage="10" :width="50"></el-progress> -->
              <div class="image">
                <img src="@/assets/img/jg.png" alt="">
              </div>
              <div class="content-value">
                <!-- <p>{{item.id}}</p> -->
                <p v-for="(itemshow,index3) in showfields" :key="'itemshow'+index3" :class="index3 == 0 ? 'name' : 'value'">{{item[itemshow.key]}}</p>
              </div>
              <div class="operate">
                <span>现象</span>
                <span>原因</span>
                <p>环比 +1.1%</p>
              </div>
              <div v-if="item.openStatus || item.closeStatus" class="plus">
                <div class="plus-bo" @click="powerSwitch({id: item.id, os: item.closeStatus})">
                  <span>{{item.openStatus ? '-' : '+'}}</span>
                </div>
              </div>
            </div>
            <!-- <div style="width:30px"></div> -->
            <div class="position-top" v-if="isFirst(item.id) && domready" :style="position_top(item.id,'top')"></div>
            <div class="position-top" v-if="isLast(item.id)" :style="position_top(item.id,'bottom')"></div>
          </div>
          <!-- 模块间距 -->
          <div style="width:1rem;"></div>
          <!-- <div style="width:160px;"></div> -->
        </div>

        <!-- 递归组件展示子节点 -->
        <div class="child-children" v-if="item.children && item.children.length">
          <RightTree :list="item.children" :showfields="showfields"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeaderLine from 'leader-line-vue'
export default {
  name: 'RightTree',
  components: {},
  data() {
    return {
      domready: false,
      lines: [],
    }
  },
  create(){
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    showfields: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.domready = true
      this.drawArrowLine()
    }) 
  },
  computed:{
    // 是否展示树计算属性
    showTree(){
      return this.list && this.list.length
    },
  },
  beforeDestroy(){
    // 离开页面时销毁所有line
    if(this.lines && this.lines.length){
      this.lines.forEach(line => {
        line.remove()
      })
    }
  },
  methods: {
    destroy() {
      if(this.lines && this.lines.length){
        this.lines.forEach(line => {
          line.remove()
        })
      }
        this.lines = []
        this.drawLeaderLine(this.list)
    },
    // 递归绘制箭头
    drawArrowLine(){
      this.drawLeaderLine(this.list)
    },
    // 根据上下级关系绘制线条
    drawLeaderLine(list){
      list.forEach(element => {
        let start = document.getElementById(element.id)
        console.log(start, element.id);
        if(element.children && element.children.length){
          element.children.forEach(child => {
            let line = LeaderLine.setLine(start,  document.getElementById(child.id))
            line.color = 'rgba(30, 130, 250, 0.5)'
            line.path = 'grid'
            line.size = 3
            line.setOptions({
                dash: {animation: true},
            })
            this.lines.push(line)
          })
          this.drawLeaderLine(element.children)
        }
      })
    },

    powerSwitch(id) {
      this.$emit('parentFn', id)
    },

    position_top(id, position) {
      let dom = document.getElementById(id)
      let height
      if (dom) {
        height = dom.clientHeight
      }
      let rt
      if (position === 'top') {
        rt = {
          height: height / 2 - 2 + 'px',
          top: 0,
        }
      }
      if (position === 'bottom') {
        rt = {
          height: height / 2 + 1 + 'px',
          bottom: 0,
        }
      }
      return rt
    },
    isFirst(id) {
      return (
        this.list.length > 1 && this.list.map((x) => x.id).indexOf(id) === 0
      )
    },
    isLast(id) {
      return (
        this.list.length > 1 &&
        this.list.map((x) => x.id).indexOf(id) === this.list.length - 1
      )
    },
  },
}
</script>

<style lang="scss" scoped>
  .TreeRight {
    p {
      margin: 0;
      font-size: 13px;
    }
    .childs {
      .child {
        display: flex;
        background-color: #fff;
        .child-item {
          display: flex;
          align-items: center;
          // margin: 10px 0;
          .childname-mg {
            margin: 10px 0;
          }
          .childname {
            cursor: pointer;
            height: 100px;
            display: flex;
            align-items: center;
            // 控制块的宽度
            width: 4.6rem;
            // width: 250px;
            text-align: center;
            justify-content: center;
            position: relative;
            .content-box {
              display: flex;
              justify-content: space-between;
              align-items: center;
              border: 1px solid #e8e8e8;
              margin: 10px;
              padding: 5px;
              height: 90px;
              border-radius: 2px;
              width: 100%;
              box-shadow: 0 2px 4px 0 rgba(181, 181, 181, 0.7);
              position: relative;
              .plus {
                position: absolute;
                right: -25px;
                height: 20px;
                width: 24px;
                background: #ffffff;
                z-index: 1;
              }
              .plus-bo {
                border: 1px solid;
              }
              .image {
                background: #3aa7f0;
                border-radius: 30px;
                width: 60px;
                height: 60px;
                img {
                  width: 40px;
                  margin-top: 8px;
                }
              }
              .content-value {
                .name {
                  font-size: 15px;
                }
                .value {
                  font-size: 17px;
                  font-weight: 600;
                }
              }
              .operate {
                span:nth-child(1) {
                  margin-right: 5px;
                  color: #f59a24;
                }
                span:nth-child(2) {
                  color: #2d02ff;
                }
                p {
                  margin-top: 5px;
                }
              }
            }
            .highlight {
              border: 2px solid #3aa7f0!important;
              box-shadow: 0 0 5px #3aa7f0;
            }
            .position-arrow {
              position: absolute;
              left: -22px;
            }
            .position-top {
              position: absolute;
              width: 3px;
              background-color: #fff;
              left: -23px;
              height: 10px;
            }
          }
          .childarrow {
            height: 100%;
            display: flex;
            align-items: center;
          }
        }
      }
      .child-children {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
</style>