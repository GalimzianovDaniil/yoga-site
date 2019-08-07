"use strict";

require("core-js/modules/es6.string.anchor");

require("core-js/modules/es6.string.anchor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.anchor = anchor;

function anchor() {
  var links = document.querySelectorAll('.link'),
      nav = document.querySelector('nav');
  nav.addEventListener('click', function (event) {
    for (var i = 0; i < links.length; i++) {
      if (event.target == links[i]) {
        event.preventDefault();
        scrollToBlock(links[i].getAttribute('href'));
        break;
      }
    }
  });

  function scrollToBlock(id) {
    var anchor = document.querySelector(id),
        lenToBlock = anchor.getBoundingClientRect().top - nav.getBoundingClientRect().top - nav.clientHeight,
        pos = 0;
    scroll(lenToBlock, 1);

    function scroll(lenToBlock, speed) {
      var timerId = setInterval(function () {
        if (pos != lenToBlock) {
          if (lenToBlock < 0) {
            pos--;
            scrollBy(0, -1);
          } else {
            pos++;
            scrollBy(0, 1);
          }
        } else {
          clearInterval(timerId);
        }
      }, speed);
    }
  }
}