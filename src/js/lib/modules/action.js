import $ from "../core";

$.prototype.eq = function (i) {
  let swap = this[i];
  let objectArray = Object.keys(this);
  for (let k = 0; k < objectArray.length; k++) {
    delete this[k];
  }
  this[0] = swap;

  this.length = 1;
  return this;
};

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (!content) {
      return this[i].innerHTML;
    } else {
      this[i].innerHTML = content;
    }
  }
  return this;
};

$.prototype.index = function () {
  let parent = this[0].parentNode;
  let child = [...parent.children];

  let find = (elem) => elem == this[0];
  return child.findIndex(find);
};

$.prototype.find = function (selector) {
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

$.prototype.closest = function (selector) {
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
$.prototype.sibling = function () {
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
