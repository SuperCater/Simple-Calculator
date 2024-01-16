// TODO: Accept user input, for now just use this for testing
import ReadLine from "readline";
import calculate from "./modules/calculate.js";

let mode = "calculate";

const rl = ReadLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Enter an expression to calculate: ");
rl.on("line", (input) => {
	switch (input) {
		case "mode":
			console.log(`Mode is currently set to ${mode}`);
			return
			break;
		case "calculate":
			mode = "calculate";
			console.log("Mode set to calculate");
			return
		case "exit":
			rl.close();
			process.exit(0);
	}
	
	
		
	switch (mode) {
		case "calculate": {
			try {
				console.log(calculate(input));
			} catch (e) {
				if (e instanceof Error) {
					console.warn(e.message);
				}
			}
			break;
		}
		default: {
			console.log("Invalid mode");
			break;
		}
	}
});