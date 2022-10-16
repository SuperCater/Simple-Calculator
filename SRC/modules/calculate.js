// Importing Modules
const { stringToNumber, addCommas } = require("./utils");
const { options } = require("../options.js");
const { mathTypes } = require("./math");


const calculate = (operator, ...values) => {
    values = stringToNumber(values);
    let result = values[0];
    switch (operator) {
      case "add": case '+':
        result = mathTypes.add(values);
        break;
      case "subtract": case '-':
        result = mathTypes.subtract(values);
        break;
      case "multiply": case '*':
        result = mathTypes.multiply(values);
        break;
      case "divide": case '/':
        result = mathTypes.divide(values);
        break;
      case "remainder": case '%':
        result = mathTypes.remainder(values);
        break;
      case "exponent": case '**':
        console.warn("Be careful as exponents can quickly go above the max supported value!")
        result = mathTypes.exponent(values);
        break;
      case "tax":
        return mathTypes.taxCalculator(values[0], values[1]);
      case "square":
        result = mathTypes.squareMath(values[0]);
        break;
      case "circumference":
        result = mathTypes.circumference(values[0]);
        break;
      case "radius":
        result = mathTypes.radius(values[0]);
        break;
      case "circlearea":
        result = mathTypes.circleArea(values[0]);
        break;
      case "squarearea":
        result = mathTypes.squareArea(values[0]);
        break;
      default:
        return "Invalid operator";
    }
    if (options.advanced.commas) {
      return addCommas(result);
    } else {
      return result
    }
};





module.exports.calculate = calculate;
