<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/18
 * desc: babel-webpack从头配置
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { DESCRIPTION_TEXT,
        SMALL_TITLE,
        DESCRIPTION_CODE,
} from '@/constant/yang_detail/babel';


@Component({
  name: 'babel-page',
  components: {
  },
})
export default class BabelPage extends Vue {
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
<layout>
  <div class="common_page_container yang_detail_babel common_detail_main">
    <div class="common_detail_big_title">从零开始搭建babel-webpack架子</div>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.ONE }}</div>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.TWO }}</div>

    <div class="common_detail_sml_title">{{ SMALL_TITLE.ONE }}</div>
    <div class="common_content_text pre">{{ DESCRIPTION_TEXT.THREE }}</div>
    <code-card :code-list="DESCRIPTION_CODE.ONE" code-type="cmd"/>
    <div class="common_content_text pre">{{ DESCRIPTION_TEXT.FORE }}</div>
    <code-card :code-list="DESCRIPTION_CODE.TWO" pre/>
    <div class="common_content_text pre">{{ DESCRIPTION_TEXT.FIVE }}</div>
    <code-card :code-list="DESCRIPTION_CODE.THREE" pre/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.SIX }}</div>
    <code-card :code-list="DESCRIPTION_CODE.FORE" code-type="cmd"/>
    <code-card :code-list="DESCRIPTION_CODE.FIVE" pre/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.SEVEN }}</div>
    <code-card :code-list="DESCRIPTION_CODE.SIX" pre/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.EIGHT }}</div>
    <code-card :code-list="DESCRIPTION_CODE.SEVEN" pre/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.NIGHT }}</div>

    <div class="common_detail_sml_title">{{ SMALL_TITLE.TWO }}</div>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.TEN }}</div>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.ELEVEN }}</div>
    <code-card :code-list="DESCRIPTION_CODE.EIGHT" code-type="cmd"/>
    <div class="common_content_text">{{ DESCRIPTION_TEXT.TWELVE }}</div>
    <code-card :code-list="DESCRIPTION_CODE.NIGHT" pre/>


  </div>
</layout>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.yang_detail_babel
  pass

</style>
