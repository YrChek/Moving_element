/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/app/app.js
class RandomField {
  constructor(container, element) {
    this.container = container;
    this.listFields = this.container.querySelectorAll('.item_field');
    this.element = element;
  }
  deletingImage() {
    const picture = this.container.querySelector('.img');
    if (picture) picture.remove();
  }
  addImage() {
    const random = Math.floor(Math.random() * this.listFields.length);
    const field = this.listFields[random];
    // field.appendChild(this.element);
    field.append(this.element);
  }
}
;// CONCATENATED MODULE: ./src/index.js


document.addEventListener('DOMContentLoaded', () => {
  const div = document.querySelector('.container');
  const picture = document.querySelector('.img');
  document.querySelector('.img').remove();
  picture.classList.remove('hide');
  const random = new RandomField(div, picture);
  setInterval(() => {
    random.deletingImage();
    setTimeout(() => {
      random.addImage();
    }, 500);
  }, 1000);
});
/******/ })()
;