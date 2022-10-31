const devPrint = (str) => {
  if (process.argv.includes("dev")) {
    console.log(str);
  }
};

module.exports = { devPrint };