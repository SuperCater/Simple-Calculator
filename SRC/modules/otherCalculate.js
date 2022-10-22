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
        case "square":
            return mathTypes.squareMath(values[0]);
        case "circumference":
            return mathTypes.circumference(values[0]);
        case "radius":
            return mathTypes.radius(values[0]);
        case "circlearea":
            return mathTypes.circleArea(values[0]);
        case "squarearea":
            return mathTypes.squareArea(values[0]);
    }
}
module.exports = { advancedCalculator, advancedType }