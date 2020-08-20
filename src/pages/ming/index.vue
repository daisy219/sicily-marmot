<script lang="ts">
/* COMPONENT DOCUMENT
 * author: skm
 * date: 2019/12/04
 * desc: 肥仔专属
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { ListItemType } from '@/typing/page.d.ts';
import { yyyymmdd } from '@/utils/utils';

import ListCard from '@/components/list_card/index.vue';
import SkmService from '@/services/common';
import CommonMixin from '@/mixin/common';

@Component({
  name: 'ming',
  components: {
    'list-card': ListCard,
  },
  mixins: [CommonMixin],
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
  private yyyymmdd = yyyymmdd;

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  /** 获取列表 */
  private async get_list() {
    const params = {author : 'superOldman'};
    const { data } = await SkmService.get_list(params);
    this.list = data;
  }

  private to_detail(item: ListItemType) {
    (this as any).set_title(item.title);
    this.$router.push({name: 'content', query: {id: item._id}});
  }
}

</script>

<template>
  <div class="common_page_1000_container module_ming_page">
    <el-timeline>
      <el-timeline-item v-for="(item, index) in list" :key="index" :timestamp="yyyymmdd(new Date(item.updated_at))" placement="top" :color="'rgb(255, 221, 80)'">
        <el-card class="card_item clearfix" :body-style="{ padding: '0px' }" @click.native="to_detail(item)">
          <el-image :alt="item.title" style="width: 100px; height: 100px" class="fl" :src="item.saveImageUrl" :fit="'cover'">
            <div slot="error" class="image-slot">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconshoubing"></use>
              </svg>
            </div>
          </el-image>
          <div class="fl card_content">
            <h1 class="item_title text_overflow">{{ item.title }}</h1>
            <h2 class="item_info">{{ item.info }}</h2>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<style lang="stylus">
@import '~@/assets/stylus/var'

.module_ming_page
  // padding-left 180px
  .card_item
    height 100px
    cursor pointer
    transition all 0.2s
    padding-right 10px
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
      padding-left 20px
      .item_title
        width 100%
        font-size 18px
        line-height 50px
      .item_info
        font-size 14px
        line-height 20px
        color $font_light_color
        multi_text_overflow(2)   

</style>
