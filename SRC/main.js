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

if (options.operator === "tax" && options.values.length > 2) {
    console.warn("Only the first 2 values inputted will be used for the tax calculator.");
}

if (options.advanced.debugMode) {
    console.log("Values before calculation!")
    debug(options)
}

if (options.operator === "tax"){
    console.table(calculate(options.operator, options.values[0], options.values[1]));
} else {
    console.log(calculate(options.operator, ...options.values));
}

if (options.advanced.debugMode) {
    console.log("Values after calculation!")
    debug(options, version)
}