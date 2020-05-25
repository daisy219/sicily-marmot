<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/04
 * desc: 关于我们
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { yyyymmdd } from '@/utils/utils';
import { ListItemType } from '@/typing/page';
import Service from '@/services/common';

@Component({
  name: 'about',
  components: {},
})
export default class About extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
    this.get_folder_or_tag_content();
  }
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private yyyymmdd = yyyymmdd;
  private list_loading: boolean = false;
  private life_list: ListItemType[] = [];
  private message_list: any = [
    { avatar: '', name: 'test', message: '网站好棒！', create_date: new Date() },
    { avatar: '', name: 'test', message: '网站好棒！', create_date: new Date() },
    { avatar: '', name: 'test', message: '网站好棒！', create_date: new Date() },
    { avatar: '', name: 'test', message: '网站好棒！', create_date: new Date() },
    { avatar: '', name: 'test', message: '网站好棒！', create_date: new Date() },
  ];
  private image_url: string = '';
  private params: any = {};
  private info_text: string[] = [
    '不是大神，不会鸡血',
    '没有过人的才智让代码屈服',
    '不会醉心于代码忘记生活',
    '我们是普通的程序员小兵',
    '在这里分享一点点经验',
    '希望每天都有收获，每天都有收获就好',
  ];
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private handleAvatarSuccess(res: any, file: any) {
    this.image_url = URL.createObjectURL(file.raw);
  }
  private beforeAvatarUpload(file: any) {
    const isJPG = file.type === 'image/jpeg';
    const isLt2M = file.size / 1024 / 1024 < 2;

    // if (!isJPG) {
    //   this.$message.error('上传头像图片只能是 JPG 格式!');
    // }
    if (!isLt2M) {
      this.$message.error('上传头像图片大小不能超过 2MB!');
    }
    return isJPG && isLt2M;
  }

  /** 获取生活内容 */
  private async get_folder_or_tag_content() {
    const params = {
      // hasFolder: 'aboutus',
      hasFolder: 'life',
    };
    this.list_loading = true;
    try {
      const result = await Service.get_folder_or_tag_content(params);
      this.list_loading = false;
      this.life_list = result.data;
    } catch (err) {
      this.life_list = [];
      this.list_loading = false;
    }
  }

  /** 进入详情 */
  private to_detail(info: ListItemType) {
    this.$router.push({name: info.author === 'superOldman' ? 'ming_detail_articleTemplate' : 'yang_detail', query: { id: info._id }});
  }
}

</script>

<template>
<layout>
  <div class="common_page_1000_container module_about_page">
    <!-- 博客简介 -->
    <div class="common_title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconhunsha"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconxizhuang"></use>
      </svg>
      <span>没错，这是两个人的博客</span>
    </div>
    <div class="info_content">
      <p v-for="item in info_text" :key="item">{{ item }}</p>

    </div>

    <!-- 生活专题部分 -->
    <div class="common_title">
      <svg class="icon" aria-hidden="true" style="color: rgb(244, 222, 81)">
        <use xlink:href="#icontesezhuanti"></use>
      </svg>
      <span>专题</span>
    </div>
    <div class="special_content">
      <el-row v-if="life_list && life_list.length !== 0" class="list_content" :gutter="20">
        <el-col :span="6" v-for="item in life_list" :key="item._id">
          <div class="list_item">
            <el-image class="list_img" :src="item.saveImageUrl" :fit="'cover'" @click.native="to_detail(item)">
              <div slot="error" class="image-slot">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconICON-"></use>
                </svg>
              </div>
            </el-image>
            <div class="item_info">
              <p class="item_title">{{ item.title }}</p>
              <p class="item_desc clearfix"><span class="fl">{{ item.author }}</span><span class="fr">{{ yyyymmdd(new Date(item.updated_at)) }}</span></p>
            </div>
          </div>
          
        </el-col>
      </el-row>
      <div class="common_no_data" v-if="!life_list || life_list.length === 0">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconzanwushuju"></use>
        </svg>
        <p>暂无数据</p>
      </div>
    </div>

    <!-- 留言部分 -->
    <div v-show="false">
      <div class="common_title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconliuyan"></use>
        </svg>
        <span>留言给我们</span>
      </div>
      <div class="leave_message_main">
        <el-form ref="form" :model="params" label-width="100px" class="leave_message">
          <el-form-item label="头像">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <img v-if="image_url" :src="image_url" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="params.name" size="small"></el-input>
          </el-form-item>
          <el-form-item label="留言内容">
            <el-input type="textarea" v-model="params.content"></el-input>
          </el-form-item>
        </el-form>
        <el-divider>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconlike"></use>
          </svg>
        </el-divider>
        <div class="message_list">
          <div class="message_item clearfix" v-for="(item, index) in message_list" :key="index">
            <el-image class="list_avatar fl" :src="item.avatar" :fit="'cover'">
              <div slot="error" class="image-slot">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icontuboshu"></use>
                </svg>
              </div>
            </el-image>
            <div class="fl message_content">
              <p class="name">{{ item.name }}</p>
              <p class="message">{{ item.message }}</p>
              <p class="time">{{ yyyymmdd(item.create_date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</layout>
</template>

<style lang="stylus">
@import '~@/assets/stylus/var'

.module_about_page
  .info_content, .special_content
    min-height 200px
  .info_content
    text-align center
    font-size 14px
    line-height 34px
    padding-top 20px
    p
      font-family '楷体'
  .special_content
    .list_content
      .list_item
        border-radius 4px
        box-shadow 0 0 4px rgb(212, 35, 122)
        margin-bottom 20px
        overflow hidden
        .list_img
          width 100%
          height 100px
          cursor pointer
          transition all 0.2s
          overflow hidden
          &:hover
            transform scale(1.2)
          .image-slot
            padding-top 20px
            .icon
              text-align center
              line-height 100px
              width 100%
              font-size 50px
        .item_info
          box-shadow 0 1px 4px $light_border_color
          padding 0 20px
          height 50px
          .item_title
            font-size 14px
            line-height 28px
          .item_desc
            font-size 12px
            line-height 20px
            color $font_light_color
  .leave_message_main
    padding 20px
    background $white_color
    border-radius 4px
    .leave_message
      .avatar-uploader .el-upload
        border 1px dashed #d9d9d9
        border-radius 6px
        cursor pointer
        position relative
        overflow hidden
      .avatar-uploader .el-upload:hover
        border-color #409EFF
      .avatar-uploader-icon
        font-size 28px
        color #8c939d
        width 70px
        height 70px
        line-height 70px
        text-align center
      .avatar
        width 70px
        height 70px
        display block
    .message_item
      margin-bottom 20px
      border-bottom 1px dashed $light_border_color
      padding 20px
      .list_avatar
        border-radius 50%
        width 50px
        height 50px
        overflow hidden
        border 1px solid $light_border_color
        padding-left 6px
        text-align center
        font-size 30px
        color $font_grey_color
      .message_content
        padding-left 20px
        width calc(100% - 80px)
        .name
          color $orange_color
          font-size 14px
          font-weight bold
          line-height 30px
        .message
          font-size 12px
          line-height 20px
          color $font_grey_color
        .time
          text-align right
          font-size 12px
          line-height 30px
          color $font_light_color 
</style>
