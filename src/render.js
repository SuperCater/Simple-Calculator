// Buttons
// Import the calculate module with ES6 syntax
import { calculate } from "./modules/calculate.js";
let equation = [];
let input;
let test = false;
const dEquation = document.getElementById("equation");
const submit = document.getElementById("submit");
// Getting numbers
// Should work hopefully
const dot = document.getElementById("dot");
const clear = document.getElementById("clear");

// check if any of the buttons with the class of operator are clicked
document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(equation);
    equation.push(input)
    input = event.target.value;
    equation.push(input);
    dEquation.innerHTML = equation.join("");
    input = "";
  });
});

clear.onclick = () => {
  equation = []
  input = ""
  dEquation.innerHTML = equation.join("");
}

document.querySelectorAll(".numbers").forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(input)
    if (!input) {
      input = parseFloat(event.target.value);
      test = true
    } else {
    input += parseFloat(event.target.value)
    }
    dEquation.innerHTML = equation + input;
  });
});


submit.onclick = function () {
  // Calculate the equation
  equation.push(input)
  console.log(equation);
  equation = calculate(...equation);
  console.log(equation);
  dEquation.innerHTML = equation;
  equation = []
};
