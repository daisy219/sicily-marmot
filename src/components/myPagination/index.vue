<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/04
 * desc: 列表卡片组件
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

@Component({
  name: 'my-pagination',
  components: {},
})
export default class MyPagination extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  @Prop({ type: Number, default: 1 }) private currentPage!: number; // 当前页
  @Prop({ type: Number, default: 1 }) private total!: number; // 数据总数
  @Prop({ type: Number, default: 1 }) private pageSize!: number; // 每页条数

  @Emit('currentChange') private currentChange(val: number) {}
  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  /* ------------------------ WATCH ------------------------ */
  /* ------------------------ METHODS ------------------------ */
  /** 当前页变更 */
  private handleCurrentChange(val: number) {
    this.currentChange(val);
  }
}

</script>

<template>
<div class="my_pagination">
  <el-pagination v-show="total" class="common-el-pagination" @current-change="handleCurrentChange" :current-page="currentPage"
    :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="total">
	</el-pagination>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.my_pagination
  text-align center
  padding-top 20px
</style>
