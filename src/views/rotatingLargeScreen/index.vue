<template>
  <div class="rotatingLargeScreen">
    <div class="bg">
      <div class="bg-group"></div>
      <!-- 4个图x和y轴动画加起来是20s , 20s/4 等于 5s 每个球y轴动画延迟 从0递减5s,x轴与y轴相差动画时长的一半（10s/2）-->
      <div class="rotate">
        <div
          @mouseover="mouseover"
          @mouseout="mouseout"
          class="rotate-item"
          :class="{'rotate-item-active': item.name == pagePath || pagePath == ''}"
          :style="{
            animation: `animX ${duration / 2}s cubic-bezier(0.36, 0, 0.64, 1) ${-(
              duration / 4 +
              (duration / routeList.length) * index
            )}s infinite alternate,
          animY ${duration / 2}s cubic-bezier(0.36, 0, 0.64, 1) ${-(
              (duration / routeList.length) *
              index
            )}s infinite alternate,
          scale ${duration}s cubic-bezier(0.36, 0, 0.64, 1) ${
              -(duration / routeList.length) * index
            }s infinite alternate`,
          }"
          v-for="(item, index) in routeList"
          :key="item.title"
          @click="goPage(item.name)"
        >
          <div class="rotate-item-header">{{ item.meta.title }} </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  computed: {
    // 获取当前的路径
    pagePath() {
      return this.$route.name;
    },
  },
  data() {
    return {
      duration: 30, // 路由旋转动画总时长
      routeList: [
        {
          name: "parkProfile",
          meta: { title: "家宽自智网络能力提升" },
        },
        {
          name: "platformArchitecture",
          meta: { title: "平台架构" },
        },
        {
          name: "energyMonitor",
          meta: {
            title: "能耗监测",
          },
        },
        {
          name: "eventStatistics",
          meta: {
            title: "事件统计",
          },
        },{
          name: "eventStatistics",
          meta: {
            title: "事件统计",
          },
        },{
          name: "eventStatistics",
          meta: {
            title: "事件统计",
          },
        },{
          name: "eventStatistics",
          meta: {
            title: "事件统计",
          },
        },
      ],
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    goPage(url) {
      if (url !== this.pagePath && url) {
        this.$router.push({
          name: url,
        });
      }
    },
    mouseover() {
      Array.from(document.getElementsByClassName("rotate-item")).forEach(
        (element) => {
          element.style.animationPlayState = "paused";
          element.style.WebkitAnimationPlayState = "paused"; // 优化Chrome 和 Safari
        }
      );
    },
    mouseout() {
      Array.from(document.getElementsByClassName("rotate-item")).map(
        (element) => {
          element.style.animationPlayState = "running";
          element.style.WebkitAnimationPlayState = "running"; // 优化Chrome 和 Safari
        }
      );
    },
  },
};
</script>
<style scoped lang="scss">
  .rotatingLargeScreen {
    width: 19.2rem;
    height: 100%;
    .bg {
      position: relative;
      width: 100%;
      height: 100%;
      background-image: url("~@/assets/img/bg.png");
      background-size: 100% 100%;
    }
    .bg-group {
      position: absolute;
      top: calc(25%);
      left: 6.9rem;
      width: 5rem;
      height: 50%;
      background-image: url("~@/assets/img/bg-group.png");
      background-size: 100% 100%;
      z-index: 10020;
    }

    .rotate {
      width: 19.2rem;
      height: 5rem;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10010;
      .rotate-item {
        position: absolute;
        z-index: 10086;
      }
    }
    .rotate-item {
      cursor: pointer;
      width: 80px;
      height: 80px;
      font-size: 18px;
      background-image: url("~@/assets/img/tubiao1.png");
      background-size: 100% 100%;
      text-align: center;
      font-family: zihunyongshiti;
      color: #ffffff;
      margin-right: 6px;
      transition: all 0.2s;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        background-image: url("~@/assets/img/tubiao1.png");
        font-size: 20px;
      }
      .rotate-item-header {
        min-width: 200px;
        height: 30px;
        background-image: url("~@/assets/img/button_slices.png");
        background-size: 100% 100%;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -100%);
      }
    }
    .rotate-item-active {
      background-image: url("~@/assets/img/8.png");
      font-size: 20px;
    }
  }
</style>
<style lang="scss">
@keyframes animX {
  0% {
    left: 2.4rem;
  }
  100% {
    left: calc(15.8rem);
  }
}
@keyframes animY {
  0% {
    top: 1.1rem;
  }
  100% {
    top: 5.6rem;
  }
}
@keyframes scale {
  // 背后
  0% {
    transform: scale(0.75);
  }
  // 右边
  25% {
    transform: scale(0.85);
  }
  // 右下
  50% {
    transform: scale(1.05);
  }
  // 左下
  75% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.85);
  }
}
</style>