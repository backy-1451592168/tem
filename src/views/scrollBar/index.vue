<template>
  <div id="scrollBar">
    <div ref="parent" id="parent" class="parent">
      <div ref="child1" id="child1" class="child">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </div>
      <div ref="child2" id="child2" class="child"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scrollBar',
  data () {
    return {
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
      var parent = this.$refs.parent
      var child1 = this.$refs.child1
      var child2 = this.$refs.child2
      child2.innerHTML = child1.innerHTML
      setInterval(()=> {
        if(parent.scrollTop >= child1.scrollHeight) {
          parent.scrollTop = 0;
        } else {
          parent.scrollTop++
        }
      }, 20)
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
