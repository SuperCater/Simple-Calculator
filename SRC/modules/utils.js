const { version } = require("../../package.json");
const { options } = require("../options.js");
const { advancedTypes } = require("../options.js");
const fs = require("fs");
const { parseArgs } = require("util");

// Convert strings to numbers
// TODO: Convert precents to decimals

const stringToNumber = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (typeof str[i] === "string" && str[i].includes("%") && !str[i] === "%") {
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

// ! Being fixed
const stringToArray = (str) => {
  let splitStr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/" || str[i] === "%" || str[i] === "*") {
      if (str[i] === "*" && str[i + 1] === "*") {
        splitStr.push(str[i] + str[i + 1]);
        i++;
      } else {
        splitStr.push(str[i])
      }
      } else {
      if (str[i] !== "+" || str[i] !== "-" || str[i] !== "*" || str[i] !== "/" || str[i] !== "%" || str[i] !== "**") {
        if (str[i + 1] === "+" || str[i + 1] === "-" || str[i + 1] === "*" || str[i + 1] === "/" || str[i + 1] === "%" || str[i+1] === undefined) {
          splitStr.push(str[i])
        } else {
          splitStr.push(str[i] + str[i + 1]);
          i++;
        }
      } 
    }
  }
  return splitStr;
}

// ! IN DEVELOPMENT
const stringToArray2 = (str) => {
  stringSep = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 5) {}
}
}

// convert a string to an array

const checkIfType = (...values) => {
  if (typeof values[0] === "string") {
    values[0] === values[0].toLowerCase();
    if (
      values[0] === "tax" ||
      values[0] === "square" ||
      values[0] === "circumference" ||
      values[0] === "radius" ||
      values[0] === "circlearea" ||
      values[0] === "squarearea" ||
      values[0] === "delete"
    ) {
      return true;
    }
  }
  return false;
};

// lowercase
// LEGACY: A lot of these utility funtions are no longer used and probably won't work with the code. I'm keeping them here for now just in case I need them later.
const lowerCase = (str) => {
  return str.toLowerCase();
};

const getInfo = () => {
  return {
    version: version,
  };
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

const symbolConversion = (symbol) => {
  switch (symbol) {
    case "+":
      return "add";
    case "-":
      return "subtract";
    case "*":
      return "multiply";
    case "/":
      return "divide";
    case "%":
      return "remainder";
    case "**":
      return "exponent";
    default:
      return symbol;
      break;
  }
};

const checkIndex = (values, ...check) => {
  let index;
  index = values.findIndex((value) => {
    value === check[0] || value === check[1];
  });
  return index;
};

// exports the functions to be used in other files
module.exports = {
  stringToNumber,
  addCommas,
  lowerCase,
  getInfo,
  random,
  savingDataNormal,
  symbolConversion,
  checkIndex,
  errorChecker,
  stringToArray,
  checkIfType,
};
