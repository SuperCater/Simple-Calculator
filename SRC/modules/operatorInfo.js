const operatorInfo = {
  add: {
    name: "add",
    symbol: "+",
    description: "Adds numbers together.",
    maxValues: Infinity,
  },
  subtract: {
    name: "subtract",
    symbol: "-",
    description: "Subtracts numbers.",
    maxValues: Infinity,
  },
  multiply: {
    name: "multiply",
    symbol: "*",
    description: "Multiplies numbers.",
    maxValues: Infinity,
  },
  divide: {
    name: "divide",
    symbol: "/",
    description: "Divides numbers.",
    maxValues: Infinity,
  },
  remainder: {
    name: "remainder",
    symbol: "%",
    description: "Finds the remainder of numbers.",
    maxValues: Infinity,
  },
  exponent: {
    name: "exponent",
    symbol: "**",
    description: "Raises numbers to the power of another number.",
    maxValues: Infinity,
  },
  tax: {
    name: "tax",
    symbol: "tax",
    description: "Calculates the tax of a number.",
    maxValues: 2,
  },
  square: {
    name: "square",
    symbol: "square",
    description: "gets the square root of a number.",
    maxValues: 1,
  },
  circumference: {
    name: "circumference",
    symbol: "circumference",
    description: "Finds the circumference of a circle.",
    maxValues: 1,
  },
  radius: {
    radius: "radius",
    symbol: "radius",
    description: "Finds the radius of a circle.",
    maxValues: 1,
  },
  circlearea: {
    name: "circleArea",
    symbol: "circleArea",
    description: "Finds the area of a circle.",
    maxValues: 1,
  },
  squarearea: {
    name: "squareArea",
    symbol: "squareArea",
    description: "Finds the area of a square.",
    maxValues: 1,
  },
  random: {
    name: "random",
    symbol: "random",
    description: "Generates random numbers.",
    maxValues: 2, // Provides more but the input it self is limited to 2.
  },
  delete: {
    name: "delete",
    symbol: "delete",
    description: "Deletes your data file",
    maxValues: 0,
  },
};

module.exports = operatorInfo;
