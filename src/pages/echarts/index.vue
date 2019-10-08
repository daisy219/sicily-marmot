<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/10/08
 * desc: echarts
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { subject_pie_chart_load } from './echarts';
import Services from '@/services/echarts';

@Component({
  name: 'echarts',
  components: {},
})
export default class Echarts extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
    this.get_data();
  }
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private subject_name_list: string[] = []; // 饼图科目名称列表
  private subject_data: any[] = []; // 科目分析饼图数据
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  /** 科目分析数据处理 */
  private deal_subject_data(val: any) {
    this.subject_data = [];
    this.subject_name_list = [];
    val.forEach((item: any, index: number) => {
      this.subject_name_list.push(item.subject);
      this.subject_data.push({name: item.subject, value: item.subjectDataRate});
    });

    let max = 0;
    let max_index = -1;
    this.subject_data.forEach((item, index) => {
      if (item.value > max) {
        max = item.value;
        max_index = index;
      }
    });
    subject_pie_chart_load(this.subject_data, this.subject_name_list, max_index);
  }

  private async get_data() {
    const result = await Services.get_subject();
    this.deal_subject_data(result);
  }
}

</script>

<template>
<layout>
  <div class="module_echarts common_page_container">
      <div id="subject_pie_chart"></div>
  </div>
</layout>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.module_echarts
  #subject_pie_chart
    width 400px
    height 200px

</style>
