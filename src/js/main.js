"use strict";

import { KeyObject } from "crypto";
import { parse } from "querystring";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("serviceworker.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// place your code below

// <<-- hydrApp -->> //

const counter = document.querySelector(".hydrApp__counter--js");

const key = new Date().toISOString().slice(0, 10);

let counterNumber = 0;

// Buttons

const btnIncrease = document.querySelector(".button-add--js");

const btnDecrease = document.querySelector(".button-remove--js");

const btnHistory = document.querySelector(".button-history--js");

// Wave animations

const waveUp = document.querySelector(".hydrApp__wave-up--js");

const waveDown = document.querySelector(".hydrApp__wave-down--js");

const waveLeft = document.querySelector(".hydrApp__wave-left--js");

if (localStorage.getItem(key, counterNumber)) {
  counterNumber = localStorage.getItem(key);
  counter.innerHTML = localStorage.getItem(key);
} else {
  localStorage.setItem(key, 0);
  counter.innerHTML = "0";
}

const wave = function() {
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

// const history = {
//   ...localStorage
// }
// console.log(history);

// const history = new (function table() {
//   const tableDate = document.createElement("td");
//   const tableValue = document.createElement("td");
//   tableDate.classList.add("table__date");
//   tableValue.classList.add("table__value");
//   if (tableDate) {
//     for (let i = 0; i < localStorage.length; i++) {
//       let key = localStorage.key(i);
//       let counterNumber = key;
//     }
//     if (localStorage.getItem(key)) {
//       document.querySelector(".table__day").appendChild(tableDate);
//       tableDate.innerHTML = key;

//       document.querySelector(".table__day").appendChild(tableValue);

//       tableValue.innerHTML = counterNumber;
//     }
//   }
// })();

// const table = document.querySelector(".table__body");

// function table() {
//   let dates = {},
//     keys = Object.keys(localStorage),
//     i = keys.length;

//   while (i--) {
//     dates[keys[i]] = localStorage.getItem(keys[i]);
//   }
//   return dates;
// }

// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   let value = localStorage.getItem(key);
//   console.log("key: ", +key + ", value: " + value);
// }

function sortLocalStorage() {
  if (localStorage.length > 0) {
    const localStorageArray = new Array();
    for (i = 0; i < localStorage.length; i++) {
      localStorageArray[i] =
        localStorage.key(i) + localStorage.getItem(localStorage.key(i));
    }
  }
  const sortedArray = localStorageArray.sort();
  return sortedArray;
}

function allDates() {
  let archive = [],
    keys = Object.keys(localStorage),
    i = 0,
    key;
  for (; (key = keys[i]); i++) {
    // archive.push(key + "=" + localStorage.getItem(key));
    for (let i = 0; i < localStorage.key.length; i++) {
      // create Day history<---
      const tableDay = document.createElement("tr");
      tableDay.classList.add("table__day");
      document.querySelector(".table__body").appendChild(tableDay);

      // create Date <---
      const tableDate = document.createElement("td");
      tableDate.classList.add("table__date");
      tableDay.appendChild(tableDate);
      tableDate.innerHTML = key;

      // create counterNumber <---
      const tableCounter = document.createElement("td");
      tableCounter.classList.add("table__counter");
      tableDay.appendChild(tableCounter);
      tableCounter.innerHTML = localStorage.getItem(key, counterNumber);
    }
  }
  // return archive;
}

allDates();
