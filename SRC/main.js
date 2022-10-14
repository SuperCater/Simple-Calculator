const { options } = require("./options.js");
const { calculate } = require("./modules/calculate.js");


console.log(calculate(options.operator, ...options.values));