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
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private MODULES_INFO = MODULES_INFO;
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private enter_page(route: string): void {
    this.$router.push({name: route});
  }

}

</script>

<template>
<div class="module_layout_common">
  <div class="layout_bg"></div>
  <!-- <snow></snow> -->
	<div class="header">
		<div class="header_contain">
			<div class="menu">
				<div v-for="item in MODULES_INFO" :key="item.route" :class="['menu_item', {'active': $route.name === item.route}]" @click="enter_page(item.route)">
          {{item.name}}
				</div>
			</div>
		</div>
	</div>
	<slot />
	<div class="footer" v-show="showFoot">
			<p>© 2019 Sicily marmot</p>
			<p>肥仔和屁阳的程序员成长之路</p>
	</div>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_layout_common
  .layout_bg {
    background: url('~@/assets/images/layout_bg.jpg');
    background-size: cover;
    position: fixed;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    -webkit-filter: blur(15px);
            filter: blur(15px);
    z-index: -1;
  }
  .header
    width 100%
    height 74px
    background-color $nav_bg_color
    margin-bottom 30px
    .header_contain
      width 1200px
      margin 0 auto
      .logo_img
        float left
        margin-top 8px
        img
          width 60px
          height 60px
      .menu
        float right
        .menu_item
          width 100px
          height 74px
          line-height 74px
          text-align center
          float left
          cursor pointer
      .active
        color $white_color
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

</style>
