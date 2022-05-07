"use strict";

const petNames = ["Greylien", "Pippin", "Oliver"];
console.log(petNames);

const otherPetNames = ["Greylien", "Pippin", "Oliver"];
// const otherPetNames = petNames;

// if (petNames == otherPetNames) {
//   console.log("same");
// } else {
//   console.log("different");
// }

// const petNameGuess = prompt("What is the name of my pet?");
const petNameGuess = "";
console.log(petNameGuess);

let didFindPet = false;
for (let i = 0; i < petNames.length; i++) {
  const petName = petNames[i];

  console.log(i, petName);

  if (petNameGuess == petName) {
    console.log("Found", petName);
    alert("Yes, " + petNameGuess + " is my pet!");
    didFindPet = true;
  }
}

if (!didFindPet) {
  // alert("No, " + petNameGuess + " is not my pet.");
}

// for (let i = 0; i <= petNames.length; i++) {
//   const petName = petNames[i];

//   console.log(i, petName);
// }

// if (petNameGuess == petNames[0]) {
//   alert("Yes, Greylien is my pet!");
// } else if (petNameGuess == petNames[1]) {
//   alert("Yes, Pippin is my pet!");
// } else if (petNameGuess == petNames[2]) {
//   alert("Yes, Oliver is my pet!");
// } else if (petNameGuess == petNames[3]) {
//   alert("Yes, Misha is my pet!");
// } else {
//   alert("No, that is not my pet.");
// }

let x = 2;
let maxIterations = 10;

while (x < 128 && maxIterations > 0) {
  console.log("x is small", x);

  // x = x * 2;

  maxIterations--;
}

do {} while (false);

console.log("x is big!");

const n = Math.random();
console.log(n);
let min = 5;
let max = 12;
// STRETCH GOAL
// Random integer at least min at most but not equal max
const rand = min + Math.floor(Math.random() * (max - min));
console.log(rand);
