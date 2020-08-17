<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/09/30
 * desc: 入口
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import ScrollToTop from '@/components/scroll_to_top/index.vue';
import { reset_media } from '@/utils/dom';

@Component({
  name: 'app',
  components: {
    'scroll-to-top': ScrollToTop,
  },
})
export default class App extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  @Getter private inner_width!: number;
  @Action private change_inner_width_action!: (type: number) => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
    this.change_inner_width_action(window.innerWidth);
    window.addEventListener('resize', this.resize_handle);
  }
  private mounted() {
    this.reset_media();
  }
  private beforeDestroy() {
    window.removeEventListener('resize', this.resize_handle);
  }
  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private resize_handle() {
    this.reset_media();
    this.change_inner_width_action(window.innerWidth);
  }

  private reset_media() {
    reset_media('common_page_1000_container', 'width: 1000px', 'width: 100%');
  }

}

</script>

<template>
  <div id="app">
    <router-view/>
    <scroll-to-top class="scroll-to-top"/>
  </div>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

#app
  .scroll-to-top
    position fixed
    top 50px
    right 50px

</style>
