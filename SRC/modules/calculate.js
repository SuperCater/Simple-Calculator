// Importing Modules
const { stringToNumber, addCommas } = require("./utils");
const { options } = require("../options.js");


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
      default:
        return "Invalid operator";
    }
    if (options.advanced.commas) {
      return addCommas(result);
    } else {
      return result
    }
};

const add = (values) => {
  let aResult = values[0];
  for (let i = 1; i < values.length; i++) {
    aResult += values[i];
  }
  return aResult;
};

const subtract = (values) => {
  let sResult = values[0];
  for (let i = 1; i < values.length; i++) {
    sResult -= values[i];
  }
  return sResult;
};

const multiply = (values) => {
  let mResult = values[0];
  for (let i = 1; i < values.length; i++) {
    mResult *= values[i];
  }
  return mResult;
};

const divide = (values) => {
  let dResult = values[0];
  for (let i = 1; i < values.length; i++) {
    dResult /= values[i];
  }
  return dResult;
};

const remainder = (values) => {
  let rResult = values[0];
  for (let i = 1; i < values.length; i++) {
    rResult %= values[i];
  }
  return rResult;
};

const exponent = (values) => {
  let eResult = values[0];
  for (let i = 1; i < values.length; i++) {
    eResult **= values[i];
  }
  return eResult;
};





module.exports.calculate = calculate;
