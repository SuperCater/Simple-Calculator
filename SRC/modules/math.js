const add = (values) => {
  let aResult = values[0];
  for (let i = 1; i < values.length; i++) {
    aResult += values[i];
  }
  return aResult;
};

const subtract = (values) => {
  let sResult = values[0];
  for (let i = 1; i < values.length; i++) {
    sResult -= values[i];
  }
  return sResult;
};

const multiply = (values) => {
  let mResult = values[0];
  for (let i = 1; i < values.length; i++) {
    mResult *= values[i];
  }
  return mResult;
};

const divide = (values) => {
  let dResult = values[0];
  for (let i = 1; i < values.length; i++) {
    dResult /= values[i];
  }
  return dResult;
};

const remainder = (values) => {
  let rResult = values[0];
  for (let i = 1; i < values.length; i++) {
    rResult %= values[i];
  }
  return rResult;
};

const exponent = (values) => {
  let eResult = values[0];
  for (let i = 1; i < values.length; i++) {
    eResult **= values[i];
  }
  return eResult;
};

const taxCalculator = (amount, taxRate) => {
  let tResult = {
    taxAmount: 0,
    totalAmount: 0,
  };
  if (typeof taxRate === "string") {
    if (taxRate.includes("%")) {
      taxRate = parseFloat(taxRate) / 100;
    }
  }
  if (taxRate > 1) {
    tResult.taxAmount = amount * (taxRate / 100);
  } else {
    tResult.taxAmount = amount * taxRate;
  }
  tResult.totalAmount = amount + tResult.taxAmount;
  return tResult;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  remainder,
  exponent,
  taxCalculator,
};
