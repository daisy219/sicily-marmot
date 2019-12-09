<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/09
 * desc: unicode
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import {
  ARROW_LIST,
  TITLE_ARR,
  BASE_LIST,
  POINT_LIST,
  LAW_LIST,
  MONEY_LIST,
  NUM_LIST,
  MUSIC_LIST,
  RIGHT_WRONG_LIST,
  CROSS_LIST,
  START_LIST,
  OTHER_LIST,
  } from '@/constant/yang_detail/unicode';

import UnicodeTable from './_part/unicode_table.vue';

@Component({
  name: 'yang-detail-unicode',
  components: {
    'unicode-table': UnicodeTable,
  },
})
export default class YangDetailUnicode extends Vue {
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
  private ARROW_LIST = ARROW_LIST;
  private TITLE_ARR = TITLE_ARR;
  private BASE_LIST = BASE_LIST;
  private POINT_LIST = POINT_LIST;
  private LAW_LIST = LAW_LIST;
  private MONEY_LIST = MONEY_LIST;
  private NUM_LIST = NUM_LIST;
  private RIGHT_WRONG_LIST = RIGHT_WRONG_LIST;
  private START_LIST = START_LIST;
  private OTHER_LIST = OTHER_LIST;
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */

}

</script>

<template>
<layout>
  <div class="common_page_container yang_detail_unicode common_detail_main">
    <div class="common_detail_big_title">unicode字符集</div>

    <div class="common_detail_sml_title">{{ TITLE_ARR.ARROW }}</div>
    <unicode-table :unicode-list="ARROW_LIST"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.BASE }}</div>
    <unicode-table :unicode-list="BASE_LIST"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.POINT }}</div>
    <unicode-table :unicode-list="POINT_LIST"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.LAW }}</div>
    <unicode-table :unicode-list="LAW_LIST"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.MONEY }}</div>
    <unicode-table :unicode-list="MONEY_LIST"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.NUM }}</div>
    <unicode-table :unicode-list="NUM_LIST"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.RIGHT_WRONG }}</div>
    <unicode-table :unicode-list="RIGHT_WRONG_LIST"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.START }}</div>
    <unicode-table :unicode-list="START_LIST"/>

    <div class="common_detail_sml_title">{{ TITLE_ARR.OTHER }}</div>
    <unicode-table :unicode-list="OTHER_LIST"/>
  </div>
</layout>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.yang_detail_unicode
  pass

</style>
