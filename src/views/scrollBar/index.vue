<template>
  <div id="scrollBar">
    <div ref="parent" id="parent" class="parent" @mouseenter="enter" @mouseleave="leave">
      <div ref="child1" id="child1" class="child">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </div>
      <div ref="child2" id="child2" class="child"></div>
    </div>

    <div ref="scrollContainer" @mousewheel="MouseWheel" style="overflow: scroll;">
      <div style="width: 5000px; background: #000; height: 50px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scrollBar',
  data () {
    return {
      timer: null
    }
  },
  created () {
    this.$nextTick(()=> {
      this.init()
    })
  },
  computed: {
  },
  methods: {
    init () {
      let parent = this.$refs.parent
      let child1 = this.$refs.child1
      let child2 = this.$refs.child2
      child2.innerHTML = child1.innerHTML
      this.timer = setInterval(()=> {
        if(parent.scrollTop >= child1.scrollHeight) {
          parent.scrollTop = 0;
        } else {
          parent.scrollTop++
        }
      }, 20)
    },

    // 移入
    enter () {
      console.log(1);
      clearInterval(this.timer)
    },
    // 移出
    leave () {
      console.log(2);
      clearInterval(this.timer)
      this.init()
    },


    // 鼠标滚轮 控制div左右滚动
    MouseWheel(e){
      let eventDelta = -e.wheelDelta || -e.deltaY * 40
      let $scrollWrapper = this.$refs.scrollContainer
      // console.log($scrollWrapper.scrollLeft)
      // 0到scrollLeft为滚动区域隐藏部分
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
    }
  },
  // 实例销毁之前调用
  beforeDestroy () {
  }
}
</script>

<style lang="scss" scoped>
#scrollBar {
  .parent {
    width: 300px;
    height: 200px;
    margin: 0 auto;
    background: #242424;
    overflow-y: scroll;
  }
  /*设置的子盒子高度大于父盒子，产生溢出效果*/
  .child {
    height: auto;
  }
  .child li {
    height: 50px;
    margin: 2px 0;
    background: #009678;
  }
}
</style>
