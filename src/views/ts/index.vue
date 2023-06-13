<template>
  <div>
    <div class="st" ref="st-0" :class="{ visible: isVisible(0) }"></div>
    <div class="st" ref="st-1" :class="{ visible: isVisible(1) }"></div>
    <div class="st" ref="st-2" :class="{ visible: isVisible(2) }"></div>
  </div>
</template>

<script>
export default {
  methods: {
    isVisible(index) {
      const elem = this.$refs[`st-${index}`];
      const rect = elem.getBoundingClientRect();
      const winHeight = window.innerHeight;

      return rect.top < winHeight && rect.bottom >= 0;
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.$forceUpdate(); // 强制更新视图
    });
  }
}
</script>

<style scoped>
.st {
  background: #000;
  position: sticky;
  top: 0;
  height: 100vh;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.visible {
  opacity: 1;
}
</style>