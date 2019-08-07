"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popupWindow = popupWindow;

function popupWindow() {
  var popupClose = document.querySelector('.popup-close'),
      btns = document.querySelectorAll('.description-btn'),
      browser = navigator.userAgent,
      btn = document.querySelector('.more');

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    btn.addEventListener('click', openPhone);
    btns.forEach(function (item) {
      item.addEventListener('click', openPhone);
    });
  } else if (browser.indexOf('Edge') + 1 || browser.indexOf('Explorer') + 1) {
    btn.addEventListener('click', openPopupCss);
    btns.forEach(function (item) {
      item.addEventListener('click', openPopupCss);
    });
  } else {
    btn.addEventListener('click', openPopupJs);
    btns.forEach(function (item) {
      item.addEventListener('click', openPopupJs);
    });
  }

  popupClose.addEventListener('click', closePopup);

  function openPhone() {
    var overlay = document.querySelector('.overlay'),
        popup = document.querySelector('.popup');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function openPopupCss() {
    var overlay = document.querySelector('.overlay'),
        popup = document.querySelector('.popup');
    document.body.style.overflow = 'hidden';
    overlay.style.display = 'block';
    popup.classList.add('rotate');
  }

  function closePopup() {
    var overlay = document.querySelector('.overlay'),
        popup = document.querySelector('.popup');
    overlay.style.display = 'none';
    popup.classList.remove('rotate');
    document.body.style.overflow = '';
  }

  function openPopupJs() {
    var overlay = document.querySelector('.overlay'),
        popup = document.querySelector('.popup');
    var length = 0;
    overlay.classList.remove('fade');
    overlay.style.display = 'block';
    popup.style.top = "".concat(0, "px");
    popup.style.opacity = 1;
    document.body.style.overflow = 'hidden';
    var timerAnim = setInterval(frame, 5);

    function frame() {
      if (length < 300) {
        length++;
        console.log(length);
        popup.style.top = "".concat(length, "px");
      } else {
        clearInterval(timerAnim);
      }
    }
  }
}