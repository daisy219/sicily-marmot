<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/04
 * desc: 关于我们
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

@Component({
  name: 'about',
  components: {},
})
export default class About extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
  }
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private card_list: any = [
    { url: '', createdBy: '赵阳', createTime: new Date(), title: '穿搭分享' },
  ];
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
}

</script>

<template>
<layout>
  <div class="common_page_container module_about_page">
    <div></div>
    <div class="common_title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconhunsha"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconxizhuang"></use>
      </svg>
      <span>没错，这是两个人的博客</span>
    </div>
    <div class="info_content">

    </div>
    <div class="common_title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconhunsha"></use>
      </svg>
      <span>专题</span>
    </div>
    <div class="special_content"></div>
  </div>
</layout>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.module_about_page
  .info_content
    height 200px

</style>
