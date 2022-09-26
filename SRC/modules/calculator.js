const { acceptedValues } = require("../main.js");
const { options } = require("../options.js");

const valueChecker = (chValue1, chValue2, chType) => {
  if (
    typeof chValue1 === "number" &&
    typeof chValue2 === "number" &&
    acceptedValues.includes(chType)
  ) {
    return true;
  } else if (!options.multipleValues) {
    console.error(
      "Values have incorrect types. Please make sure they are correct."
    );
  }
};

const calculate = (cValue1, cValue2, cType, cType2) => {
  let result = 0;
  switch (cType) {
    case "add":
      result = cValue1 + cValue2;
      break;
    case "subtract":
      result = cValue1 - cValue2;
      break;
    case "multiply":
      result = cValue1 * cValue2;
      break;
    case "divide":
      result = cValue1 / cValue2;
      break;
    case "exponent":
      result = cValue1 ** cValue2;
      break;
    case "remainder":
      result = cValue1 % cValue2;
      break;
    case "debug":
      let debugValue1 = cValue1.toString();
      let debugValue2 = cValue2.toString();

      return `Calculator ran with value1: ${debugValue1}, value2: ${debugValue2}, and type: ${cType}`;
  }

  if (options.secondaryMathFunctions && options.enableSecondaryType) {
    result = options.secondaryType(result);
  }

  if (options.enableSecondaryType && !options.secondaryMathFunctions) {
    switch (options.secondaryType) {
      case "squareroot":
      case "square root":
        result = Math.sqrt(result);
        break;
      default:
        console.log(
          "Non indexed math method used. Please enable secondaryMathFunctions and use it instead."
        );
        break;
    }
  }

  return result;
};

const calculateCEQ = (CEQ) => {
  if (typeof CEQ === "number") {
    return CEQ;
  }
};

const frameworkLogger = () => {
  if (options.frameworkLogging) {
    return true;
  } else if (!options.frameworkLogging) {
    return false;
  }
};

const calculator = (value1, value2, type, CEQ) => {
  if (frameworkLogger) {
    console.log("Calculator loaded succesfully");
  }

  if (valueChecker(value1, value2, type)) {
    if (typeof calculateCEQ(CEQ) === "number") {
      return calculate(CEQ);
    } else if (!options.multipleValues && type !== "add") {
      return calculate(value1, value2, type);
    } else {
      console.error("All error checks have missed an error. Error is unkown.");
    }
  } else if (options.multipleValues && type === "add") {
    return multipleValuesCalculator(value1);
  }
};

const multipleValuesCalculator = (mValue) => {
  result = mValue.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return result;
};

module.exports = {
  valueChecker,
  calculate,
  calculateCEQ,
  frameworkLogger,
  calculator,
  multipleValuesCalculator,
};
