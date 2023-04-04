import $ from "../core";

$.prototype.show = function (dur, display, fin, elem) {
  elem.style.display = display;
  const _fadeIn = (val) => {
    elem.style.opacity = val;
  };
  let ani = this.animation(_fadeIn, dur, fin);
  requestAnimationFrame(ani);
};
$.prototype.hide = function (dur, fin, elem) {
  const _fadeOut = (val) => {
    elem.style.opacity = 1 - val;
    if (val === 1) {
      elem.style.display = "none";
    }
  };
  let ani = this.animation(_fadeOut, dur, fin);
  requestAnimationFrame(ani);
};
$.prototype.animation = function (cb, time, fin) {
  let start;
  function _animation(timestamp) {
    if (!start) {
      start = timestamp;
    }
    let progress = timestamp - start;

    let val = Math.min(progress / time, 1);
    cb(val);
    if (progress < time) {
      requestAnimationFrame(_animation);
    } else {
      if (typeof fin === "function") {
        fin();
      }
    }
  }
  return _animation;
};
$.prototype.fadeIn = function (dur, display = "block", fin) {
  for (let i = 0; i < this.length; i++) {
    this.show(dur, display, fin, this[i]);
  }
  return this;
};

$.prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    this.hide(dur, fin, this[i]);
  }
  return this;
};

$.prototype.fadeToggle = function (dur, display = "block", fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "none") {
      this.show(dur, display, fin, this[i]);
    } else {
      this.hide(dur, fin, this[i]);
    }
  }
  return this;
};
