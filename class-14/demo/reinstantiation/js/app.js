"use strict";

// Array that tracks all the cats we know about
const allCats = [];
const catlist = document.getElementById("catlist");

// ~TODO(Mandy)~: Cat Constructor with the property name
function Cat(name) {
  this.name = name;
}

// ~TODO(Alejandro)~: Cat render method (append to `catlist`)
Cat.prototype.render = function () {
  let name = this.name;
  // 1. createElement 2. add content 3. append
  name = document.createElement("li");
  name.innerText = this.name;
  catlist?.appendChild(name);
};

// TODO(Adam): Load cats
// TODO(Adam): Render loaded data
function initializeCats() {
  loadCats();
  for (let i = 0; i < allCats.length; i++) {
    let cat = allCats[i];
    cat.render();
  }
}

function loadCats() {
  // TODO(Mario): Load cats from local storage
  let getCats = localStorage.getItem("cats");
  let showCats = JSON.parse(getCats) ?? [];
  // TODO(Mario): Make them instances of the Cat constructor
  for (let i = 0; i < showCats.length; i++) {
    let showCat = showCats[i];
    // TODO(Mario): Push them into the allCats array
    allCats.push(new Cat(showCat.name));
  }
}

function saveCats(cats) {
  // TODO(Lauren): Write cats list to local sstorage
  let stringify = JSON.stringify(cats);
  localStorage.setItem("cats", stringify);
}
