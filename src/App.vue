<template>
  <!-- <header>{{ title }}</header>  -->
  <div id="main">
    <!-- router -->
    <NavRouter :navConfig="navConfig" />
    <router-view />
  </div>
</template>
<script>
import NavRouter from "@/components/nav/NavRouter.vue";
export default {
  name: "App",
  components: {
    NavRouter,
  },
  data() {
    return {
      title: "title in header",
      navConfig: [
        {
          name: "明哲堂",
          children: [
            {
              path: "/mingzhetang/fengshui",
              name: "建筑风水",
            },
            {
              path: "/mingzhetang/jiegou",
              name: "建筑结构",
            },
          ],
        },
        {
          path: "/about",
          name: "天子堂",
          children: [
            {
              path: "/",
              name: "建筑风水",
              component: () => import("./views/Home.vue"),
            },
            {
              path: "/",
              name: "建筑结构",
              component: () => import("./views/Home.vue"),
            },
          ],
          component: () => import("./views/About.vue"),
        },
        {
          path: "/more",
          name: "孙晓梅烈士纪念馆",
          children: [
            {
              path: "/",
              name: "建筑风水",
              component: () => import("./views/Home.vue"),
            },
            {
              path: "/",
              name: "建筑结构",
              component: () => import("./views/Home.vue"),
            },
          ],
          component: () => import("./views/More.vue"),
        },
        {
          path: "/more",
          name: "耕读世家",
          children: [
            {
              path: "/",
              name: "建筑风水",
              component: () => import("./views/Home.vue"),
            },
            {
              path: "/",
              name: "建筑结构",
              component: () => import("./views/Home.vue"),
            },
          ],
          component: () => import("./views/More.vue"),
        },
        {
          name: "春及堂",
          children: [
            {
              path: "/mingzhetang",
              name: "建筑风水",
              component: () => import("./views/sights/MingzheTang.vue"),
            },
            {
              path: "/about",
              name: "建筑结构",
              component: () => import("./views/About.vue"),
            },
          ],
        },
        {
          path: "/about",
          name: "积善堂",
          children: [
            {
              path: "/",
              name: "建筑风水",
              component: () => import("./views/Home.vue"),
            },
            {
              path: "/",
              name: "建筑结构",
              component: () => import("./views/Home.vue"),
            },
          ],
          component: () => import("./views/About.vue"),
        },
        {
          path: "/more",
          name: "居易堂",
          children: [
            {
              path: "/",
              name: "建筑风水",
              component: () => import("./views/Home.vue"),
            },
            {
              path: "/",
              name: "建筑结构",
              component: () => import("./views/Home.vue"),
            },
          ],
          component: () => import("./views/More.vue"),
        },
        {
          path: "/more",
          name: "子孙厅",
          children: [
            {
              path: "/",
              name: "建筑风水",
              component: () => import("./views/Home.vue"),
            },
            {
              path: "/",
              name: "建筑结构",
              component: () => import("./views/Home.vue"),
            },
          ],
          component: () => import("./views/More.vue"),
        },
        {
          name: "思源堂",
          children: [
            {
              path: "/mingzhetang",
              name: "建筑风水",
              component: () => import("./views/sights/MingzheTang.vue"),
            },
            {
              path: "/about",
              name: "建筑结构",
              component: () => import("./views/About.vue"),
            },
          ],
        },
        {
          path: "/about",
          name: "余荫堂",
          children: [
            {
              path: "/",
              name: "建筑风水",
              component: () => import("./views/Home.vue"),
            },
            {
              path: "/",
              name: "建筑结构",
              component: () => import("./views/Home.vue"),
            },
          ],
          component: () => import("./views/About.vue"),
        },
        {
          path: "/more",
          name: "庆善堂",
          children: [
            {
              path: "/",
              name: "建筑风水",
              component: () => import("./views/Home.vue"),
            },
            {
              path: "/",
              name: "建筑结构",
              component: () => import("./views/Home.vue"),
            },
          ],
          component: () => import("./views/More.vue"),
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
