// Buttons
// Import the calculate module with ES6 syntax
import { calculate } from "./modules/calculate.js";
let equation = [];

const dEquation = document.getElementById('equation');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const submit = document.getElementById('submit');
const five = document.getElementById('five');

addButton.onclick = function() {
    equation.push('+');
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

subtractButton.onclick = function() {
    equation.push('-');
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

submit.onclick = function() {
    // Calculate the equation
    console.log(equation);
    equation = calculate(...equation);
    console.log(equation);
    dEquation.innerHTML = equation;
    equation = [];
}

five.onclick = function() {
    equation.push(5);
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}