const { options } = require ('./options.js');
const { calculate } = require ('./modules/calculate')
const { stringToNumber, addCommas } = require ('./modules/utils')

options.values = stringToNumber(options.values)
let result = calculate(...options.values)
result = addCommas(result)
console.log(result)

