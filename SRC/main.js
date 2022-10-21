const { options } = require ('./options.js');
const { calculate } = require ('./modules/calculate')
const { stringToNumber, addCommas, errorChecker, stringToArray, checkIfType } = require ('./modules/utils')
const { advancedCalculator } = require ('./modules/otherCalculate')

if (checkIfType(...options.values)) {
    options.type = options.values[0];
    options.values.shift();
    options.usingType = true;
}

options.values = stringToArray(...options.values)

options.values = stringToNumber(options.values)

let result

errorChecker(options.values)
if (!options.usingType) {
    result = calculate(...options.values)
} else {
    result = advancedCalculator(options.type, options.values)
}

if (options.commas && result >= 1000) {
result = addCommas(result)
}

if (options.type === "tax") {
    console.table(result)
} else {
    console.log(result)
}
