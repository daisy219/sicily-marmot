<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/04
 * desc: 分类入库
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { ListItemType, FolderItemType, TagItemType } from '@/typing/page';

import BigCard from '@/components/big_card/index.vue';
import Service from '@/services/common';
import myPagination from '@/components/myPagination/index.vue';



@Component({
  name: 'classify',
  components: {
    'big-card': BigCard,
    'my-pagination': myPagination,
  },
})
export default class Classify extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  @Getter private skin!: any;
  @Getter private inner_width!: number;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
    this.get_all_list();
    this.get_folder_and_tag_list();
  }
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private list_loading: boolean = false;
  private newest_list: ListItemType[] = [];
  private folder_list: FolderItemType[] = [];
  private tag_list: TagItemType[] = [];
  private page: number = 1;
  private pageSize: number = 10;
  private total: number = 0;
  private currentClassify: string = 'all';
  /* ------------------------ WATCH ------------------------ */

  /* ------------------------ METHODS ------------------------ */
  /** 获取最新列表 */
  private async get_all_list() {
    this.currentClassify = 'all';
    this.list_loading = true;
    const params = {
      page: this.page,
      pageSize: this.pageSize,
    };
    try {
      const result = await Service.get_list(params);
      this.list_loading = false;
      this.newest_list = result.data.list || [];
      this.total = result.data.sum;
    } catch (err) {
      this.list_loading = false;
      this.newest_list = [];
      this.total = 0;
    }
  }

  /** 获取文件夹和标签列表 */
  private async get_folder_and_tag_list() {
    const result = await Service.get_folder_and_tag_list();
    this.folder_list = result.data.folderList;
    this.tag_list = result.data.tagList;
  }


  /** 翻页 */
  private currentChangeHandle(page: number) {
    this.page = page;
    this.get_all_list();
  }

  /** 根据文件夹或标签获取内容 */
  private async get_folder_or_tag_content(type: string, name: string) {
    this.currentClassify = name;
    const params = type === 'folder' ? { hasFolder: name } : { hasTags: name };
    this.list_loading = true;
    try {
      const result = await Service.get_folder_or_tag_content(params);
      this.list_loading = false;
      this.newest_list = result.data;
      this.total = 0;
    } catch (err) {
      this.total = 0;
      this.newest_list = [];
      this.list_loading = false;
    }
  }

}
</script>

<template>
  <div class="common_page_1000_container module_classify_page">
    <el-row :gutter="40">
      <el-col :span="inner_width > 1000 ? 8 : 24">
        <div class="folder_module">
          <div class="common_title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconA"></use>
            </svg>
            <span>folder</span>
          </div>
          <div v-for="item in folder_list" :key="item._id" class="folder_item clearfix" @click="get_folder_or_tag_content('folder', item.folderName)">
            <el-image :alt="item.folderName" style="width: 60px; height: 60px" :src="item.cover" :fit="'cover'" class="fl turn_big"/>
            <div :class="['folder_name', 'fl', {'lemon': skin === 'lemon_theme', 'cherry': skin === 'cherry_theme', 'peach': skin === 'peach_theme'}]">{{ item.folderName }}</div>
          </div>
          <div class="folder_item clearfix" @click="currentChangeHandle(1)">
            <el-image style="width: 60px; height: 60px" :src="require('@/assets/images/all.png')" :fit="'cover'" class="fl turn_big"/>
            <div :class="['folder_name', 'fl', {'lemon': skin === 'lemon_theme', 'cherry': skin === 'cherry_theme', 'peach': skin === 'peach_theme'}]">全部</div>
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
          <span class="tag_item" @click="currentChangeHandle(1)">全部</span>
          <span class="tag_item" v-for="item in tag_list" :key="item._id" @click="get_folder_or_tag_content('tag', item.name)">{{ item.name }}</span>
        </div>
      </el-col>
      <el-col :span="inner_width > 1000 ? 16 : 24" v-loading="list_loading">
        <div class="common_title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconhuodong"></use>
          </svg>
          <span>{{ currentClassify }}</span>
        </div>
        <big-card v-if="newest_list && newest_list.length !== 0" :newest-list="newest_list"/>
        <my-pagination :current-page="page" :total="total" :page-size="pageSize" @currentChange="currentChangeHandle"/>

        <div class="common_no_data" v-if="!newest_list || newest_list.length === 0">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconzanwushuju"></use>
          </svg>
          <p>暂无数据</p>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_classify_page
  .folder_item
    margin-bottom 10px
    cursor pointer
    box-shadow 0px 0px 8px #909399
    border-radius 4px
    transition all 0.2s
    overflow hidden
    .folder_name
      line-height 60px
      font-size 18px
      margin-left 40px
      color $font_grey_color
    .lemon
      &:hover
        font_color('lemon')
    .peach
      &:hover
        font_color('peach')
    .cherry
      &:hover
        font_color('cherry')
  .tag_group
    display flex
    flex-wrap wrap
    .tag_item
      font-size 14px
      line-height 30px
      padding 0 5px
      border-radius 4px
      border 1px solid rgb(100, 145, 115)
      color rgb(100, 145, 115)
      margin 5px
      cursor pointer
      transition all 0.3s
      &:hover
        background-color #f0f9eb
</style>
