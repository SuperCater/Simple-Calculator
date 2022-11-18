// Buttons
// Import the calculate module with ES6 syntax
import { calculate } from "./modules/calculate.js";
let equation = [];
let input;
let test = false;
// Get equation from document
const dEquation = document.getElementById("equation");
// Getting operators
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const exponent = document.getElementById("exponent");
const submit = document.getElementById("submit");
// Getting numbers
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
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
