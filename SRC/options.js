const proccess  = require('process')

 const options = {
  operator: proccess.argv[2], // * Valid operators are (you can use the words): [add, +], [subtract, -], [multiply, *], [divide, /], [remainder, %], [exponent, **], [tax], [square], [circumference], [radius], [random], [squareArea], [circleArea]
  values: proccess.argv.slice(3),
  advanced: {
    commas: true, // Adds commas to the result for easier readability.
    lowercase: true, // Converts the operator to lowercase.
    debugMode: false, // Enables debug mode.
  },
  secret: {
    aprilFools: false, // Enables April Fools mode.
  }
};

/*
 ! DO NOT USE
 TODO: Stop node from exiting whenever this is changed.
 ? Won't matter whenever I add a GUI
const changeOptions = (key, value) => {
  switch(key) {
    case 'commas':
      options.advanced.commas = value;
      break;
    case 'lowercase':
      options.advanced.lowercase = value;
      break;
    case 'debugMode':
      options.advanced.debugMode = value;
      break;
  }
} */

module.exports = { options};
