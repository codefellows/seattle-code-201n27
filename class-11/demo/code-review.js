"use strict";

console.log("Hello World");
let haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let needle = 4;

// TODO run the console log below. what will the console log below return?  why?
let doesHaystackContainNeedle = haystack.includes(needle);
console.log(doesHaystackContainNeedle);

function getRandomNumber() {
  return Math.floor(Math.random() * 9);
}
// proof of life
console.log("random number: ", getRandomNumber());

// TODO consider the following while loop. what will happen when it is run.  comment it in and run it.
while (haystack.includes(needle)) {
  let thePoppedElement = haystack.pop();
  console.log(`the popped element had a value of ${thePoppedElement}`);
}

// TODO what will the console log below return?  why?
doesHaystackContainNeedle = haystack.includes(needle);
console.log(doesHaystackContainNeedle);

// TODO now, predict what will happen.  comment in and run the while loop below

while (!haystack.includes(needle)) {
  let randomNumber = getRandomNumber();
  haystack.push(randomNumber);
  console.log(`${randomNumber} was pushed into the array`);
}

// console.log(haystack);
// TODO what will the console log below return?  why?
doesHaystackContainNeedle = haystack.includes(needle);
console.log(doesHaystackContainNeedle);

//TODO:  Express the following in code.  (perhaps with a nested while loop, or a for loop containing a while loop.)
// Using the above logic, how might I populate an array with 3 unique values?
// step 1:  get 3 numbers in an array
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function generateUnique() {
  let uniqueNumbers = [];
  let x = 5;
  while (uniqueNumbers.length < x) {
    let randomNumber = getRandomNumber();
    if (uniqueNumbers.includes(randomNumber)) {
      console.log(`Already generated ${randomNumber}`);
    } else {
      uniqueNumbers.push(randomNumber);
    }
  }

  return uniqueNumbers;
}

for (let i = 0; i < 10; i++) {
  // console.log(generateUnique());
}

// Stretch Goal:
// Using the above logic, how might I populate the an array with 6 unique values, remove 3 of those values, AND THEN populate with 3 new unique values all while making sure that we used first in first out(FIFO) rotation. would push and pop work?

let uniqueNumbers = [];
let x = 6;
while (uniqueNumbers.length < x) {
  let randomNumber = getRandomNumber();
  if (uniqueNumbers.includes(randomNumber)) {
    // console.log(`Already generated ${randomNumber}`);
  } else {
    uniqueNumbers.push(randomNumber);
  }
}

uniqueNumbers.pop();
uniqueNumbers.pop();
uniqueNumbers.pop();

while (uniqueNumbers.length < 6) {
  let randomNumber = getRandomNumber();
  if (uniqueNumbers.includes(randomNumber)) {
    // console.log(`Already generated ${randomNumber}`);
  } else {
    uniqueNumbers.push(randomNumber);
  }
}

console.log(uniqueNumbers);
