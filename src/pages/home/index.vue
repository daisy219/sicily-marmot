<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/09/30
 * desc: 主页
 */
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { unique_array } from '@/utils/utils';

// import MyDatePicker from '@/components/my-date-picker/index.js';
import RightPage from './_part/right_page.vue';
import LeftPage from './_part/left_page.vue';

@Component({
  name: 'home',
  components: {
    // 'my-date-picker': MyDatePicker,
    'right-page': RightPage,
    'left-page': LeftPage,
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
    this.bg_animate();
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private cur_page_list: number[] = [1, 2]; // data
  private pickerOptions: any = {
    shortcuts: [{
      text: '今天',
      onClick(picker: any) {
        picker.$emit('pick', new Date());
      },
    }, {
      text: '昨天',
      onClick(picker: any) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        picker.$emit('pick', date);
      },
    }, {
      text: '一周前',
      onClick(picker: any) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', date);
      },
    }],
  };
  private value2: string = '';
  private show_img: boolean = false;
  private ctx: any = null;
  private dom: any = null;
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private show_img_handle(type: boolean) {
    this.show_img = type;
  }
  private bg_animate() {
    const canvas = document.createElement('canvas');
    this.ctx = canvas.getContext('2d');
    this.ctx.font = 'bold 60px brushScriptMt';
    const textWidth = Math.ceil(this.ctx.measureText('sicilymarmot').width);
    canvas.width = textWidth;
    this.ctx.font = 'bold 60px brushScriptMt';
    this.ctx.fillText('sicilymarmot', 0, 100);
    this.dom = document.getElementById('box');
    this.dom.style.width = textWidth + 'px';
    this.dom.style.webkitMask = 'url(' + canvas.toDataURL('image/png', 0.92) + ')';
  }
}

</script>

<template>
<layout>
<div class="module_home common_page_container clearfix">
  <!-- <my-date-picker
    v-model="value2"
    type="datetime"
    placeholder="选择日期时间"
    align="right"
    :picker-options="pickerOptions">
  </my-date-picker> -->
  <el-row>
    <el-col :span="12">
      <left-page />
    </el-col>
    <el-col :span="12">
      <right-page :cur-page-list="cur_page_list"/>
    </el-col>
  </el-row>
  <div class="bg"></div>
<div class="mask" id="box"></div>
  <img v-show="show_img" :src="require('@/assets/images/cat.jpg')">
</div>
</layout>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

@-webkit-keyframes move {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
}
.bg {
  background: url('~@/assets/images/bg.jpg');
  background-size: cover;
  position: fixed;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  -webkit-filter: blur(15px);
          filter: blur(15px);
  // z-index: -1;
}


.mask {
  width: 340px;
  height: 196px;
  -webkit-animation: move 40s infinite;
          animation: move 40s infinite;
  background-image: url('~@/assets/images/bg.jpg');
  background-size: cover;
  /* -webkit-mask: url(https://www.17sucai.com/preview/1424582/2018-10-22/mask/svg/seeklogo.com.svg); */
          /* mask: url(https://www.17sucai.com/preview/1424582/2018-10-22/mask/svg/seeklogo.com.svg); */
  -webkit-mask-size: cover;
          mask-size: cover; 
}
.module_home
  .home_nav
    border-right 1px solid #f0f0f0
    .home_nav_item
      height 50px
      width 100px
      line-height 50px
      text-align center
      cursor pointer
      border-bottom 1px solid $main_color
</style>
