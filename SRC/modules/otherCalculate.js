const { options } = require('../options.js')
const { mathTypes } = require('./advancedMath.js')

const advancedType = ["tax", "debug"];
const advancedCalculator = (type, values) => {
    switch (type) {
        case "debug":
            console.log("This is just for debugging");
            break;
        case "tax":
            return mathTypes.taxCalculator(values[0], values[1]);
    }
}
module.exports = { advancedCalculator, advancedType }