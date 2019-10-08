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
  // @Prop() private parentData!: any;
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
    <div class="footer">
        <!-- <p class="copy_right">© 2015 Stabocks Corpot Allright 京ICP09020041</p> -->
    </div>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_layout_common
    .header
        width 100%
        height 74px
        background-color $bg_color
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
                color $nav_font_color
    .footer
        width 100%
        height 200px
        background-color $main_color

</style>
