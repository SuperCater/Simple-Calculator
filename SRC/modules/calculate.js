// Importing Modules
const { stringToNumber, addCommas } = require("./utils");
const { options } = require("../options.js");
const { add, subtract, multiply, divide, remainder, exponent, taxCalculator } = require("./math");


const calculate = (operator, ...values) => {
    values = stringToNumber(values);
    let result = values[0];
    switch (operator) {
      case "add": case '+':
        result = add(values);
        break;
      case "subtract": case '-':
        result = subtract(values);
        break;
      case "multiply": case '*':
        result = multiply(values);
        break;
      case "divide": case '/':
        result = divide(values);
        break;
      case "remainder": case '%':
        result = remainder(values);
        break;
      case "exponent": case '**':
        console.warn("Be careful as exponents can quickly go above the max supported value!")
        result = exponent(values);
        break;
      case "tax":
        return taxCalculator(values[0], values[1]);
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
