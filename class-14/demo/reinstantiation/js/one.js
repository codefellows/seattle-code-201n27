"use strict";

const catform = document.getElementById("catform");

// TODO(Sylvie): If local storage has cats, load them from localStorage
// TODO(Sylvie): Render loaded cats
initializeCats();

function handleCatSubmit(e) {
  e.preventDefault();

  // TODO(Dan): Create a new cat
  // TODO(Dan): Render the cat
  let form = e.target;
  let name = form.kitty.value;
  let cat1 = new Cat(name);
  cat1.render();

  // TODO(Lauren): Save allCats to local storage
  allCats.push(cat1);
  saveCats(allCats);
}

// ~TODO(Dan)~: Add form submit event listener
catform?.addEventListener("submit", handleCatSubmit);
