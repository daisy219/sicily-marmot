import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import('@/pages/home/index.vue')
const Yang = () => import('@/pages/yang/index.vue')
const Ming = () => import('@/pages/ming/index.vue')
const Classify = () => import('@/pages/classify/index.vue')
const About = () => import('@/pages/about/index.vue')
const Content = () => import('@/pages/contentDetail/index.vue')
const Index = () => import('@/pages/index.vue')

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

const router = new Router({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: () => {
        return 'home';
      },
      component: Index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
          meta: {
            title: 'sicily-marmot',
          },
        },
        {
          path: '/yang',
          name: 'yang',
          component: Yang,
          meta: {
            title: 'sicily-marmot',
          },
        },
        {
          path: '/ming',
          name: 'ming',
          component: Ming,
          meta: {
            title: 'sicily-marmot',
          },
        },
        {
          path: '/classify',
          name: 'classify',
          component: Classify,
          meta: {
            title: 'sicily-marmot',
          },
        },
        {
          path: '/about',
          name: 'about',
          component: About,
          meta: {
            title: 'sicily-marmot',
          },
        },
        {
          path: '/content',
          name: 'content',
          component: Content,
          meta: {
            title: 'sicily-marmot',
          },
        },
        ...YangRouter,
      ],
    },

  ],
});

router.beforeEach((to, from, next) => {
  // console.log(to, from, next);
  from_current_top_scroll_to();
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
