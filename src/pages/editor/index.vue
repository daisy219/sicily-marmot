<script lang="ts">
/* COMPONENT DOCUMENT
 * author: skm
 * date: 2019/12/26
 * desc: 编辑博客
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

// import login from './login.vue';
// 请求
import SkmService from '@/services/skm';

@Component({
  name: 'editor',
  components: {
    // login,
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
  // private created() {}
  private mounted() {
    this.islogin()
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private islogin(){
    // console.log(this.userData);
    let self = this;
    SkmService.islogin().then(function(data:any){
      console.log('登陆验证！');
      if(data.code == 1){
        self.$router.push({name: 'login'})
      }

    })
    // SkmService.search()
  };
}

</script>

<template>
<layout>
  <div class="common_page_container module_editor_page">
    <!-- <login></login> -->
  </div>
</layout>
</template>

<style lang="stylus" scoped>
// @import '~@/assets/stylus/var'

.module_editor_page
  pass

</style>
