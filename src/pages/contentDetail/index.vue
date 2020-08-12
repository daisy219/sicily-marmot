<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/05/21
 * desc: 文章详情模版
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import SkmService from '@/services/skm';
@Component({
  name: 'detail_articleTemplate',
  components: {},
})
export default class ContentDetailTemplate extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
    this.setDetail();
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private detail: string = ''; // data

  /* ------------------------ WATCH ------------------------ */

  /* ------------------------ METHODS ------------------------ */
  private async setDetail() {
    const id = this.$route.query.id;
    const result = await SkmService.searchById({id});

    this.detail = result.list;
  }

}

</script>

<template>
  <div class="module_detail_page">
    <link rel='stylesheet' href='./static/editor.md-master/css/editormd.min.css' />
    <div v-if="detail" class="common_page_1000_container common_detail_main">
      <div class="common_detail_big_title">{{ detail.title }}</div>
      <div class="common_content_info">{{ detail.info }}</div>
      <div class="markdown-body editormd-preview-container">
        <div v-html="detail.content"></div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.module_detail_page
  pass

</style>
