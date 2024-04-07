<template>
  <div id="app">
    <div class="header">
      <Button type="dashed"><router-link to="/">Home </router-link></Button>
      <Button type="dashed"><router-link to="/about">富文本框</router-link></Button>
      <quan-ping></quan-ping>
    </div>
    <div class="router-view">
      <router-view />
    </div>
    <!-- 将上传组件全局注册 -->
    <!-- <global-uploader /> -->
  </div>
</template>

<script>
// import GlobalUploader from '/vue-simple-uploader/GlobalUploader'

export default {
  name: 'app',
  components: {
    // GlobalUploader
  },
  data() {
    return {
      activeRoute: ''
    }
  },
  watch: {
    '$route.path': {
      handler(path) {
        this.activeRoute = path;
      },
      immediate: false
    }
  }
}
</script>

<style lang="scss" scoped>
//   @import "./scss/font-family.scss";
</style>
<style lang="scss">
.header {
  display: flex;
}
.router-view {
  height: calc(100vh - 32px);
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px !important; /* 滚动条宽度， width：对应竖滚动条的宽度  height：对应横滚动条的高度*/
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
