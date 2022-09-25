let number = 10; // Set this to the first number
let number2 = 9; // Set this to the second number
let type = "debug"; // Set this to the type of math

// Advanced
let commas = true; // Should numbers be split every 3 numbers by commass
let customEquation = "disabled"; // Input the custom equation (WIP)
let frameworkLogging = true; // Error reporting framework
let errorReporter = true; // Logs errors to the console (WIP)
let debugType = "disabled"; // Value for the debugType
let reverseValues = false; // WIP (Does nothing at the moment.)
let autoLowerCase = true; // Changes your string to lowercase so capitalization doesn't matter. Disable if you are getting an error.

const options = {
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

module.exports = { options };
