<script lang='ts'>
/* COMPONENT DOCUMENT
 * author: skm
 * date: 2020/01/02
 * desc: Markdown编辑器
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

// @ts-ignore
import scriptjs from 'scriptjs';

import { defaultConfig } from './defaultConfig';
@Component({
  name: 'markdownEditor',
  components: {},
})
export default class extends Vue {
  /* ------------------------ INPUT &OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  @Prop({ type: String, default: '100%' }) private width!: string; // 播放器宽度
  @Prop({
    type: Object,
    default() {
      return {
        editorId: 'markdown-editor',
        config: {
          // 编辑器配置
          type: Object,
        },
        initData: {
          type: String,
        },
        initDataDelay: {
          type: Number, // 延迟初始化数据时间，单位毫秒
          default: 0,
        },
      };
    },
  }) private defaults!: any;

  // @Emit('event_name') private handler() {}
  @Emit('onchange') private onchange(obj: any) {}
  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  private mounted() {
    this.init();
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private editor: any = {};
  private timer: null = null;
  private doc: any = {};
  private jsLoadOver: boolean = false;
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  // private some_method(): void {}
  private fetchScript(url: string) {
    return new Promise((resolve) => {
      scriptjs(url, () => {
        resolve();
      });
    });
  }
  private getConfig() {
    return { ...defaultConfig, ...this.defaults.config };
  }
  private getEditor() {
    return this.editor;
  }
  private getDoc() {
    return this.doc;
  }
  private watch() {
    return this.editor.watch();
  }
  private unwatch() {
    return this.editor.unwatch();
  }
  private previewing() {
    return this.editor.previewing();
  }
  private getHTML() {
    return this.editor.getHTML();
  }
  private getMarkdown() {
    return this.editor.getMarkdown();
  }
  private setMarkdown(markdown: any) {
    return this.editor.setMarkdown(markdown);
  }
  private saveHtml() {
    const html = this.editor.getPreviewedHTML();
    const savehtml = {
        markdown: this.editor.getMarkdown(),
        html,
        text: 'window.$(html).text()',
    };
    this.onchange(savehtml);
  }
  private init() {
    const vm = this;
    const config = vm.getConfig();
    (async () => {
      await vm.fetchScript('https://cdn.bootcss.com/jquery/1.11.3/jquery.min.js');
      await vm.fetchScript('./static/editor.md-master/editormd.js');
      vm.$nextTick(() => {
        // @ts-ignore
        vm.editor = window.editormd(vm.defaults.editorId, config);
        // vm.editor.on('load', () => {
        //     setTimeout(() => { // hack bug: 一个页面多个编辑器只能初始化其中一个数据问题
        //     vm.initData && vm.editor.setMarkdown(vm.initData)
        //     }, vm.initDataDelay)
        // })
        // vm.editor.on('change', () => {
        //   const html = vm.editor.getPreviewedHTML();
        //   const savehtml = {
        //       markdown: vm.editor.getMarkdown(),
        //       html,
        //       text: 'window.$(html).text()',
        //   };
        //   vm.onchange(savehtml);
        // });
      });
    })();
  }
}
</script>

<template>
  <div class='markdown-editor-box'>
    <link rel='stylesheet' href='./static/editor.md-master/css/editormd.css' />
    <div :id='defaults.editorId'>{{defaults.editorId}}</div>
    <el-button class="saveButton" type="primary" @click="saveHtml">保存<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>

<style lang='stylus' scoped>
// @import '~@/assets/stylus/var'
.module_markdownEditor {
  pass;
}
</style>
