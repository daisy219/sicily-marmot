<script lang="ts">
/* COMPONENT DOCUMENT
 * author: skm
 * date: 2019/12/05
 * desc: canvas_snow_bg
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import Animate from './Animate.js';
@Component({
  name: 'snow',
  components: {},
})
export default class Snow extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  private mounted() {
    this.showSnow();
  }

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  // private my_data: string = 'some thing'; // data
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  // private some_method(): void {}
  private showSnow() {
    const snows: any[] = [];
    const canvas: any = document.getElementById('Snow');
    const ctx = canvas.getContext('2d');
    const snowCount = 150;
    let mX = -100;
    let mY = -100;

    const defaultOptions = {
      snowCount: 150,
      size: 2,
      dist: 100,
      color: '255,255,255',
      speed: 0.5,
      opacity: 0.3,
      step: 1,
    };
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function run() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < snowCount; i++) {
        const flake = snows[i];
        const x = mX;
        const y = mY;
        const minDist = defaultOptions.dist;
        const x2 = flake.x;
        const y2 = flake.y;
        const dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));
        const dx = x2 - x;
        const dy = y2 - y;
        if (dist < minDist) {
          const force = minDist / (dist * dist);
          const xcomp = (x - x2) / dist;
          const ycomp = (y - y2) / dist;
          const deltaV = force / 2;
          flake.velX -= deltaV * xcomp;
          flake.velY -= deltaV * ycomp;
        } else {
          flake.velX *= 0.98;
          if (flake.velY <= flake.speed) {
            flake.velY = flake.speed;
          }
          flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
        }
        ctx.fillStyle =
          'rgba(' + defaultOptions.color + ',' + flake.opacity + ')';
        flake.y += flake.velY;
        flake.x += flake.velX;
        if (flake.y >= canvas.height || flake.y <= 0) {
          reset(flake);
        }
        if (flake.x >= canvas.width || flake.x <= 0) {
          reset(flake);
        }
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    function reset(flake: any) {
      flake.x = Math.floor(Math.random() * canvas.width);
      flake.y = 0;
      flake.size = Math.random() * 3 + defaultOptions.size;
      flake.speed = Math.random() * 1 + defaultOptions.speed;
      flake.velY = flake.speed;
      flake.velX = 0;
      flake.opacity = Math.random() * 0.5 + defaultOptions.opacity;
    }

    function init() {
      for (let i = 0; i < snowCount; i++) {
        const x = Math.floor(Math.random() * canvas.width);
        const y = Math.floor(Math.random() * canvas.height);
        const size = Math.random() * 3 + defaultOptions.size;
        const speed = Math.random() * 1 + defaultOptions.speed;
        const opacity = Math.random() * 0.5 + defaultOptions.opacity;
        snows.push({
          speed,
          velY: speed,
          velX: 0,
          x,
          y,
          size,
          stepSize: (Math.random() / 30) * defaultOptions.step,
          step: 0,
          angle: 180,
          opacity,
        });
      }

      new (Animate as any)({
        from: 0,
        to: 1,
        type: 'number',
        dur: 1000,
        repeat: 'infinite',
        easing: 'easeNone',
        onUpdate: (value: any) => {
          // todo
          run();
        },
      }).play();
    }
    document.addEventListener('mousemove', (e) => {
      (mX = e.clientX), (mY = e.clientY);
    });
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      console.log(window.innerHeight);
    });
    init();
  }
}
</script>

<template>
  <canvas id='Snow'></canvas>
</template>

<style lang='stylus' scoped>
#Snow {
  position: fixed;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  z-index: -1;
}
</style>
