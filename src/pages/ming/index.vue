<script lang="ts">
/* COMPONENT DOCUMENT
 * author: skm
 * date: 2019/12/04
 * desc: 肥仔专属
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { ListItemType } from '@/typing/page.d.ts';

import ListCard from '@/components/list_card/index.vue';
import SkmService from '@/services/skm';

@Component({
  name: 'ming',
  components: {
    'list-card': ListCard,
  },
})
export default class Ming extends Vue {
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
    const params = {author : 'superOldman'};
    const result = await SkmService.get_list(params);
    this.list = result;
  }
}

</script>

<template>
<layout>
  <div class="common_page_container module_ming_page">
    <!-- <div v-for="(item,index) in list" :key="index">{{item}}</div> -->
    <div v-for="(item, index) in list" :key="index">
      <list-card :card-info="item"
       @click.native="$router.push({ name: 'ming_detail_articleTemplate',params: { detail: list[index] }, query : { goto: list[index]._id}})"
    />
    </div>
  </div>
</layout>
</template>
<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.module_ming_page
  pass

</style>
