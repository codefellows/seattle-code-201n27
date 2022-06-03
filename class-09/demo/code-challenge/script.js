"use strict";

let myForm = document.getElementById("my-form");
let myContainer = document.querySelector("body");

/**
  Any time we add an entry in name / age / etc, 
  we will use this function to render the form fields.
*/
function render(submit) {
  let outerDL = document.createElement("dl");

  let submitNameDT = document.createElement("dt");
  submitNameDT.innerText = "Name";
  outerDL.appendChild(submitNameDT);

  let submitNameDD = document.createElement("dd");
  submitNameDD.innerText = submit.name;
  outerDL.appendChild(submitNameDD);

  // Skipped a couple steps, come back in a minute

  myContainer.appendChild(outerDL);
}

function renderP(username, age, height) {
  let paragraph = document.createElement("p");
  paragraph.innerText = `Hello ${username}. It is cool that you are ${age} years old. So am I! Although I am not ${height} tall.`;
  myContainer.appendChild(paragraph);
}

function handleSubmit(event) {
  event.preventDefault();

  let username = event.target.name.value;
  let age = event.target.age.value;
  let height = event.target.height.value;

  let submit = {
    name: username,
    age: age,
    height: height,
  };

  render(submit);
  renderP(username, age, height);
}

// Why do we run this in an event handler, instead of immediately in the page?
// handleSubmit();

myForm.addEventListener("submit", handleSubmit);
