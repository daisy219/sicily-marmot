<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2018/10/25
 * desc: 简单封装 video
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import { yymmddhhmmss } from '@/utils/utils';

@Component({
  name: 'my-video',
  components: {},
})
export default class MyVideo extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  @Prop({type: String, default: ''}) private videoSrc!: string;        // 视频地址
  @Prop({type: Boolean, default: false}) private isAutoplay!: boolean;  // 是否自动播放
  @Prop({type: String, default: '100%'}) private width!: string;  // 播放器宽度
  @Prop({type: Number, default: 700}) private maxHeight!: string;  // 播放器宽度

  @Emit('video-pause') private video_pause_handler( params: COMMON_TYPE.VideoReturnType ) {}  // 暂停
  @Emit('video-play') private video_play_handler( current_time: number ) {}  // 播放，这里传的是当前视频播放的开始节点
  @Emit('video-ended') private video_ended_handler() {}  // 播放完毕
  @Emit('video-leave') private video_leave( current_time: number, duration: number ) {}  // 离开当前视频传当前播放进度
  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private mounted() {
    this.$nextTick( () => {
      const ele_video =  this.$refs.video as HTMLVideoElement;

      ele_video.addEventListener('play', this.video_play);
      ele_video.addEventListener('pause', this.video_pause);
      ele_video.addEventListener('ended', this.video_ended);

      if ( this.isAutoplay ) { ele_video.play(); }
    } );
  }

  private beforeDestroy() { // 移除事件
    if ( this.has_video_play ) {
      this.video_pause();
    }
    const ele_video =  this.$refs.video as HTMLVideoElement;

    ele_video.removeEventListener('play', this.video_play);
    ele_video.removeEventListener('pause', this.video_pause);
    ele_video.removeEventListener('ended', this.video_ended);
    this.video_leave( ele_video.currentTime, ele_video.duration );
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  // 播放/暂停
  private has_video_play: boolean = false;
  // 开始时间
  private start_time: string = '';
  // 播放计时器
  private play_timer: any = () => {};
  // 播放时长
  private running_time: number = 0;

  /* ------------------------ WATCH ------------------------ */

  /* ------------------------ METHODS ------------------------ */
  /** 播放 */
  private video_play() {
    this.running_time = 0;
    this.start_time = yymmddhhmmss(new Date());
    this.has_video_play = true;
    this.running_time ++;
    this.play_timer = setInterval(() => {
      this.running_time ++;
    }, 1000);
    const $video = this.$refs.video as HTMLVideoElement || {};
    this.video_play_handler( $video.currentTime );
  }

  /** 暂停 */
  private video_pause() {
    this.has_video_play = false;
    // 关闭定时器
    clearInterval( this.play_timer );
    const return_params: COMMON_TYPE.VideoReturnType = {
      running_time: this.running_time,
      start_time: this.start_time,
      end_time: yymmddhhmmss(new Date()),
    };

    this.video_pause_handler( return_params );
  }

  /** 视频播放完毕 */
  private video_ended() {
    this.video_ended_handler();
  }

  public play() {
    const $video = this.$refs.video as HTMLVideoElement || {};

    try {
      if ($video.play) { $video.play(); }
    } catch (error) {
      console.log( error );
    }
  }

  public pause() {
    const $video = this.$refs.video as HTMLVideoElement || {};

    try {
      if ($video.pause) { $video.pause(); }
    } catch (error) {
      console.log( error );
    }
  }

  private prevent_right() {
    return false;
  }
}
</script>

<template>
<div class="module_my_video">
  <video :src="videoSrc" @contextmenu.prevent="prevent_right()" controls="controls" ref="video" :width="width" controlslist="nodownload" :style="'max-height:' + maxHeight + 'px'">您的浏览器不支持 video 标签。</video>
</div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_my_video
  text-align center
  // > video
  //   max-height 700px

</style>
