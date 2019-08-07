"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timer = timer;

function timer(endtime, hoursBlockName, minutesBlockName, secondsBlockName) {
  var timerID = setInterval(applyTime, 500);

  function getTime(endtime) {
    var dif = Date.parse(endtime) - Date.parse(new Date()),
        seconds = "".concat(Math.floor(Math.floor(dif / 1000 % 60) / 10)).concat(Math.floor(dif / 1000 % 60) % 10),
        minutes = "".concat(Math.floor(Math.floor(dif / 1000 / 60 % 60) / 10)).concat(Math.floor(dif / 1000 / 60 % 60) % 10),
        hours = "".concat(Math.floor(Math.floor(dif / 1000 / 60 / 60) / 10)).concat(Math.floor(Math.floor(dif / 1000 / 60 / 60) % 10));

    if (dif <= 0) {
      clearInterval(timerID);
      return {
        seconds: 0,
        minutes: 0,
        hours: 0
      };
    } else {
      return {
        seconds: seconds,
        minutes: minutes,
        hours: hours
      };
    }
  }

  function applyTime() {
    var hoursBlock = document.querySelector(hoursBlockName),
        minutesBlock = document.querySelector(minutesBlockName),
        secondsBlock = document.querySelector(secondsBlockName),
        realTime = getTime(endtime);
    hoursBlock.textContent = realTime.hours;
    minutesBlock.textContent = realTime.minutes;
    secondsBlock.textContent = realTime.seconds;
  }
}