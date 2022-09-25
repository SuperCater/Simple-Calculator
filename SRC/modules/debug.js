const { options } = require("../options.js");

const debug = (dType) => {
  dType = dType.toLowerCase();

  switch (dType) {
    case "number":
    case "number1":
      console.log(options.number);
      break;
    case "number2":
      console.log(options.number2);
      break;
    case "type":
      console.log(options.type);
      break;
    case "disabled":
      break;
    default:
      console.error(
        `Please input number, number2, or type. You inputed ${dType}`
      );
  }
};

module.exports.debug = debug;
