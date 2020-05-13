<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/09/30
 * desc: 主页
 */
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { unique_array, yyyymmdd } from '@/utils/utils';

@Component({
  name: 'home',
  components: {
  },
})
export default class Home extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  private mounted() {
    // this.bg_animate();
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private yyyymmdd = yyyymmdd;
  private top_list: any[] = [
    { id: 1, title: '题目',  url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' },
    { id: 2, title: '题目',  url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' },
  ];
  private newest_list: any[] = [
    {id: 1, title: '题目', desc: '这里是简介', create: new Date(), url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'},
    {id: 2, title: '题目', desc: '这里是简介', create: new Date(), url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'},
  ];
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */


}

</script>

<template>
<layout>
<div class="module_home clearfix common_page_container">
  <!-- 置顶模块 -->
  <div class="set_top_module">
    <div class="common_title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icontopdiyi"></use>
      </svg>
      <span>top && important</span>
    </div>
    <el-row class="top_content" :gutter="20">
      <el-col :span="12" class="top_item" v-for="item in top_list" :key="item.id" @mouseenter.native="$set(item, 'title_show', true)" @mouseleave.native="$set(item, 'title_show', false)">
        <el-image class="item_img" :src="item.url" :fit="'cover'" />
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
    <el-row v-for="(item, index) in newest_list" :key="item.id" class="newest_item" :gutter="20">
      <el-col :span="12" class="item_col">
        <div class="newest_content" v-show="index % 2 !== 0">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="align-right">
            <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconguankan"></use></svg>12</span>
            <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconzan"></use></svg>12</span>
            <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconxinbaniconshangchuan-"></use></svg>html</span>
          </div>
          <div class="create">创建时间：{{ yyyymmdd(item.create) }}</div>
        </div>
        <el-image v-show="index % 2 === 0" class="item_img turn_big" :src="item.url" :fit="'cover'" />
      </el-col>
      <el-col :span="12" class="item_col">
        <div class="newest_content" v-show="index % 2 === 0">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="align-right">
            <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconguankan"></use></svg>12</span>
            <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconzan"></use></svg>12</span>
            <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconxinbaniconshangchuan-"></use></svg>html</span>
          </div>
          <div class="create">创建时间：{{ yyyymmdd(item.create) }}</div>
        </div>
        <el-image v-show="index % 2 !== 0" class="item_img turn_big" :src="item.url" :fit="'cover'" />
      </el-col>
    </el-row>
  </div>
</div>
</layout>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'
.module_home
  .item_img
    border-radius 4px
    height 100%
  .set_top_module
    margin-bottom 60px
    .top_content
      margin 0 auto
      width 100%
      height 200px
      border 1px solid $light_border_color
      border-radius 4px
      padding 20px
      .top_item
        height 100%
        position relative
        cursor pointer
        .top_item_title
          position absolute
          top 40px
          left 10px
          height 80px
          line-height 80px
          background rgba(0, 0, 0, 0.5)
          color $white_color
          width calc(100% - 20px)
          text-align center
          font-weight bold
  .newest_module
    .newest_item
      border 1px solid $light_border_color
      border-radius 4px
      padding 20px
      margin-bottom 20px
      height 300px
      cursor pointer
      .item_col
        height 100%
        overflow hidden
      .turn_big
        transition all 0.5s
        &:hover
          transform scale(1.5, 1.5)
      .newest_content
        .title
          font-size 18px
          font_color(ink)
          line-height 40px
          font-weight bold
        .desc
          font-size 14px
          color $font_grey_color
          line-height 30px
          height 170px
        .create
          font-size 12px
          line-height 30px
          color $font_light_color
          text-align right
          padding-right 20px
        .icon_line
          margin-right 20px
          font-size 14px
          color $font_grey_color
</style>