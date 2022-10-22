const options = {
  values: process.argv.slice(2),
  commas: true,
  // * Note, these values are automatically changed by the program, no need to manually do it.
  type: "",
  usingType: false,
  advanced: {
    loopLimit: 500,
  }
}

// exports options
module.exports = { options };