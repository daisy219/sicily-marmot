<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/09/30
 * desc: 布局
 */
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { MODULES_INFO, SKIN_MODULES } from '@/constant/module';
import { reset_media } from '@/utils/dom';

@Component({
  name: 'layout',
  components: {},
})
export default class Layout extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  @Prop({ type: Boolean, default: true }) private showFoot!: boolean;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  @Getter private inner_width!: number;
  @Getter private skin!: any;
  @Action private change_skin_action!: (type: string) => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
    window.addEventListener('resize', this.resize_handle);
  }

  private mounted() {
    document.addEventListener('click', (e) => {
      this.more_menu_link_show = false;
    });
    this.bg_animate();
    this.reset_media();
  }
  private beforeDestroy() {
    window.removeEventListener('resize', this.resize_handle); 
  }
  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private SKIN_MODULES = SKIN_MODULES;
  private ctx: any = null;
  private dom: any = null;
  private search_value: string = '';
  private more_menu_link_show: boolean = false;
  private operate_width: number = 1000 - 600;
  private one_menu_width: number = 120;

  /** 展示在外面菜单的模块数组长度 */
  private get wrap_length() {
    return Math.floor((this.inner_width - this.operate_width) / this.one_menu_width);
  }

  /** 外层导航 */
  private get MODULES_INFO() {
    if (this.inner_width > 1000) {
      return MODULES_INFO;
    } else if (this.inner_width < 450) {
      return 0
    } else {
      return MODULES_INFO.slice(0, this.wrap_length);
    }
  }

  /** 下拉导航 */
  private get MORE_MODULES_INFO() {
    if (this.inner_width > 1000) {
      return 0;
    } else if (this.inner_width < 450) {
      return MODULES_INFO;
    } else {
      return MODULES_INFO.slice(this.wrap_length, MODULES_INFO.length);
    }
  }
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private resize_handle() {
    this.reset_media();
  }

  private reset_media() {
    reset_media('header_contain', 'width: 1200px', 'width: 90%');
  }
  /** 点击顶部菜单 */
  private async enter_page(route: string) {
    this.$router.push({name: route});
    await this.$nextTick();
    this.changFontColor();
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

  /** 修改皮肤 */
  private changSkin(val: string) {
    this.change_skin_action(val);
    this.changFontColor();
  }

  /** 修改导航字体颜色 */
  private changFontColor() {
    const menu_item_collection = this.$refs.menu_item;
    Array.prototype.forEach.call(menu_item_collection, (item) => {
      item.style.setProperty('color', '#999');
      if (item.className.includes('active')) {
        item.style.setProperty('color', SKIN_MODULES.find(a => a.title === this.skin).font);
      }
    });
  }

}

</script>

<template>
<div :class="['module_layout_common', skin]">
	<div class="header">
		<div class="header_contain clearfix">
      <div class="logo fl" id="logo"></div>
      <!-- <div class="fl search">
        <el-input v-model="search_value" size="mini">
          <svg slot="suffix" class="icon" aria-hidden="true">
            <use xlink:href="#iconsousuo2"></use>
          </svg>
        </el-input>
      </div> -->
      <div class="more_menu" v-show="MORE_MODULES_INFO !== 0" @click.stop="more_menu_link_show = !more_menu_link_show">
        <div class="more_menu_icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconcaidan"></use>
          </svg>
        </div>
        <el-collapse-transition>
          <div class="more_menu_link" v-show="more_menu_link_show">
            <div v-for="item in MORE_MODULES_INFO" :key="item.route" :class="['menu_item', {'active': $route.name === item.route}]" ref="menu_item">
              <div @click="enter_page(item.route)" v-if="!item.has_children">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{item.name}}
              </div>
              <el-dropdown v-if="item.has_children" :class="['menu_item', {'active': $route.name === item.route}]" @command="changSkin">
                <span class="el-dropdown-link">
                  <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#${item.icon}`"></use>
                  </svg>
                  {{item.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="skin.title" v-for="skin in SKIN_MODULES" :key="skin.title">
                    <svg class="icon" aria-hidden="true">
                      <use :xlink:href="`#${skin.icon}`"></use>
                    </svg>
                    {{ skin.title }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-collapse-transition>
      </div>
			<div class="menu">
        <div v-for="item in MODULES_INFO" :key="item.route" :class="['menu_item', {'active': $route.name === item.route}]" ref="menu_item">
          <div @click="enter_page(item.route)" v-if="!item.has_children">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="`#${item.icon}`"></use>
            </svg>
            {{item.name}}
          </div>
          <el-dropdown v-if="item.has_children" :class="['menu_item', {'active': $route.name === item.route}]" @command="changSkin">
            <span class="el-dropdown-link">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#${item.icon}`"></use>
              </svg>
              {{item.name}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="skin.title" v-for="skin in SKIN_MODULES" :key="skin.title">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${skin.icon}`"></use>
                </svg>
                {{ skin.title }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
			</div>

		</div>
	</div>
  <div class="content">
	  <slot />
  </div>
	<div class="footer" v-show="showFoot">
			<p>© 2019-2020 Sicily marmot 版权所有<a href="http://www.beian.miit.gov.cn" target="_blank">沪ICP备19043258号-1</a></p>
	</div>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_layout_common
  .header
    position fixed
    width 100%
    height 74px
    background $white_color
    box-shadow 5px 0 15px #888888
    margin-bottom 30px
    z-index 999
    .header_contain
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
          font-size $normal_font_size
          float left
          cursor pointer
          font-weight bold
          color $font_light_color
          transition all .2s
          &:hover
            font_color(snow_theme)
            transform rotate(-7deg)
        .active
          font_color(snow_theme)
      .more_menu
        float right
        position relative
        .more_menu_icon
          width 40px
          line-height 74px
          font-size 28px
          cursor pointer
          transition all .3s
        .more_menu_link
          position absolute
          top 74px
          left -60px
          background #fff
        .menu_item
          width 120px
          height 60px
          line-height 60px
          text-align center
          font-size $normal_font_size
          cursor pointer
          font-weight bold
          color $font_light_color
          transition all .2s
          &:hover
            font_color(snow_theme)
        .active
          font_color(snow_theme)
  .content
    padding-top 100px
    min-height 700px
    margin 0 auto
  .footer
    margin-top 30px
    width 100%
    height 100px
    line-height 30px
    text-align center
    padding-top 40px
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
