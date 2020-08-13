import Vue from 'vue';
import Vuex from 'vuex';
import Skin from './module/skin';
import InnerWidth from './module/media';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Skin: Skin as any,
    InnerWidth: InnerWidth as any,
  },
});
