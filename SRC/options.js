const options = {
  values: process.argv.slice(2),
  commas: true,
  type: "", // THIS ISN'T THE SAME AS THE OLD OPERATOR OR TYPE. DO NOT INPUT "ADD" OR ANY OTHER OTHER OPERATOR!
  usingType: false,
}

// exports options
module.exports = { options };