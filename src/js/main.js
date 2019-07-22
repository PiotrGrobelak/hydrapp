"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const counter = document.querySelector(".hydrApp__counter--js")

let counterNumber = 0;

const btnAdd = document.querySelector(".button-add--js");

const btnRemove = document.querySelector(".button-remove--js");

const btnHistory = document.querySelector(".button-history--js");


btnAdd.addEventListener('click', (e) => {
  // e.preventDefault();
  counter.innerHTML = ++counterNumber;

})
console.log(counter);


btnRemove.addEventListener('click', () => {
  counter.innerHTML = --counterNumber;
  if (counterNumber <= 0) {
    counterNumber = 0;
    counter.innerHTML = counterNumber;
  }
})