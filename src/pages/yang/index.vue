<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/04
 * desc: 屁阳专属
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { ListItemType } from '@/typing/page.d.ts';

import ListCard from '@/components/list_card/index.vue';
import YangService from '@/services/yang';

@Component({
  name: 'yang',
  components: {
    'list-card': ListCard,
  },
})
export default class Yang extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
    this.get_list();
  }
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private list: ListItemType[] = [];
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  /** 获取列表 */
  private async get_list() {
    const result = await YangService.get_list();
    this.list = result.list;
    console.log(this.list);
  }
}

</script>

<template>
<layout>
  <div class="common_page_container module_yang_page">
    <div v-for="(item, index) in list" :key="index">
      <list-card :card-info="item"/>
    </div>
  </div>
</layout>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.module_yang_page
  pass

</style>
