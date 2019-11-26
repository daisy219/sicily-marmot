// ---------------------------------------- css ----------------------------------------
import '@/assets/stylus/reset.styl';
import '@/assets/stylus/index.styl';
import Vue from 'vue';

import ElementUI from 'element-ui';

import App from './App.vue';
import router from './router/index';
import store from './vuex/store';
import Layout from '@/layout/index.vue';
import { yymmddhhmmss } from '@/utils/utils';

import { EventBus } from '@/utils/event_bus/event_bus';
import { EventType } from '@/utils/event_bus/event_type';

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
// event bus
Vue.prototype.$$eventType = EventType;
Vue.prototype.$$eventBus = EventBus;

Vue.use(ElementUI);
Vue.component('layout', Layout);

// ---------------------------------项目信息------------------------------
// 项目信息
(window as any).__project__ = ((): COMMON_TYPE.ProjectInfoType | null => {
  if ( ! process || ! process.env) {
    return null;
  }
  const info: any = {
    version: process.env.version, // 版本
    build_timestamp: process.env.build_timestamp,
  };

  if (info.build_timestamp) {
    info.build_time = yymmddhhmmss(new Date(info.build_timestamp));
  }

  return info;
})();


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
