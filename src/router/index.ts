import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/index.vue';
import Echarts from '@/pages/echarts/index.vue';
import Video from '@/pages/video/index.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: () => {
        return 'home';
      },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: Echarts,
    },
    {
      path: '/video',
      name: 'video',
      component: Video,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
