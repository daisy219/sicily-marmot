<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/09
 * desc: unicode table
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import { UnicodeItemType } from '@/typing/page.d.ts';

@Component({
  name: 'unicode-table',
  components: {},
})
export default class UnicodeTable extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  @Prop({ type: Array, default() { return []; } }) private unicodeList!: UnicodeItemType;
  // @Prop({ type: String, default: 'code' }) private codeType!: string;
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
  <div class="unicode_table">
    <el-table :data="unicodeList" class="common_table">
      <el-table-column prop="final" label="效果" width="180" align="center">
        <template slot-scope="scope"> {{ scope.row.final }}</template>
      </el-table-column>
      <el-table-column prop="html" label="HTML" width="180" align="center" />
      <el-table-column prop="css_js" label="CSS&JS" align="center" />
    </el-table>
  </div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.unicode_table
  pass
</style>
