# Simple-Calculator
A simple calculator that can use multiple types of operations and accepts infinite values (or well till the program runs out of memory)

# How to run:
0. Install Node.js [here](https://nodejs.org/en/) // Both should work!
1. Open your chosen command prompt
2. Change directory to SimpleCalculator
3. type npm run calculate [type] [...values]
4. If you want to access options go to simplecalculator/src/options.js and change the options to true or false.

# Operations:
This project is a simple calculator that has multiple types of operation such as:
  * Addition
  * Subtraction
  * Multiplication
  * Division
  * Exponential
  * Remainder
  * Tax | Multiplies 2 values together and returns a table of the tax and new total
  * Square | Returns the square root of a number
  * Circumference | Returns the circumference of a circle
  * Radius | Returns the radius of a circle
  * SquareArea | Returns the area of a square
  * CircleArea | Returns the area of a circle
  * Random | Gives a specified amount of values a random number that you can specify. [max, amount]
  * Delete | Deletes the savedata file

# Saved Data:
The project has a saved data .txt file that can be found in simplecalculator/src/data/savedata.txt. This file is updated everytime the project runs resulting in the ability to refer to the data later on. Note saving data is diabled on tax operator due to inability to log at the moment.
## Values
type | Type of equation. ["multiply", "divide", "subtract", "add", "exponent", "remainder", "tax", "square", "circumference", "radius", "squarearea", "circlearea", "random", "delete"]
## Options
* option | Description
* commas | Have numbers separated by commas. [true, false]
* lowercase | Have the operator auto to lowercase. [true, false]
* debugMode | Shows some debugging information. [true, false]
* conversion | Converts the sybols to properties to work with the operatorInfo data. [true, false]
* secret??? | ??? [true, false]

# Contributing
If you want to contribute to this project, please make a pull request and I will review it.

# Coming Soon
* Main.js being cleaned up
* Tax working on writing to file
* Pulling data from the .txt file
* Website version
* Options can be changed with the CLI
* A script to auto open the terminal for easier use.
