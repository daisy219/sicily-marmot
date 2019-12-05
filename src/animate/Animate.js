import Easing from './Easing.js';

let animates = {};
let nextAnimateId = 1;
let needAnimate = false;
let animateLoopId = 0;

function updateAnimateValue(animate, value) {
  if (!animate.started) {
    animate.started = true;
    if (animate.onPlay) {
      animate.onPlay();
    }
  }
  let newValue = value;
  if (animate.filter) {
    newValue = animate.filter(newValue);
  }
  if (animate.onUpdate) {
    animate.onUpdate(newValue);
  }
}

function refreshDelta(animateItem) {
  const { type, from, to } = animateItem;
  if (type === 'number') {
    animateItem.delta = to - from;
  } else if (type === 'point') {
    if (from.length === 2) {
      animateItem.delta = [
        to[0] - from[0],
        to[1] - from[1],
      ];
    } else if (from.length === 3) {
      animateItem.delta = [
        to[0] - from[0],
        to[1] - from[1],
        to[2] - from[2],
      ];
    }
  } else if (type === 'rect') {
    animateItem.delta = {
      x: to.x - from.x,
      y: to.y - from.y,
      w: to.w - from.w,
      h: to.h - from.h,
    };
  } else if (type === 'color') {
    animateItem.delta = [
      to[0] - from[0], to[1] - from[1], to[2] - from[2], to[3] - from[3],
    ];
  } else if (type === 'set') {
    // do nothing
  } else if (type === 'group_set') {
    // do nothing
  }
}

function playAnimate(animate) {
  if (!animates[animate.id]) {
    needAnimate = true;
    animates[animate.id] = animate;
    refreshDelta(animate);
  }
  animate.resume();
  return animate;
}

function stopAnimate(animate, end) {
  if (animates[animate.id]) {
    if (end) {
      updateAnimateValue(animate, animate.to);
    }
    if (animate.onStop) {
      animate.onStop();
    }
    animate.time = 0;
    animate.total = 0;
    animate.start = null;
    animate.count = 0;
    animate.started = false;
    animate.stopped = false;
    animate.paused = false;
    animate.pausedTime = null;
    animate.pausedTotal = 0;
    delete animates[animate.id];
  }
  return animate;
}

function getAnimateValue(animateItem, value) {
  const {
    type, delta, from, time, dur,
  } = animateItem;
  let easing = Easing[animateItem.easing || 'easeNone'];
  if (!easing) {
    easing = Easing.easeNone;
  }
  let newValue = value;
  if (type === 'number') {
    newValue = easing(time, from, delta, dur);
  } else if (type === 'point') {
    if (from.length === 2) {
      newValue = [
        easing(time, from[0], delta[0], dur),
        easing(time, from[1], delta[1], dur),
      ];
    } else if (from.length === 3) {
      newValue = [
        easing(time, from[0], delta[0], dur),
        easing(time, from[1], delta[1], dur),
        easing(time, from[2], delta[2], dur),
      ];
    }
  } else if (type === 'rect') {
    newValue = {
      x: easing(time, from.x, delta.x, dur),
      y: easing(time, from.y, delta.y, dur),
      w: easing(time, from.w, delta.w, dur),
      h: easing(time, from.h, delta.h, dur),
    };
  } else if (type === 'color') {
    newValue = [
      easing(time, from[0], delta[0], dur),
      easing(time, from[1], delta[1], dur),
      easing(time, from[2], delta[2], dur),
      easing(time, from[3], delta[3], dur),
    ];
  } else if (type === 'set') {
    if (animateItem.time) {
      newValue = animateItem.to;
    }
  } else if (type === 'group_set') {
    newValue = animateItem.to[animateItem.groupIndex];
  }
  animateItem.current = newValue;

  return newValue;
}

function doAnimate(time) {
  Object.keys(animates).forEach((animateId) => {
    const animate = animates[animateId];
    if (!animate) {
      return;
    }
    if (animate.start == null) {
      animate.lastTime = time;
      animate.start = time;
    }
    if (animate.paused) {
      if (!animate.pausedTime) {
        animate.pausedTime = time;
      }
      return;
    }
    if (animate.timePerFrame > 0) {
      animate.frameTime += time - animate.lastTime;
      animate.lastTime = time;
      if (animate.frameTime < animate.timePerFrame) {
        if (!animate.paused) {
          if (!needAnimate) {
            needAnimate = true;
          }
        }
        return;
      }
      animate.frameTime %= animate.timePerFrame;
    }
    if (animate.pausedTime) {
      animate.pausedTotal += time - animate.pausedTime;
      animate.pausedTime = null;
    }
    animate.total = time - animate.start - animate.pausedTotal;
    // animate.pausedTotal = 0;
    if (animate.total > animate.delay) {
      animate.time = animate.total - animate.delay;
      let stopped = false;
      if (animate.time >= animate.dur) {
        animate.time = animate.dur;
        if (animate.total >= animate.finish) {
          stopped = true;
        }
      }
      if (!animate.stopped) {
        updateAnimateValue(animate, getAnimateValue(animate));
      }
      animate.stopped = stopped;
      if (animate.total >= animate.finish) {
        animate.count++;
        if (animate.count >= animate.repeat) {
          stopAnimate(animate, false);
          if (animate.onDone) {
            animate.onDone();
          }
        } else {
          animate.time = 0;
          animate.total = 0;
          animate.start = null;
          animate.stopped = false;
          if (animate.reverse) {
            const { from } = animate;
            animate.from = animate.to;
            animate.to = from;
            refreshDelta(animate);
          }
        }
      }
    }
    if (!animate.paused) {
      if (!needAnimate) {
        needAnimate = true;
      }
    }
  });
}

function animateLoop(time) {
  animateLoopId = requestAnimationFrame(animateLoop);
  if (needAnimate) {
    needAnimate = false;
    doAnimate(time);
  }
}

let inited = false;

/**
 * 动画对象
 * @param {Object} [options] - 选项
 * @param {String} [options.type = 'number'] - from和to的类型
 * @param {Number} [options.delay = 0] - 延迟多少毫秒执行动画
 * @param {Number} [options.dur = 1000] - 动画持续时间
 * @param {Number} [options.interval = 0] - 当动画需要执行多遍（repeat > 0）,
 *                                   或者动画链接了其他动画时,动画中断时间,也即下一个动画执行前的等待时间,默认值为0
 * @param {Number} [options.repeat = 1] - 动画重复次数,默认值为1
 * @param {Number} [options.reverse = true] - 动画重复时,from和to值是否调换,也就是第二次动画是从结束状态变化到起始状态,默认值为true
 * @param {String} [options.easing = 'easeNone'] - 动画缓动类型,也就是动画如何从起始值变成结束值,
 *                                 默认为'easeNone',也就是线性、匀速变化;可选值：
 *                                 'easeNone','easeIn','easeOut','easeBoth','easeInStrong',
 *                                 'easeOutStrong','easeBothStrong','elasticIn','elasticOut',
 *                                 'elasticBoth','backIn','backOut','backBoth','bounceIn',
 *                                 'bounceOut','bounceBoth'
 * @param {Function} [options.onUpdate] - 动画期间执行的动作，其中参数为from到to的中间值
 * @param {Function} [options.onDone] - 动画执行完成时的回调函数
 * @param {Function} [options.onStop] - 动画被终止时的回调函数
 * @param {Function} [options.onPlay] - 动画开始执行时的回调函数
 * @param {Function} [options.filter] - 过滤器，传入动画的中间值，返回过滤后的值，比如取整：
 *                                    filter: function (value) { return Math.round(value); }
 * @param {Number} [options.from = 0] - 起始值
 * @param {Number} [options.to = 1] - 结束值
 * @param {Number} [options.fps = 30] - 动画每秒传输帧数
 * @example
 * new Animate({
 *   from: 0,
 *   to: 1,
 *   type: 'number',
 *   delay: 1000,
 *   dur: 1000,
 *   easing: 'easeNone',
 *   onUpdate: function (value) {
 *     // todo
 *   }
 * })
 */
export default class Animate {
  constructor(animate) {
    if (!inited) {
      inited = true;
      requestAnimationFrame(animateLoop);
    }
    const self = this;
    self.type = animate.type == null ? 'number' : animate.type;
    self.delay = animate.delay == null ? 0 : animate.delay;
    self.dur = animate.dur == null ? 1000 : animate.dur;
    self.interval = animate.interval == null ? 0 : animate.interval;
    if (animate.finish == null) {
      self.finish = self.delay + self.dur + self.interval;
    } else {
      self.finish = animate.finish;
      self.interval = self.finish - self.delay - self.dur;
    }
    self.repeat = animate.repeat == null ? 1 : animate.repeat;
    self.reverse = animate.reverse == null ? true : animate.reverse;
    self.easing = animate.easing == null ? 'easeNone' : animate.easing;

    self.onUpdate = animate.onUpdate;
    self.onDone = animate.onDone;
    self.onStop = animate.onStop;
    self.onPlay = animate.onPlay;
    self.filter = animate.filter;
    self.from = animate.from || 0;
    self.to = animate.to == null ? 1 : animate.to;
    const fps = animate.fps || Animate.fps;
    self.timePerFrame = fps > 0 ? 1000 / fps : 0;
    self.frameTime = 0;
    self.lastTime = 0;

    self.start = null;
    self.time = 0;
    self.total = 0;
    self.count = 0;
    self.started = false;
    self.stopped = false;
    self.paused = false;
    self.pausedTime = null;
    self.pausedTotal = 0;

    self.id = nextAnimateId++;
  }

  /**
   * 开始动画
   * @return {Object} animate对象
   */
  play() {
    return playAnimate(this);
  }

  /**
   * 停止动画
   * @return {Object} animate对象
   */
  stop(end) {
    return stopAnimate(this, end);
  }

  /**
   * 暂停动画
   */
  pause() {
    if (!this.stopped) {
      this.paused = true;
    }
  }

  /**
   * 恢复动画
   */
  resume() {
    if (this.paused) {
      this.paused = false;
      needAnimate = true;
    }
  }

  /**
   * 动画是否暂停
   * @return {Boolean} 动画是否暂停
   */
  isPaused() {
    return this.paused;
  }

  /**
   * 克隆动画
   * @return {Object} animate对象
   */
  clone() {
    return new Animate(this);
  }

  /**
   * 动画链
   * @return {Object} animate对象
   */
  chain(animate) {
    const self = this;
    let oldOnDone;
    self.next = animate;
    animate.pre = self;
    if (self.onDone) {
      oldOnDone = self.onDone;
      self.onDone = function onDone() {
        oldOnDone.call(self);
        animate.play();
      };
    } else {
      self.onDone = function onDone() {
        animate.play();
      };
    }
    return self;
  }

  /**
   * 清除动画
   */
  static dispose() {
    if (animateLoopId) {
      cancelAnimationFrame(animateLoopId);
      animateLoopId = 0;
    }
  }

  /**
   * 停止所有动画
   * @memberOf Util
   */
  static stopAllAnimates(end) {
    Object.keys(animates).forEach((animateId) => {
      const animate = animates[animateId];
      if (!animate) {
        return;
      }
      animate.stop();
    });
    animates = {};
  }

  /**
   * 暂停所有动画
   * @memberOf Util
   */
  static pauseAllAnimates() {
    Object.keys(animates).forEach((animateId) => {
      const animate = animates[animateId];
      if (!animate) {
        return;
      }
      animate.pause();
    });
  }

  /**
   * 恢复所有动画
   * @memberOf Util
   */
  static resumeAllAnimates() {
    Object.keys(animates).forEach((animateId) => {
      const animate = animates[animateId];
      if (!animate) {
        return;
      }
      animate.resume();
    });
  }
}

Animate.fps = 0;
