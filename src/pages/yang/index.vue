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
  }
}

</script>

<template>
<layout>
  <div class="common_page_1000_container module_yang_page">
    <el-timeline>
      <el-timeline-item v-for="(item, index) in list" :key="index" :timestamp="item.date" placement="top" :color="'#ff6e7f'">
        <el-card class="card_item clearfix" :body-style="{ padding: '0px' }" @click.native="$router.push({name: item.route_name})">
          <el-image style="width: 100px; height: 100px" class="fl" :src="item.img" :fit="'cover'">
            <div slot="error" class="image-slot">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconduanqun"></use>
              </svg>
            </div>
          </el-image>
          <div class="fl card_content">
            <p class="item_title">{{ item.title }}</p>
            <p class="item_info">{{ item.info }}</p>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</layout>
</template>

<style lang="stylus">
@import '~@/assets/stylus/var'

.module_yang_page
  max-width 900px
  padding-left 180px
  .card_item
    height 100px
    cursor pointer
    transition all 0.2s
    .el-image
      .image-slot
        height 100px
        padding-top 14px
        text-align center
        .icon
          font-size 64px
    &:hover
      transform scale(1.02, 1.02)
    .card_content
      width calc(100% - 100px)
      .item_title
        font-size 18px
        line-height 50px
        color $black_font_color
      .item_info
        font-size 14px
        line-height 20px
        color $font_light_color
        multi_text_overflow(2)   
</style>
