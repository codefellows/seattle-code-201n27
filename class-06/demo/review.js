"use strict";

console.log("Hello World");

let instructor = {
  name: "Ryan",
  age: 46,
  isDev: true,
  faveNumbers: [42, 7, 144, 206],
  multiplesOfFive: [],
  eyeColor: "brown",
};

console.log(instructor);

// what are two different ways you could add a property to this object. Maybe one inside a function and one outside?
// TODO add the property eyeColor with a  value of brown one way and the property hairColor with a value of brown the other way. Then run the console.log below to confirm success

console.log(instructor.hairColor);

instructor.hairColor = "blonde";
instructor.isDev = false;
console.log(instructor);

// TODO write a function for the instructor object that iterates thru the faveNumbers array, multiplies EACH element by five, and pushes that product into the multiplesOfFive Array.

function quintupleFaves(hasFaves) {
  for (let i = 0; i < hasFaves.faveNumbers.length; i++) {
    let faveNumber = hasFaves.faveNumbers[i];
    let quintupled = faveNumber * 5;
    hasFaves.multiplesOfFive.push(quintupled);
  }
}

quintupleFaves(instructor);
console.log(instructor);

// TODO write another instructor function that iterates thru the multiplesOfFive array and console logs the following strings. Use template literals (interpolation) inside the function.
// The element at index 0 is 210.
// The element at index 1 is 35.
// The element at index 2 is 720
// The element at index 3 is 1030

function writeMultiplied(instructor1) {
  for (let i = 0; i < instructor1.multiplesOfFive.length; i++) {
    let multipleOfFive = instructor1.multiplesOfFive[i];

    console.log(`The element at index ${i} is ${multipleOfFive}`);
  }
}

writeMultiplied(instructor);
