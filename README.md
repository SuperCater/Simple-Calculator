# Simple-Calculator
A simple calculator that can use multiple types of operations and accepts infinite values (or well till the program runs out of memory)

# How to run:
0. Install Node.js [here](https://nodejs.org/en/) // Both should work!
1. Open your chosen command prompt
2. Change directory to SimpleCalculator
3. type npm run calculate [calculation] // example "npm run calculate 5 + 5 + 2 - 3" // would output 9
4. If you want to access options go to simplecalculator/src/options.js and change the options to true or false.
5. If the calculation is taking too long press ctrl + c to stop the program. Most likely you caused an infite loop. Make sure your operation inputed is supported and it's all lowercase.

## Operations:
This project is a simple calculator that has multiple types of operation such as:
  * Addition
  * Subtraction
  * Multiplication
  * Division
  * Exponential
  * Remainder
  ## Only one of these can be used at a time and must be put as your first input.
  * Tax | Calculates tax and returns a table [amount, taxrate]
  * Square | Returns the square root of a number [numToSquare]
  * Circumference | Returns the circumference of a circle [radius]
  * Radius | Returns the radius of a circle [circumference]
  * CircleArea | Returns the area of a circle [radius]
  * squareArea | Returns the area of a square [side]
  * delete | Deletes your saveddata


## Saved Data:
Any calculation you run will be stored in simpleCalculator/SRC/data/savedCalculations.txt
The file will be created whenever you run the calculator the first time.
## Options
* commas | Have numbers separated by commas. [true, false]

## Contributing
If you want to contribute to this project, please make a pull request and I will review it.

## Coming Soon

SaveData deleting

## Dependencies
* Node.JS
* NPM
