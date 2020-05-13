<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/09/30
 * desc: 布局
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { MODULES_INFO } from '@/constant/module';

@Component({
  name: 'layout',
  components: {},
})
export default class Layout extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  @Prop({ type: Boolean, default: true }) private showFoot!: boolean;
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
  private MODULES_INFO = MODULES_INFO;
  private ctx: any = null;
  private dom: any = null;
  private search_value: string = '';
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  /** 点击顶部菜单 */
  private enter_page(route: string): void {
    this.$router.push({name: route});
  }

  /** 字体背景动画 */
  private bg_animate() {
    const canvas = document.createElement('canvas');
    this.ctx = canvas.getContext('2d');
    this.ctx.font = 'oblique bolder 24px fantasy';
    const textWidth = Math.ceil(this.ctx.measureText('sicilymarmot').width) + 10;
    canvas.width = textWidth;
    this.ctx.font = 'oblique bolder 24px fantasy';
    this.ctx.fillText('sicilymarmot', 0, 50);
    this.dom = document.getElementById('logo');
    this.dom.style.width = textWidth + 'px';
    this.dom.style.webkitMask = 'url(' + canvas.toDataURL('image/png', 0.92) + ')';
  }

}

</script>

<template>
<div class="module_layout_common peach_theme">
	<div class="header">
		<div class="header_contain clearfix">
      <div class="logo fl" id="logo"></div>
      <div class="fl search">
        <el-input v-model="search_value" size="mini">
          <svg slot="suffix" class="icon" aria-hidden="true">
            <use xlink:href="#iconsousuo"></use>
          </svg>
        </el-input>
      </div>
			<div class="menu">
				<div v-for="item in MODULES_INFO" :key="item.route" :class="['menu_item', {'active': $route.name === item.route}]" @click="enter_page(item.route)">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#${item.icon}`"></use>
          </svg>
          {{item.name}}
				</div>
			</div>
		</div>
	</div>
  <div class="content">
	  <slot />
  </div>
	<div class="footer" v-show="showFoot">
			<p>© 2019-2020 Sicily marmot 版权所有<a href="http://www.beian.miit.gov.cn" target="_blank">沪ICP备19043258号-1</a></p>
			<p>肥仔和屁阳的程序员成长之路</p>
	</div>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_layout_common
  min-width 1200px
  .header
    position fixed
    width 100%
    height 74px
    background $white_color
    box-shadow 5px 0 15px #888888
    margin-bottom 30px
    z-index 999
    .header_contain
      width 1200px
      margin 0 auto
      .logo {
        width: 140px;
        height: 74px;
        -webkit-animation: move 10s infinite;
                animation: move 10s infinite;
        background-image: url('~@/assets/images/layout_font_bg.jpg');
        background-size: cover;
        /* -webkit-mask: url(https://www.17sucai.com/preview/1424582/2018-10-22/mask/svg/seeklogo.com.svg); */
                /* mask: url(https://www.17sucai.com/preview/1424582/2018-10-22/mask/svg/seeklogo.com.svg); */
        -webkit-mask-size: cover;
                mask-size: cover;
      }
      .search
        margin-left 100px
        width 200px
        padding-top 28px
        .icon
          font-size 18px
          margin-top 4px
      .menu
        float right
        .menu_item
          width 120px
          height 74px
          line-height 74px
          text-align center
          float left
          cursor pointer
          font-weight bold
          color $font_light_color
          transition all .2s
          &:hover
            font_color(ink)
            transform rotate(-7deg)
        .active
          font_color(ink)
  .content
    padding-top 100px
    min-height 700px
    margin 0 auto
    width 1200px
  .footer
    margin-top 30px
    width 100%
    height 200px
    line-height 30px
    text-align center
    padding-top 70px
    color $font_grey_color
    font-size $medium_font_size
    background-color $nav_bg_color
    a
      color $font_grey_color

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
