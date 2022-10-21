const { version } = require("../../package.json");
const { options } = require("../options.js");
const fs = require("fs");

// Convert strings to numbers
// TODO: Convert precents to decimals




const stringToNumber = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (typeof str[i] === "string" && str[i].includes("%") && !str[i] === "%") {
      str[i] = str[i].replace("%", "");
      str[i] = str[i] / 100;
    }
    if (str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/" || str[i] === "%" || str[i] === "**") {
      str[i] === str[i];
    } else {
      str[i] = parseFloat(str[i]);
    }
  }
  return str
};
const addCommas = (num) => {
  return num.toLocaleString();
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
   for(let i = 0; i < values; i++) {
        options.values[i] = Math.floor(Math.random() * max);
        console.log(`Value ${i + 1}: ${options.values[i]}`)
    }
    let randomNum = Math.floor(Math.random() * 12);

    switch(randomNum) {
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
          console.log("Something went wrong! Defaulting operator type to addition!");
          options.operator = "add";
    }
    console.log(`Operator: ${options.operator}`)
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
  let index
  index = values.findIndex((value) => {
    value === check[0] || value === check[1]
  })
  return index
}



// exports the functions to be used in other files
module.exports = { stringToNumber, addCommas, lowerCase, getInfo, random, savingDataNormal, symbolConversion, checkIndex };
