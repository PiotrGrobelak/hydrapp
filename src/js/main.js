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

// <<-- hydrApp -->> //

const counter = document.querySelector(".hydrApp__counter--js")

let counterNumber = 0;

const key = new Date().toISOString().slice(0, 10);

// Buttons

const btnIncrease = document.querySelector(".button-add--js");

const btnDecrease = document.querySelector(".button-remove--js");

const btnHistory = document.querySelector(".button-history--js");

// Wave animations

const waveUp = document.querySelector(".hydrApp__wave-up--js")

const waveDown = document.querySelector(".hydrApp__wave-down--js")

const waveLeft = document.querySelector(".hydrApp__wave-left--js")


const wave = function () {
  waveUp.classList.toggle("hydrApp____wave-up--animation");
  waveDown.classList.toggle("hydrApp____wave-down--animation");
  waveLeft.classList.toggle("hydrApp____wave-left--animation");
};

btnIncrease.addEventListener("click", wave);
btnDecrease.addEventListener("click", wave);

btnIncrease.addEventListener('click', (e) => {
  counter.innerHTML = ++counterNumber;
  localStorage.setItem(key, counterNumber);
})

btnDecrease.addEventListener('click', (e) => {
  counter.innerHTML = --counterNumber;
  localStorage.setItem(key, counterNumber);
  if (counterNumber <= 0) {
    counterNumber = 0;
    counter.innerHTML = counterNumber;
    localStorage.setItem(key, counterNumber);
  }
})


counterNumber = localStorage.getItem(key, counterNumber.value);

counter.innerHTML = counterNumber;

console.log(key);