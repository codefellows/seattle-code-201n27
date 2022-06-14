'use strict';

console.log('Hello World');

// On our current Odd Ducks, we have lower case names for products. We then use that name as the label for the charts and lists.

// The client has come back and asked that the names on the chart labels be capitalized.  
// The names added to the constructor MUST remain lower case in order for all current (and future) image functionality to work properly!

// TODO: The decision has been made to write a function (or see stretch goal) named `capitalize` that takes in a string, and returns that string capitalized.

// HINT:  
//   1. Google is your friend. Lots of solutions there!
//   2. someString.split('')  will allow create an array of characters on which you can use array methods... maybe (push, pop, shift, or unshift, or splice) and someArray.join('').  Will turn that array back into a string.
//   2b. string.splice() can edit a string in place.

// example input:  'banana'
// example output: 'Banana'

var example = 'banana';

function capitalize(str){
  // insert code here:
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let capOne = capitalize(example);
console.log(capOne);
console.log(capitalize('david'));
console.log(capitalize('adam'));
console.log(capitalize('mario acevedo'));

// TODO Stretch Goal:  instead of a function named capitalize, write a String prototype method that returns a capitalized string.  Below is how you would use that method.  HINT: Do this as the above function first.  then use the Object Oriented Approach of creating a  String prototype method

/**
 *  example:  
 * let str = 'banana';
 * let capitalizedStr = str.capitalize();
 * note:  it should work for ALL strings
 **/


String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

let myString = 'Lauren';
let myArray = [myString, example];


let capThree = example.capitalize();
console.log(capThree);
