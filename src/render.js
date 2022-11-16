// Buttons

let equation = [];

const dEquation = document.getElementById('equation');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

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