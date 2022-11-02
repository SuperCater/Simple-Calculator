// * This is the main file, it will require all the modules needed and uses them here. This file is also probably the messiest file so if you could clean up that would be great :3
const { devPrint } = require("./modules/devprint.js");
const { options } = require("./options.js");
const { calculate } = require("./modules/calculate");
const {
  stringToNumber,
  addCommas,
  errorChecker,
  savingDataNormal,
} = require("./modules/utils");
const { advancedCalculator } = require("./modules/otherCalculate");

// LEGACY Function
/* if (checkIfType(...options.values)) {
  options.type = options.values[0].toLowerCase();
  options.values.shift();
  options.usingType = true;
} */
/*
! Disabled till fixed
if (options.values.length === 1 && options.usingType === false) {
    console.log(stringToArray(options.values[0]));
    options.values = stringToArray(options.values[0]);
} */

if (options.type !== "delete" && options.type !== "length") {
    devPrint(options.values);
    options.values = stringToNumber(options.values);
}

errorChecker(options.values);
let result
if (options.type !== "delete") {
    if (!options.usingType) {
        result = calculate(...options.values);
    } else {
        result = advancedCalculator(options.type, options.values);
    }
}

if (options.type !== "delete") {
    if (options.commas && result >= 1000) {
        result = addCommas(result);
    }
}

if (options.type !== "delete") {
    if (options.type === "tax") {
        console.table(result);
    } else {
        console.log(result);
    }
}

const fs = require("fs");
const path = "SRC/data/savedCalculations.txt";

if (options.type === "delete") {
    fs.unlinkSync(path);
    console.log("Deleted all saved calculations");
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
