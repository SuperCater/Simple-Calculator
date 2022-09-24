const calculatorData = {
    _results: [],
    _equations: [],
  
    get results() {
      return this._results
    },
  
    specificResults(start, i) {
      if (start === 0 && i >= start) {
        return this._results[i]
      } else if (start !== 0 && i >= start) {
        i -= start 
        return this._results[i]
      } else {
        console.error("Both parameters must be a number.")
        return "Both parameters must be a number. Second parameter can not be less than 1st parameter"
      }
    },
  
    valueChanger(cValue1, cType, cValue2) {
      cValue1 = cValue1.toString()
      cValue2 = cValue2.toString()
  
      let equation = `${cValue1} ${cType} ${cValue2}`
      calculatorData._equations.push(equation)
  }
  }
  
  
  
  module.exports.calculatorData = calculatorData