"use strict";

// Potato maker
function Potato(variety, volume, expiration) {
  this.variety = variety;
  this.volume = volume;
  this.expiration = expiration;
  this.rowInformation = [variety, volume, expiration];
}

let potato1 = new Potato("color", 400, "4 weeks");
let potato2 = new Potato("sweet", 10, "2 weeks");
let potato3 = new Potato("seasonal", 30, "6 months");
let potato4 = new Potato("purple", 250, "1 week");
let potato5 = new Potato("bintje", 50, "1 week");
let potato6 = new Potato("blue", 75, "1 month");
let potato7 = new Potato("irish death tuber", 1, "14 hours");

let potatoes = [potato1, potato2, potato3, potato4, potato5, potato6, potato7];

Potato.prototype.bestBy = function () {
  console.log("This type of potato is best enjoyed within " + this.expiration);
};

Potato.prototype.varietyOfPotato = function () {
  console.log("This type of potato is " + this.variety);
};

Potato.prototype.render = function () {
  let containerElem = document.getElementById("target-body");
  let rowElem = document.createElement("tr");

  for (let i = 0; i < this.rowInformation.length; i++) {
    let dataElem = document.createElement("td");
    dataElem.innerText = this.rowInformation[i];
    rowElem.appendChild(dataElem);
  }

  containerElem.appendChild(rowElem);
};

for (let i = 0; i < potatoes.length; i++) {
  let potato = potatoes[i];
  potato.render();
}

// Potato form

let form = document.getElementById("potatoForm");
form.addEventListener("submit", processForm);

function processForm(event) {
  event.preventDefault();

  let form = event.target;
  let variety = form.variety.value;
  let volume = form.volume.value;
  let expiration = form.expiration.value;

  let newPotato = new Potato(variety, volume, expiration);
  newPotato.render()

  form.variety.value = null;  
  form.volume.value = null;  
  form.expiration.value = null;  
}
