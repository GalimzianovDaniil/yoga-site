"use strict";

require("core-js/modules/es6.regexp.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calc = calc;

require("core-js/modules/es6.regexp.replace");

function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      allInputs = document.querySelector('.counter-block-input'),
      place = document.getElementById('select'),
      totalValue = document.querySelector('#total'),
      personSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.textContent = 0;
  restDays.addEventListener('blur', function (event) {
    check(this);
    daysSum = this.value;
    total = (+daysSum + +personSum) * 4000;

    if (+this.value == 0 || +persons.value == 0) {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = total;
    }
  });
  persons.addEventListener('blur', function () {
    check(this);
    personSum = this.value;
    total = (+daysSum + +personSum) * 4000;

    if (+restDays.value == 0 || +this.value == 0) {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = total;
    }
  });
  place.addEventListener('blur', function () {
    if (restDays.value == '') {
      totalValue.textContent = 0;
    } else {
      var a = total;
      totalValue.textContent = +a * this.options[this.selectedIndex].value;
    }
  });

  function check(input) {
    var value = input.value,
        newVal = value.replace(/[,.]/, '');
    input.value = newVal;
  }
}