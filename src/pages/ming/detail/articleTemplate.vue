<script lang="ts">
/* COMPONENT DOCUMENT
 * author: skm
 * date: 2019/12/31
 * desc: 文章详情模版
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import SkmService from '@/services/skm';
@Component({
  name: 'ming_detail_articleTemplate',
  components: {},
})
export default class  extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() { this.setDetail(); }
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private detail: string = ''; // data
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private setDetail(): void {
    if (this.$route.params.detail) {
      this.detail = this.$route.params.detail;
    } else {
      const url = window.location.href;
      const id = url.split('?id=')[1];
      SkmService.searchById({id}).then((data) => {
        this.detail = data.list;
      });
    }
  }

}

</script>

<template>
<div class="module_detail_page">
<layout>
    <link rel='stylesheet' href='./static/editor.md-master/css/editormd.min.css' />
    <div v-if="detail" class="common_page_1000_container yang_detail_unicode common_detail_main">
      <div class="common_detail_big_title">{{detail.title}}</div>
      <div class="common_content_info">{{detail.info}}</div>
      <div class="markdown-body editormd-preview-container">
        <div v-html="detail.content"></div>
      </div>
    </div>
</layout>
</div>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.module_detail_page
  pass

</style>
