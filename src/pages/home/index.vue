<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/09/30
 * desc: 主页
 */
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { unique_array, yyyymmdd } from '@/utils/utils';
import { ListItemType } from '@/typing/page';

import BigCard from '@/components/big_card/index.vue';
import Service from '@/services/common';

@Component({
  name: 'home',
  components: {
    'big-card': BigCard,
  },
})
export default class Home extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  @Getter private inner_width!: number;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
    this.get_top_list();
    this.get_newest_list();
  }
  private mounted() {
    // this.bg_animate();
  }
  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private yyyymmdd = yyyymmdd;
  private top_loading: boolean = false;
  private list_loading: boolean = false;
  private top_list: ListItemType[] = [];
  private newest_list: ListItemType[] = [];
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  /** 获取置顶列表 */
  private async get_top_list() {
    this.top_loading = true;
    try {
      const result = await Service.get_top_list();
      this.top_list = result.data || [];
      this.top_loading = false;
    } catch (err) {
      this.top_loading = false;
      this.top_list = [];
    }
  }

  /** 获取最新列表 */
  private async get_newest_list() {
    this.list_loading = true;
    const params = {
      page: 1,
      pageSize: 10,
    };
    try {
      const result = await Service.get_list(params);
      this.list_loading = false;
      this.newest_list = result.data.list || [];
    } catch (err) {
      this.list_loading = false;
      this.newest_list = [];
    }
  }

  /** 进入详情 */
  private to_detail(info: ListItemType) {
    this.$router.push({name: 'content', query: { id: info._id }});
  }

}

</script>

<template>
<div class="module_home clearfix common_page_1000_container">
  <!-- 置顶模块 -->
  <div class="set_top_module" v-loading="top_loading">
    <div class="common_title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icontopdiyi"></use>
      </svg>
      <span>top && important</span>
    </div>
    <el-row class="top_content">
      <el-col :span="inner_width < 800 ? 24 : 12" class="top_item" v-for="item in top_list" :key="item._id" @mouseenter.native="$set(item, 'title_show', true)" 
        @mouseleave.native="$set(item, 'title_show', false)"
        @click.native="to_detail(item)">
        <el-image class="item_img" :src="item.cover" :fit="'cover'">
          <div slot="error" class="image-slot">
            <el-image src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" :fit="'cover'" />
          </div>
        </el-image>
        <transition name="el-zoom-in-center">
          <div class="top_item_title" v-show="item.title_show">{{ item.title }}</div>
        </transition>
      </el-col>
    </el-row>
  </div>
  <!-- 最近更新模块 -->
  <div class="newest_module">
    <div class="common_title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconzuixin"></use>
      </svg>
      <span>newest</span>
    </div>
    <big-card :newest-list="newest_list"/>
  </div>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'
.module_home
  width 100%
  .item_img
    border-radius 4px
    width 100%
    height 100%
  .set_top_module
    margin-bottom 60px
    .top_content
      margin 0 auto
      width 100%
      height 200px
      .top_item
        height 100%
        position relative
        cursor pointer
        padding 0 10px
        .item_img
          box-shadow 5px 5px 15px #888
        .top_item_title
          position absolute
          top 50px
          left 10px
          height 80px
          line-height 80px
          background rgba(0, 0, 0, 0.6)
          color $white_color
          width calc(100% - 20px)
          text-align center
          font-weight bold

</style>