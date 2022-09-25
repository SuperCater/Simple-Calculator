const acceptedValues = [
  "multiply",
  "divide",
  "add",
  "subtract",
  "exponent",
  "debug",
  "remainder",
];

// Exports

module.exports = { acceptedValues };
// Imports

const { options } = require("./options.js");
const {
  valueChecker,
  frameworkLogger,
  calculate,
  calculateCEQ,
  calculator,
} = require("./modules/calculator.js");
const { calculatorData } = require("./modules/calculatorData.js");
const { debug } = require("./modules/debug.js");

if (options.autoLowerCase) {
  options.type = options.type.toLowerCase();
  options;
}

// Commas function
const numberWithCommaTranslator = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Calcation, check module for more information.
if (options.commas) {
  console.log(
    numberWithCommaTranslator(
      calculator(
        options.number,
        options.number2,
        options.type,
        options.customEquation,
        options.secondaryType
      )
    )
  );
} else if (!options.commas) {
  console.log(
    calculator(
      options.number,
      options.number2,
      options.type,
      options.customEquation,
      options.secondaryType
    )
  );
} else {
  console.error("Please set commas to true or false");
}

// Debugging tools

debug(options.debugType);
calculatorData.valueChanger(options.number, options.type, options.number2);
