<template>
  <div class="echarts">
    <picServiceQuality
      id="chart12"
      :targetValue="93"
      :number="99"
      :color="['#377AC3FF', '#8EDCFFFF', '#63D5E71A']"
      markColor="#8EDCFFFF"
      :gradient="['#4482DF', '#4482df1c']"
      style="width: 300px; height: 300px;">
    </picServiceQuality>
    <div class="border-b"></div>
  </div>
</template>
<script>
import picServiceQuality from '@/components/echarts/picServiceQuality.vue'

export default {
  components: {
    picServiceQuality
  },
}
</script>
<style lang="scss" scoped>
.echarts {
  .border-b {
    border-bottom: 1px solid #ccc;
  }
}
</style>