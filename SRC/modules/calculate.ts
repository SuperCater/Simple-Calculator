
const calculate = (expression : string) => {
	// Expression would look like: (55+5)*2 and should return 120 (NOT 65)
	// Split it so it becomes ["(", "55", "+", "5", ")", "*", "2"]
	
	const splitExpression : any[] = expression.split(/(\+|\-|\*|\/|\(|\)|\^)/g).filter((element) => element !== "");
	for (const i in splitExpression) {
		// Convert all numbers from string to number
		if (!isNaN(Number(splitExpression[i]))) {
			splitExpression[i] = Number(splitExpression[i]);
		} else splitExpression[i] = splitExpression[i];
	}
	
	// Loop through the array and calculate parentheses first
	splitExpression.forEach((element, i, arr) => {
		if (element === "(") {
			// If the current element is "(" then find the index of the corresponding ")"
			// and slice the array from the index of "(" to the index of ")"
			const index = arr.indexOf(")");
			const sliced = arr.slice(i + 1, index);
			// Calculate the sliced array
			const result = calculate(sliced.join(""));
			// Remove the parentheses and replace it with the result
			arr.splice(i, index - i + 1, result);
		}
	});
	
	// Loop through the array and calculate exponentiation first (using ^)
	splitExpression.forEach((element, i, arr) => {
		if (element === "^") {
			// If the current element is "^" then calculate the exponentiation
			// and remove the previous and next element from the array
			const exponentiation = Math.pow(arr[i - 1], arr[i + 1]);
			arr.splice(i - 1, 3, exponentiation);
		}
	});
	
	// Loop through the array and calculate the multiplication and division first
	const result = splitExpression.reduce((acc, curr, i, arr) => {
		if (curr === "*") {
			// If the current element is "*" then multiply the previous element with the next element
			// and remove the previous and next element from the array
			const multiplication = arr[i - 1] as number * arr[i + 1] as number;
			arr.splice(i - 1, 3, multiplication);
			return multiplication;
		} else if (curr === "/") {
			// If the current element is "/" then divide the previous element with the next element
			// and remove the previous and next element from the array
			const division = arr[i - 1] / arr[i + 1];
			arr.splice(i - 1, 3, division);
			return division;
		} else return acc;
	});
	
	// Loop through the array and calculate the addition and subtraction
	const finalResult = splitExpression.reduce((acc, curr, i, arr) => {
		if (curr === "+") {
			// If the current element is "+" then add the previous element with the next element
			// and remove the previous and next element from the array
			const addition = arr[i - 1] + arr[i + 1];
			arr.splice(i - 1, 3, addition);
			return addition;
		} else if (curr === "-") {
			// If the current element is "-" then subtract the previous element with the next element
			// and remove the previous and next element from the array
			const subtraction = arr[i - 1] - arr[i + 1];
			arr.splice(i - 1, 3, subtraction);
			return subtraction;
		} else return acc;
	});
	if (isNaN(finalResult)) throw new Error("Invalid expression");
	return finalResult;
}

export default calculate;