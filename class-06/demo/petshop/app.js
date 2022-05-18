// We want a pet shop!

// It should keep track of:
//   What pets we have!
//     Pet has: species, age, name, fixed, color

// let oliverSpecies = "dog";
// let oliverAge = 7;
// let oliverName = "oliver";
// let oliverFixed = true;
// let oliverColor = "sable";

// let greylienSpecies = "cat";
// let greylienAge = Number.MAX_VALUE;
// let greylienName = "greylien";
// let greylienFixed = true;
// let greylienColor = "grey";

// console.log(greylienAge);
// console.log(greylienColor);
// console.log(greylienFixed);
// console.log(greylienName);
// console.log(greylienSpecies);

// let pippin = ["cat", 3, "Pippin", true, "Tuxedo"];

// console.log(pippin);

// console.log(pippin[1]);

// function logAge(pet) {
//   console.log(pet[1]);
// }

// logAge(pippin);

// let oliver = ["Oliver", true, "sable", 7, "dog"];
// logAge(oliver);

let greylien = {
  species: "cat",
  age: Number.MAX_VALUE,
  name: "greylien",
  fixed: true,
  color: "grey",
};

console.log(greylien);

function logAge(pet) {
  console.log(pet.age);
}

logAge(greylien);

let pippin = {
  name: "Pippin",
  species: "cat",
  fixed: true,
  color: "tuxedo",
  age: 3,
};
logAge(pippin);

let gizmo = {
  name: "Gizmo",
  species: "cat",
  fixed: true,
  color: "orange & white",
  age: 12,
};

logAge(gizmo);

function logColor(pet) {
  console.log(pet.color);
}
logColor(greylien);

let lucipurr = {
  name: "lucipurr",
  species: "cat",
  fixed: true,
  color: "black and white",
  age: 9 || 10,
};

function logFixed_logColor(pet) {
  console.log(pet.color, pet.fixed);
}

logFixed_logColor(lucipurr);

let chinz = {
  name: "chinz",
  species: "cat",
  fixed: true,
  color: "multi",
  age: 3,
};

function logName_logAge(pet) {
  console.log("Hi, I am " + pet.name + ", and I am " + pet.age);
}

logName_logAge(chinz);
logName_logAge(lucipurr);

let edgar = {
  name: "edgar martinez",
  species: "cat",
  fixed: true,
  color: "grey",
  age: 19,
};

function isFixed(pet) {
  if (pet.fixed == true) console.log("This pet is fixed");
  else if (pet.fixed == false) console.log("This pet is not fixed");
}

isFixed(edgar);

let lady = {
  name: "lady",
  species: "corgi",
  fixed: true,
  color: "tri",
  age: 11,
};

function logSpecies_logName_logColor(pet) {
  console.log(
    "Hi, my name is " +
      pet.name +
      " and I am a " +
      pet.species +
      " who is " +
      pet.color
  );
}

logSpecies_logName_logColor(lady);

let stella = {
  name: "stella",
  breed: "british short hair",
  fixed: "yes",
  color: "black",
  age: "4",
};

function logName_logBreed_logAge(stella) {
  console.log(
    `Hi, my name is ${stella.name}! I am a ${stella.breed} and I am ${stella.age}.`
  );
}
logName_logBreed_logAge(stella);
logName_logBreed_logAge(greylien);

let hootie = {
  name: "Hootie",
  age: 4,
  color: "brown",
  fixed: true,
  species: "cat",
};

function logName_logFixed(pet) {
  console.log("Hi, my name is " + pet.name + " and I am " + pet.fixed);
}
logName_logFixed(hootie);

// Step 1: Create a DOM element
let petParagraph = document.createElement("p");

// Step 2: Fill it with content
// Step 2b: steps 1 through 3, for our child content
petParagraph.innerText = `${greylien.name} is ${greylien.age} years old`;

// Step 3: Add it to the page
// Step 3b: Find the place in the page you want it
document.body.appendChild(petParagraph);

function makeHtmlForPetsAndPutIntoDOM() {}
function render(pet) {
  // <dl>
  //    <dd> Property Name
  //    <dt> Property Value

  // Step 1 - create the outermost DOM element
  const outerDl = document.createElement("dl");

  // name, species, age, color, fixed
  const petNameDd = document.createElement("dt");
  petNameDd.innerText = "Name";
  outerDl.appendChild(petNameDd);

  const petNameDt = document.createElement("dd");
  petNameDt.innerText = pet.name;
  outerDl.appendChild(petNameDt);

  const petSpeciesDt = document.createElement("dt");
  petSpeciesDt.innerText = "Species";
  outerDl.appendChild(petSpeciesDt);

  const petSpeciesDd = document.createElement("dd");
  petSpeciesDd.innerText = pet.species;
  outerDl.appendChild(petSpeciesDd);

  const petColorDt = document.createElement("dt");
  petColorDt.innerText = "Color";
  outerDl.appendChild(petColorDt);

  const petColorDd = document.createElement("dd");
  petColorDd.innerText = pet.color;
  outerDl.appendChild(petColorDd);

  // Step 3 - Add it to the page
  document.body.appendChild(outerDl);
}

// render(pippin);
// render(hootie);

const allPets = [pippin, hootie, lucipurr, gizmo, lady, stella, edgar, chinz];
for (let i = 0; i < allPets.length; i++) {
  const pet = allPets[i];
  render(pet);
}
