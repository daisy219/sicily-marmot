<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/04
 * desc: 列表卡片组件
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { from_current_top_scroll_to } from '@/utils/dom';

@Component({
  name: 'scroll-to-top',
  components: {},
})
export default class ScrollToTop extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
    window.addEventListener('scroll', this.change_status);
  }

  private beforeDestroy() {
    window.removeEventListener('scroll', this.change_status);
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private backToTop: boolean = false;
  /* ------------------------ WATCH ------------------------ */

  /* ------------------------ METHODS ------------------------ */
  /** 修改绳子状态 */
  private change_status() {
    if (window.pageYOffset !== 0) {
      this.backToTop = true;
    } else {
      this.backToTop = false;
    }
  }

  /** 回到顶部 */
  private scroll_to_top() {
    from_current_top_scroll_to();
  }
}

</script>

<template>
<div class="module_scroll_to_top">
  <div :class="['line', {'long': backToTop}]"></div>
  <svg class="icon" aria-hidden="true" @click="scroll_to_top">
    <use xlink:href="#iconmaozhao"></use>
  </svg>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_scroll_to_top
  position relative
  
  .line
    margin-left 22px
    transform translateX(-50%)
    width 4px
    height 120px
    background rgb(255, 110, 127)
    transform translateY(10px)
    transition height 0.7s
  .long
    height 600px
  .icon
    position relative
    z-index 99
    cursor pointer
    font-size 50px
    font-font-weight border
    transition all 0.3s
    &:hover
      transform rotate(180deg)
</style>
