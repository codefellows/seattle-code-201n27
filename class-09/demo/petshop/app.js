// We want a pet shop!

// It should keep track of:
//   What pets we have!
//     Pet has: species, age, name, fixed, color

let greylien = {
  species: "cat",
  age: Number.MAX_VALUE,
  name: "greylien",
  fixed: true,
  color: "grey",
};

let pippin = {
  name: "Pippin",
  species: "cat",
  fixed: true,
  color: "tuxedo",
  age: 3,
};

let gizmo = {
  name: "Gizmo",
  species: "cat",
  fixed: true,
  color: "orange & white",
  age: 12,
};

let lucipurr = {
  name: "lucipurr",
  species: "cat",
  fixed: true,
  color: "black and white",
  age: 9 || 10,
};

let chinz = {
  name: "chinz",
  species: "cat",
  fixed: true,
  color: "multi",
  age: 3,
};

let edgar = {
  name: "edgar martinez",
  species: "cat",
  fixed: true,
  color: "grey",
  age: 19,
};

let lady = {
  name: "lady",
  species: "corgi",
  fixed: true,
  color: "tri",
  age: 11,
};

let stella = {
  name: "stella",
  breed: "british short hair",
  fixed: "yes",
  color: "black",
  age: "4",
};

let hootie = {
  name: "Hootie",
  age: 4,
  color: "brown",
  fixed: true,
  species: "cat",
};

function render(pet) {
  // <dl>
  //    <dd> Property Name
  //    <dt> Property Value

  // Step 1 - create the outermost DOM element
  const outerDl = document.createElement("dl");

  // name, species, age, color, fixed
  const petNameDt = document.createElement("dt");
  petNameDt.innerText = "Name";
  outerDl.appendChild(petNameDt);

  const petNameDd = document.createElement("dd");
  petNameDd.innerText = pet.name;
  outerDl.appendChild(petNameDd);

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

function addPet(event) {
  event.preventDefault();
  let form = event.target;

  let petname = form["petname"].value;
  let species = form["species"].value;
  let color = form["color"].value;

  let pet = { name: petname, species: species, color: color };

  allPets.push(pet);
  render(pet);
}

document.getElementById("pets")?.addEventListener("submit", addPet);
