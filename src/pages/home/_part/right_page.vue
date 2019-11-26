<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/10/09
 * desc: 首页右侧内容
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';


@Component({
  name: 'home-right',
  components: {},
})
export default class HomeRight extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  @Prop({type: Array, default() { return []; }}) private curPageList!: number[];
  @Prop({type: Number, default: -1}) private curPage!: number;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private cur_page: number = -1; // data
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  @Watch('curPage') private curPage_changed(val: any, oldVal: any) {
    this.cur_page = val;
  }

  /* ------------------------ METHODS ------------------------ */
  private change_page(tab: number) {
    this.cur_page = tab;
    // console.log(this);
    if (tab === 1) {
      // (this.$parent.$parent as any).show_img_handle(true);
      this.$$eventBus.fire(this.$$eventType.SwitchButtonShow, false);
    } else {
      this.$$eventBus.fire(this.$$eventType.SwitchButtonShow, true);
    }
  }

}

</script>

<template>
<div class="module_right_page">
  <div class="tab_title clearfix">
    <div class="tab_title_item" v-for="(item, index) in curPageList" :key="index" @click="change_page(item)">{{'页面'+ item}}</div>
  </div>
  <div>
    <div v-show="cur_page === 1">页面1</div>
    <div v-show="cur_page === 2">页面2</div>
  </div>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_right_page
  .tab_title
    .tab_title_item
      float left
      width 100px
      height 50px
      line-height 50px
      text-align center
      background-color $main_color
      color $white_color
      border-radius 4px

</style>
