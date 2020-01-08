<script lang="ts">
/* COMPONENT DOCUMENT
 * author: skm
 * date: 2019/12/26
 * desc: 编辑博客
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import myquillEditor from '../quillEditor/index.vue';
// 请求
import SkmService from '@/services/skm';

@Component({
  name: 'editor',
  components: {
    myquillEditor,
  },
})
export default class Editor extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
    this.islogin();
  }
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private circleUrl: string = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
  private squareUrl: string = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png';
  // private sizeList: string[] = ['large', 'medium', 'small'];
  private sizeList: string[] = ['large'];
  private userName: string = '';
  private form: any = {
    name: '',
    info: '',
  };
  private content: any = '';

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private islogin() {
    const self = this;
    SkmService.islogin()
    .then((data: any) => {
      console.log('登陆验证！');
      if (data.code === 1 || data.isAxiosError) {
        self.$router.push({name: 'login'});
      } else {
        this.userName = data.username;
      }
    });
  }
  private savelist(s: any) {
    console.log(s);
    this.content = s;
  }
  private saveHtml(event: any) {
    if (!this.content || !this.form.name || !this.form.info) {
      let message = '';
      if (!this.content) {
        message = '内容为空';
      } else if (!this.form.name) {
        message = '缺少标题';
      } else if (!this.form.info) {
        message = '缺少详情';
      }
      this.$alert(message, '提示', {
          confirmButtonText: '确定',
      });
    } else {
      const self = this;
      SkmService.saveHtml({
        title: this.form.name,
        info: this.form.info,
        content: this.content,
        author: this.userName,
      }).then((data) => {
        self.$alert(data.message, '提示', {
          confirmButtonText: '知道了',
        });
      });
    }
  }
}

</script>

<template>
<layout>
  <div class="common_page_container module_editor_page">
    <el-row class="demo-avatar demo-basic" :gutter="20">
    <el-col :span="6" class="leftBroadside common_detail_main">
      <div class="userImage">
        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
      </div>
      <div class="userName">{{userName}}</div>
      <div class="leftBroadsideBottom"></div>
    </el-col>  
    <el-col :span="18">
       <div class="editor_bg">
        <h3 class="serBottom h3">添加新文章</h3>
        <el-row class="serBottom">标题</el-row>
        <el-input v-model="form.name" class="serBottom"></el-input>
        <el-row class="serBottom">梗概</el-row>
        <el-input v-model="form.info" class="serBottom"></el-input>

        <myquillEditor @save="savelist"></myquillEditor>
        <el-button class="saveButton" type="primary" @click="saveHtml">保存<i class="el-icon-upload el-icon--right"></i></el-button>

        <!-- <div>{{content}}</div> -->
      </div>
    </el-col> 
  </el-row>
  </div>
</layout>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.module_editor_page
  pass
  .leftBroadside
    border-radius 5px
    .userImage
      width 50px
      margin 100px auto 0
    .userName
      text-align center
    .leftBroadsideBottom
      height 100px
  .editor_bg
    background rgba(255,255,255,0.6)
    border-radius 5px
    width 100%
    padding 80px 15px
    .serBottom
      margin-bottom 15px
    .h3
      text-align center
      font-size 24px
    .saveButton
      margin-top 20px 

</style>
