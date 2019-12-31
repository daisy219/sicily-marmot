<script lang="ts">
/* COMPONENT DOCUMENT
 * author: skm
 * date: 2019/12/30
 * desc: quillEditor详情页
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

// @ts-ignore
import hljs from 'highlight.js';

@Component({
  name: 'myquillEditor',
  components: {
      // UnicodeTable,
  },
})
export default class  extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}
  @Emit('save') private save_handler(data: any) {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  // private my_data: string = 'some thing'; // data
  private content: string = '';
  private editorOption: any = {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // 加粗，斜体，下划线，删除线
        ['blockquote', 'code-block'], // 引用，代码块

        [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
        [{ list: 'ordered'}, { list: 'bullet' }], // 列表
        // [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
        // [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
        // [{ 'direction': 'rtl' }],             // 文本方向

        [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // 几级标题


        [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
        [{ font: [] }], // 字体
        [{ align: [] }], // 对齐方式


        ['clean'], // 清除字体样式
        ['image', 'video'], // 上传图片、上传视频
      ],
      syntax: {
        highlight: (text: any) => hljs.highlightAuto(text).value,
      },
    },
    // theme:'snow',
  };
  // get computed_data(): string { return 'computed' } // computed
  // get editor() {
  //   return this.$refs.myQuillEditor.quill;
  // }
  // get contentCode() {
  //   return hljs.highlightAuto(this.content).value
  // }

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  // private some_method(): void {}
  // private onEditorReady(editor: any): {} // 准备编辑器
  private onEditorBlur(editor: any) {
    // console.log('editor blur!', editor);
  } // 失去焦点事件
  private onEditorFocus(editor: any) {
    //  console.log('editor focus!', editor);
  } // 获得焦点事件
  private onEditorChange({ quill, html, text }: any) {
    //  console.log('editor change!', quill, html, text);
    this.save_handler(this.content);
  } // 内容改变事件
}
</script>

<template>
  <div class="edit_container">
      <quill-editor 
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
          @change="onEditorChange($event)">
      </quill-editor>
  </div> 
</template>

<style lang="stylus" scoped>
</style>
