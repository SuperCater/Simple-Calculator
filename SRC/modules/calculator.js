
const calculate = (value1, value2, calculateType, CEQ, fType) => {
  if (fType) {
    if (calculate && value1 && value2 && calculateType) {
      console.log(`Calculator framework loaded in succesfully! With number 1: ${value1}, number 2: ${value2}, and type: ${calculateType}`); 
  if (CEQ !== "disabled") {
    return CEQ;
  } else if (CEQ === "disabled") {
    if (typeof value1 === "number" && typeof value2 === "number") {
      if (typeof calculateType === "string") {
        if (calculateType === "multiply") {
          return value1 * value2;
        } else if (calculateType === "divide") {
          return value1 / value2;
        } else if (calculateType === "add") {
          return value1 + value2;
        } else if (calculateType === "subtract") {
          return value1 - value2;
        } else if (calculateType === "exponent") {
          return value1 ** value2;
        } else if (calculateType === "debug") {
          return calculateType, value1, value2;
        } else if (calculateType !== acceptedValues && errorReporter) {
          console.error(
            "Type must be multiply, divide, subtract, add, or exponent. If you are sure this is correct please try using the debug command."
          );
        } else {
          return "";
        }
      } else if (typeof type !== "string" && errorReporter) {
        console.error("type must be string");
      }
    } else {
      console.error("Values must be numbers");
    }
  }
} else {
  console.error(
    "Something has failed to load. Please make sure every variable has a value or use the debugging function"
  );
}
}
}


module.exports.calculate = calculate;
