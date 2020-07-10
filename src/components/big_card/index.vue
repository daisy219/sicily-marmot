<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/05/13
 * desc: 大卡片组件
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { yyyymmdd } from '@/utils/utils';
import { ListItemType } from '@/typing/page';

@Component({
  name: 'big-card',
  components: {},
})
export default class ListCard extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  @Prop({ type: Array, default() { return []; } }) private newestList!: any[];

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private yyyymmdd = yyyymmdd;
  /* ------------------------ WATCH ------------------------ */

  /* ------------------------ METHODS ------------------------ */
  private to_detail(info: ListItemType) {
    this.$router.push({name: info.author === 'superOldman' ? 'ming_detail_articleTemplate' : 'yang_detail', query: { id: info._id }});
  }
}

</script>

<template>
<div class="module_list_card">
  <el-row v-for="(item, index) in newestList" :key="item._id" class="newest_item" :gutter="20" @click.native="to_detail(item)">
    <el-col :span="12" class="item_col">
      <div class="newest_content" v-show="index % 2 !== 0">
        <div class="title text_overflow">{{ item.title }}</div>
        <div class="desc">{{ item.info }}</div>
        <div class="align-right">
          <!-- <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconguankan"></use></svg>12</span>
          <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconzan"></use></svg>12</span> -->
          <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconxinbaniconshangchuan-"></use></svg>{{ item.hasFolder || '--' }}</span>
        </div>
        <div class="create">创建时间：{{ yyyymmdd(new Date(item.updated_at)) }}</div>
      </div>
      <el-image v-show="index % 2 === 0" class="item_img turn_big" :src="item.saveImageUrl" :fit="'cover'">
        <div slot="error" class="image-slot">
          <el-image src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" :fit="'cover'" />
        </div>
      </el-image>
    </el-col>
    <el-col :span="12" class="item_col">
      <div class="newest_content" v-show="index % 2 === 0">
        <div class="title text_overflow">{{ item.title }}</div>
        <div class="desc">{{ item.info }}</div>
        <div class="align-right">
          <!-- <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconguankan"></use></svg>12</span>
          <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconzan"></use></svg>12</span> -->
          <span class="icon_line"><svg class="icon" aria-hidden="true"><use xlink:href="#iconxinbaniconshangchuan-"></use></svg>{{ item.hasFolder || '--' }}</span>
        </div>
        <div class="create">创建时间：{{ yyyymmdd(new Date(item.updated_at)) }}</div>
      </div>
      <el-image v-show="index % 2 !== 0" class="item_img turn_big" :src="item.saveImageUrl" :fit="'cover'" >
        <div slot="error" class="image-slot">
          <el-image src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" :fit="'cover'" />
        </div>
      </el-image>
    </el-col>
  </el-row>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'
.module_list_card
  .newest_item
    border-radius 4px
    padding 20px
    margin-bottom 20px
    height 300px
    cursor pointer
    box-shadow 0px 0px 15px #909399
    transition all 0.2s
    &:hover
      transform scale(1.01, 1.01)
    .item_col
      height 100%
      overflow hidden
    .newest_content
      .title
        font-size 18px
        font_color(ink)
        line-height 40px
        font-weight bold
        width 100%
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
