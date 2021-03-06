"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("serviceworker.js").then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

const counter = document.querySelector(".hydrApp__counter--js");
const key = new Date().toISOString().slice(0, 10);
let counterNumber = 0;

const btnIncrease = document.querySelector(".button-add--js");
const btnDecrease = document.querySelector(".button-remove--js");
const btnHistory = document.querySelector(".button-history--js");
const btnBack = document.querySelector(".button-back--js");
const waveUp = document.querySelector(".hydrApp__wave-up--js");
const waveDown = document.querySelector(".hydrApp__wave-down--js");
const waveLeft = document.querySelector(".hydrApp__wave-left--js");
const historyTable = document.querySelector(".history-visible--js");

if (localStorage.getItem(key, counterNumber)) {
  counterNumber = localStorage.getItem(key);
  counter.innerHTML = localStorage.getItem(key);
} else {
  localStorage.setItem(key, 0);
  counter.innerHTML = "0";
}

const wave = function () {
  waveUp.classList.toggle("hydrApp____wave-up--animation");
  waveDown.classList.toggle("hydrApp____wave-down--animation");
  waveLeft.classList.toggle("hydrApp____wave-left--animation");
};

btnIncrease.addEventListener("click", e => {
  counter.innerHTML = ++counterNumber;
  localStorage.setItem(key, counterNumber);
  if (counterNumber > 15) {
    counterNumber = 15;
    localStorage.setItem(key, counterNumber);
    counter.innerHTML = counterNumber;
    wave();
  }
  e.preventDefault();
  wave();
});

btnDecrease.addEventListener("click", e => {
  counter.innerHTML = --counterNumber;
  localStorage.setItem(key, counterNumber);
  if (counterNumber <= 0) {
    counterNumber = 0;
    localStorage.setItem(key, counterNumber);
    counter.innerHTML = counterNumber;
    wave();
  }
  e.preventDefault();
  wave();
});

btnHistory.addEventListener("click", e => {
  historyTable.classList.add("history--visible");
});

btnBack.addEventListener("click", e => {
  historyTable.classList.remove("history--visible");
});

function printDates() {
  let keys = Object.keys(localStorage),
    i = 0,
    key;
  keys.sort();
  for (; (key = keys[i]); i++) {
    for (let i = 0; i < localStorage.key.length; i++) {
      const tableDay = document.createElement("tr");
      tableDay.classList.add("table__day");
      document.querySelector(".table__body").appendChild(tableDay);

      const tableDate = document.createElement("td");
      tableDate.classList.add("table__date");
      tableDay.appendChild(tableDate);
      tableDate.innerHTML = key;

      const tableCounter = document.createElement("td");
      tableCounter.classList.add("table__counter");
      tableDay.appendChild(tableCounter);
      tableCounter.innerHTML = localStorage.getItem(key, counterNumber);
    }
  }
}
printDates();
