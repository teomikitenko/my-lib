/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {  
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordeon.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordeon.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordeon = function () {
  let headActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "accordion-head--active";
  let contentActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "accordion-content--active";
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleCls(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleCls(contentActive);
      console.log(this[i].nextElementSibling);
      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + 40 + 'px';
      } else {
        this[i].nextElementSibling.style.maxHeight = '0px';
      }
    });
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordeon();

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    let width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
    let slides = this[i].querySelectorAll('.carousel-item');
    let slidesCover = this[i].querySelector('.carousel-slides');
    let dots = this[i].querySelectorAll('.carousel-indicators li');
    slidesCover.style.width = 100 * slides.length + '%';
    slides.forEach(slide => {
      slide.style.width = width;
    });
    let offset = 0;
    let slideIndex = 0;
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[ data-slide="next"]')).on('click', e => {
      e.preventDefault();
      if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, '');
      }
      slidesCover.style.transform = `translateX(-${offset}px)`;
      if (slideIndex === slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      dots.forEach(x => {
        x.classList.remove('active');
        dots[slideIndex].classList.add('active');
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[ data-slide="prev"]')).on('click', e => {
      e.preventDefault();
      if (offset == 0) {
        offset = +width.replace(/\D/g, '') * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, '');
      }
      slidesCover.style.transform = `translateX(-${offset}px)`;
      if (slideIndex == 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }
      dots.forEach(x => {
        x.classList.remove('active');
        dots[slideIndex].classList.add('active');
      });
    });
    let id = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${id} .carousel-indicators li`).click(e => {
      let slideNumber = e.target.getAttribute('data-slide-to');
      slideIndex = slideNumber;
      offset = +width.replace(/\D/g, '') * slideNumber;
      slidesCover.style.transform = `translateX(-${offset}px)`;
      dots.forEach(x => {
        x.classList.remove('active');
        dots[slideIndex].classList.add('active');
      });
    });
  }
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.generateSlider = function (_ref) {
  let {
    obj
  } = _ref;
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).html(` <ol class="carousel-indicators">
          </ol>
          <div class="carousel-inner">
          </div>
          <a href="#" class="carousel-prev" data-slide="prev">
            <span class="carousel-prev-icon">&lt;</span>
          </a>
          <a href="#" class="carousel-next" data-slide="next">
            <span class="carousel-next-icon">&gt;</span>
          </a>
            `);
    let divs = [];
    let indicators = [];
    for (let j = 0; j < obj.length; j++) {
      let itemDiv = document.createElement('div');
      itemDiv.classList.add('carousel-item');
      let img = document.createElement('img');
      img.src = obj.images[j];
      itemDiv.append(img);
      divs.push(itemDiv);
      let li = document.createElement('li');
      if (j === 0) {
        li.classList.add('active');
      }
      li.dataset.slideTo = j;
      indicators.push(li);
    }
    let div = document.createElement('div');
    div.classList.add('carousel-slides');
    div.append(...divs);
    this[i].querySelector('.carousel-indicators').append(...indicators);
    this[i].querySelector('.carousel-inner').append(div);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).carousel();
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel').generateSlider({
  obj: {
    images: ["https://s1.1zoom.ru/big0/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1280x720.jpg", "https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg/1200px-1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg", "https://oir.mobi/uploads/posts/2021-03/1616997349_45-p-fon-dlya-rabochego-stola-uspokaivayushchii-50.jpg"],
    length: 4
  }
});

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAtr('id');
    const menu = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-drop='${id}']`);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      menu.fadeToggle(300);
    });
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.drop-button').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function () {
  let regen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let widthPadding = window.innerWidth - document.body.clientWidth;
  console.log(widthPadding);
  for (let i = 0; i < this.length; i++) {
    const target = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAtr('data-target');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = widthPadding + 'px';
    });
    const closeButtons = document.querySelectorAll(`${target} [data-close]`);
    console.log(closeButtons);
    closeButtons.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';
        if (regen === true) {
          document.querySelector(target).remove();
        }
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';
        if (regen === true) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function (_ref) {
  let {
    text,
    btns
  } = _ref;
  for (let i = 0; i < this.length; i++) {
    let buttons = [];
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));
    for (let j = 0; j < btns.count; j++) {
      let button = document.createElement('button');
      button.textContent = btns.settings[j][0];
      button.classList.add('btn', ...btns.settings[j][1]);
      if (btns.settings[j][2]) {
        button.setAttribute('data-close', 'true');
      }
      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        button.addEventListener('click', btns.settings[j][3]);
      }
      buttons.push(button);
    }
    modal.innerHTML = `
          <div class="modal-dialog">
      <div class="modal-content">
         <button class="close" data-close>
            <span>&times;</span>
      </button>
      <div class="modal-header">
         <div class="modal-title">${text.title}</div>
      </div>
      </div>
      <div class="modal-body">${text.body}</div>
      <div class="modal-footer">
       </div>
     </div>`;
    console.log(...buttons);
    modal.querySelector('.modal-footer').append(...buttons);
    document.body.appendChild(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target')).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addCls('tab-item--active').sibling().removeCls('tab-item--active').closest('.tab').find('.tab-content').removeCls('tab-content--active').eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addCls('tab-content--active');
    });
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function (selector) {
  if (!selector) {
    return this;
  }
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_attribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/attribute */ "./src/js/lib/modules/attribute.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/events */ "./src/js/lib/modules/events.js");
/* harmony import */ var _modules_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/action */ "./src/js/lib/modules/action.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordeon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordeon */ "./src/js/lib/components/accordeon.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/request */ "./src/js/lib/services/request.js");













/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/action.js":
/*!**************************************!*\
  !*** ./src/js/lib/modules/action.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  let swap = this[i];
  let objectArray = Object.keys(this);
  for (let k = 0; k < objectArray.length; k++) {
    delete this[k];
  }
  this[0] = swap;
  this.length = 1;
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (!content) {
      return this[i].innerHTML;
    } else {
      this[i].innerHTML = content;
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  let parent = this[0].parentNode;
  let child = [...parent.children];
  let find = elem => elem == this[0];
  return child.findIndex(find);
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let counterAll = 0;
  let counter = 0;
  let copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    let element = copyObj[i].querySelectorAll(selector);
    if (element.length === 0) {
      continue;
    }
    for (let j = 0; j < element.length; j++) {
      this[counter] = element[j];
      counter++;
    }
    counterAll += element.length;
  }
  this.length = counterAll;
  let objectArray = Object.keys(this);
  for (; counterAll < objectArray.length; counterAll++) {
    delete this[counterAll];
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].closest(selector)) {
      this[i] = "немає нічого";
    } else {
      this[counter] = this[i].closest(selector);
    }
    counter++;
  }
  this.length = counter;
  let objectArray = Object.keys(this);
  for (; counter < objectArray.length; counter++) {
    delete this[counter];
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.sibling = function () {
  let counterAll = 0;
  let counter = 0;
  let copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    let element = copyObj[i].parentNode.children;
    for (let j = 0; j < element.length; j++) {
      if (copyObj[i] === element[j]) {
        continue;
      }
      this[counter] = element[j];
      counter++;
    }
    counterAll += element.length;
  }
  this.length = counterAll - 1;
  let objectArray = Object.keys(this);
  for (; counterAll < objectArray.length; counterAll++) {
    delete this[counterAll];
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attribute.js":
/*!*****************************************!*\
  !*** ./src/js/lib/modules/attribute.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAtr = function (attribute, value) {
  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attribute, value);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAtr = function (attribute) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < this.length; i++) {
    let atr = this[i].getAttribute(attribute);
    obj[count] = atr;
    count++;
  }
  return obj[0];
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAtr = function (attribute) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attribute)) {
      this[i].removeAttribute(attribute);
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAtr = function (attribute, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attribute)) {
      this[i].removeAttribute(attribute);
    } else {
      this[i].setAttribute(attribute, value);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addCls = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.add(...arguments);
    } else {
      continue;
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeCls = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.remove(...arguments);
    } else {
      continue;
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleCls = function (classnames) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.toggle(classnames);
    } else {
      continue;
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = '';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = 'none';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toogle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function (dur, display, fin, elem) {
  elem.style.display = display;
  const _fadeIn = val => {
    elem.style.opacity = val;
  };
  let ani = this.animation(_fadeIn, dur, fin);
  requestAnimationFrame(ani);
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function (dur, fin, elem) {
  const _fadeOut = val => {
    elem.style.opacity = 1 - val;
    if (val === 1) {
      elem.style.display = "none";
    }
  };
  let ani = this.animation(_fadeOut, dur, fin);
  requestAnimationFrame(ani);
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animation = function (cb, time, fin) {
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
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur) {
  let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "block";
  let fin = arguments.length > 2 ? arguments[2] : undefined;
  for (let i = 0; i < this.length; i++) {
    this.show(dur, display, fin, this[i]);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    this.hide(dur, fin, this[i]);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur) {
  let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "block";
  let fin = arguments.length > 2 ? arguments[2] : undefined;
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "none") {
      this.show(dur, display, fin, this[i]);
    } else {
      this.hide(dur, fin, this[i]);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/events.js":
/*!**************************************!*\
  !*** ./src/js/lib/modules/events.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (event, f) {
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(event, f);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (event, f) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(event, f);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (f) {
  for (let i = 0; i < this.length; i++) {
    if (f) {
      this[i].addEventListener('click', f);
    } else {
      this[i].click();
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/services/request.js":
/*!****************************************!*\
  !*** ./src/js/lib/services/request.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url) {
  let dataReading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
  let result = await fetch(url);
  if (!result.ok) {
    throw new Error(`this ${url} have some problem,status ${result.status}`);
  }
  switch (dataReading) {
    case 'json':
      return await result.json();
    case "text":
      return await result.text();
    case 'blob':
      return await result.blob();
  }
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url) {
  let dataReading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
  let result = await fetch(url, {
    method: 'POST'
  });
  if (!result.ok) {
    throw new Error(`this ${url} have some problem,status ${result.status}`);
  }
  switch (dataReading) {
    case 'json':
      return await result.json();
    case "text":
      return await result.text();
    case 'blob':
      return await result.blob();
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])().get('https://jsonplaceholder.typicode.com/users').then(res => console.log(res));

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map