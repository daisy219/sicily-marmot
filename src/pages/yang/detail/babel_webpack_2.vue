<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/18
 * desc: babel-webpack从头配置（二）
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { DESCRIPTION_TEXT,
        SMALL_TITLE,
        DESCRIPTION_CODE,
} from '@/constant/yang_detail/babel2';


@Component({
  name: 'babel-page-2',
  components: {
  },
})
export default class BabelPage2 extends Vue {
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
  private DESCRIPTION_TEXT = DESCRIPTION_TEXT;
  private SMALL_TITLE = SMALL_TITLE;
  private DESCRIPTION_CODE = DESCRIPTION_CODE;
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */

}

</script>

<template>
  <div class="common_page_1000_container yang_detail_babel2 common_detail_main">
    <div class="common_detail_big_title">从零开始搭建babel-webpack架子（二）</div>

    <div class="common_detail_sml_title">{{ SMALL_TITLE.ONE }}</div>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.ONE }}</div>
    <code-card :code-list="DESCRIPTION_CODE.ONE" code-type="cmd"/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.TWO }}</div>
    <code-card :code-list="DESCRIPTION_CODE.TWO" pre/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.THREE }}</div>
    <code-card :code-list="DESCRIPTION_CODE.THREE" pre/>

    <div class="common_content_text">{{ DESCRIPTION_TEXT.FORE }}</div>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.FIVE }}</div>
    <code-card :code-list="DESCRIPTION_CODE.FORE" code-type="cmd"/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.SIX }}</div>
    <code-card :code-list="DESCRIPTION_CODE.FIVE" pre/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.SEVEN }}</div>
    <code-card :code-list="DESCRIPTION_CODE.SIX" code-type="cmd"/>

    <div class="common_content_text">{{ DESCRIPTION_TEXT.EIGHT }}</div>
    <code-card :code-list="DESCRIPTION_CODE.SEVEN" code-type="cmd"/>
    <div class="common_detail_sml_title">{{ SMALL_TITLE.TWO }}</div>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.NINE }}</div>
    <code-card :code-list="DESCRIPTION_CODE.EIGHT" code-type="cmd"/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.TEN }}</div>
    <code-card :code-list="DESCRIPTION_CODE.NINE" pre/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.ELEVEN }}</div>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.TWELVE }}</div>
    <code-card :code-list="DESCRIPTION_CODE.TEN" pre/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.THIRTEEN }}</div>
    <code-card :code-list="DESCRIPTION_CODE.ELEVEN" pre/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.FORETEEN }}</div>
    <code-card :code-list="DESCRIPTION_CODE.TWELVE" code-type="cmd"/>

    <div class="common_content_text">{{ DESCRIPTION_TEXT.FIFTEEN }}</div>
    <code-card :code-list="DESCRIPTION_CODE.THIRTEEN" pre/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.SIXTEEN }}</div>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.SEVENTEEN }}</div>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.EIGHTTEEN }}</div>


  </div>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.yang_detail_babel2
  pass

</style>
