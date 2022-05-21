"use strict";

// console.log('this is a test');

// We're Object factory
// What does our factory produce? potato
// Properties: variety, volume, expiration date

let m = {
    volume: 150,
    variety: 'russet',
    expiration: '2 weeks',
}

let n = {
    variety: 'yukon gold',
    expiration: '3 weeks',
    volume: 200,
}



// Potato maker
function Potato(variety, volume, expiration){
    this.variety = variety;
    this.volume = volume;
    this.expiration = expiration;
    this.rowInformation = [variety, volume, expiration];
}

let potato1 = new Potato('color', 400, '4 weeks');
let potato2 = new Potato('sweet', 10, '2 weeks');
let potato3 = new Potato('seasonal', 30, '6 months');
let potato4 = new Potato('purple', 250, '1 week');
let potato5 = new Potato('bintje' ,50, '1 week');
let potato6 = new Potato('blue', 75, '1 month');
let potato7 = new Potato('irish death tuber', 1, '14 hours');

// console.log(potato1, potato2, potato3, potato4, potato5, potato6, potato7);

let potatoes = [potato1, potato2, potato3, potato4, potato5, potato6, potato7];


Potato.prototype.bestBy = function() {
    console.log('This type of potato is best enjoyed within ' + this.expiration);
}

potato1.bestBy(); // 'this' refers to potato1
potato2.bestBy(); // 'this' refers to potato2

Potato.prototype.varietyOfPotato = function() {
    console.log('This type of potato is ' + this.variety);
}

potato1.varietyOfPotato(); // what is 'this' refering to: potato1 !



// we're going to create a render method! for each of our potatos

Potato.prototype.render = function() {
    let containerElem = document.getElementById('target-body');

    let rowElem = document.createElement('tr'); // create table row element

    for (let i = 0; i < this.rowInformation.length; i++) {
        let dataElem = document.createElement('td'); // create table data element
        dataElem.innerText = this.rowInformation[i];
        rowElem.appendChild(dataElem);
    }

    containerElem.appendChild(rowElem);
    // dom manipulation steps:
    // 1. create element
    // 2. fill with text || repeat steps 1-3
    // 3. append
}


// potato1.render(); // and a new row gets added to our HTML table

// potato7.render();

for (let i = 0; i < potatoes.length; i++) {
    let potato = potatoes[i];
    potato.render();
}

