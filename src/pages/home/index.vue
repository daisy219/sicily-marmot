<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/09/30
 * desc: 主页
 */
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { unique_array } from '@/utils/utils';

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
    this.bg_animate();
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */

  private ctx: any = null;
  private dom: any = null;
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */

  /** 字体背景动画 */
  private bg_animate() {
    const canvas = document.createElement('canvas');
    this.ctx = canvas.getContext('2d');
    this.ctx.font = 'bold 60px cursive';
    const textWidth = Math.ceil(this.ctx.measureText('sicilymarmot').width);
    canvas.width = textWidth;
    this.ctx.font = 'bold 60px cursive';
    this.ctx.fillText('sicilymarmot', 0, 100);
    this.dom = document.getElementById('box');
    this.dom.style.width = textWidth + 'px';
    this.dom.style.webkitMask = 'url(' + canvas.toDataURL('image/png', 0.92) + ')';
  }
}

</script>

<template>
<layout>
<div class="module_home clearfix">
  <div class="mask" id="box"></div>
</div>
</layout>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_home
  .mask {
    margin 200px auto
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
</style>
