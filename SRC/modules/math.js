const mathTypes = {
  // Loops through Numbers and does the type of mather operation on them.
  add(values) {
    let aResult = values[0];
    for (let i = 1; i < values.length; i++) {
      aResult += values[i];
    }
    return aResult;
  },
  subtract(values) {
    let sResult = values[0];
    for (let i = 1; i < values.length; i++) {
      sResult -= values[i];
    }
    return sResult;
  },

  multiply(values) {
    let mResult = values[0];
    for (let i = 1; i < values.length; i++) {
      mResult *= values[i];
    }
    return mResult;
  },

  divide(values) {
    let dResult = values[0];
    for (let i = 1; i < values.length; i++) {
      dResult /= values[i];
    }
    return dResult;
  },

  remainder(values) {
    let rResult = values[0];
    for (let i = 1; i < values.length; i++) {
      rResult %= values[i];
    }
    return rResult;
  },

  exponent(values) {
    let eResult = values[0];
    for (let i = 1; i < values.length; i++) {
      eResult **= values[i];
    }
    return eResult;
  },
  // Calculates tax by multiplying 2 numbers to get the tax amount and then adding that to the initial amount returning a table that has the tax and total.
  taxCalculator(amount, taxRate) {
    let tResult = {
      taxAmount: 0,
      totalAmount: 0,
    };
    if (taxRate > 1) {
      tResult.taxAmount = amount * (taxRate / 100);
    } else {
      tResult.taxAmount = amount * taxRate;
    }
    tResult.totalAmount = amount + tResult.taxAmount;
    return tResult;
  },
  // Finds the square root of a number.
  squareMath(value) {
    let sMResult = Math.sqrt(value);
    return sMResult;
  },
  // Finds the circumference of a circle.
  circumference(radius) {
    let cfResult = 2 * Math.PI * radius;
    return cfResult;
  },
  // Finds the radius of a circle.
  radius(circumference) {
    let rResult = circumference / (2 * Math.PI);
    return rResult;
  },
  circleArea(radius) {
    let cResult = Math.PI * radius ** 2;
    return cResult;
  },
  squareArea(side) {
    let saResult = side ** 2;
    return saResult;
  },
};

module.exports = { mathTypes };
