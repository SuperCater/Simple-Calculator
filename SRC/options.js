const proccess  = require('process')

 const options = {
  operator: proccess.argv[2],
  values: proccess.argv.slice(3),
  advanced: {
    commas: true, // Adds commas to the result for easier readability.
  },
};

module.exports = { options };
