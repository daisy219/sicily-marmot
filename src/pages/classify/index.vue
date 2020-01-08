<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/04
 * desc: 分类入库
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import twMarkdownView from '../../components/markdownEditor/markdownEditor.vue';
import SkmService from '@/services/skm';

@Component({
  name: 'classify',
  components: {
    twMarkdownView,
  },
})
export default class Classify extends Vue {
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
  private markdownView: any = '';
  private markdownView2: any = '';
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private onchange(obj: any) {
    this.markdownView2 = obj;
    this.getHTML();
  }
  private getHTML() {
    console.log('打印', this.markdownView2);
    const self = this;
    SkmService.saveHtml({
      title: '新编辑器',
      info: 'info',
      content: self.markdownView2.html,
      author: 'superOldman',
    }).then((data) => {
      self.$alert(data.message, '提示', {
        confirmButtonText: '知道了',
      });
    });
  }


}

</script>

<template>
<layout>
  <div class="common_page_container module_classify_page">
    分类入库
    <tw-markdown-view ref="markdownView" @onchange="onchange"></tw-markdown-view>

  </div>
</layout>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.module_classify_page
  pass

</style>
