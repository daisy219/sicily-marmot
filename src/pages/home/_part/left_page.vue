<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/11/26
 * desc: 首页左侧内容
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';


@Component({
  name: 'home-left',
  components: {},
})
export default class HomeLeft extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */

  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  private mounted() {
    console.log(process.env);
    this.$$eventBus.on(this.$$eventType.SwitchButtonShow, (type: boolean) => {
      console.log(type);
      this.show_btn = type;
    });
  }
  private beforeDestroy() {
    this.$$eventBus.off(this.$$eventType.SwitchButtonShow);
  }
  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  // get computed_data(): string { return 'computed' } // computed
  private show_btn: boolean = true;

  /* ------------------------ WATCH ------------------------ */


  /* ------------------------ METHODS ------------------------ */


}

</script>

<template>
<div class="module_left_page">
  左侧页面
  <el-button v-show="show_btn">测试</el-button>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_left_page
  pass

</style>
