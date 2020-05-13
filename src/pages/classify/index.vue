<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/04
 * desc: 分类入库
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import BigCard from '@/components/big_card/index.vue';



@Component({
  name: 'classify',
  components: {
    'big-card': BigCard,
  },
})
export default class Classify extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
  }
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private newest_list: any[] = [
    {id: 1, title: '题目', desc: '这里是简介', create: new Date(), url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'},
    {id: 2, title: '题目', desc: '这里是简介', create: new Date(), url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'},
  ];
  private folder_list: any[] = [
    { id: 1, name: 'javascript', url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg' },
    { id: 2, name: 'javascript', url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg' },
    { id: 3, name: 'javascript', url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg' },
  ];
  private tag_list: string[] = ['css', 'js', 'git', 'mongoDB'];
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */


}
</script>

<template>
<layout>
  <div class="common_page_container module_classify_page">
    <el-row :gutter="40">
      <el-col :span="16">
        <div class="common_title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconhuodong"></use>
          </svg>
          <span>all</span>
        </div>
        <big-card :newest-list="newest_list"/>
      </el-col>
      <el-col :span="8">
        <div class="folder_module">
          <div class="common_title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconA"></use>
            </svg>
            <span>folder</span>
          </div>
          <div v-for="item in folder_list" :key="item.id" class="folder_item clearfix">
            <el-image style="width: 50px; height: 50px" :src="item.url" :fit="'cover'" class="fl turn_big"/>
            <div class="folder_name fl">{{ item.name }}</div>
          </div>
        </div>
        <div class="tag_module">
          <div class="common_title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconbiaoqian"></use>
            </svg>
            <span>tag</span>
          </div>
        </div>
        <div class="tag_group">
          <span class="tag_item" v-for="item in tag_list" :key="item">{{ item }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</layout>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_classify_page
  .folder_item
    margin-bottom 10px
    padding-bottom 10px
    border-bottom 1px dotted $light_border_color
    cursor pointer
    .folder_name
      line-height 50px
      font-size 18px
      margin-left 40px
      color $font_grey_color
  .tag_group
    .tag_item
      font-size 14px
      line-height 30px
      padding 0 10px
      border-radius 4px
      border 1px solid rgb(100, 145, 115)
      font_color('ink')
      margin 5px
      cursor pointer
      transition all 0.3s
      &:hover
        background-color #f0f9eb
</style>
