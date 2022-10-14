// Importing Modules
const { stringToNumber } = require("./utils");


const calculate = (operator, ...values) => {
    values = stringToNumber(values);

    let result = values[0];
    switch (operator) {
      case "add":
        result = add(values);
        return result;
      case "subtract":
        result = subtract(values);
        return result;
      case "multiply":
        result = multiply(values);
        return result
      case "divide":
        result = divide(values);
        return result;
      case "remainder":
        result = remainder(values);
        return result;
      case "exponent":
        console.warn("Be careful as exponents can quickly go above the max supported value!")
        result = exponent(values);
        return result;
      default:
        return "Invalid operator";
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
