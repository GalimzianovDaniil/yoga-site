"use strict";

require("core-js/modules/es6.string.anchor");

var _form = require("./parts/form.js");

var _calc = require("./parts/calc");

var _popup = require("./parts/popup");

var _slider = require("./parts/slider");

var _timer = require("./parts/timer");

var _anchor = require("./parts/anchor");

var _tabs = require("./parts/tabs");

window.addEventListener('DOMContentLoaded', function () {
  (0, _form.mainForm)('.main-form');
  (0, _tabs.tabs)();
  (0, _timer.timer)('2019-04-15', '.hours', '.minutes', '.seconds');
  (0, _popup.popupWindow)();
  (0, _form.mainForm)('#form');
  (0, _slider.slider)();
  (0, _calc.calc)();
});