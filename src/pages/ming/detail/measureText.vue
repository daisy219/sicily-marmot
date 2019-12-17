<script lang="ts">
/* COMPONENT DOCUMENT
 * author: skm
 * date: 2019/12/17
 * desc: measureText详情页
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import UnicodeTable from '../../yang/detail/_part/unicode_table.vue';

@Component({
  name: 'ming_detail_measureText',
  components: {
      UnicodeTable,
  },
})
export default class  extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  // private my_data: string = 'some thing'; // data
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  // private some_method(): void {}

}

</script>

<template>
<layout>
    <div class="common_page_container yang_detail_unicode common_detail_main">
    <div class="common_detail_big_title">unicode字符集</div>
    <div class="common_content_text">使用方法：HTML内使用第二列前加）</div>

    <div class="common_detail_sml_title">1`2`12</div>
    <pre class="unicode_pre">
        const fontSize = '12px Microsoft Yahei';
        // 画框的宽度
        const limitWidth = 200;
        const text = 'sssss213德法 vs辅导费fdsfasfdsadsfasfasfs2222d2131312312sss';

        function computeText(fontSize, limitWidth, text) {
          const c = document.createElement('canvas');
          const ctx = c.getContext('2d');
          ctx.font = fontSize;
          let txt = text;
          const measureWidth = ctx.measureText(txt).width + 4;
          if (measureWidth > limitWidth) {
            let nowWidth = 0;
            let i = 0;
            for (i ; i < text.length; i++) {
              nowWidth += ctx.measureText(text.charAt(i)).width;
              if (nowWidth > limitWidth - 4) {
                break;
              }
            }
            txt = text.substring(0, i - 1) + '...';
          }
          return txt
        }
    </pre>
    <!-- <unicode-table :unicode-list="ARROW_LIST"/> -->
     </div>
</layout>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'
.unicode_pre
  background-color #606266
  color #f2f6fc
.module_measureText
  pass

</style>
