!function(n){var e={};function t(c){if(e[c])return e[c].exports;var u=e[c]={i:c,l:!1,exports:{}};return n[c].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)t.d(c,u,function(e){return n[e]}.bind(null,u));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n// service worker registration - remove if you\'re not going to use it\n\nif (\'serviceWorker\' in navigator) {\n  window.addEventListener(\'load\', function () {\n    navigator.serviceWorker.register(\'serviceworker.js\').then(function (registration) {\n      // Registration was successful\n      console.log(\'ServiceWorker registration successful with scope: \', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log(\'ServiceWorker registration failed: \', err);\n    });\n  });\n}\n\n// place your code below\n\n// <<-- hydrApp --\x3e> //\n\nconst counter = document.querySelector(".hydrApp__counter--js")\n\nlet counterNumber = 0;\n\nconst key = new Date().toISOString().slice(0, 10);\n\n// Buttons\n\nconst btnIncrease = document.querySelector(".button-add--js");\n\nconst btnDecrease = document.querySelector(".button-remove--js");\n\nconst btnHistory = document.querySelector(".button-history--js");\n\n// Wave animations\n\nconst waveUp = document.querySelector(".hydrApp__wave-up--js")\n\nconst waveDown = document.querySelector(".hydrApp__wave-down--js")\n\nconst waveLeft = document.querySelector(".hydrApp__wave-left--js")\n\n\nconst wave = function () {\n  waveUp.classList.toggle("hydrApp____wave-up--animation");\n  waveDown.classList.toggle("hydrApp____wave-down--animation");\n  waveLeft.classList.toggle("hydrApp____wave-left--animation");\n};\n\nbtnIncrease.addEventListener("click", wave);\nbtnDecrease.addEventListener("click", wave);\n\nbtnIncrease.addEventListener(\'click\', (e) => {\n  counter.innerHTML = ++counterNumber;\n  localStorage.setItem(key, counterNumber);\n})\n\nbtnDecrease.addEventListener(\'click\', (e) => {\n  counter.innerHTML = --counterNumber;\n  localStorage.setItem(key, counterNumber);\n  if (counterNumber <= 0) {\n    counterNumber = 0;\n    counter.innerHTML = counterNumber;\n    localStorage.setItem(key, counterNumber);\n  }\n})\n\n\ncounterNumber = localStorage.getItem(key, counterNumber.value);\n\ncounter.innerHTML = counterNumber;\n\nconsole.log(key);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcblxuLy8gPDwtLSBoeWRyQXBwIC0tPj4gLy9cblxuY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHlkckFwcF9fY291bnRlci0tanNcIilcblxubGV0IGNvdW50ZXJOdW1iZXIgPSAwO1xuXG5jb25zdCBrZXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4vLyBCdXR0b25zXG5cbmNvbnN0IGJ0bkluY3JlYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYWRkLS1qc1wiKTtcblxuY29uc3QgYnRuRGVjcmVhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1yZW1vdmUtLWpzXCIpO1xuXG5jb25zdCBidG5IaXN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24taGlzdG9yeS0tanNcIik7XG5cbi8vIFdhdmUgYW5pbWF0aW9uc1xuXG5jb25zdCB3YXZlVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh5ZHJBcHBfX3dhdmUtdXAtLWpzXCIpXG5cbmNvbnN0IHdhdmVEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oeWRyQXBwX193YXZlLWRvd24tLWpzXCIpXG5cbmNvbnN0IHdhdmVMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oeWRyQXBwX193YXZlLWxlZnQtLWpzXCIpXG5cblxuY29uc3Qgd2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgd2F2ZVVwLmNsYXNzTGlzdC50b2dnbGUoXCJoeWRyQXBwX19fX3dhdmUtdXAtLWFuaW1hdGlvblwiKTtcbiAgd2F2ZURvd24uY2xhc3NMaXN0LnRvZ2dsZShcImh5ZHJBcHBfX19fd2F2ZS1kb3duLS1hbmltYXRpb25cIik7XG4gIHdhdmVMZWZ0LmNsYXNzTGlzdC50b2dnbGUoXCJoeWRyQXBwX19fX3dhdmUtbGVmdC0tYW5pbWF0aW9uXCIpO1xufTtcblxuYnRuSW5jcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdhdmUpO1xuYnRuRGVjcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdhdmUpO1xuXG5idG5JbmNyZWFzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvdW50ZXIuaW5uZXJIVE1MID0gKytjb3VudGVyTnVtYmVyO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGNvdW50ZXJOdW1iZXIpO1xufSlcblxuYnRuRGVjcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb3VudGVyLmlubmVySFRNTCA9IC0tY291bnRlck51bWJlcjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBjb3VudGVyTnVtYmVyKTtcbiAgaWYgKGNvdW50ZXJOdW1iZXIgPD0gMCkge1xuICAgIGNvdW50ZXJOdW1iZXIgPSAwO1xuICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gY291bnRlck51bWJlcjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGNvdW50ZXJOdW1iZXIpO1xuICB9XG59KVxuXG5cbmNvdW50ZXJOdW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXksIGNvdW50ZXJOdW1iZXIudmFsdWUpO1xuXG5jb3VudGVyLmlubmVySFRNTCA9IGNvdW50ZXJOdW1iZXI7XG5cbmNvbnNvbGUubG9nKGtleSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')}]);