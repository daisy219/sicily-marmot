import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/index.vue';
import Yang from '@/pages/yang/index.vue';
import Ming from '@/pages/ming/index.vue';
import Classify from '@/pages/classify/index.vue';
import About from '@/pages/about/index.vue';
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
      path: '/yang',
      name: 'yang',
      component: Yang,
    },
    {
      path: '/ming',
      name: 'ming',
      component: Ming,
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    // {
    //   path: '/echarts',
    //   name: 'echarts',
    //   component: Echarts,
    // },
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
