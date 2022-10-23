# Simple-Calculator
A simple calculator that can use multiple types of operations and accepts infinite values (or well till the program runs out of memory)

# How to run:
0. Install Node.js [here](https://nodejs.org/en/) // Both should work!
1. Open your chosen command prompt
2. Change directory to SimpleCalculator
3. Run npm run calculate (or npm run c)
4. Answer the questions the command line gives you.
5. If you want to access options go to simplecalculator/src/options.js and change the options to true or false.
6. If the calculation is taking too long press ctrl + c to stop the program. Most likely you caused an infite loop. Make sure your operation inputed is supported and it's all lowercase.

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
* [Readline Sync](https://www.npmjs.com/package/readline-sync)

## What I learned
This project was mainly used as a learning tool and was my first real JavaScript project. I originally started building this because I was bored in school but it has evolved into my favorite learning tool. This project has taught me more than I expected. I learned a lot about all of the following.

* Loops
* Functions
* Scopes
* Arrays
* Labels
* Modules
* Objects
* Structuring
* Git
* GitHub

This program I know has barely any real world use but it's really fun to build so I highly recommend you do something simillar. Make sure it's achievable and that you can do it on your own. I learned my fundamentals of JavaScript from [CodeCademy](https://www.codecademy.com/learn/introduction-to-javascript) to learn the basics.