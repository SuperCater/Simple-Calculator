const { version } = require("../../package.json");
const { options } = require("../options.js");
const { advancedTypes } = require("../options.js");
const fs = require("fs");
const { parseArgs } = require("util");
const { devPrint } = require("./devprint.js");

// Convert strings to numbers
// TODO: Convert percents to decimals

const stringToNumber = (str) => {
  devPrint("StringToNumber input: " + str);
  for (let i = 0; i < str.length; i++) {
    devPrint("StringToNumber loop: " + str[i]);
    if (str[i] !== "%" && str[i].includes("%")) {
      devPrint("Percentage Converter ran")
      str[i] = str[i].replace("%", "");
      str[i] = str[i] / 100;
    }
    if (
      str[i] === "+" ||
      str[i] === "-" ||
      str[i] === "*" ||
      str[i] === "/" ||
      str[i] === "%" ||
      str[i] === "**"
    ) {
      str[i] === str[i];
    } else {
      str[i] = parseFloat(str[i]);
    }
  }
  return str;
};

const addCommas = (num) => {
  return num.toLocaleString();
};

const errorChecker = (values) => {
  if (values.length < 2 && options.usingType === false) {
    console.log("You need at least two values to calculate!, make sure you seperate each value with a space!");
    process.exit();
  }
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === "string") {
      if (
        !values[i] === "+" ||
        !values[i] === "-" ||
        !values[i] === "*" ||
        !values[i] === "/" ||
        !values[i] === "%" ||
        !values[i] === "**"
      ) {
        console.error("Error: Invalid operator or value!");
        process.exit(1);
      }
    }
  }
};


const random = (max, values) => {
  for (let i = 0; i < values; i++) {
    options.values[i] = Math.floor(Math.random() * max);
    console.log(`Value ${i + 1}: ${options.values[i]}`);
  }
  let randomNum = Math.floor(Math.random() * 12);

  switch (randomNum) {
    case 0:
      options.operator = "add";
      break;
    case 1:
      options.operator = "subtract";
      break;
    case 2:
      options.operator = "multiply";
      break;
    case 3:
      options.operator = "divide";
      break;
    case 4:
      options.operator = "remainder";
      break;
    case 5:
      options.operator = "exponent";
      break;
    case 6:
      options.operator = "tax";
      break;
    case 7:
      options.operator = "square";
      break;
    case 8:
      options.operator = "circumference";
      break;
    case 9:
      options.operator = "radius";
      break;
    case 10:
      options.operator = "circlearea";
      break;
    case 11:
      options.operator = "squarearea";
      break;
    default:
      console.log(
        "Something went wrong! Defaulting operator type to addition!"
      );
      options.operator = "add";
  }
  console.log(`Operator: ${options.operator}`);
};

const savingDataNormal = (data) => {
  const path = "SRC/data/savedCalculations.txt";
  fs.appendFile(path, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

// exports the functions to be used in other files
module.exports = {
  stringToNumber,
  addCommas,
  errorChecker,
  random,
  savingDataNormal,
};
