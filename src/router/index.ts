import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/index.vue';
import Yang from '@/pages/yang/index.vue';
import Ming from '@/pages/ming/index.vue';
import Classify from '@/pages/classify/index.vue';
import About from '@/pages/about/index.vue';

import YangRouter from './yang_detail';
import MingRouter from './ming_detail';

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
    ...YangRouter,
    ...MingRouter,
  ],
});
