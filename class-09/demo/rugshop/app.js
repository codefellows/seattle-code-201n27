// From class 4

let RUG_AREA_PRICE = 5;
let RUG_FRINGE_PRICE = 0.75;

// What if the price is random!?
// Area price between 4 and 9
// Fringe price between .5 and 2.2

function randBetween(min, max) {
  return min + Math.random() * (max - min);
}

RUG_AREA_PRICE = 5;
RUG_FRINGE_PRICE = 1.25;

function squareRugPrice(length, fringe) {
  let area = length * length;
  let perimeter = length * 4;
  let price = area * RUG_AREA_PRICE;
  if (fringe) {
    price += perimeter * RUG_FRINGE_PRICE;
  }
  return price;
}

// At the Brandywine Bridge Fair, Underhill Rugs took down orders for a number
// of great new rugs! But because they don't have a mobile app yet, they had to
// write them on paper. Using the "squareRugPrice" function to find out how much
// each rug costs, and how much Underhill Rugs made on Saturday!

// Orders:
// Gimli, fringe, 3'
// Legolas, fringe, 8'
// Gandalf, no fringe, 7'
// Aragorn, no fringe, 6.1'
// Boromir, no fringe, 5.9'
// Sam, no fringe, 3',
// Frodo, fringe, 3'
// Merry & Pippin, fringe, 12'

// const gimli = {
//   name: "Gimli",
//   fringe: true,
//   size: 3,
// }

let orders = [
  {
    name: "Gimli",
    fringe: true,
    size: 3,
  },
  {
    name: "Legolas",
    fringe: true,
    size: 8,
  },
  {
    name: "Gandalf",
    fringe: false,
    size: 7,
  },
  {
    name: "Aragorn",
    fringe: false,
    size: 6.1,
  },
  {
    name: "Boromir",
    fringe: false,
    size: 5.9,
  },
  {
    name: "Sam",
    fringe: false,
    size: 3,
  },
  {
    name: "Frodo",
    fringe: true,
    size: 3,
  },
  {
    name: "Merry & Pippin",
    fringe: true,
    size: 12,
  },
];

// render
// 1. Create Element
// 2. innerText (or repeat 1 through 3 for the child)
// 3. a) find parent b) Append Child

function renderOrder(order) {
  const price = squareRugPrice(order.size, order.fringe);

  let orderLi = document.createElement("li");
  orderLi.innerText = `${order.name} ordered a rug size ${
    order.size
  } with fringe ${order.fringe}, it costs \$${price.toFixed(2)}`;
  document.getElementById("orders")?.appendChild(orderLi);
}

for (let i = 0; i < orders.length; i++) {
  let order = orders[i];

  renderOrder(order);
}

function updateTotal() {
  // Calculate prices
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];

    order.price = squareRugPrice(order.size, order.fringe);
    total += order.price;
  }

  let orderTotal = document.querySelector("#orders li:first-child");
  orderTotal.innerText = `Order Totals: ${total}`;
}

updateTotal();

const form = document.getElementById("order_form");
console.log(form);

function addOrder(event) {
  event.preventDefault();

  let form = event.target;

  let username = form["username"].value;
  let fringe = form["fringe"].value;
  let usersize = form["usersize"].value;

  console.log(username, fringe, usersize);

  if (fringe == "yes") {
    fringe = true;
  } else {
    fringe = false;
  }

  usersize = Number(usersize);

  let order = {
    name: username,
    fringe: fringe,
    size: usersize,
  };
  orders.push(order);

  renderOrder(order);
  updateTotal();
}

form?.addEventListener("submit", addOrder);
