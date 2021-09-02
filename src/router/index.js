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
      import(/* webpackChunkName: "dragging" */ "../views/testss/dragging.vue"),
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
  }
];

const router = new VueRouter({
  routes,
});

export default router;
