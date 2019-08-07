"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabs = tabs;

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContnent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContnent(1);

  function showTabContent(i) {
    tabContent[i].classList.remove('hide');
    tabContent[i].classList.add('show');
  }

  info.addEventListener('click', function (event) {
    var target = event.target;

    for (var i = 0; i < tab.length; i++) {
      if (tab[i] == target) {
        hideTabContnent(0);
        showTabContent(i);
        break;
      }
    }
  });
}