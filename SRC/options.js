const proccess  = require('process')

 const options = {
  operator: proccess.argv[2],
  values: proccess.argv.slice(3),
};

module.exports = options;
