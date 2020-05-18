<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/04
 * desc: 关于我们
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { yyyymmdd } from '@/utils/utils';

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
  }
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private yyyymmdd = yyyymmdd;
  private card_list: any = [
    { url: '', createdBy: '赵阳', createTime: new Date(), title: '穿搭分享' },
  ];
  private message_list: any = [
    { avatar: '', name: 'test', message: '网站好棒！', create_date: new Date() },
    { avatar: '', name: 'test', message: '网站好棒！', create_date: new Date() },
    { avatar: '', name: 'test', message: '网站好棒！', create_date: new Date() },
    { avatar: '', name: 'test', message: '网站好棒！', create_date: new Date() },
    { avatar: '', name: 'test', message: '网站好棒！', create_date: new Date() },
  ];
  private image_url: string = '';
  private params: any = {

  };
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

    </div>

    <!-- 生活专题部分 -->
    <div class="common_title">
      <svg class="icon" aria-hidden="true" style="color: rgb(244, 222, 81)">
        <use xlink:href="#icontesezhuanti"></use>
      </svg>
      <span>专题</span>
    </div>
    <div class="special_content"></div>

    <!-- 留言部分 -->
    <div class="common_title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconliuyan"></use>
      </svg>
      <span>留言给我们</span>
    </div>
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
</layout>
</template>

<style lang="stylus">
@import '~@/assets/stylus/var'

.module_about_page
  .info_content, .special_content
    min-height 200px
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
