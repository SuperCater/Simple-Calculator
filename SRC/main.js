const { options } = require("./options.js");
const { calculate } = require("./modules/calculate.js");
const { lowerCase} = require("./modules/utils.js");

if (options.advanced.lowercase) {
    options.operator = lowerCase(options.operator);
}

console.log(calculate(options.operator, ...options.values));