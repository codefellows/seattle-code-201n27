// function sayHello(greet) {
//   greet = "" + greet;
//   console.log("Hello, " + greet.toUpperCase());
//   console.log("Hallo, " + greet.toLowerCase());
//   console.log("Bienvenido, " + greet);
// }

// // console.log("Hallo, mund!");
// sayHello("mund!");

// /// Do stuff

// // console.log("Hallo, Earde!");
// sayHello("Earde!");

// /// Do a bunch of other things!

// // console.log("Hallo, planet!");
// sayHello("planet!");

// sayHello(42);

// Rug store sells rugs for various sizes
// Rugs are square or rectangular
// Rugs cost $5 / sq ft
// Rugs may have a fringe
// which costs $0.75 / foot

// const PRICE_PER_AREA = 5;
// const PRICE_PER_LENGTH = 0.75;
let PRICE_PER_AREA = 5;
let PRICE_PER_LENGTH = 0.75;

function squareRugCost(length, fringe) {
  // let squareRugCost = function (length, fringe) {
  let area = length * length;
  let perimeter = length * 4;
  let baseCost = area * PRICE_PER_AREA;
  let fringeCost = perimeter * PRICE_PER_LENGTH;
  let totalCost = baseCost;
  if (fringe === true) {
    totalCost += fringeCost;
  }
  return totalCost;
  // we want to return the total cost, but also its parts
  // return [totalCost, baseCost, fringeCost];
}

// console.log(fringe, area, fringeCost);

let order1length = 5;
let order1Fringe = false;
let order1cost = squareRugCost(order1length, order1Fringe);
// console.log(order1cost);
// console.log(squareRugCost(10, false));

// PRICE_PER_LENGTH = 2;

// console.log(squareRugCost(10, true));

// Popcorn Prorgamming: isYes
//   return `true` when the input is "yes" or "y", case insesitive
//   rerturn `false` otherwise

// let answer = prompt("Is this true?")?.toLowerCase();
function isYes(answer) {
  answer = answer.toLowerCase();
  if (answer === "yes") {
    return true;
  } else if (answer === "no") {
    return false;
  }
}

let answer1 = prompt("Is this true?")?.toLowerCase();
console.log(isYes(answer1));
let answer2 = prompt("Is that true?")?.toLowerCase();
console.log(isYes(answer2));
let answer3 = prompt("Am I true?");
console.log(isYes(answer3));
let answer4 = prompt("Is anything true?");
console.log(isYes(answer4));
