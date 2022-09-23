const calculate = (value1, value2, calculateType, CEQ) => {
    if (CEQ !== "disabled") {
      return CEQ
    } else if (CEQ === 'disabled') {
      return ""
    } else {
      if (typeof value1 === "number" && typeof value2 === "number") {
        if (typeof calculateType === "string") {
          if (calculateType === "multiply") {
          return value1 * value2
          } else if (calculateType === 'divide') {
            return value1/value2
          } else if (calculateType === "add") {
            return value1 + value2
          } else if (calculateType === "subtract") {
            return value1 - value2
          } else if (calculateType === "exponent") {
            return value1 ** value2
          } else if (calculateType === 'debug') {
            return calculateType, value1, value2
          } else if (calculateType !== acceptedValues && errorReporter){
            console.error("Type must be multiply, divide, subtract, add, or exponent. If you are sure this is correct please try using the debug command.")
          } else {
            return ""
          }
        } else if (typeof type !== 'string' && errorReporter) {
          console.error("type must be string")
        }
      } else {
        console.error("Values must be numbers")
        }
      }
    }
  
    module.exports.calculate = calculate