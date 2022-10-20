const { options } = require("./options.js");
const { calculate } = require("./modules/calculate.js");
const { lowerCase, random, savingDataNormal, symbolConversion, stringToNumber} = require("./modules/utils.js");
const { debug } = require("./modules/debug.js");
const { version } = require("../package.json");
const operatorInfo = require("./modules/operatorInfo.js");
const { mathTypes } = require("./modules/math.js");

stringToNumber(options.values);

if (options.advanced.debugMode) {
  console.log("Values before calculation!");
  debug(options);
}

let finalResult;
if (options.operator !== "delete") {
  if (options.operator === "tax") {
    finalResult = calculate(
      options.operator,
      options.values[0],
      options.values[1]
    );
    console.table(finalResult);
  } else {
    finalResult = parseFloat(calculate(...options.values));
    console.log(finalResult);
  }
}

if (options.advanced.debugMode) {
  console.log("Values after calculation!");
  debug(options, version);
}

if (options.advanced.conversion) {
  options.operator = symbolConversion(options.operator);
} 

if (options.operator === "random") {
  random(options.values[0], options.values[1]);
}

if (options.secret.aprilFools) {
  console.log(69420);
  process.exit();
}

if (options.values[0] === "69" && options.values[1] === "420") {
  console.log("Hahaha funny number");
}



const fs = require("fs");
const path = "SRC/data/savedCalculations.txt";

if (options.operator === "delete") {
  fs.unlinkSync(path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File deleted successfully");
  });
}
if (options.operator !== "delete" || options.operator !== "tax") {
  savingDataNormal(`Answer is ${finalResult} using ${options.values.join(' & ')} on ${options.operator}\n`);
} else if (options.operator === "tax") {
  console.warn("Tax calculations are not saved!");
  /* 
  TODO: Fix this 
  savingDataNormal(`Answer is tax table so using special formatting.\nTax amount is ${options.values[0] * options.values[1]}\nTotal amount is ${options.values[0] + options.values[0] * options.values[1]}\n using ${options.values.join(' & ')} on ${options.operator}\n`);
  */ 
} else {
  console.warn("No data was saved!");
}
