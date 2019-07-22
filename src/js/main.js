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

const btnIncrease = document.querySelector(".button-add--js");

const btnDecrease = document.querySelector(".button-remove--js");

const btnHistory = document.querySelector(".button-history--js");

const key = new Date().toISOString().slice(0, 10);



btnIncrease.addEventListener('click', (e) => {
  counter.innerHTML = ++counterNumber;
  localStorage.setItem(key, counterNumber);
  e.preventDefault();

})


btnDecrease.addEventListener('click', (e) => {
  counter.innerHTML = --counterNumber;
  localStorage.setItem(key, counterNumber);
  if (counterNumber <= 0) {
    counterNumber = 0;
    counter.innerHTML = counterNumber;
    localStorage.setItem(key, counterNumber);
    e.preventDefault();
  }
})

counterNumber = localStorage.getItem(key, counterNumber.value);

counter.innerHTML = localStorage.getItem(key, counterNumber.value);

console.log(key);