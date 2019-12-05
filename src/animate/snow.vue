<script lang="ts">
/* COMPONENT DOCUMENT
 * author: skm
 * date: 2019/12/05
 * desc: canvas_snow_bg
 */

import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Animate from "./Animate.js";
@Component({
  name: "snow",
  components: {}
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
    let snows: any[] = [],
      canvas: any = document.getElementById("Snow"),
      ctx = canvas.getContext("2d"),
      snowCount = 150,
      mX = -100,
      mY = -100;

    let defaultOptions = {
      snowCount: 150,
      size: 2,
      dist: 100,
      color: "255,255,255",
      speed: 0.5,
      opacity: 0.3,
      step: 1
    };
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function run() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < snowCount; i++) {
        let flake = snows[i],
          x = mX,
          y = mY,
          minDist = defaultOptions.dist,
          x2 = flake.x,
          y2 = flake.y;
        let dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
          dx = x2 - x,
          dy = y2 - y;
        if (dist < minDist) {
          let force = minDist / (dist * dist),
            xcomp = (x - x2) / dist,
            ycomp = (y - y2) / dist,
            deltaV = force / 2;
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
          "rgba(" + defaultOptions.color + "," + flake.opacity + ")";
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
        let x = Math.floor(Math.random() * canvas.width),
          y = Math.floor(Math.random() * canvas.height),
          size = Math.random() * 3 + defaultOptions.size,
          speed = Math.random() * 1 + defaultOptions.speed,
          opacity = Math.random() * 0.5 + defaultOptions.opacity;
        snows.push({
          speed: speed,
          velY: speed,
          velX: 0,
          x: x,
          y: y,
          size: size,
          stepSize: (Math.random() / 30) * defaultOptions.step,
          step: 0,
          angle: 180,
          opacity: opacity
        });
      }

      new Animate({
        from: 0,
        to: 1,
        type: "number",
        dur: 1000,
        repeat: "infinite",
        easing: "easeNone",
        onUpdate: function(value: any) {
          // todo
          run();
        }
      }).play();
    }
    document.addEventListener("mousemove", function(e) {
      (mX = e.clientX), (mY = e.clientY);
    });
    window.addEventListener("resize", function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      console.log(window.innerHeight);
    });
    init();
  }
}
</script>

<template>
  <canvas id="Snow"></canvas>
</template>

<style lang="stylus" scoped>
#Snow {
  position: fixed;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  z-index: -1;
}
</style>
