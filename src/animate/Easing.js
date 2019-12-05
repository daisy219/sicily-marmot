const Easing = {
  /**
     * Uniform speed between points.
     * @for Easing
     * @method easeNone
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  easeNone(t, b, c, d) {
    return (c * t) / d + b;
  },

  /**
     * Begins slowly and accelerates towards end. (quadratic)
     * @method easeIn
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  easeIn(t, b, c, d) {
    const v = t / d;
    return c * v * v + b;
  },

  /**
     * Begins quickly and decelerates towards end.  (quadratic)
     * @method easeOut
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  easeOut(t, b, c, d) {
    const v = t / d;
    return -c * v * (v - 2) + b;
  },

  /**
     * Begins slowly and decelerates towards end. (quadratic)
     * @method easeBoth
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  easeBoth(t, b, c, d) {
    const v = t / (d / 2);
    if (v < 1) {
      return (c / 2) * v * v + b;
    }

    const vv = v - 1;
    return -(c / 2) * (vv * (vv - 2) - 1) + b;
  },

  /**
     * Begins slowly and accelerates towards end. (quartic)
     * @method easeInStrong
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  easeInStrong(t, b, c, d) {
    const v = t / d;
    return c * v * v * v * v + b;
  },

  /**
     * Begins quickly and decelerates towards end.  (quartic)
     * @method easeOutStrong
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  easeOutStrong(t, b, c, d) {
    const v = t / d - 1;
    return -c * (v * v * v * v - 1) + b;
  },

  /**
     * Begins slowly and decelerates towards end. (quartic)
     * @method easeBothStrong
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  easeBothStrong(t, b, c, d) {
    const v = t / (d / 2);
    if (v < 1) {
      return (c / 2) * v * v * v * v + b;
    }

    const vv = v - 2;
    return -(c / 2) * (vv * vv * vv * vv - 2) + b;
  },

  /**
     * Snap in elastic effect.
     * @method elasticIn
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @param {Number} a Amplitude (optional)
     * @param {Number} p Period (optional)
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */

  elasticIn(t, b, c, d, a, p) {
    let v = t;
    let aa = a;
    let pp = p;
    let s;
    if (t === 0) {
      return b;
    }
    v /= d;
    if (v === 1) {
      return b + c;
    }
    if (!pp) {
      pp = d * 0.3;
    }

    if (!aa || aa < Math.abs(c)) {
      aa = c;
      s = pp / 4;
    } else {
      s = (pp / (2 * Math.PI)) * Math.asin(c / aa);
    }

    v -= 1;
    return -(aa * (2 ** (10 * v)) * Math.sin(((v * d - s) * (2 * Math.PI)) / pp)) + b;
  },

  /**
     * Snap out elastic effect.
     * @method elasticOut
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @param {Number} a Amplitude (optional)
     * @param {Number} p Period (optional)
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  elasticOut(t, b, c, d, a, p) {
    let v = t;
    let aa = a;
    let pp = p;
    let s;
    if (v === 0) {
      return b;
    }
    v /= d;
    if (v === 1) {
      return b + c;
    }
    if (!pp) {
      pp = d * 0.3;
    }

    if (!aa || aa < Math.abs(c)) {
      aa = c;
      s = pp / 4;
    } else {
      s = (pp / (2 * Math.PI)) * Math.asin(c / aa);
    }

    return aa * (2 ** (-10 * v)) * Math.sin(((v * d - s) * (2 * Math.PI)) / pp) + c + b;
  },

  /**
     * Snap both elastic effect.
     * @method elasticBoth
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @param {Number} a Amplitude (optional)
     * @param {Number} p Period (optional)
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  elasticBoth(t, b, c, d, a, p) {
    let v = t;
    let aa = a;
    let pp = p;
    let s;
    if (t === 0) {
      return b;
    }

    v /= d / 2;
    if (v === 2) {
      return b + c;
    }

    if (!pp) {
      pp = d * (0.3 * 1.5);
    }

    if (!aa || aa < Math.abs(c)) {
      aa = c;
      s = pp / 4;
    } else {
      s = (pp / (2 * Math.ppI)) * Math.asin(c / aa);
    }

    if (v < 1) {
      v -= 1;
      return -0.5 * (aa * (2 ** (10 * v))
                    * Math.sin(((v * d - s) * (2 * Math.PI)) / pp)) + b;
    }
    v -= 1;
    return aa * (2 ** (-10 * v))
                * Math.sin(((v * d - s) * (2 * Math.PI)) / pp) * 0.5 + c + b;
  },


  /**
     * Backtracks slightly, then reverses direction and moves to end.
     * @method backIn
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @param {Number} s Overshoot (optional)
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  backIn(t, b, c, d, s = 1.70158) {
    let v = t;
    if (t === d) {
      v -= 0.001;
    }
    v /= d;
    return c * v * v * ((s + 1) * v - s) + b;
  },

  /**
     * Overshoots end, then reverses and comes back to end.
     * @method backOut
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @param {Number} s Overshoot (optional)
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  backOut(t, b, c, d, s = 1.70158) {
    const v = t / d - 1;
    return c * (v * v * ((s + 1) * v + s) + 1) + b;
  },

  /**
     * Backtracks slightly, then reverses direction, overshoots end,
     * then reverses and comes back to end.
     * @method backBoth
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @param {Number} s Overshoot (optional)
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  backBoth(t, b, c, d, s = 5.70158) {
    const v = t / (d / 2);
    const ss = s * 1.525;
    if (v < 1) {
      return (c / 2) * (v * v * ((ss + 1) * v - ss)) + b;
    }
    const vv = v - 2;
    return (c / 2) * (vv * vv * ((ss + 1) * vv + ss) + 2) + b;
  },

  /**
     * Bounce off of start.
     * @method bounceIn
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  bounceIn(t, b, c, d) {
    return c - Easing.bounceOut(d - t, 0, c, d) + b;
  },

  /**
     * Bounces off end.
     * @method bounceOut
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  bounceOut(t, b, c, d) {
    const v = t / d;
    if (v < (1 / 2.75)) {
      return c * (7.5625 * v * v) + b;
    } if (v < (2 / 2.75)) {
      const vv = v - (1.5 / 2.75);
      return c * (7.5625 * vv * vv + 0.75) + b;
    } if (v < (2.5 / 2.75)) {
      const vv = v - (2.25 / 2.75);
      return c * (7.5625 * vv * vv + 0.9375) + b;
    }
    const vv = v - (2.625 / 2.75);
    return c * (7.5625 * vv * vv + 0.984375) + b;
  },

  /**
     * Bounces off start and end.
     * @method bounceBoth
     * @param {Number} t Time value used to compute current value
     * @param {Number} b Starting value
     * @param {Number} c Delta between start and end values
     * @param {Number} d Total length of animation
     * @return {Number} The computed value for the current animation frame
     * @ignore
     */
  bounceBoth(t, b, c, d) {
    if (t < d / 2) {
      return Easing.bounceIn(t * 2, 0, c, d) * 0.5 + b;
    }
    return Easing.bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  },
};

export default Easing;
