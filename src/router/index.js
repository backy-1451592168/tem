import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dragging",
    name: "dragging",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/dragging/dragging.vue"),
  },
  {
    path: "/zhen",
    name: "zhen",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/zhen/index.vue"),
  },
  {
    path: "/element",
    name: "element",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/element/index.vue"),
  },
  {
    path: "/moment",
    name: "moment",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/moment/index.vue"),
  },
  {
    path: "/videoPage",
    name: "videoPage",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/videoPage/index.vue"),
  },
  {
    path: "/chart",
    name: "chart",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/chart/index.vue"),
  },
  {
    path: "/wenzi",
    name: "wenzi",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/wenzi/index.vue"),
    path: "/globalFiltering",
    name: "globalFiltering",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/globalFiltering/index.vue"),
  },
  {
    path: "/backgroundDiagram",
    name: "backgroundDiagram",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/backgroundDiagram/index.vue"),
  },
  {
    path: "/scrollBar",
    name: "scrollBar",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/scrollBar/index.vue"),
  },
  {
    path: "/scrollrandl",
    name: "scrollrandl",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/scrollrandl/index.vue"),
  },
  {
    path: "/lottie",
    name: "lottie",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/lottie/index.vue"),
  },
  {
    path: "/crop",
    name: "crop",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/crop/index.vue"),
  },
  {
    path: "/button",
    name: "button",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/button/index.vue"),
  },
  {
    path: "/gradient",
    name: "gradient",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/gradient/index.vue"),
  },
  {
    path: "/countDown",
    name: "countDown",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/countDown/index.vue"),
  },
  {
    path: "/verification",
    name: "verification",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/verification/index.vue"),
  },
  {
    path: "/resize",
    name: "resize",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/resize/index.vue"),
  },
  {
    path: "/barcode",
    name: "barcode",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/barCode/index.vue"),
  },
  {
    path: "/storeView",
    name: "storeView",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/storeView/index.vue"),
  },
  {
    path: "/map",
    name: "map",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/map/index.vue"),
  },
  {
    path: "/testss",
    name: "testss",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/testss/index.vue"),
  },
  {
    path: "/line",
    name: "line",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/line/index.vue"),
  },
  {
    path: "/indexCopy",
    name: "indexCopy",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/line/indexCopy.vue"),
  },
  {
    path: "/lineDome",
    name: "lineDome",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/line/dome.vue"),
  },
  {
    path: "/dong",
    name: "dong",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/line/dong.vue"),
  },
  {
    path: "/lineThree",
    name: "lineThree",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/line/lineThree/index.vue"),
  },
  {
    path: "/propertyLine",
    name: "propertyLine",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/line/propertyLine.vue"),
  },
  {
    path: "/elProgress",
    name: "elProgress",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/elProgress/index.vue"),
  },
  {
    path: "/testLine",
    name: "testLine",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/line/testLine.vue"),
  },
  {
    path: "/echartsMap",
    name: "echartsMap",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/echartsMap/index.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/test/index.vue"),
  },
  {
    path: "/filtration",
    name: "filtration",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/filtration/index.vue"),
  },
  {
    path: "/miaomiao",
    name: "miaomiao",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/filtration/miaomiao.vue"),
  },
  {
    path: "/vuemap_vue_amap",
    name: "vuemap_vue_amap",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/vuemap/vuemap_vue_amap.vue"),
  },
  {
    path: "/watermarking",
    name: "vuemap_vue_amap",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/watermarking/index.vue"),
  },
  {
    path: "/lineDemo",
    name: "lineDemo",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/line-demo/index.vue"),
  },
  {
    path: "/time",
    name: "time",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/time/index.vue"),
  },
  {
    path: "/jsplumb",
    name: "jsplumb",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/jsplumb/index.vue"),
  },
  {
    path: "/ts",
    name: "ts",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/ts/index.vue"),
  },
  {
    path: "/elImageViewer",
    name: "elImageViewer",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/elImageViewer/index.vue"),
  },
  {
    path: "/tree",
    name: "tree",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/tree/index.vue"),
  },
  {
    path: "/lihua",
    name: "lihua",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/lihua/index.vue"),
  },
  {
    path: "/upload",
    name: "upload",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/lihua/upload.vue"),
  },
  {
    path: "/loading",
    name: "loading",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/loading/index.vue"),
  },
  {
    path: "/aa",
    name: "aa",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/aa/index.vue"),
  },
  {
    path: "/antv",
    name: "antv",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/antv/index.vue"),
  },
  {
    path: "/com",
    name: "com",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/antv/com.vue"),
  },
  {
    path: "/drag",
    name: "drag",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/drag/index.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "dragging" */ "../views/search/index.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
