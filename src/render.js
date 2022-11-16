// Buttons

let equation = [];

const addButton = document.getElementById('btn1');
const subtractButton = document.getElementById('btn2');

addButton.onclick = function() {
    equation.push('+');
    console.log(equation);
}