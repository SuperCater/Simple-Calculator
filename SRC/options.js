// Once you've set all the values to what you want to run just type "npm run calculate" or "node ./SRC/main.js"

// Values
let number = 2; // Set this to the first number
let number2 = 2; // Set this to the second number
let type = "add"; // Set this to the type of math

// Options
let commas = false; // Should numbers be split every 3 numbers by commass (Will put commas in decimals too!)
let autoLowerCase = true; // Changes your string to lowercase so capitalization doesn't matter. Disable if you are getting an error.
let reverseValues = false; // Will reverse the values. That's it.

// Advanced Options.
let debugType = "disabled"; // Value for the debugType (disabled will make it not run.)
let errorReporter = true; // Logs errors to the console (WIP)
let frameworkLogging = true; // Error reporting framework

// EXPERIMENTAL OPTIONS (May break calculation.)
let enableSecondaryType = false; // If this is true it enables the secondary type option below. **EXPERIMENTAL**
let secondaryType = "square root"; // Set the secondary type. (Suports built in Math functions.)
let secondaryMathFunctions = false; // Enables standard JS math functions. Enable this if you are using
let customEquation = "disabled"; // Input the custom equation (WIP)
let multipleValues = false; // Requires you to use the number variable and set it to an array. Will allow you to use mutliple values in an equation. ONLY WORKS WITH ADDITION.

const options = {
  number: number,
  number2: number2,
  type: type,
  enableSecondaryType: enableSecondaryType,
  secondaryType: secondaryType,
  secondaryMathFunctions: secondaryMathFunctions,
  commas: commas,
  customEquation: customEquation,
  frameworkLogging: frameworkLogging,
  errorReporter: errorReporter,
  debugType: debugType,
  reverseValues: reverseValues,
  autoLowerCase: autoLowerCase,
  multipleValues: multipleValues,
};

module.exports = { options };
