const { options } = require("./options.js");
const { calculate } = require("./modules/calculate.js");
const { lowerCase} = require("./modules/utils.js");
const { debug } = require("./modules/debug.js");
const { version } = require("../package.json");

if (process.argv[2] === "change") {
    changeOptions(process.argv[3], process.argv[4]);
}

if (options.advanced.lowercase) {
    options.operator = lowerCase(options.operator);
}

if (options.advanced.debugMode) {
    console.log("Values before calculation!")
    debug(options)
}

console.log(calculate(options.operator, ...options.values));

if (options.advanced.debugMode) {
    console.log("Values after calculation!")
    debug(options)
}