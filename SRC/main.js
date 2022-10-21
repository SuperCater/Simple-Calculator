const { options } = require ('./options.js');
const { calculate } = require ('./modules/calculate')
const { stringToNumber, addCommas, errorChecker, stringToArray} = require ('./modules/utils')

options.values = stringToArray(...options.values)

options.values = stringToNumber(options.values)

errorChecker(options.values)

let result = calculate(...options.values)

if (options.commas && result >= 1000) {
result = addCommas(result)
}

console.log(result)

