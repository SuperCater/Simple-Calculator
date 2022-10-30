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
        case "sqrt":
            return mathTypes.squareMath(values[0]);
        case "square":
            return values[0] ** 2;
        case "circumference":
            return mathTypes.circumference(values[0]);
        case "radius":
            return mathTypes.radius(values[0]);
        case "circlearea":
            return mathTypes.circleArea(values[0]);
        case "squarearea":
            return mathTypes.squareArea(values[0]);
        case "slope":
            return mathTypes.slope(values[0], values[1], values[2], values[3]);
        case "interest":
            return mathTypes.interest(values[0], values[1]);
        default:
            console.log("Something has gone wrong!")
    }
}
module.exports = { advancedCalculator, advancedType }