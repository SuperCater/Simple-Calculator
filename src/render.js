// Buttons
// Import the calculate module with ES6 syntax
import { calculate } from "./modules/calculate.js";
let equation = [];
const test = false

// Get equation from document
const dEquation = document.getElementById('equation');
// Getting operators
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const exponent = document.getElementById('exponent');
const submit = document.getElementById('submit');
// Getting numbers
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
// Should work hopefully
const buttons = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if (test && button.className === 'operator') {
            equation = []
        }
    })
})

// Operator Handlers

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

multiply.onclick = function() {
    equation.push('*');
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

divide.onclick = function() {
    equation.push('/');
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

exponent.onclick = function() {
    equation.push('**');
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}



one.onclick = function() {
    equation.push(1);
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

two.onclick = function() {
    equation.push(2);
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

three.onclick = function() {
    equation.push(3);
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

four.onclick = function() {
    equation.push(4);
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

five.onclick = function() {
    equation.push(5);
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

six.onclick = function() {
    equation.push(6);
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

seven.onclick = function() {
    equation.push(7);
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

eight.onclick = function() {
    equation.push(8);
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

nine.onclick = function() {
    equation.push(9);
    console.log(equation);
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

zero.onclick = function() {
    equation.push(0);
    console.log(equation)
    // Change the text to the equation variable
    dEquation.innerHTML = equation;
}

submit.onclick = function() {
    // Calculate the equation
    console.log(equation);
    equation = calculate(...equation);
    console.log(equation);
    dEquation.innerHTML = equation;
    equation = [equation];
}