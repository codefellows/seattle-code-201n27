// From class 4

let RUG_AREA_PRICE = 5;
let RUG_FRINGE_PRICE = 0.75;

// What if the price is random!?
// Area price between 4 and 9
// Fringe price between .5 and 2.2

function randBetween(min, max) {
  return min + Math.random() * (max - min);
}

RUG_AREA_PRICE = randBetween(4, 9);
console.log(RUG_AREA_PRICE);
RUG_AREA_PRICE = Math.floor(RUG_AREA_PRICE);

RUG_FRINGE_PRICE = randBetween(0.5, 2.2);
console.log(RUG_AREA_PRICE, RUG_FRINGE_PRICE);

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

// Calculate prices
let total = 0;
for (let i = 0; i < orders.length; i++) {
  let order = orders[i];

  order.price = squareRugPrice(order.size, order.fringe);
  total += order.price;
}

console.log(orders);
console.log(total);

// render
// 1. Create Element
// 2. innerText (or repeat 1 through 3 for the child)
// 3. a) find parent b) Append Child

for (let i = 0; i < orders.length; i++) {
  let order = orders[i];

  let orderLi = document.createElement("li");
  orderLi.innerText = `${order.name} ordered a rug size ${order.size} with fringe ${order.fringe}, it costs ${order.price}`;
  document.getElementById("orders").appendChild(orderLi);
}

let orderTotal = document.createElement("li");
orderTotal.innerText = `Order Totals: ${total}`;
document.getElementById("orders")?.appendChild(orderTotal);
