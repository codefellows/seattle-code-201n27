"use strict";

let answer1 = prompt("What is the name of one of my pets?");

// console.log(answer1);

if (true) {
  console.log("In a condition that executes always.");
}

if (false) {
  console.log("In a condition that executes never!");
}

if (Math.random() > 0.5) {
  console.log("This condition maybe runs!");
}

answer1 = answer1.toLowerCase();
if (answer1 == "oliver") {
  console.log("Oliver is my corgi!");
} else if (answer1 == "pippin" || answer1 == "greylien") {
  console.log(answer1 + " is my cat!");
} else if (answer1 == "greylien") {
  console.log(
    "Greylien is my interdimensional space monster inhabiting a cat's body"
  );
} else {
  console.log(answer1 + " is not a pet of mine.");
}

switch (answer1) {
  case "Oliver":
    console.log("Oliver says waroo");
    break;
  case "Pippin":
    console.log("Pippin says meewww");
    break;
  case "Greylien":
    console.log("Greylien says mrhh");
    break;
  default:
    console.log(answer1 + " says 'Adopt me please!'");
}
