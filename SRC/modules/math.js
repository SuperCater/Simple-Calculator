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

module.exports = { add, subtract, multiply, divide, remainder, exponent };