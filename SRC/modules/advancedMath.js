const mathTypes = {
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
    console.log(cfResult);
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
  slope(x1, y1, x2, y2) {
    let sResult = (y2 - y1) / (x2 - x1);
    return sResult;
  },
  slopeIntercept(m, x, num) {
    let result;
    if (typeof x === "undefined") {
      if (typeof num !== "undefined") {
        for (let i = 0; i < num; i++) {
          console.log("This is in testing!");
        }
      }
    }
  },
  interest(loan, rate) {
    let result = loan * rate;
    return result;
  }
};

module.exports = { mathTypes };
