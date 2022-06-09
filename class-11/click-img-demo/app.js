"use strict";

function Product(name) {
  this.name = name;
}

let allProducts = [
  new Product("bag"),
  new Product("banana"),
  new Product("bathroom"),
  new Product("boots"),
  new Product("breakfast"),
  new Product("bubblegum"),
];

console.log(allProducts);

function randomImage() {
  let result = Math.floor(Math.random() * allProducts.length);
  return allProducts[result];
}

let image = randomImage();
console.log(image);

// 1. create <img></img>
let img = document.createElement("img");
// 2. set img src, location of the image
// filepath!
img.src = `assets/${image.name}.jpg`;

// 3. event listener
img.addEventListener("click", function () {
  console.log("I was clicked!");
});

// 4. set height and width
// int, not string
img.width = 200;

document.body.appendChild(img);
