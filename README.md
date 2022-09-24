# Simple-Calculator
A simple calculator that can use multiple types of operations.

This project is a simple calculator that has multiple types of operation such as:
  * Addition
  * Subtraction
  * Multiplication
  * Division
  * Exponential
  * Remainder
  
There is a custom equation system in the words allowing to input your own equations.

## Values
number | first number in the equation [number]
number2 | Second number in the equation [number]
type | Type of equation. ["multiply", "divide", "subtract", "add", "exponent"]

## Advanced options
* commas | Seperate numbers by commas
* Custom Equation | Allows you to input a custom equation. [Custom Equation, "disabled"]
* FrameworkLogging | Allows you to see when frameworks are loaded. Mainly for debugging. [True, False]
* errorReporter | Will log any errors that occur to the console. [True, False]
* debugType | Value passed into the debug function. ["number", "number1", "number2", "type", "disabled"]
* reverseValues | Will reversevalues (WIP) [true, false]
* autoLowercase | Changes the value of type to lowercase so it isn't case sensitive. [True, False]
