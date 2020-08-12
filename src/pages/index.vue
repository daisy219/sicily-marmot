<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/8/12
 * desc: 主页
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

@Component({
  name: 'index',
  components: {},
})
export default class Index extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  /* ------------------------ WATCH ------------------------ */

  /* ------------------------ METHODS ------------------------ */
}

</script>

<template>
<div class="module_index">
<layout>
  <router-view />
</layout>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'
</style>
