const { options } = require("./options.js");
const { calculate } = require("./modules/calculate");
const {
  stringToNumber,
  addCommas,
  errorChecker,
  stringToArray,
  checkIfType,
  savingDataNormal,
} = require("./modules/utils");
const { advancedCalculator } = require("./modules/otherCalculate");

if (checkIfType(...options.values)) {
  options.type = options.values[0].toLowerCase();
  options.values.shift();
  options.usingType = true;
}
if (options.values.length === 1 && options.usingType === false) {
    console.log(stringToArray(options.values[0]));
    options.values = stringToArray(options.values[0]);
}
options.values = stringToNumber(options.values);

let result;

errorChecker(options.values);
if (!options.usingType) {
  result = calculate(...options.values);
} else {
  result = advancedCalculator(options.type, options.values);
}

if (options.commas && result >= 1000) {
  result = addCommas(result);
}

if (options.type === "tax") {
  console.table(result);
} else {
  console.log(result);
}

if (
  options.type !== "delete" &&
  options.type !== "tax" &&
  options.usingType === false
) {
  savingDataNormal(`Result of ${options.values.join("")} is ${result}\n`);
} else if (
  options.type !== "delete" &&
  options.type !== "tax" &&
  options.usingType === true
) {
  savingDataNormal(
    `Result of ${options.type} ${options.values.join("")} is ${result}\n`
  );
}
