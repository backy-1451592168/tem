<template>
  <div id="app">
    <Button type="dashed"><router-link to="/">Home </router-link></Button>
    <Button type="dashed"
      ><router-link to="/about">富文本框</router-link></Button
    >
    <router-view />
    <!-- 将上传组件全局注册 -->
    <global-uploader />
  </div>
</template>

<script>
import GlobalUploader from '/vue-simple-uploader/GlobalUploader'

export default {
  name: 'app',
  components: {
    GlobalUploader
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
