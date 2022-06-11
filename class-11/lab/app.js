function Product(name) {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
}

Product.prototype.render = function (i) {
  let img = document.getElementById(`image-${i}`);
  img.src = `assets/${this.name}.jpg`;
};

let products = [
  new Product("bag"),
  new Product("banana"),
  new Product("bathroom"),
  new Product("boots"),
  new Product("breakfast"),
  new Product("bubblegum"),
  new Product("chair"),
  new Product("cthulhu"),
  new Product("dog-duck"),
  new Product("dragon"),
  new Product("pen"),
  new Product("pet-sweep"),
  new Product("scissors"),
  new Product("shark"),
  new Product("tauntaun"),
  new Product("unicorn"),
  new Product("water-can"),
  new Product("wine-glass"),
];

function getRandomProduct() {
  let index = Math.floor(Math.random() * products.length);
  return products[index];
}

function makeRandomProductArray() {
  let randomProducts = [];
  while (randomProducts.length < 3) {
    let randomProduct = getRandomProduct();
    if (!randomProducts.includes(randomProduct)) {
      randomProducts.push(randomProduct);
    }
  }
  return randomProducts;
}

let currentProducts = [];

function showRandomProducts() {
  currentProducts = makeRandomProductArray();
  for (let i = 0; i < currentProducts.length; i++) {
    let currentProduct = currentProducts[i];

    currentProduct.views++;
    currentProduct.render(i);
  }
}

showRandomProducts();

function addClickHandler(i) {
  let img = document.getElementById(`image-${i}`);
  img?.addEventListener("click", function () {
    console.log(`Clicked item ${i}`);
    currentProducts[i].clicks++;
    showRandomProducts();

    // TODO(lab 11): Do something to track number of times we've clicked
    // And show a table after 25 clicks
    // TODO(lab 12): Also show a chart

    // TODO(lab 13): (Here or another function) Store number of views and clicks
    // in local storage
  });
}

addClickHandler(0);
addClickHandler(1);
addClickHandler(2);

let colors = [
  { name: "Red", votes: 12 },
  { name: "Blue", votes: 19 },
  { name: "Yellow", votes: 3 },
  { name: "Green", votes: 5 },
  { name: "Purple", votes: 2 },
  { name: "Orange", votes: 3 },
];

function showChart() {
  const ctx = document.getElementById("myChart").getContext("2d");

  // Need to work with myChart.data - the constructor takes the ctx (reference
  // to HTML), and an object. We need to build the labels and the data for the
  // configuration object.

  let labels = [];
  let votes = [];
  // loop through colors
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    labels.push(color.name);
    votes.push(color.votes);
  }

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
      datasets: [
        {
          label: "# of Votes",
          data: votes,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

showChart();
