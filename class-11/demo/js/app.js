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
  newPotato.render();

  form.variety.value = null;
  form.volume.value = null;
  form.expiration.value = null;

  // Save the created potato to local storage
  newPotato.save();
}

// Lecture Plan:
// 1. First talk about JSON methods
// 2. Local storage methods
// 3. Add .save() method to Potato objects
// 4. Render all localStorage saved Potato objects on page load

// Save:
// Step 1: JSON.stringify(value)
// Step 2: localStorage.setItem('key', value)

// Retrieve:
// Step 3: localStorage.getItem('key')
// Step 4: JSON.parse(value)

// let test = new Potato("test potato", 100, "1 day");
// // test.render();
// console.log(test);

// // 1.
// test = JSON.stringify(test);
// // console.log(test);

// // 2.
// localStorage.setItem('savedPotato11234', test);

// // Setting to the same key overwrites the value
// // localStorage.setItem('savedPotato', 'junk data');

// // 3.
// let retrievedPotato = localStorage.getItem('savedPotato');

// // 4.
// retrievedPotato = JSON.parse(retrievedPotato);
// console.log(retrievedPotato);

if (localStorage.getItem("savedPotato")) {
  let retrievedData = localStorage.getItem("savedPotato");
  let parsed = JSON.parse(retrievedData);

  let tempVariety = parsed.variety;
  let tempVolume = parsed.volume;
  let tempExpiration = parsed.expiration;

  let tempPotato = new Potato(tempVariety, tempVolume, tempExpiration);
  tempPotato.render();
}

Potato.prototype.save = function () {
  // save an empty array if first potato
  if (localStorage.getItem("savedPotatoes") === null) {
    let emptyArray = JSON.stringify([]);
    localStorage.setItem("savedPotatoes", emptyArray);
  }

  // push potato from form into array
  let retrievedPotatoes = localStorage.getItem("savedPotatoes");
  retrievedPotatoes = JSON.parse(retrievedPotatoes);
  // important!
  retrievedPotatoes.push(this);

  // stringify and save array into localStorage
  let savedPotatoes = JSON.stringify(retrievedPotatoes);
  // this array has our user created potato inside of it
  localStorage.setItem("savedPotatoes", savedPotatoes);
};

if (localStorage.getItem("savedPotatoes")) {
  let retrievedData = localStorage.getItem("savedPotatoes");
  retrievedData = JSON.parse(retrievedData);

  console.log(retrievedData);
  // our next goal is to render!
  for (let i = 0; i < retrievedData.length; i++) {
    // retrievedData[0].variety
    let retrievedDatum = retrievedData[i];
    let tempVariety = retrievedDatum.variety;
    let tempVolume = retrievedDatum.volume;
    let tempExpiration = retrievedDatum.expiration;

    // console.log(tempVariety, tempVolume, tempExpiration);
    let tempPotato = new Potato(tempVariety, tempVolume, tempExpiration);
    tempPotato.render();
  }
}
