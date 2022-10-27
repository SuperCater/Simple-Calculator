const readline = require('readline-sync');

const options = {
  values: [],
  commas: true,
  // * Note, these values are automatically changed by the program, no need to manually do it.
  type: "",
  usingType: false,
  advanced: {
    loopLimit: 500,
    devMode: false
  }
}

if (process.argv[2] === "dev") {
  console.log("Developer mode enabled for this calculator session")
  options.devMode = true;
}
const acceptedTypes = ["tax", "srt", "square", "circumference", "radius", "circlearea", "squarearea", "slope", "delete", "debug"];

const acceptedTypes = ["tax", "sqrt", "square", "circumference", "radius", "circlearea", "squarearea", "delete"];

if (readline.keyInYN("Are you using a type?")) {
    options.usingType = true;
    while (true) {
      options.type = readline.question("What type are you using? ");
      options.type = options.type.toLowerCase();
      if (acceptedTypes.includes(options.type)) {
        break;
      } else {
        console.log("That is not a valid type! Please try again.");
        if (readline.keyInYN("Would you like to see a list of accepted types?")) {
          console.table(acceptedTypes);
        }
      }
  }
  switch (options.type) {
    case "tax":
      options.values[0] = readline.question('Enter the total amount of the purchase without tax. ')
      options.values[1] = readline.question('Enter the tax rate. ')
      break;
    case "sqrt":
      options.values[0] = readline.question('Enter the number you want to square root. ')
      break;
    case "square":
      options.values[0] = readline.question('Enter the number you want to square. ')
      break;
    case "circumference":
      options.values[0] = readline.question('Enter the radius of the circle. ')
      break;
    case "radius":
      options.values[0] = readline.question('Enter the circumference of the circle. ')
      break;
    case "circlearea":
      options.values[0] = readline.question('Enter the radius of the circle. ')
      break;
    case "squarearea":
      options.values[0] = readline.question('Enter the length of the side of the square. ')
    case "delete":
      console.log("Initializing delete function...")
      break;
    case "slope":
      options.values[0] = readline.question('Enter the x value of the first point. ')
      options.values[1] = readline.question('Enter the y value of the first point. ')
      options.values[2] = readline.question('Enter the x value of the second point. ')
      options.values[3] = readline.question('Enter the y value of the second point. ')
      break;
    case "delete":
      console.log("Intializng delete function...");
    default:
      console.log("Error, something has gone wrong! Exiting process please try again. ")
  }
} else {
  options.values = readline.question('Enter your equation. Make sure each valus is seperated with a space!: ').split(' ')
}

// exports options
module.exports = { options };