import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/index.vue';
import Yang from '@/pages/yang/index.vue';
import Ming from '@/pages/ming/index.vue';
import Classify from '@/pages/classify/index.vue';
import About from '@/pages/about/index.vue';
import Content from '@/pages/contentDetail/index.vue';
import Index from '@/pages/index.vue';

import YangRouter from './yang_detail';

import { from_current_top_scroll_to } from '@/utils/dom';

Vue.use(Router);
// console.log('base', process);
// console.log('base', process.env);
// console.log('base', process.env.BASE_URL);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location: any) {
  // @ts-ignore
  return originalPush.call(this, location).catch((err: any) => err);
};

const router =  new Router({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // redirect: () => {
      //   return 'home';
      // },
      component: Index,
      children: [
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
        {
          path: '/content',
          name: 'content',
          component: Content,
        },
        ...YangRouter,
      ],
    },

  ],
});

router.beforeEach((to, from, next) => {
  // console.log(to, from, next);
  from_current_top_scroll_to();
  next();
});

export default router;
