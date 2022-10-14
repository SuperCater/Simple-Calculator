const proccess  = require('process')

 const options = {
  operator: proccess.argv[2], // * Valid operators are (you can use the words): [add, +], [subtract, -], [multiply, *], [divide, /], [remainder, %], [exponent, **]
  values: proccess.argv.slice(3),
  advanced: {
    commas: true, // Adds commas to the result for easier readability.,
    lowercase: true, // Converts the operator to lowercase.
  },
};

module.exports = { options };
