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
  }
];

const router = new VueRouter({
  routes,
});

export default router;
