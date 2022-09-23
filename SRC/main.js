const { calculate } = require("../modules/calculator.cjs")
const { calculatorData } = require("../modules/calculatorData.cjs")

let number = 5  // Set this to the first number
let number2 = 4 // Set this to the second number
let type = "multiply" // Set this to the type of math

// Advanced
let customEquation = "disabled" // Input the custom equation (WIP)
let frameworkLogging = true // Error reporting framework
let errorReporter = true // Logs errors to the console (WIP)
let debugType = "disabled" // Value for the debugType
let reverseValues = false // WIP (Does nothing at the moment.)
let autoLowerCase = true // Changes your string to lowercase so capitalization doesn't matter. Disable if you are getting an error.

// Do not touch anything below here
const acceptedValues = ["multiply", "divide", "add", "subtract", "exponent" ,"debug" ]

if (autoLowerCase) {
  type = type.toLowerCase()
}

// calculation (convert to switch statement soon)
console.log(calculate(number, number2, type, customEquation))

// Debugging tools
if (frameworkLogging) {
  if (calculate && number && number2 && type) {
    console.log("Calculator framework loaded in")
  } else {
    console.error("Something has failed to load. Please make sure every variable has a value or use the debugging function")
  }
}

const debug = (dType) => {
  dType = dType.toLowerCase()

  switch (dType) {
    case "number":
    case "number1":
      console.log(number)
      break;
    case "number2":
      console.log(number2)
      break;
    case "type":
      console.log(type)
      break;
    case "disabled":
      break;
    default:
      console.error(`Please input number, number2, or type. You inputed ${dType}`)
  }
}

debug(debugType)
calculatorData.valueChanger(number, type, number2)

/* plans:
Reversevalues because why not
Change calculator from if-else to switch
Make data a module
Merge parts of data and main
*/