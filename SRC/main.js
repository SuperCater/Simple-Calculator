const { options } = require("./options.js");
const { calculate } = require("./modules/calculate.js");
const { lowerCase, random } = require("./modules/utils.js");
const { debug } = require("./modules/debug.js");
const { version } = require("../package.json"); 
const operatorInfo = require("./modules/operatorInfo.js");

if (options.operator === "random") {
    random(options.values[0], options.values[1]);
}

if (options.secret.aprilFools) {
    console.log(69420)
    process.exit()
}

if (options.values[0] === "69" && options.values[1] === "420") {
    console.log("Hahaha funny number")
}

/*
    TODO: Heavily WIP
 if (process.argv[2] === "change") {
    changeOptions(process.argv[3], process.argv[4]);
} */

if (options.values.length === 0) {
    throw new Error("No values were provided!");
}

if (options.advanced.lowercase) {
    options.operator = lowerCase(options.operator);
}

if (options.values.length > 0) {
if (operatorInfo[options.operator].maxValues < options.values.length) {
    console.warn("You inputed more values than the calculation requires. The extra values will be ignored.");
}
} else {
    throw new Error("No values were provided!");
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