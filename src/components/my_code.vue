<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/09
 * desc: 代码块
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { CodeItemType } from '@/typing/page.d.ts';

@Component({
  name: 'my-code',
  components: {},
})
export default class MyCode extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  @Prop({ type: Array, default() { return []; } }) private codeList!: CodeItemType;
  @Prop({ type: String, default: 'code' }) private codeType!: string;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
  }
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */

}

</script>

<template>
  <div class="my_code">
    <div v-for="(item, index) in codeList" :key="index">
      <span v-show="codeType === 'cmd'">$</span>{{ item.code }}<span class="code_notes" v-show="item.notes">// {{ item.notes }}</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.my_code
  background-color $black_color
  padding 20px
  border-radius 4px
  color $white_color
  font-size 14px
  line-height 30px
  margin-bottom 20px
  .code_notes
    color $font_light_color
    margin-left 10px
    font-style italic

</style>
