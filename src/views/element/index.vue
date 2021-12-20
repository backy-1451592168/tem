<template>
  <div id="deviceNavigation">
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled">
        <li v-for="i in count" class="list-item">{{ i }}</li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
    <div style="margin: 20px;">
      <!-- 聚焦 -->
      <el-input v-focus style="width: 100px;"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'deviceNavigation',
  data () {
    return {
      count: 10,
      loading: false
    }
  },
  created () {
  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
#deviceNavigation {
  .infinite-list-wrapper {
    text-align: center;
    height: 300px;
    width: 500px;
    .list-item {
      background-color: seagreen;
      border: 1px solid black;
      margin-bottom: 5px;
    }
  }
}
</style>
