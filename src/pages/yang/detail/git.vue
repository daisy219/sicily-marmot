<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/09
 * desc: git
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import {
  TITLE_ARR,
  CODE_MODULE_BASE,
  CODE_MODULE_ALIAS,
  CODE_MODULE_USUAL,
  CODE_MODULE_BRANCH,
  TEXT_MODULE_QUESTION,
  CODE_MODULE_QUESTION,
  } from '@/constant/yang_detail/git';
import CodeCard from '@/components/my_code.vue';


@Component({
  name: 'yang-detail-git',
  components: {
    'yang-detail-git': YangDetailGit,
    'code-card': CodeCard,
  },
})
export default class YangDetailGit extends Vue {
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
  private TITLE_ARR = TITLE_ARR;
  private CODE_MODULE_BASE = CODE_MODULE_BASE;
  private CODE_MODULE_ALIAS = CODE_MODULE_ALIAS;
  private CODE_MODULE_USUAL = CODE_MODULE_USUAL;
  private CODE_MODULE_BRANCH = CODE_MODULE_BRANCH;
  private TEXT_MODULE_QUESTION = TEXT_MODULE_QUESTION;
  private CODE_MODULE_QUESTION = CODE_MODULE_QUESTION;
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */

}

</script>

<template>
<layout>
  <div class="common_page_container yang_detail_git common_detail_main">
    <div class="common_detail_big_title">git 常用积累</div>

    <div class="common_detail_sml_title">{{ TITLE_ARR.CODE_MODULE_BASE }}</div>
    <code-card :code-list="CODE_MODULE_BASE" code-type="cmd"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.CODE_MODULE_ALIAS }}</div>
    <code-card :code-list="CODE_MODULE_ALIAS" code-type="cmd"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.CODE_MODULE_USUAL }}</div>
    <code-card :code-list="CODE_MODULE_USUAL" code-type="cmd"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.CODE_MODULE_BRANCH }}</div>
    <code-card :code-list="CODE_MODULE_BRANCH" code-type="cmd"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.CODE_MODULE_QUESTION }}</div>
    <div class="common_content_text">{{ TEXT_MODULE_QUESTION }}</div>
    <code-card :code-list="CODE_MODULE_QUESTION" code-type="cmd"/>
  </div>
</layout>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.yang_detail_git
  pass

</style>
