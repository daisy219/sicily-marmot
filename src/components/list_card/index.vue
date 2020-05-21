<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2019/12/04
 * desc: 列表卡片组件
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { ListItemType } from '@/typing/page.d.ts';

@Component({
  name: 'list-card',
  components: {},
})
export default class ListCard extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  @Prop({ type: Object, default() { return {}; } }) private cardInfo!: ListItemType;

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
<div class="module_list_card">
  <p class="card_title">{{ cardInfo.title }}</p>
  <p class="card_info">{{ cardInfo.info }}</p>
  <p class="card_date">{{ cardInfo.updated_at }}</p>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_list_card
  width 100%
  background rgba(0, 0, 0, 0.2)
  border-radius 4px
  margin-bottom 30px
  padding 20px
  cursor pointer
  .card_title
    font-size 16px
    color #0E581D
    font-weight bold
    text-align center
    line-height 30px
    transition font-size .2s
  &:hover
    .card_title
      font-size 20px
  .card_info
    font-size 14px
    text-align center
    line-height 30px
    color $font_light_color
  .card_date
    text-align right
    font-size 12px
    line-height 20px
    color $font_light_color
</style>
