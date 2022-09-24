let number = 2; // Set this to the first number
let number2 = 20; // Set this to the second number
let type = "exponent"; // Set this to the type of math

// Advanced
let commas = true; // Should numbers be split every 3 numbers by commass
let customEquation = "disabled"; // Input the custom equation (WIP)
let frameworkLogging = true; // Error reporting framework
let errorReporter = true; // Logs errors to the console (WIP)
let debugType = "disabled"; // Value for the debugType
let reverseValues = false; // WIP (Does nothing at the moment.)
let autoLowerCase = true; // Changes your string to lowercase so capitalization doesn't matter. Disable if you are getting an error.

// Do not touch anything below here
const acceptedValues = [
  "multiply",
  "divide",
  "add",
  "subtract",
  "exponent",
  "debug",
];

// Exports
module.exports.options = {
  number: number,
  number2: number2,
  type: type,
  commas: commas,
  customEquation: customEquation,
  frameworkLogging: frameworkLogging,
  errorReporter: errorReporter,
  debugType: debugType,
  reverseValues: reverseValues,
  autoLowerCase: autoLowerCase,
};
// Imports

const { calculate } = require("./modules/calculator.js");
const { calculatorData } = require("./modules/calculatorData.js");
const { debug } = require("./modules/debug.js");

if (autoLowerCase) {
  type = type.toLowerCase();
}
// calculation (convert to switch statement soon)
const numberWithCommaTranslator = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

if (numberWithCommaTranslator) {
  console.log(
    numberWithCommaTranslator(
      calculate(number, number2, type, customEquation, frameworkLogging)
    )
  );
} else if (!numberWithCommaTranslator) {
  console.log(calculate(number, number2, type, CEQ, frameworkLogging));
}

// Debugging tools

debug(debugType);
calculatorData.valueChanger(number, type, number2);
