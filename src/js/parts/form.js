"use strict";

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainForm = mainForm;

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

function mainForm(formSelector) {
  var message = {
    loading: "Загрузка",
    success: "Спасибо!",
    failure: "Что-то пошло не так..."
  };
  var form = document.querySelector(formSelector),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  form.addEventListener('submit', formSend);

  function formSend(event) {
    event.preventDefault();
    form.appendChild(statusMessage);
    sendData().then(clearInputs).then(setText).catch(setText);

    function sendData() {
      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var formData = new FormData(form),
            obj = {};
        formData.forEach(function (value, key) {
          console.log(value, key);
          obj[key] = value;
        });

        if (/[A-za-z]/.test(obj.phone.replace('(', '').replace(')', '')) || obj.phone.indexOf('+') != 0) {
          reject('Вводить можно только цифры, начиная с \'+\'');
        }

        var json = JSON.stringify(obj);
        request.send(json);
        request.addEventListener('readystatechange', function () {
          if (request.readyState <= 4 && request.status == 200) {
            resolve(message.success);
          } else {
            reject(message.failure);
          }
        });
      });
    }
  }

  function setText(text) {
    statusMessage.innerHTML = text;
  }

  function clearInputs(r) {
    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  }
}