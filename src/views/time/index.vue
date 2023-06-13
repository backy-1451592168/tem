<template>
  <div>
    <h2>统计用户登录时间</h2>
  </div>
</template>

<script>
export default {
  name: 'Page',

  data() {
    return {
      loginTime: new Date().getTime(),
      leaveTime: null,
    };
  },

  mounted() {
    window.addEventListener('unload', this.handleUnload);
  },

  beforeDestroy() {
    window.removeEventListener('unload', this.handleUnload);
  },

  methods: {

    // 处理页面关闭或跳转事件
    handleUnload() {
      // 记录离开时间
      this.leaveTime = new Date().getTime();

      // 发送请求到 API
      this.sendRequest();
    },

    // 发送请求到 API
    sendRequest() {
      const duration = (this.leaveTime - this.loginTime) / 1000;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://api.day.app/wYvpsXo85HmrMfLRgSmatS/用户登录时长: ${duration}秒`);
      xhr.responseType = 'json';

      // 使用异步请求
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('推送成功！');
          } else {
            console.error('推送失败！');
          }
        }
      };

      xhr.send();
    },
  },
};
</script>

<style>
/* 样式可以按照需求进行添加 */
</style>