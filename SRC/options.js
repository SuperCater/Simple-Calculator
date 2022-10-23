const readline = require('readline-sync');

const options = {
  values: 0,
  commas: true,
  // * Note, these values are automatically changed by the program, no need to manually do it.
  type: "",
  usingType: false,
  advanced: {
    loopLimit: 500,
  }
}

if (readline.keyInYN("Are you using a type?")) {
    options.usingType = true;
    options.type = readline.question("What type are you using? ");
    options.values = readline.question('Enter your values to use the type. Check the readme for information on each type! Make sure values are seperated by spaces!: ').split(' ')
} else {
  options.values = readline.question('Enter your equation. Make sure each valus is seperated with a space!: ').split(' ')
}


// exports options
module.exports = { options };