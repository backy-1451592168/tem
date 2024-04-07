<template>
  <div class="footer">
    <div class="round-box">
      <div class="box">
        <div class="out-round">
          <img src="@/assets/img/bj-z.png" />
        </div>

        <!-- <div class="inner-round">
          <img src="@/assets/img/bg-img.png" />
        </div> -->
      </div>
    </div>
    <!-- 4个图x和y轴动画加起来是20s , 20s/4 等于 5s 每个球y轴动画延迟 从0递减5s,x轴与y轴相差动画时长的一半（10s/2）-->
    <div class="route">
      <div
        @mouseover="mouseover"
        @mouseout="mouseout"
        class="route-item"
        :class="{
          'route-item-active': item.name == pagePath || pagePath == '',
        }"
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
        <span>{{ item.meta.title }} </span>
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
      duration: 20, // 路由旋转动画总时长
      routeList: [
        {
          name: "parkProfile",
          meta: { title: "园区概况" },
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
      Array.from(document.getElementsByClassName("route-item")).forEach(
        (element) => {
          element.style.animationPlayState = "paused";
          element.style.WebkitAnimationPlayState = "paused"; // 优化Chrome 和 Safari
        }
      );
    },
    mouseout() {
      Array.from(document.getElementsByClassName("route-item")).map(
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
.footer {
  position: absolute;
  z-index: 1000;
}

.route-item {
  cursor: pointer;
  width: 146px;
  height: 38px;
  line-height: 38px;
  font-size: 18px;
  background-image: url("~@/assets/img/8.png");
  background-size: 100% 100%;
  text-align: center;
  font-family: zihunyongshiti;
  color: #ffffff;
  margin-right: 6px;
  transition: all 0.2s;
  &:last-child {
    margin-right: 0;
  }
  span {
    background: linear-gradient(180deg, #c5f3ff 0%, #197abc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:hover {
    background-image: url("~@/assets/img/8.png");
    font-size: 20px;
    span {
      background: linear-gradient(180deg, #ffffff 0%, #3cd7df 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
.route-item-active {
  background-image: url("~@/assets/img/8.png");
  font-size: 20px;
  span {
    // background: linear-gradient(180deg, #ffffff 0%, #3cd7df 100%);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
}

@keyframes animX {
  0% {
    left: 70px;
  }
  100% {
    left: calc(1054px - 210px);
  }
}
@keyframes animY {
  0% {
    top: 0;
  }
  100% {
    top: 100px;
  }
}
@keyframes scale {
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.1);
  }
}

.route {
  width: 19.2rem;
  height: 320px;
  position: fixed;
  bottom: 26px;
  z-index: 10010;
  left: 22%;
  // transform: translateX(-25%);
  .route-item {
    position: absolute;
    z-index: 10086;
    // &:first-child {
    //   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
    //     animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
    //     scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
    // }
    // &:nth-child(2) {
    //   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -10s infinite alternate,
    //     animY 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
    //     scale 20s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate;
    // }

    // &:nth-child(3) {
    //   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -15s infinite alternate,
    //     animY 10s cubic-bezier(0.36, 0, 0.64, 1) -10s infinite alternate,
    //     scale 20s cubic-bezier(0.36, 0, 0.64, 1) -10s infinite alternate;
    // }
    // &:nth-child(4) {
    //   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -20s infinite alternate,
    //     animY 10s cubic-bezier(0.36, 0, 0.64, 1) -15s infinite alternate,
    //     scale 20s cubic-bezier(0.36, 0, 0.64, 1) -15s infinite alternate;
    // }
    // &:nth-child(5) {
    //   top: 100px;
    //   left: calc((1054px - 200px) / 2);
    //   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -21s infinite alternate,
    //     animY 10s cubic-bezier(0.36, 0, 0.64, 1) -16s infinite alternate;
    // }
  }
}
.round-box {
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 1054px;
  perspective: 600px;

  transform-style: preserve-3d;
  .box {
    position: relative;
  }
  .out-round {
    width: 1054px;
    height: 5080px;
    position: absolute;
    top: 0px;
    z-index: 1;
    transform: translateY(-54%) rotateX(82deg);
    img {
      width: 100%;
      height: 100%;
      animation: left-turn 60s linear infinite;
    }
  }

  .inner-round {
    width: 502px;
    height: 600px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateY(-100%) translateX(-50%);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<style lang="scss">
@keyframes animX {
  0% {
    left: 70px;
  }
  100% {
    left: calc(1054px - 210px);
  }
}
@keyframes animY {
  0% {
    top: 0;
  }
  100% {
    top: 280px;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>
